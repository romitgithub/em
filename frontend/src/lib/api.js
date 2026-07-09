import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
});

export const submitVolunteer = (payload) =>
  api.post("/volunteers", payload).then((r) => r.data);

export const submitContact = (payload) =>
  api.post("/contact", payload).then((r) => r.data);

export const adminLogin = (username, password) =>
  api.post("/admin/login", { username, password }).then((r) => r.data);

const authHeader = (token) => ({ Authorization: `Bearer ${token}` });

export const adminListVolunteers = (token) =>
  api.get("/admin/volunteers", { headers: authHeader(token) }).then((r) => r.data);

export const adminListContacts = (token) =>
  api.get("/admin/contacts", { headers: authHeader(token) }).then((r) => r.data);

export const adminStats = (token) =>
  api.get("/admin/stats", { headers: authHeader(token) }).then((r) => r.data);
