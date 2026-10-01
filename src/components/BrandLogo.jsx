import React from 'react';

/**
 * BrandLogo - Vector SVG implementation of Willy's personal monogram logo.
 * Preserves exact geometric proportions (aspect ratio 82:46 ≈ 1.78:1).
 * Accent shapes adjusted from orange to the portfolio's signature blue (#3b82f6).
 */
export default function BrandLogo({
  width = 24,
  height,
  primaryColor = '#ffffff',
  accentColor = '#ffffff',
  style = {},
  className = '',
}) {
  // If height is not specified, compute proportionally (82:46 ratio)
  const computedHeight = height || Math.round((width * 46) / 82);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 46"
      width={width}
      height={computedHeight}
      fill="none"
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
      aria-label="Willy Lengkong Logo"
    >
      {/* Bar 1 (Leftmost Column) */}
      <rect x="0" y="1" width="11" height="44" rx="0.5" fill={primaryColor} />

      {/* Bar 2 (Slanted Column) */}
      <polygon points="15,18 25,21 25,45 15,42" fill={primaryColor} />

      {/* Bar 3 (Middle Column) */}
      <rect x="29" y="1" width="10" height="44" rx="0.5" fill={primaryColor} />

      {/* Bar 4 - Top Accent (Customized to Theme Accent Blue) */}
      <polygon points="43,0 53,4 53,13 43,9" fill={accentColor} />

      {/* Bar 4 - Bottom Column */}
      <rect x="43" y="16" width="10" height="29" rx="0.5" fill={primaryColor} />

      {/* Bar 5 - Top Column */}
      <rect x="57" y="1" width="10" height="31" rx="0.5" fill={primaryColor} />

      {/* Bar 5 - Bottom Foot of 'L' Accent (Customized to Theme Accent Blue) */}
      <rect x="57" y="35" width="25" height="10" rx="0.5" fill={accentColor} />
    </svg>
  );
}
