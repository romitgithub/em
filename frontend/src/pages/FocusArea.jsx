import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import RippleMotif from "@/components/RippleMotif";
import { Eyebrow, H1, H2, H3, Lead, Body, Button } from "@/components/UI";
import { getFocusAreaBySlug, focusAreas } from "@/data/focusAreas";

export default function FocusArea() {
  const { slug } = useParams();
  const area = getFocusAreaBySlug(slug);
  if (!area) return <Navigate to="/where-our-hearts-lead-us" replace />;

  const idx = focusAreas.findIndex((f) => f.slug === slug);
  const next = focusAreas[(idx + 1) % focusAreas.length];

  return (
    <div data-testid={`focus-area-${slug}`} className="bg-ivory pt-32">
      {/* Hero */}
      <section className="relative px-6 md:px-10 pb-16">
        <div className="mx-auto max-w-[1300px] grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 fade-up">
            <Link
              to="/where-our-hearts-lead-us"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-soft mb-8 link-soft"
              data-testid="focus-back-link"
            >
              <ArrowLeft size={14} /> All Focus Areas
            </Link>
            <Eyebrow>{String(idx + 1).padStart(2, "0")} — Focus Area</Eyebrow>
            <H1 className="mb-6">{area.title}</H1>
            <Lead>{area.tagline}</Lead>
          </div>
          <div className="md:col-span-5">
            <div className="img-zoom aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Heart */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-[color:var(--ivory-2)] overflow-hidden">
        <RippleMotif size={640} className="left-[-160px] top-[-80px] opacity-50" />
        <div className="mx-auto max-w-[1000px] relative grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Eyebrow>Our Heart</Eyebrow>
            <H2 className="italic font-normal">Why this matters.</H2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Body className="text-lg leading-[1.95]">{area.heart}</Body>
          </div>
        </div>
      </section>

      {/* How we walk alongside */}
      <section className="relative py-24 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1000px] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Eyebrow>How We Walk Alongside</Eyebrow>
            <H2 className="italic font-normal">Present. <br />Patient. <br />Partnering.</H2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="space-y-4">
              {area.walk.map((w) => (
                <li key={w} className="flex items-start gap-4 text-forest text-lg leading-relaxed">
                  <span className="mt-3 inline-block w-8 h-px bg-[color:var(--terracotta)]" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Join this journey */}
      <section className="relative bg-[color:var(--forest)] text-[color:var(--ivory)] py-24 md:py-32 px-6 md:px-10 overflow-hidden">
        <RippleMotif
          size={700}
          color="rgba(249,246,240,0.12)"
          className="right-[-180px] bottom-[-120px]"
        />
        <div className="mx-auto max-w-[1000px] relative grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="uppercase tracking-[0.25em] text-[0.7rem] text-[color:var(--ochre)] mb-4">
              Join This Journey
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-tight italic">
              Your ripple, <br /> begins here.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="space-y-3 mb-10">
              {area.join.map((j) => (
                <li key={j} className="text-[color:var(--ivory)]/85 text-lg">
                  <span className="text-[color:var(--terracotta)] mr-3">•</span>
                  {j}
                </li>
              ))}
            </ul>
            <Link
              to={`/become-part-of-the-journey?focus=${area.slug}`}
              data-testid={`focus-join-cta-${area.slug}`}
              className="btn-ripple inline-flex items-center gap-2 bg-[color:var(--terracotta)] text-[color:var(--ivory)] rounded-full px-8 py-4 text-sm hover:bg-[color:var(--terracotta-2)]"
            >
              Join This Journey <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Next area */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-ivory">
        <div className="mx-auto max-w-[1000px] flex items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-soft mb-2">Next Focus Area</p>
            <H3 className="italic font-normal">{next.title}</H3>
          </div>
          <Link
            to={`/where-our-hearts-lead-us/${next.slug}`}
            className="btn-ripple inline-flex items-center gap-2 border border-[color:var(--forest)] text-forest rounded-full px-6 py-3 text-sm hover:bg-[color:var(--forest)] hover:text-[color:var(--ivory)]"
            data-testid={`focus-next-${next.slug}`}
          >
            Continue <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
