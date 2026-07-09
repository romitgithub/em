import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, Lead, Body } from "@/components/UI";
import { submitContact } from "@/lib/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const valid =
    form.name.trim() &&
    form.email.trim() &&
    form.subject.trim() &&
    form.message.trim();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!valid) {
      toast.error("Please fill in the required fields.");
      return;
    }
    try {
      setSending(true);
      await submitContact(form);
      setDone(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="contact-page" className="bg-ivory pt-32">
      <Section className="pt-16 pb-8">
        <div className="max-w-3xl fade-up">
          <Eyebrow>Start a Ripple</Eyebrow>
          <H1 className="mb-8">
            Let's begin <br />
            <em className="italic text-[color:var(--terracotta)]">a conversation.</em>
          </H1>
          <Lead>
            Whether you would like to volunteer, partner with us, seek support, or simply learn
            more about our journey — we would love to hear from you.
          </Lead>
        </div>
      </Section>

      <section className="relative pb-32 px-6 md:px-10 overflow-hidden">
        <RippleMotif size={720} className="right-[-200px] top-[-120px] opacity-50" />
        <div className="mx-auto max-w-[900px] relative">
          {done ? (
            <div
              data-testid="contact-success"
              className="text-center py-16 fade-up"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[color:var(--terracotta)] flex items-center justify-center">
                  <Check size={24} className="text-[color:var(--ivory)]" strokeWidth={2} />
                </div>
              </div>
              <H2 className="mb-4">Thank you for reaching out.</H2>
              <Lead className="mb-8">
                Your message has quietly become a ripple. Our team will respond soon.
              </Lead>
              <button
                onClick={() => setDone(false)}
                data-testid="contact-send-another"
                className="text-sm text-[color:var(--terracotta)] link-soft"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {[
                ["name", "Name *", "text", false],
                ["email", "Email *", "email", false],
                ["phone", "Phone", "text", false],
                ["subject", "Subject *", "text", true],
              ].map(([k, label, type, wide]) => (
                <label key={k} className={wide ? "md:col-span-2 block" : "block"}>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-soft">
                    {label}
                  </span>
                  <input
                    data-testid={`contact-${k}`}
                    type={type}
                    value={form[k]}
                    onChange={(e) => set(k, e.target.value)}
                    className="km-input"
                  />
                </label>
              ))}
              <label className="md:col-span-2 block">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-soft">
                  Message *
                </span>
                <textarea
                  data-testid="contact-message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className="km-input py-4"
                  style={{ resize: "vertical" }}
                />
              </label>
              <div className="md:col-span-2 mt-10">
                <button
                  data-testid="contact-submit"
                  disabled={sending || !valid}
                  className="btn-ripple inline-flex items-center gap-2 bg-[color:var(--forest)] disabled:opacity-50 text-[color:var(--ivory)] rounded-full px-8 py-4 text-sm hover:bg-[color:var(--terracotta)]"
                >
                  {sending ? "Sending..." : "Start a Ripple"} <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
