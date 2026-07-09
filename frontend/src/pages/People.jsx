import React from "react";
import RippleMotif from "@/components/RippleMotif";
import { Section, Eyebrow, H1, H2, H3, Lead, Body } from "@/components/UI";

const GROUPS = [
  {
    key: "founders",
    title: "Founders",
    people: [
      {
        name: "Kavya Nair",
        role: "Founding Trustee",
        bio: "Believes deeply that dignity is the first gift we can offer another human being.",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Arjun Menon",
        role: "Founding Trustee",
        bio: "A former healthcare administrator who learned that the shortest distance between a family and hope is often one person choosing to listen.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    key: "trustees",
    title: "Trustees",
    people: [
      {
        name: "Dr. Meera Iyer",
        role: "Trustee",
        bio: "Physician. Maternal-care advocate. Twenty-two years of caring for the youngest lives among us.",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Rohan Verma",
        role: "Trustee",
        bio: "Educator and community-builder — steward of the Rise Initiative.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    key: "advisors",
    title: "Advisors",
    people: [
      {
        name: "Prof. Anjali Rao",
        role: "Public Health",
        bio: "Advises on healthcare access, community health design, and partnerships.",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Suresh Krishnan",
        role: "Nonprofit Strategy",
        bio: "Three decades in the social sector. Believer in collaboration over competition.",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    key: "ripple-makers",
    title: "Ripple Makers",
    intro: "Community volunteers who give their time, presence, and compassion.",
    people: [
      {
        name: "Priya Sharma",
        role: "Ripple Maker",
        bio: "Weekend mentor at our community learning circle.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Aditya Ranjan",
        role: "Ripple Maker",
        bio: "Delivers monthly medication packets to elderly beneficiaries.",
        image:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Sneha Reddy",
        role: "Ripple Maker",
        bio: "Photographer capturing our journey — one quiet moment at a time.",
        image:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    key: "rise-fellows",
    title: "Rise Fellows",
    intro: "Mentors, educators, healthcare professionals and skilled volunteers who help others rise.",
    people: [
      {
        name: "Dr. Ananya Bose",
        role: "Rise Fellow — Counselling",
        bio: "Clinical psychologist offering pro bono support circles.",
        image:
          "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Vikram Joshi",
        role: "Rise Fellow — Careers",
        bio: "Product leader who mentors first-generation graduates through their first interview.",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    key: "restore-circle",
    title: "Restore Circle Partners",
    intro: "Pharmacies, healthcare providers, and sponsors helping us restore dignity through resources.",
    people: [
      {
        name: "Kavery Pharmacy",
        role: "Medicine Discount Partner",
        bio: "Offering 15% concessions for eligible beneficiaries across three neighbourhoods.",
        image:
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Sanjeevani Clinic",
        role: "Maternal Care Partner",
        bio: "Offering prenatal check-ups and counselling for supported mothers.",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    key: "community-partners",
    title: "Community Partners",
    intro: "Organizations we walk alongside — never ahead.",
    people: [
      {
        name: "Aasha Foundation",
        role: "Education Partner",
        bio: "Co-hosting weekly learning circles in three villages.",
        image:
          "https://images.pexels.com/photos/297997/pexels-photo-297997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
      },
      {
        name: "Sahaya Trust",
        role: "Women's Wellbeing Partner",
        bio: "Skills training and rehabilitation partnership.",
        image:
          "https://images.pexels.com/photos/6647025/pexels-photo-6647025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
      },
    ],
  },
];

export default function People() {
  return (
    <div data-testid="people-page" className="bg-ivory pt-32">
      <Section className="pt-16 pb-16">
        <div className="max-w-3xl fade-up">
          <Eyebrow>The People Behind the Ripple</Eyebrow>
          <H1 className="mb-8">
            Every ripple, <br />
            <em className="italic text-[color:var(--terracotta)]">carried by someone.</em>
          </H1>
          <Lead>
            A movement is built by many quiet hands. These are some of the people walking alongside
            us.
          </Lead>
        </div>
      </Section>

      {GROUPS.map((g, gi) => (
        <section
          key={g.key}
          data-testid={`people-group-${g.key}`}
          className={`relative py-20 md:py-24 px-6 md:px-10 ${
            gi % 2 === 0 ? "bg-ivory" : "bg-[color:var(--ivory-2)]"
          } overflow-hidden`}
        >
          {gi % 2 === 0 && (
            <RippleMotif size={520} className="right-[-140px] top-[-80px] opacity-40" />
          )}
          <div className="mx-auto max-w-[1300px] relative">
            <div className="mb-12 max-w-2xl">
              <Eyebrow>{String(gi + 1).padStart(2, "0")}</Eyebrow>
              <H2 className="mb-4">{g.title}</H2>
              {g.intro && (
                <p className="italic font-serif-display text-lg text-muted-soft">{g.intro}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {g.people.map((p) => (
                <div key={p.name} data-testid={`person-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <div className="img-zoom aspect-square rounded-full overflow-hidden mb-5 w-40 h-40 md:w-48 md:h-48">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <H3 className="mb-1">{p.name}</H3>
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--terracotta)] mb-3">
                    {p.role}
                  </p>
                  <Body className="text-base">{p.bio}</Body>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
