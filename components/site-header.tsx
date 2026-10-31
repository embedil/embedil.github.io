import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { buttonClasses } from "@/components/button";
import { ArrowUpRight } from "@/components/icons";
import { DEVELOPER_URL } from "@/lib/site";

/**
 * Lives in the root layout, so the sticky navbar stays put while navigating and
 * every route — the landing page and the product pages under it — shares one
 * definition.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <BrandMark className="size-7 shrink-0" />
          <span className="truncate text-base font-semibold tracking-tight">
            Embedil
          </span>
          <span className="hidden border-l border-line pl-2.5 font-mono text-[10px] tracking-[0.18em] text-muted uppercase md:inline">
            ESP32 · ESP-IDF
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-7">
          <Link
            href="/simulcar"
            className="hidden text-sm text-muted transition-colors hover:text-fg sm:inline"
          >
            Products
          </Link>
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted transition-colors hover:text-fg sm:inline"
          >
            Developer
          </a>
          <Link href="/simulcar" className={buttonClasses({ size: "md" })}>
            Explore
            <ArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
