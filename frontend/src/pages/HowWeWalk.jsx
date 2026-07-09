import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sprout, Waves } from "lucide-react";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, H3, Lead, Body, Button } from "@/components/UI";

const initiatives = [
  {
    key: "restore",
    Icon: Heart,
    title: "Restore Initiative",
    intro: "Restoring dignity where support is needed today.",
    items: [
      "Pregnancy support",
      "Medication assistance",
      "Healthcare access",
      "Medicine discount programs",
      "Free medicine delivery",
      "Immediate family support",
      "Community referrals",
    ],
  },
  {
    key: "rise",
    Icon: Sprout,
    title: "Rise Initiative",
    intro: "Helping people rise through confidence, care, and opportunity.",
    items: [
      "Educational mentorship",
      "Children's learning support",
      "Skill development",
      "Personal growth",
      "Life guidance",
      "Volunteer mentoring",
    ],
  },
  {
    key: "ripple",
    Icon: Waves,
    title: "Ripple Initiative",
    intro: "Creating a movement where compassion continues beyond us.",
    items: [
      "Ripple Makers",
      "Community partnerships",
      "Youth leadership",
      "Volunteer engagement",
      "Awareness campaigns",
      "Stories of change",
    ],
  },
];

export default function HowWeWalk() {
  return (
    <div data-testid="how-we-walk-page" className="bg-ivory pt-32">
      <Section className="pt-16 pb-8">
        <div className="max-w-3xl fade-up">
          <Eyebrow>How We Walk Alongside</Eyebrow>
          <H1 className="mb-8">
            Before building programs, <br />
            <em className="italic text-[color:var(--terracotta)]">we build relationships.</em>
          </H1>
          <Lead>
            Before leading, we listen. Before expanding, we learn. Every life asks for a different
            kind of support — so our work begins with presence, patience, and partnership.
          </Lead>
        </div>
      </Section>

      <section className="relative py-20 px-6 md:px-10 overflow-hidden">
        <RippleMotif size={720} className="right-[-180px] top-[-80px] opacity-50" />
        <div className="mx-auto max-w-[1200px] relative grid md:grid-cols-3 gap-8">
          {initiatives.map(({ Icon, title, intro, items, key }) => (
            <div
              key={key}
              data-testid={`initiative-card-${key}`}
              className="relative bg-[color:var(--ivory-2)] rounded-2xl p-8 border border-[color:var(--line)] hover:border-[color:var(--terracotta)] transition-colors"
            >
              <Icon size={28} strokeWidth={1.25} className="text-[color:var(--terracotta)] mb-5" />
              <H3 className="mb-3">{title}</H3>
              <p className="italic font-serif-display text-[color:var(--forest-2)] mb-6">
                {intro}
              </p>
              <ul className="space-y-2 text-forest">
                {items.map((it) => (
                  <li key={it} className="flex gap-2 text-base leading-relaxed">
                    <span className="text-[color:var(--terracotta)]">•</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10 text-center">
        <div className="mx-auto max-w-2xl">
          <H2 className="mb-8 italic font-normal">
            Every life asks for a different kind of support.
          </H2>
          <Button
            as={Link}
            to="/become-part-of-the-journey"
            data-testid="how-cta-join"
          >
            Become Part of the Journey <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
