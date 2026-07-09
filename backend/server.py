from fastapi import FastAPI, APIRouter, HTTPException, Depends, Header
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import secrets
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

ADMIN_USERNAME = os.environ.get("ADMIN_USERNAME", "admin")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "ripple2025")

# in-memory admin session tokens (simple MVP)
ADMIN_TOKENS: set = set()

app = FastAPI(title="Kamala Muditam API")
api_router = APIRouter(prefix="/api")


def utcnow_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


# ============ MODELS ============
class VolunteerCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    full_name: str
    email: EmailStr
    mobile: str
    city: str
    profession: str
    organization: Optional[str] = ""
    focus_areas: List[str] = Field(default_factory=list)
    contributions: List[str] = Field(default_factory=list)
    story: Optional[str] = ""
    availability: Optional[str] = "Flexible"
    consent: bool = False


class Volunteer(VolunteerCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=utcnow_iso)


class ContactCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    subject: str
    message: str


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=utcnow_iso)


class AdminLogin(BaseModel):
    username: str
    password: str


class AdminLoginResponse(BaseModel):
    token: str


# ============ AUTH ============
def require_admin(authorization: Optional[str] = Header(None)) -> None:
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = authorization.split(" ", 1)[1].strip()
    if token not in ADMIN_TOKENS:
        raise HTTPException(status_code=401, detail="Invalid or expired token")


# ============ ROUTES ============
@api_router.get("/")
async def root():
    return {"message": "Kamala Muditam — Restore, Rise, Ripple."}


@api_router.post("/volunteers", response_model=Volunteer)
async def create_volunteer(payload: VolunteerCreate):
    if not payload.consent:
        raise HTTPException(status_code=400, detail="Consent is required to proceed.")
    obj = Volunteer(**payload.model_dump())
    await db.volunteers.insert_one(obj.model_dump())
    return obj


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    obj = Contact(**payload.model_dump())
    await db.contacts.insert_one(obj.model_dump())
    return obj


@api_router.post("/admin/login", response_model=AdminLoginResponse)
async def admin_login(payload: AdminLogin):
    if payload.username != ADMIN_USERNAME or payload.password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = secrets.token_urlsafe(32)
    ADMIN_TOKENS.add(token)
    return AdminLoginResponse(token=token)


@api_router.post("/admin/logout")
async def admin_logout(authorization: Optional[str] = Header(None)):
    if authorization and authorization.lower().startswith("bearer "):
        tok = authorization.split(" ", 1)[1].strip()
        ADMIN_TOKENS.discard(tok)
    return {"ok": True}


@api_router.get("/admin/volunteers", response_model=List[Volunteer])
async def list_volunteers(_: None = Depends(require_admin)):
    docs = await db.volunteers.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return docs


@api_router.get("/admin/contacts", response_model=List[Contact])
async def list_contacts(_: None = Depends(require_admin)):
    docs = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return docs


@api_router.get("/admin/stats")
async def admin_stats(_: None = Depends(require_admin)):
    v = await db.volunteers.count_documents({})
    c = await db.contacts.count_documents({})
    return {"volunteers": v, "contacts": c}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
