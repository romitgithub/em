import React from "react";

// Reusable concentric ripple motif — decorative background element
export default function RippleMotif({
  size = 500,
  color = "rgba(42,59,44,0.14)",
  className = "",
  style = {},
}) {
  const rings = [1, 0.78, 0.56, 0.34, 0.16];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      {rings.map((r, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${(1 - r) * 50}%`,
            left: `${(1 - r) * 50}%`,
            width: `${r * 100}%`,
            height: `${r * 100}%`,
            border: `1px solid ${color}`,
          }}
        />
      ))}
    </div>
  );
}
