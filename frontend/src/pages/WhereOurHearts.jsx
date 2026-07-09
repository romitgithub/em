import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, Lead, Body } from "@/components/UI";
import { focusAreas } from "@/data/focusAreas";

export default function WhereOurHearts() {
  return (
    <div data-testid="hearts-lead-page" className="bg-ivory pt-32">
      <Section className="pt-16 pb-20">
        <div className="max-w-3xl fade-up">
          <Eyebrow>Where Our Hearts Lead Us</Eyebrow>
          <H1 className="mb-8">
            Ten paths. <br />
            <em className="italic text-[color:var(--terracotta)]">One compassion.</em>
          </H1>
          <Lead className="mb-6">
            Every life follows a different path. Every journey encounters different challenges.
          </Lead>
          <Body>
            At Kamala Muditam, our hearts lead us wherever compassion can help people transcend
            barriers, discover possibility, and move toward lives of dignity, belonging, and
            limitless opportunity.
          </Body>
        </div>
      </Section>

      <section className="relative px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1300px] relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {focusAreas.map((f, i) => (
              <Link
                key={f.slug}
                to={`/where-our-hearts-lead-us/${f.slug}`}
                className="group"
                data-testid={`focus-list-${f.slug}`}
              >
                <div className="img-zoom mb-5 aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--terracotta)] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl leading-tight text-forest mb-2 group-hover:text-[color:var(--terracotta)] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm italic font-serif-display text-muted-soft mb-3">
                  {f.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-forest link-soft">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[color:var(--forest)] text-[color:var(--ivory)] py-24 px-6 md:px-10 overflow-hidden">
        <RippleMotif
          size={700}
          color="rgba(249,246,240,0.12)"
          className="right-[-180px] top-[-100px]"
        />
        <div className="mx-auto max-w-3xl relative text-center">
          <p className="font-serif-display italic text-2xl md:text-3xl leading-relaxed mb-8">
            Our philosophy remains the same — to help people transcend barriers and move toward
            lives of dignity, confidence, and possibility.
          </p>
          <Link
            to="/become-part-of-the-journey"
            data-testid="hearts-cta-join"
            className="btn-ripple inline-flex items-center gap-2 bg-[color:var(--terracotta)] text-[color:var(--ivory)] rounded-full px-8 py-4 text-sm tracking-wide hover:bg-[color:var(--terracotta-2)]"
          >
            Join The Ripple <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
