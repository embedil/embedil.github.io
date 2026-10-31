import type { ReactNode } from "react";

/**
 * Every line icon shares one set of SVG defaults — stroke weight, round caps and
 * the `size-[18px]` fallback — so the set reads at a single optical weight
 * wherever it is used. The artwork is defined here once, not inlined per page.
 */
export function Svg({
  children,
  className = "size-[18px]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/** Slightly heavier than the set: it only ever rides inside a button. */
export function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <Svg>
      <path d="M12 5v14M5.5 12.5L12 19l6.5-6.5" />
    </Svg>
  );
}

export function ChipIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </Svg>
  );
}

export function TerminalIcon() {
  return (
    <Svg>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7.5 9.5l2.5 2.5-2.5 2.5M12.5 15h4" />
    </Svg>
  );
}

export function WrenchIcon() {
  return (
    <Svg>
      <path d="M14.5 3.5a4.5 4.5 0 0 0-5.7 5.7L4 14v6h6l4.8-4.8a4.5 4.5 0 0 0 5.7-5.7" />
    </Svg>
  );
}
