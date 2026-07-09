import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, H3, Lead, Body, Button } from "@/components/UI";

export default function KamalaMuditamWay() {
  return (
    <div data-testid="km-way-page" className="bg-ivory pt-32">
      <Section className="pt-16 pb-20">
        <div className="max-w-3xl fade-up">
          <Eyebrow>The Kamala Muditam Way</Eyebrow>
          <H1 className="mb-8">
            Our way of <br />
            <em className="italic text-[color:var(--terracotta)]">walking alongside.</em>
          </H1>
          <Lead>
            Two words guide us. One shapes the world we aspire to. The other shapes the way we act
            every day.
          </Lead>
        </div>
      </Section>

      {/* VISION */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-[color:var(--ivory-2)] overflow-hidden">
        <RippleMotif size={720} className="left-[-200px] top-[-120px] opacity-60" />
        <div className="mx-auto max-w-[1100px] relative">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <Eyebrow>Vision</Eyebrow>
              <H2 className="italic font-normal">
                Rooted <br /> Rise <br /> Reverberate
              </H2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6">
              <Lead>
                To build a world rooted in compassion, where every individual can rise beyond
                circumstance, and every act of kindness reverberates across generations.
              </Lead>
              {[
                {
                  k: "Rooted",
                  v: "We are rooted in compassion, dignity, empathy, and human connection.",
                },
                {
                  k: "Rise",
                  v: "We believe every individual deserves the opportunity to rise beyond the limits of circumstance.",
                },
                {
                  k: "Reverberate",
                  v: "We believe kindness should echo beyond one moment, one life, or one generation.",
                },
              ].map((r) => (
                <div key={r.k} className="border-l-2 border-[color:var(--terracotta)] pl-5">
                  <H3 className="mb-1">{r.k}</H3>
                  <Body>{r.v}</Body>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-ivory overflow-hidden">
        <RippleMotif size={640} className="right-[-160px] bottom-[-80px] opacity-40" />
        <div className="mx-auto max-w-[1100px] relative">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <Eyebrow>Mission</Eyebrow>
              <H2 className="italic font-normal">
                Restore <br /> Rise <br /> Ripple
              </H2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6">
              <Lead>
                To walk alongside individuals and communities as they restore dignity, rise with
                confidence, transcend challenges, and create ripples of hope that open pathways to
                limitless opportunity.
              </Lead>
              {[
                { k: "Restore", v: "Restore dignity. Restore hope. Restore opportunity." },
                {
                  k: "Rise",
                  v: "Help people rise with confidence, care, education, health, and support.",
                },
                {
                  k: "Ripple",
                  v: "Let every restored life become the beginning of hope for another.",
                },
              ].map((r) => (
                <div key={r.k} className="border-l-2 border-[color:var(--terracotta)] pl-5">
                  <H3 className="mb-1">{r.k}</H3>
                  <Body>{r.v}</Body>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <Button as={Link} to="/where-our-hearts-lead-us" data-testid="cta-see-focus">
              Where our hearts lead us <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
