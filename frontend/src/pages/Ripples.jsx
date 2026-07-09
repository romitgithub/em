import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, H3, Lead, Body, Button } from "@/components/UI";

const CATEGORIES = [
  "All",
  "Community Stories",
  "Volunteer Stories",
  "Children's Stories",
  "Health Initiatives",
  "Maternal Care",
  "Emotional Wellbeing",
  "Youth & Life Readiness",
  "Events",
  "Partnerships",
];

const STORIES = [
  {
    id: 1,
    category: "Maternal Care",
    title: "Aashna's first steps into motherhood.",
    excerpt:
      "When Aashna could no longer afford her monthly prescriptions, our Restore Circle stepped in. Today, she holds her newborn daughter — and a quiet, unshakable dignity.",
    image:
      "https://images.pexels.com/photos/51953/mother-daughter-love-sunset-51953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
  },
  {
    id: 2,
    category: "Children's Stories",
    title: "The classroom under the neem tree.",
    excerpt:
      "Seventeen children. One volunteer with a whiteboard. A summer that quietly reshaped an entire village's belief in what learning can look like.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    category: "Volunteer Stories",
    title: "Why Ravi drives an hour every Sunday.",
    excerpt:
      "A retired teacher who once thought his best years were behind him. Now, his Sundays belong to the children of a community he had never before visited.",
    image:
      "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
  },
  {
    id: 4,
    category: "Health Initiatives",
    title: "A pharmacy that said yes.",
    excerpt:
      "One small pharmacy chose to partner with our medicine discount program. Six months later, 214 families were paying less for essentials — and eating better.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    category: "Emotional Wellbeing",
    title: "The circle that held her.",
    excerpt:
      "A weekly support circle became, quietly, the most important room in Nisha's week. She now facilitates it.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    category: "Partnerships",
    title: "When two nonprofits stopped competing.",
    excerpt:
      "We do not build alone. A story of two teams choosing shared purpose over separate logos — and reaching thrice the families in half the time.",
    image:
      "https://images.pexels.com/photos/297997/pexels-photo-297997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
  },
  {
    id: 7,
    category: "Youth & Life Readiness",
    title: "Anaya's first interview.",
    excerpt:
      "Two mock interviews. One resume clinic. A fifteen-minute call from a mentor at the right moment. Sometimes that is exactly what a first job requires.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 8,
    category: "Events",
    title: "The ripple gathering.",
    excerpt:
      "Sixty volunteers. One evening. Countless quiet conversations that turned into ongoing commitments.",
    image:
      "https://images.pexels.com/photos/7111462/pexels-photo-7111462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
  },
  {
    id: 9,
    category: "Community Stories",
    title: "The garden that became a school.",
    excerpt:
      "A small vegetable garden, tended by three grandmothers, became the meeting place — and then the classroom — for an entire street.",
    image:
      "https://images.pexels.com/photos/12695823/pexels-photo-12695823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
  },
];

export default function Ripples() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? STORIES : STORIES.filter((s) => s.category === cat);

  return (
    <div data-testid="ripples-page" className="bg-ivory pt-32">
      <Section className="pt-16 pb-16">
        <div className="max-w-3xl fade-up">
          <Eyebrow>Ripples</Eyebrow>
          <H1 className="mb-8">
            Every ripple <br />
            <em className="italic text-[color:var(--terracotta)]">tells a story.</em>
          </H1>
          <Lead>
            Stories of courage. Stories of compassion. Stories of lives moving beyond circumstance.
          </Lead>
        </div>
      </Section>

      {/* Categories */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-wrap gap-2 mb-16" data-testid="ripples-categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                data-testid={`cat-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`px-5 py-2 text-sm rounded-full border transition ${
                  cat === c
                    ? "border-[color:var(--terracotta)] bg-[color:var(--terracotta)] text-[color:var(--ivory)]"
                    : "border-[color:var(--line)] text-forest hover:border-[color:var(--forest)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-32">
            {list.map((s) => (
              <article
                key={s.id}
                data-testid={`story-${s.id}`}
                className="group"
              >
                <div className="img-zoom aspect-[4/5] mb-5 rounded-sm overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--terracotta)] mb-2">
                  {s.category}
                </p>
                <h3 className="font-serif-display text-2xl md:text-3xl leading-tight text-forest mb-3 group-hover:text-[color:var(--terracotta)] transition-colors">
                  {s.title}
                </h3>
                <Body className="text-base">{s.excerpt}</Body>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif-display italic text-2xl text-muted-soft">
                More ripples soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
