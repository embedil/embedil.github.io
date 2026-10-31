import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { DEVELOPER_URL } from "@/lib/site";

/** Shared by every route, so the footer never drifts between pages. */
export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <BrandMark className="size-6" />
          <span className="text-sm font-semibold tracking-tight">Embedil</span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            ESP32 · ESP-IDF
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-5">
          <Link
            href="/simulcar"
            className="text-sm text-muted transition-colors hover:text-fg"
          >
            Products
          </Link>
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-fg"
          >
            Developer
          </a>
          <span className="text-xs text-muted">© 2026 Embedil</span>
        </nav>
      </div>
    </footer>
  );
}
