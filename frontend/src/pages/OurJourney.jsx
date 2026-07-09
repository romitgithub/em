import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, H3, Lead, Body, Button } from "@/components/UI";

export default function OurJourney() {
  return (
    <div data-testid="our-journey-page" className="bg-ivory pt-32">
      <Section className="pt-16">
        <div className="max-w-3xl fade-up">
          <Eyebrow>Our Journey</Eyebrow>
          <H1 className="mb-8">
            Where our journey <br />
            <em className="italic text-[color:var(--terracotta)]">began.</em>
          </H1>
          <Lead className="mb-10">
            Kamala Muditam was founded on a simple belief:
          </Lead>
          <div className="poetic mb-10 space-y-1">
            <p className="text-forest text-lg leading-[1.9]">Every life is different.</p>
            <p className="text-forest text-lg leading-[1.9]">Every struggle is different.</p>
            <p className="text-forest text-lg leading-[1.9]">Every journey toward hope is different.</p>
          </div>
        </div>
      </Section>

      <section className="relative bg-[color:var(--ivory-2)] py-24 md:py-32 px-6 md:px-10 overflow-hidden">
        <RippleMotif size={700} className="right-[-200px] top-[-100px] opacity-60" />
        <div className="mx-auto max-w-[1000px] relative space-y-8">
          <Body>
            Real change begins when we stop seeing people through their circumstances and begin
            seeing the possibility within them.
          </Body>
          <Body>
            Our journey starts by listening before leading, learning before building, and serving
            before asking.
          </Body>
          <Body>
            Rather than beginning by creating independent programs, we have chosen to first walk
            alongside organizations already doing meaningful work.
          </Body>
          <Body className="italic font-serif-display text-xl">
            We believe collaboration creates stronger communities than competition.
          </Body>
          <Body>
            As we continue to grow, so will our commitment to creating opportunities that restore
            dignity, nurture resilience, and help individuals transcend barriers toward limitless
            possibility.
          </Body>
        </div>
      </section>

      <section className="py-32 px-6 md:px-10 text-center relative">
        <RippleMotif size={640} className="left-1/2 -translate-x-1/2 top-8 opacity-40" />
        <div className="mx-auto max-w-2xl relative">
          <Eyebrow className="justify-center">Our Hope</Eyebrow>
          <H2 className="mb-10">Is simple.</H2>
          <div className="space-y-3 italic font-serif-display text-2xl text-forest">
            <p>Restore one life.</p>
            <p>Help them rise.</p>
            <p className="text-[color:var(--terracotta)]">Let hope ripple endlessly.</p>
          </div>
          <div className="mt-14">
            <Button
              as={Link}
              to="/become-part-of-the-journey"
              data-testid="cta-join-from-journey"
            >
              Walk with us <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
