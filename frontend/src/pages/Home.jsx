import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sprout, Waves } from "lucide-react";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, H3, Lead, Body, Button } from "@/components/UI";
import { focusAreas } from "@/data/focusAreas";

const heroImage =
  "https://images.pexels.com/photos/9302825/pexels-photo-9302825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800";

export default function Home() {
  return (
    <div data-testid="home-page" className="bg-ivory">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative min-h-[100vh] flex items-center overflow-hidden pt-28"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ripples of water"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ivory)]/60 via-[color:var(--ivory)]/50 to-[color:var(--ivory)]" />
        </div>
        <RippleMotif
          size={900}
          className="right-[-200px] top-[-100px] opacity-70"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 w-full">
          <div className="max-w-3xl fade-up">
            <Eyebrow data-testid="hero-eyebrow">
              Restore &nbsp;•&nbsp; Rise &nbsp;•&nbsp; Ripple
            </Eyebrow>
            <H1 className="mb-8" data-testid="hero-title">
              Kamala <br />
              <span className="italic text-[color:var(--terracotta)]">Muditam</span>
            </H1>
            <Lead className="mb-10 max-w-2xl">
              Restore a life. Rise together. Let hope ripple.
            </Lead>
            <Body className="max-w-xl mb-12 text-[color:var(--forest-2)]">
              A movement rooted in compassion, created for lives ready to transcend
              circumstance, rise with dignity, and move toward limitless opportunity.
            </Body>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                as={Link}
                to="/become-part-of-the-journey"
                data-testid="hero-cta-join"
              >
                Join The Ripple <ArrowRight size={16} />
              </Button>
              <Button
                as={Link}
                to="/our-journey"
                variant="outline"
                data-testid="hero-cta-discover"
              >
                Discover Our Journey
              </Button>
            </div>
            <p className="text-sm text-muted-soft italic font-serif-display">
              Because every life carries a possibility beyond its circumstance.
            </p>
          </div>
        </div>
      </section>

      {/* EVERY RIPPLE BEGINS SOMEWHERE */}
      <Section testId="every-ripple-section" className="bg-ivory">
        <div className="grid md:grid-cols-12 gap-14 items-start">
          <div className="md:col-span-4">
            <Eyebrow>01 — Beginnings</Eyebrow>
            <H2 className="mb-6">
              Every ripple <br />
              <em className="italic text-[color:var(--terracotta)]">begins somewhere.</em>
            </H2>
          </div>
          <div className="md:col-span-7 md:col-start-6 poetic">
            <p className="text-lg md:text-xl leading-[1.9] text-forest mb-6">
              Every meaningful journey begins differently.
            </p>
            <p className="text-forest text-lg leading-[1.9] mb-2">For some, it begins with education.</p>
            <p className="text-forest text-lg leading-[1.9] mb-2">For some, with health.</p>
            <p className="text-forest text-lg leading-[1.9] mb-2">For some, with safety.</p>
            <p className="text-forest text-lg leading-[1.9] mb-8">
              For some, with one person finally choosing to listen.
            </p>
            <Body className="mb-6">
              At Kamala Muditam, we believe every life is unique, and every person deserves the
              opportunity to transcend the challenges placed before them.
            </Body>
            <Body className="mb-6">
              Our journey begins by offering our time, our presence, and our willingness to walk
              alongside people with dignity and compassion.
            </Body>
            <Body className="mb-10">
              We are not simply building programs. We are nurturing a movement — one that
              restores dignity, helps people rise, and allows hope to ripple.
            </Body>
            <Button as={Link} to="/our-journey" variant="outline" data-testid="cta-read-our-journey">
              Read Our Journey <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* THE KAMALA MUDITAM WAY */}
      <section
        data-testid="the-way-section"
        className="relative py-32 px-6 md:px-10 bg-[color:var(--ivory-2)]"
      >
        <RippleMotif size={700} className="left-[-200px] top-[-100px] opacity-60" />
        <div className="mx-auto max-w-[1200px] relative">
          <div className="text-center mb-20">
            <Eyebrow>02 — Our Way</Eyebrow>
            <H2 className="mb-4">The Kamala Muditam Way</H2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <article className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--terracotta)] mb-3">
                Vision
              </p>
              <H3 className="mb-5 italic font-normal">
                Rooted &nbsp;•&nbsp; Rise &nbsp;•&nbsp; Reverberate
              </H3>
              <Body>
                To build a world rooted in compassion, where every individual can rise beyond
                circumstance, and every act of kindness reverberates across generations.
              </Body>
            </article>
            <article className="relative md:pl-10 md:border-l md:border-[color:var(--line)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--terracotta)] mb-3">
                Mission
              </p>
              <H3 className="mb-5 italic font-normal">
                Restore &nbsp;•&nbsp; Rise &nbsp;•&nbsp; Ripple
              </H3>
              <Body>
                To walk alongside individuals and communities as they restore dignity, rise with
                confidence, transcend challenges, and create ripples of hope that open pathways to
                limitless opportunity.
              </Body>
            </article>
          </div>
          <div className="text-center mt-16">
            <Button as={Link} to="/the-kamala-muditam-way" data-testid="cta-explore-way">
              Explore The Kamala Muditam Way <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* WHERE OUR HEARTS LEAD US */}
      <Section testId="hearts-section" className="bg-ivory">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-7">
            <Eyebrow>03 — Focus Areas</Eyebrow>
            <H2 className="mb-6">
              Where our hearts <br />
              <em className="italic text-[color:var(--terracotta)]">lead us.</em>
            </H2>
          </div>
          <div className="md:col-span-5">
            <Body className="italic font-serif-display text-xl">
              "Today, our hearts lead us toward children, education, maternal care, health
              access, women's wellbeing, and community partnerships. Tomorrow, they may lead us
              further."
            </Body>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {focusAreas.slice(0, 6).map((f, i) => (
            <Link
              key={f.slug}
              to={`/where-our-hearts-lead-us/${f.slug}`}
              className="group"
              data-testid={`focus-card-${f.slug}`}
            >
              <div className="img-zoom rounded-sm mb-5 aspect-[4/5] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--terracotta)] mb-2">
                0{i + 1}
              </p>
              <h3 className="font-serif-display text-2xl md:text-3xl text-forest mb-2 group-hover:text-[color:var(--terracotta)] transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-muted-soft italic font-serif-display">{f.tagline}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            as={Link}
            to="/where-our-hearts-lead-us"
            variant="outline"
            data-testid="cta-see-all-focus"
          >
            See all focus areas <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* HOW WE WALK ALONGSIDE */}
      <section
        data-testid="walk-alongside-section"
        className="relative bg-[color:var(--forest)] text-[color:var(--ivory)] py-32 px-6 md:px-10 overflow-hidden"
      >
        <RippleMotif
          size={800}
          color="rgba(249,246,240,0.12)"
          className="right-[-250px] bottom-[-200px]"
        />
        <div className="mx-auto max-w-[1200px] relative">
          <div className="max-w-3xl mb-20">
            <p className="uppercase tracking-[0.28em] text-[0.7rem] text-[color:var(--ochre)] mb-6">
              04 — How We Walk Alongside
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-8">
              Before building programs, <br />
              <em className="italic text-[color:var(--ochre)]">we build relationships.</em>
            </h2>
            <p className="text-lg md:text-xl leading-[1.9] text-[color:var(--ivory)]/85">
              Before leading, we listen. Before expanding, we learn. Every life asks for a different
              kind of support — so our work begins with presence, patience, and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                Icon: Heart,
                title: "Restore",
                intro: "Restoring dignity where support is needed today.",
                items: [
                  "Pregnancy support",
                  "Medication assistance",
                  "Healthcare access",
                  "Free medicine delivery",
                  "Community referrals",
                ],
              },
              {
                Icon: Sprout,
                title: "Rise",
                intro: "Helping people rise through confidence, care, and opportunity.",
                items: [
                  "Educational mentorship",
                  "Children's learning support",
                  "Skill development",
                  "Life guidance",
                  "Volunteer mentoring",
                ],
              },
              {
                Icon: Waves,
                title: "Ripple",
                intro: "Creating a movement where compassion continues beyond us.",
                items: [
                  "Ripple Makers",
                  "Community partnerships",
                  "Youth leadership",
                  "Volunteer engagement",
                  "Stories of change",
                ],
              },
            ].map(({ Icon, title, intro, items }) => (
              <div
                key={title}
                data-testid={`initiative-${title.toLowerCase()}`}
                className="relative bg-[color:var(--ivory)]/[0.03] border border-[color:var(--ivory)]/15 rounded-2xl p-8 hover:border-[color:var(--terracotta)] transition-colors"
              >
                <Icon
                  size={28}
                  strokeWidth={1.25}
                  className="text-[color:var(--ochre)] mb-5"
                />
                <h3 className="font-serif-display text-3xl mb-3">{title}</h3>
                <p className="italic font-serif-display text-[color:var(--ivory)]/75 mb-6">
                  {intro}
                </p>
                <ul className="space-y-2 text-sm text-[color:var(--ivory)]/80">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-[color:var(--terracotta)]">•</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/become-part-of-the-journey"
              data-testid="cta-become-part"
              className="btn-ripple inline-flex items-center gap-2 bg-[color:var(--terracotta)] text-[color:var(--ivory)] rounded-full px-8 py-4 text-sm tracking-wide hover:bg-[color:var(--terracotta-2)] transition"
            >
              Become Part of the Journey <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BECOME PART OF THE JOURNEY */}
      <Section testId="become-part-section" className="bg-ivory">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Eyebrow>05 — Join The Ripple</Eyebrow>
            <H2 className="mb-6">
              Not everyone can change the world.
            </H2>
            <Lead className="mb-6">But everyone can change someone's world.</Lead>
            <Body>
              Whether you have one hour, one skill, one resource, or one conversation to offer,
              there is a place for you here.
            </Body>
          </div>
          <div className="md:col-span-7 space-y-6">
            {[
              {
                title: "Ripple Makers",
                text:
                  "Give your time. Share compassion. Create meaningful connections. Become the ripple someone remembers.",
                cta: "Become a Ripple Maker",
              },
              {
                title: "Rise Fellows",
                text:
                  "Teach. Mentor. Guide. Inspire. Help others transcend barriers through your knowledge and experience.",
                cta: "Become a Rise Fellow",
              },
              {
                title: "Restore Circle",
                text:
                  "Partner with us to restore dignity through healthcare, education, maternal support, and compassionate community action.",
                cta: "Join the Restore Circle",
              },
            ].map((r) => (
              <div
                key={r.title}
                data-testid={`role-${r.title.toLowerCase().replace(/\s/g, "-")}`}
                className="group border-b border-[color:var(--line)] pb-6 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <H3 className="mb-2">{r.title}</H3>
                    <Body className="max-w-xl">{r.text}</Body>
                  </div>
                  <Link
                    to="/become-part-of-the-journey"
                    className="shrink-0 mt-2 text-sm text-[color:var(--terracotta)] link-soft"
                  >
                    {r.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* RIPPLES STORIES */}
      <section
        data-testid="ripples-preview-section"
        className="relative bg-[color:var(--ivory-2)] py-32 px-6 md:px-10"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl mb-16">
            <Eyebrow>06 — Stories</Eyebrow>
            <H2 className="mb-6">Every ripple tells a story.</H2>
            <div className="poetic text-forest text-lg leading-[1.9]">
              <p>Stories of courage.</p>
              <p>Stories of compassion.</p>
              <p>Stories of lives moving beyond circumstance.</p>
              <p>Stories of ordinary people helping one another reach extraordinary possibility.</p>
            </div>
            <Body className="italic font-serif-display mt-8">
              Because every ripple deserves to be shared.
            </Body>
          </div>
          <Button as={Link} to="/ripples" data-testid="cta-read-stories">
            Read the Stories <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* THE RIPPLE PROMISE — ends quietly */}
      <section
        data-testid="ripple-promise-section"
        className="relative py-40 px-6 md:px-10 bg-ivory"
      >
        <RippleMotif size={720} className="left-1/2 -translate-x-1/2 top-20 opacity-40" />
        <div className="mx-auto max-w-3xl relative text-center">
          <Eyebrow className="justify-center">Our Promise</Eyebrow>
          <H2 className="mb-14">The Ripple Promise</H2>
          <div className="space-y-4 text-lg md:text-xl leading-[1.9] text-forest">
            {[
              "We promise to listen before we lead.",
              "We promise to see every life as unique.",
              "We promise to protect dignity before offering solutions.",
              "We promise to walk alongside, never ahead.",
              "We promise to support people as they transcend challenges in their own way.",
              "We promise to collaborate before we create.",
              "We promise to serve with integrity, humility, and transparency.",
              "We promise to measure success not only by numbers, but by lives restored, people rising, barriers transcended, opportunities unlocked, and hope rippling through communities.",
            ].map((line, i) => (
              <p key={i} className="italic font-serif-display">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
