import Image from "next/image";

/**
 * The Embedil brand icon. The artwork lives in exactly one place —
 * `public/favicon.svg` — so the navbar, footer and the browser tab can never
 * drift apart. `className` carries the size; the mark keeps its own colors.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/favicon.svg"
      alt=""
      width={768}
      height={768}
      loading="eager"
      unoptimized
      className={className}
    />
  );
}
