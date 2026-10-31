/**
 * Placeholder for the Embedil brand icon — the final artwork can replace the
 * SVG below. Keep the `className` pass-through and `currentColor` stroke so it
 * inherits size and color from wherever it's used.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
      <path
        d="M9 6V3.5M12 6V3.5M15 6V3.5M9 20.5V18M12 20.5V18M15 20.5V18M6 9H3.5M6 12H3.5M6 15H3.5M20.5 9H18M20.5 12H18M20.5 15H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
