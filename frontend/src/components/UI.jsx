import React from "react";

// A reusable section wrapper for hero/marker sections
export const Section = ({ id, className = "", children, testId }) => (
  <section
    id={id}
    data-testid={testId}
    className={`relative py-24 md:py-32 px-6 md:px-10 ${className}`}
  >
    <div className="mx-auto max-w-[1200px] relative">{children}</div>
  </section>
);

export const Eyebrow = ({ children, className = "" }) => (
  <p
    className={`uppercase tracking-[0.28em] text-[0.7rem] text-[color:var(--terracotta)] mb-6 ${className}`}
  >
    {children}
  </p>
);

export const H1 = ({ children, className = "" }) => (
  <h1
    className={`font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-forest ${className}`}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className = "" }) => (
  <h2
    className={`font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-forest ${className}`}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className = "" }) => (
  <h3
    className={`font-serif-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-forest ${className}`}
  >
    {children}
  </h3>
);

export const Lead = ({ children, className = "" }) => (
  <p
    className={`font-serif-display italic text-xl md:text-2xl leading-relaxed text-[color:var(--forest-2)] ${className}`}
  >
    {children}
  </p>
);

export const Body = ({ children, className = "" }) => (
  <p className={`text-base md:text-lg leading-[1.85] text-forest ${className}`}>
    {children}
  </p>
);

export const PoeticLines = ({ lines, className = "", italic = false }) => (
  <div
    className={`space-y-2 ${italic ? "italic font-serif-display" : ""} ${className}`}
  >
    {lines.map((l, i) => (
      <p key={i} className="text-forest text-lg md:text-xl leading-relaxed">
        {l}
      </p>
    ))}
  </div>
);

export const Button = ({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm tracking-wide btn-ripple transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--forest)] text-[color:var(--ivory)] hover:bg-[color:var(--terracotta)]"
      : variant === "terracotta"
      ? "bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--terracotta-2)]"
      : "border border-[color:var(--forest)] text-forest hover:bg-[color:var(--forest)] hover:text-[color:var(--ivory)]";
  const Comp = as;
  return (
    <Comp className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Comp>
  );
};
