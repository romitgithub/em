import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { adminLogin, adminListVolunteers, adminListContacts, adminStats } from "@/lib/api";
import { Eyebrow, H1, H2, H3, Body } from "@/components/UI";
import { LogOut } from "lucide-react";

const TOKEN_KEY = "km_admin_token";

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [tab, setTab] = useState("volunteers");
  const [volunteers, setVolunteers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ volunteers: 0, contacts: 0 });
  const [loading, setLoading] = useState(false);

  const load = async (tk) => {
    try {
      setLoading(true);
      const [v, c, s] = await Promise.all([
        adminListVolunteers(tk),
        adminListContacts(tk),
        adminStats(tk),
      ]);
      setVolunteers(v);
      setContacts(c);
      setStats(s);
    } catch (e) {
      if (e?.response?.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        setToken("");
        toast.error("Session expired. Please sign in again.");
      } else {
        toast.error("Could not load data.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) load(token);
    // eslint-disable-next-line
  }, [token]);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setLoggingIn(true);
      const { token: tk } = await adminLogin(username, password);
      localStorage.setItem(TOKEN_KEY, tk);
      setToken(tk);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Login failed.");
    } finally {
      setLoggingIn(false);
    }
  };

  const onLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
  };

  if (!token) {
    return (
      <div data-testid="admin-login" className="min-h-screen bg-ivory pt-40 pb-24 px-6">
        <div className="mx-auto max-w-md">
          <Eyebrow>Admin</Eyebrow>
          <H1 className="mb-8 text-4xl md:text-5xl">Sign in</H1>
          <form onSubmit={onLogin} className="space-y-4">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-soft">Username</span>
              <input
                data-testid="admin-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="km-input"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-soft">Password</span>
              <input
                data-testid="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="km-input"
              />
            </label>
            <button
              data-testid="admin-login-btn"
              disabled={loggingIn}
              className="btn-ripple mt-6 bg-[color:var(--forest)] text-[color:var(--ivory)] rounded-full px-8 py-3 text-sm hover:bg-[color:var(--terracotta)] disabled:opacity-50"
            >
              {loggingIn ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="admin-dashboard" className="min-h-screen bg-ivory pt-32 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Eyebrow>Admin</Eyebrow>
            <H2>Kamala Muditam Dashboard</H2>
          </div>
          <button
            data-testid="admin-logout"
            onClick={onLogout}
            className="inline-flex items-center gap-2 text-sm text-forest link-soft"
          >
            <LogOut size={16} /> Sign out
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-[color:var(--ivory-2)] rounded-2xl p-8 border border-[color:var(--line)]">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-soft mb-3">Volunteers</p>
            <p className="font-serif-display text-6xl text-forest" data-testid="stat-volunteers">
              {stats.volunteers}
            </p>
          </div>
          <div className="bg-[color:var(--ivory-2)] rounded-2xl p-8 border border-[color:var(--line)]">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-soft mb-3">Contact Messages</p>
            <p className="font-serif-display text-6xl text-forest" data-testid="stat-contacts">
              {stats.contacts}
            </p>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          {["volunteers", "contacts"].map((t) => (
            <button
              key={t}
              data-testid={`tab-${t}`}
              onClick={() => setTab(t)}
              className={`px-5 py-2 text-sm rounded-full border transition ${
                tab === t
                  ? "border-[color:var(--terracotta)] bg-[color:var(--terracotta)] text-[color:var(--ivory)]"
                  : "border-[color:var(--forest)] text-forest"
              }`}
            >
              {t === "volunteers" ? "Volunteers" : "Contact Messages"}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="italic text-muted-soft">Loading...</p>
        ) : tab === "volunteers" ? (
          <div className="space-y-4" data-testid="volunteers-list">
            {volunteers.length === 0 && (
              <p className="italic text-muted-soft py-8">No volunteers yet.</p>
            )}
            {volunteers.map((v) => (
              <div
                key={v.id}
                className="bg-[color:var(--ivory-2)] rounded-2xl p-6 border border-[color:var(--line)]"
              >
                <div className="flex justify-between gap-6 flex-wrap">
                  <div>
                    <H3>{v.full_name}</H3>
                    <p className="text-sm text-muted-soft">
                      {v.profession} {v.organization ? `· ${v.organization}` : ""} · {v.city}
                    </p>
                    <p className="text-sm text-muted-soft">
                      {v.email} · {v.mobile}
                    </p>
                  </div>
                  <div className="text-xs text-muted-soft text-right">
                    {new Date(v.created_at).toLocaleString()}
                    <div className="mt-1 text-[color:var(--terracotta)]">{v.availability}</div>
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-soft mb-2">
                      Focus Areas
                    </p>
                    <ul className="space-y-1">
                      {v.focus_areas.map((fa) => (
                        <li key={fa}>• {fa}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-soft mb-2">
                      Contributions
                    </p>
                    <ul className="space-y-1">
                      {v.contributions.map((c) => (
                        <li key={c}>• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {v.story && (
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-soft mb-2">Story</p>
                    <Body className="text-base">{v.story}</Body>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4" data-testid="contacts-list">
            {contacts.length === 0 && (
              <p className="italic text-muted-soft py-8">No messages yet.</p>
            )}
            {contacts.map((c) => (
              <div
                key={c.id}
                className="bg-[color:var(--ivory-2)] rounded-2xl p-6 border border-[color:var(--line)]"
              >
                <div className="flex justify-between gap-4 flex-wrap">
                  <div>
                    <H3>{c.subject}</H3>
                    <p className="text-sm text-muted-soft">
                      {c.name} · {c.email} {c.phone ? `· ${c.phone}` : ""}
                    </p>
                  </div>
                  <div className="text-xs text-muted-soft text-right">
                    {new Date(c.created_at).toLocaleString()}
                  </div>
                </div>
                <Body className="mt-4 text-base">{c.message}</Body>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
