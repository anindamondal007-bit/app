import React from "react";

/**
 * Full-bleed auto-scrolling mockup band.
 * - Transparent background, no cards
 * - Each mockup keeps original aspect ratio (object-contain) at fixed height
 * - Equal spacing between items
 * - Right-to-left infinite marquee, pauses on hover
 * - Slight scale-up on individual mockup hover
 */
const MockupBand = ({ images = [], speed = 60 }) => {
  if (!images.length) return null;
  // Duplicate the images twice so the marquee loop is seamless
  const loop = [...images, ...images];

  return (
    <div className="mockup-band w-full overflow-hidden">
      <div
        className="mockup-band__track flex gap-7 md:gap-8 will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="mockup-band__item shrink-0 reveal in"
            style={{ height: "var(--mb-h)" }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              draggable={false}
              className="block h-full w-auto object-contain select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockupBand;
