import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import RippleMotif from "@/components/RippleMotif";
import { Eyebrow, H1, H2, H3, Lead, Body, Button } from "@/components/UI";
import { focusAreas } from "@/data/focusAreas";
import { submitVolunteer } from "@/lib/api";

const CONTRIBUTIONS = [
  "Volunteer my time",
  "Mentor",
  "Teach",
  "Healthcare Services",
  "Counselling",
  "Conduct Workshops",
  "Sponsor Initiatives",
  "Donate Resources",
  "Corporate Partnership",
  "Creative & Design",
  "Technology",
  "Photography / Videography",
  "Content Writing",
  "Social Media",
  "Event Support",
  "Administrative Support",
  "Fundraising",
  "Community Outreach",
  "Other",
];

const AVAILABILITY = ["One Time", "Weekly", "Monthly", "Flexible"];

const STEPS = ["About You", "Your Heart", "Walk Alongside", "Your Journey"];

export default function JoinJourney() {
  const [params] = useSearchParams();
  const preselect = params.get("focus");

  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    mobile: "",
    city: "",
    profession: "",
    organization: "",
    focus_areas: [],
    contributions: [],
    story: "",
    availability: "Flexible",
    consent: false,
  });

  useEffect(() => {
    if (preselect) {
      const area = focusAreas.find((f) => f.slug === preselect);
      if (area && !form.focus_areas.includes(area.title)) {
        setForm((s) => ({ ...s, focus_areas: [...s.focus_areas, area.title] }));
      }
    }
    // eslint-disable-next-line
  }, [preselect]);

  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const toggleArr = (k, v) =>
    setForm((s) => ({
      ...s,
      [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v],
    }));

  const canNext = useMemo(() => {
    if (step === 0)
      return (
        form.full_name.trim() &&
        form.email.trim() &&
        form.mobile.trim() &&
        form.city.trim() &&
        form.profession.trim()
      );
    if (step === 1) return form.focus_areas.length > 0;
    if (step === 2) return form.contributions.length > 0;
    if (step === 3) return form.consent;
    return true;
  }, [step, form]);

  const onSubmit = async () => {
    if (!form.consent) {
      toast.error("Please accept the Ripple pledge to continue.");
      return;
    }
    try {
      setSubmitting(true);
      await submitVolunteer(form);
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  // ---------- LANDING (before Begin My Journey) ----------
  if (!started) {
    return (
      <div data-testid="join-landing" className="relative bg-ivory min-h-screen pt-32 pb-24 px-6 md:px-10 overflow-hidden">
        <RippleMotif size={900} className="left-1/2 -translate-x-1/2 top-24 opacity-40" />
        <div className="relative mx-auto max-w-2xl text-center fade-up">
          <Eyebrow className="justify-center">Kamala Muditam</Eyebrow>
          <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-forest tracking-tight leading-[1.05] mb-6">
            Become Part of the Journey
          </h1>
          <p className="font-serif-display italic text-xl text-[color:var(--terracotta)] mb-14">
            Restore &nbsp;•&nbsp; Rise &nbsp;•&nbsp; Ripple
          </p>
          <div className="space-y-6 mb-14">
            <p className="font-serif-display italic text-2xl leading-relaxed text-forest">
              Every meaningful ripple begins with someone choosing to care.
            </p>
            <Body className="max-w-xl mx-auto">
              Whether you wish to mentor a child, support a mother, share your professional
              expertise, or simply volunteer your time — we're grateful you've found your way here.
            </Body>
            <p className="font-serif-display italic text-xl text-muted-soft">
              Every journey is unique. Let's begin yours.
            </p>
          </div>
          <button
            onClick={() => setStarted(true)}
            data-testid="begin-journey-btn"
            className="btn-ripple inline-flex items-center gap-2 bg-[color:var(--terracotta)] text-[color:var(--ivory)] rounded-full px-10 py-5 text-sm tracking-wide hover:bg-[color:var(--terracotta-2)] transition"
          >
            Begin My Journey <ArrowRight size={16} />
          </button>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-soft">
            Takes about 3 minutes
          </p>
        </div>
      </div>
    );
  }

  // ---------- SUCCESS ----------
  if (done) {
    return (
      <div data-testid="join-success" className="relative bg-ivory min-h-screen pt-40 pb-24 px-6 md:px-10 overflow-hidden">
        <RippleMotif size={900} className="left-1/2 -translate-x-1/2 top-32 opacity-40" />
        <div className="relative mx-auto max-w-2xl text-center fade-up">
          <div className="mb-10 flex justify-center">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-[color:var(--terracotta)] opacity-30 ripple-out-anim" />
              <span className="absolute inset-0 rounded-full bg-[color:var(--terracotta)] flex items-center justify-center">
                <Check size={28} className="text-[color:var(--ivory)]" strokeWidth={2} />
              </span>
            </div>
          </div>
          <H1 className="mb-6">Welcome to the Journey</H1>
          <Lead className="mb-8">
            Thank you for becoming part of the Kamala Muditam community.
          </Lead>
          <div className="space-y-2 mb-10 italic font-serif-display text-lg text-forest">
            <p>Every life is different.</p>
            <p>Every journey is unique.</p>
            <p>Today, you've taken the first step toward walking alongside someone else's journey.</p>
          </div>
          <Body className="mb-2">Our team will reach out soon.</Body>
          <p className="font-serif-display italic text-[color:var(--terracotta)] text-lg mb-12">
            The ripple you create today may become someone's turning point tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/" data-testid="success-cta-home">
              Return Home
            </Button>
            <Button as={Link} to="/ripples" variant="outline" data-testid="success-cta-stories">
              Read Our Stories
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- STEPS ----------
  return (
    <div data-testid="join-form" className="relative bg-ivory min-h-screen pt-32 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        {/* Progress */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <p className="font-serif-display italic text-lg text-[color:var(--terracotta)]" data-testid="current-step-label">
              Step {step + 1} — {STEPS[step]}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-soft">
              {step + 1} of {STEPS.length}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div
                  data-testid={`step-dot-${i}`}
                  className={`step-dot ${i < step ? "filled" : ""} ${i === step ? "current" : ""}`}
                />
                {i < STEPS.length - 1 && (
                  <div className={`h-px flex-1 ${i < step ? "bg-[color:var(--forest)]" : "bg-[color:var(--line)]"}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="fade-up" key={step}>
          {step === 0 && (
            <div data-testid="step-about">
              <Eyebrow>Step 1 — About You</Eyebrow>
              <H2 className="mb-3">Tell us a little about yourself.</H2>
              <p className="italic font-serif-display text-muted-soft text-lg mb-10">
                "Every story begins with a name."
              </p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  ["full_name", "Full Name"],
                  ["email", "Email Address"],
                  ["mobile", "Mobile Number"],
                  ["city", "City"],
                  ["profession", "Profession"],
                  ["organization", "Organization (Optional)"],
                ].map(([k, label]) => (
                  <label key={k} className="block">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-soft">
                      {label}
                    </span>
                    <input
                      data-testid={`input-${k}`}
                      className="km-input"
                      value={form[k]}
                      onChange={(e) => set(k, e.target.value)}
                      type={k === "email" ? "email" : "text"}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div data-testid="step-heart">
              <Eyebrow>Step 2 — Your Heart</Eyebrow>
              <H2 className="mb-3">Where does your heart lead you?</H2>
              <p className="italic font-serif-display text-muted-soft text-lg mb-10">
                Choose one or more.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {focusAreas.map((f) => {
                  const active = form.focus_areas.includes(f.title);
                  return (
                    <button
                      key={f.slug}
                      type="button"
                      data-testid={`focus-choice-${f.slug}`}
                      onClick={() => toggleArr("focus_areas", f.title)}
                      className={`km-checkbox ${active ? "active" : ""}`}
                    >
                      <span
                        className={`mt-1 inline-block w-4 h-4 rounded-full border ${
                          active
                            ? "bg-[color:var(--terracotta)] border-[color:var(--terracotta)]"
                            : "border-[color:var(--forest)]"
                        }`}
                      />
                      <span className="flex-1">{f.title}</span>
                    </button>
                  );
                })}
                <button
                  type="button"
                  data-testid="focus-choice-anywhere"
                  onClick={() =>
                    toggleArr("focus_areas", "I'm happy to contribute wherever I'm needed.")
                  }
                  className={`km-checkbox md:col-span-2 italic font-serif-display ${
                    form.focus_areas.includes("I'm happy to contribute wherever I'm needed.")
                      ? "active"
                      : ""
                  }`}
                >
                  <span
                    className={`mt-1 inline-block w-4 h-4 rounded-full border ${
                      form.focus_areas.includes("I'm happy to contribute wherever I'm needed.")
                        ? "bg-[color:var(--terracotta)] border-[color:var(--terracotta)]"
                        : "border-[color:var(--forest)]"
                    }`}
                  />
                  I'm happy to contribute wherever I'm needed.
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div data-testid="step-walk">
              <Eyebrow>Step 3 — Walk Alongside</Eyebrow>
              <H2 className="mb-3">How would you like to walk alongside?</H2>
              <p className="italic font-serif-display text-muted-soft text-lg mb-10">
                Everyone contributes differently. Select all that apply.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {CONTRIBUTIONS.map((c) => {
                  const active = form.contributions.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      data-testid={`contribution-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      onClick={() => toggleArr("contributions", c)}
                      className={`km-checkbox ${active ? "active" : ""}`}
                    >
                      <span
                        className={`mt-1 inline-block w-4 h-4 rounded border ${
                          active
                            ? "bg-[color:var(--terracotta)] border-[color:var(--terracotta)]"
                            : "border-[color:var(--forest)]"
                        }`}
                      />
                      <span className="flex-1">{c}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div data-testid="step-journey">
              <Eyebrow>Step 4 — Your Journey</Eyebrow>
              <H2 className="mb-3">Tell us your story.</H2>
              <p className="italic font-serif-display text-muted-soft text-lg mb-8">
                "What inspired you to become part of the Kamala Muditam journey?"
              </p>
              <textarea
                data-testid="input-story"
                rows={6}
                value={form.story}
                onChange={(e) => set("story", e.target.value)}
                className="km-input py-4"
                placeholder="Share whatever feels right..."
                style={{ borderBottom: "1px solid var(--line)", resize: "vertical" }}
              />
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-soft mb-4">
                  Availability
                </p>
                <div className="flex flex-wrap gap-3">
                  {AVAILABILITY.map((a) => (
                    <button
                      key={a}
                      type="button"
                      data-testid={`availability-${a.toLowerCase().replace(/\s/g, "-")}`}
                      onClick={() => set("availability", a)}
                      className={`px-5 py-2.5 rounded-full text-sm border transition ${
                        form.availability === a
                          ? "border-[color:var(--terracotta)] bg-[color:var(--terracotta)] text-[color:var(--ivory)]"
                          : "border-[color:var(--forest)] text-forest hover:bg-[color:var(--forest)]/5"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              <label className="mt-10 flex items-start gap-3 cursor-pointer">
                <input
                  data-testid="input-consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  className="mt-1 accent-[color:var(--terracotta)] w-4 h-4"
                />
                <span className="text-forest">
                  I believe in the philosophy of <em className="font-serif-display italic">Restore • Rise • Ripple</em> and
                  will contribute with compassion, dignity and integrity.
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-14 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            data-testid="btn-back"
            disabled={step === 0}
            className="inline-flex items-center gap-2 text-sm text-muted-soft disabled:opacity-30 link-soft"
          >
            <ArrowLeft size={16} /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => canNext && setStep((s) => s + 1)}
              data-testid="btn-continue"
              disabled={!canNext}
              className="btn-ripple inline-flex items-center gap-2 bg-[color:var(--forest)] disabled:opacity-40 text-[color:var(--ivory)] rounded-full px-8 py-4 text-sm hover:bg-[color:var(--terracotta)]"
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={onSubmit}
              data-testid="btn-submit-journey"
              disabled={!canNext || submitting}
              className="btn-ripple inline-flex items-center gap-2 bg-[color:var(--terracotta)] disabled:opacity-50 text-[color:var(--ivory)] rounded-full px-10 py-4 text-sm hover:bg-[color:var(--terracotta-2)]"
            >
              {submitting ? "Sending..." : "Begin My Journey"} <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
