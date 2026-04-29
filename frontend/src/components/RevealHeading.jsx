import React from "react";

// Word-by-word mask reveal heading. Each word slides up from a clipped overflow.
// Triggers via the existing .reveal IntersectionObserver — when parent gets .in,
// children animate in sequence using stagger via inline transition-delay.
const RevealHeading = ({ as: Tag = "h2", text, className = "", stagger = 60 }) => {
  const words = String(text).split(" ");
  return (
    <Tag className={`mask-reveal reveal ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="mask-word">
          <span
            className="mask-inner"
            style={{ transitionDelay: `${i * stagger}ms` }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealHeading;
