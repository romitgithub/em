import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="mt-24 bg-[color:var(--forest)] text-[color:var(--ivory)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/logo-lotus.webp"
              alt="Kamala Muditam"
              className="w-11 h-11 object-contain"
            />
            <span className="font-serif-display text-2xl">Kamala Muditam</span>
          </div>
          <p className="font-serif-display italic text-xl text-[color:var(--sage-2)] mb-6">
            Rooted • Rise • Reverberate
          </p>
          <p className="text-sm leading-relaxed text-[color:var(--ivory)]/70 max-w-md mb-6">
            A movement rooted in compassion, helping every life transcend
            circumstance and creating ripples of hope that reverberate through
            families, communities, and generations.
          </p>
          <p className="font-serif-display italic text-lg text-[color:var(--ochre)]">
            Restore a life. Rise together. Let hope ripple.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--sage-2)] mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ["/", "Home"],
              ["/our-journey", "Our Journey"],
              ["/the-kamala-muditam-way", "The Kamala Muditam Way"],
              ["/where-our-hearts-lead-us", "Where Our Hearts Lead Us"],
              ["/how-we-walk-alongside", "How We Walk Alongside"],
              ["/become-part-of-the-journey", "Become Part of the Journey"],
              ["/ripples", "Ripples"],
              ["/the-people-behind-the-ripple", "The People Behind the Ripple"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="link-soft hover:text-[color:var(--terracotta)] transition-colors"
                  data-testid={`footer-link-${to.replace(/\//g, "") || "home"}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--sage-2)] mb-5">
            Legal
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="text-[color:var(--ivory)]/70">Kamala Muditam Social Welfare Trust</li>
            <li>
              <a className="link-soft" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="link-soft" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="link-soft" href="#">
                Donation Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--sage-2)] mb-5">
            Social
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full border border-[color:var(--ivory)]/25 hover:border-[color:var(--terracotta)] hover:text-[color:var(--terracotta)] transition"
              data-testid="footer-social-instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full border border-[color:var(--ivory)]/25 hover:border-[color:var(--terracotta)] hover:text-[color:var(--terracotta)] transition"
              data-testid="footer-social-facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-[color:var(--ivory)]/25 hover:border-[color:var(--terracotta)] hover:text-[color:var(--terracotta)] transition"
              data-testid="footer-social-linkedin"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--ivory)]/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[color:var(--ivory)]/50">
            © {new Date().getFullYear()} Kamala Muditam Social Welfare Trust
          </p>
          <p className="font-serif-display italic text-sm text-[color:var(--ochre)] text-center">
            The ripple you create today may become someone's turning point tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
