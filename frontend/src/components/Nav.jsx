import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/our-journey", label: "Our Journey" },
  { to: "/the-kamala-muditam-way", label: "The Kamala Muditam Way" },
  { to: "/where-our-hearts-lead-us", label: "Where Our Hearts Lead Us" },
  { to: "/how-we-walk-alongside", label: "How We Walk Alongside" },
  { to: "/become-part-of-the-journey", label: "Join The Journey" },
  { to: "/ripples", label: "Ripples" },
  { to: "/the-people-behind-the-ripple", label: "The People" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--ivory)]/95 backdrop-blur-md border-b border-[color:var(--line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-[color:var(--forest)]" />
            <span className="absolute inset-1 rounded-full border border-[color:var(--terracotta)] opacity-70" />
            <span className="absolute inset-2 rounded-full bg-[color:var(--terracotta)]" />
          </span>
          <span className="font-serif-display text-xl md:text-2xl tracking-tight text-forest">
            Kamala Muditam
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.to.replace(/\//g, "") || "home"}`}
              className={({ isActive }) =>
                `text-[0.86rem] tracking-wide link-soft transition-colors ${
                  isActive
                    ? "text-[color:var(--terracotta)]"
                    : "text-forest hover:text-[color:var(--terracotta)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/become-part-of-the-journey"
          data-testid="nav-cta-join"
          className="hidden xl:inline-flex btn-ripple bg-[color:var(--forest)] text-[color:var(--ivory)] rounded-full px-6 py-3 text-sm tracking-wide hover:bg-[color:var(--terracotta)] transition-colors"
        >
          Join The Ripple
        </Link>

        <button
          data-testid="mobile-menu-toggle"
          className="xl:hidden text-forest"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="xl:hidden bg-[color:var(--ivory)] border-t border-[color:var(--line)]"
        >
          <div className="px-6 py-8 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`mobile-nav-link-${l.to.replace(/\//g, "") || "home"}`}
                className={({ isActive }) =>
                  `font-serif-display text-2xl ${
                    isActive
                      ? "text-[color:var(--terracotta)]"
                      : "text-forest"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/become-part-of-the-journey"
              data-testid="mobile-cta-join"
              className="mt-4 self-start bg-[color:var(--forest)] text-[color:var(--ivory)] rounded-full px-6 py-3 text-sm"
            >
              Join The Ripple
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
