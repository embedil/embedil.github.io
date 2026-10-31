import type { ReactNode } from "react";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { buttonClasses } from "@/components/button";

const DEVELOPER_URL = "https://effessdev.github.io";

// Seven pins per chip edge in the hero diagram.
const PINS = ["a", "b", "c", "d", "e", "f", "g"];

const SPECS = [
  { label: "Targets", value: "ESP32 series" },
  { label: "Framework", value: "Native ESP-IDF" },
  { label: "Toolchain", value: "idf.py · CMake · Kconfig" },
];

const CAPABILITIES = [
  {
    title: "Microcontrollers",
    body: "Board-level work across the ESP32 family — power, peripherals, and bring-up on real hardware.",
    icon: ChipIcon,
  },
  {
    title: "Native ESP-IDF",
    body: "Espressif's own framework, kept where the docs put it: components, Kconfig, and idf.py.",
    icon: TerminalIcon,
  },
  {
    title: "Firmware delivery",
    body: "Reproducible builds, flashing and debug workflows, and images you can hand to the factory.",
    icon: WrenchIcon,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
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
              href="/simulcar.html"
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
            <Link
              href="/simulcar.html"
              className={buttonClasses({ size: "md" })}
            >
              Explore
              <ArrowUpRight />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-16 lg:py-28">
            <div className="flex flex-col items-start">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase shadow-[0_2px_0_0_var(--color-surface-edge)]">
                <span className="size-1.5 rounded-full bg-surface-fg" />
                ESP32 · Native ESP-IDF
              </p>

              <h1 className="mt-5 max-w-2xl text-[clamp(2.1rem,7vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-balance">
                Native ESP32 firmware,{" "}
                <span className="text-surface">close to the silicon.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
                We specialize in ESP32 microcontrollers and the native ESP-IDF
                framework — Espressif&apos;s own toolchain, from the first-stage
                bootloader to the last flashed partition.
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5">
                <Link
                  href="/simulcar.html"
                  className={buttonClasses({ size: "lg" }, "w-full sm:w-auto")}
                >
                  Explore Products
                  <ArrowUpRight />
                </Link>
                <a
                  href={DEVELOPER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses(
                    { variant: "secondary", size: "lg" },
                    "w-full sm:w-auto",
                  )}
                >
                  Developer Website
                  <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>

              <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                idf.py · CMake · FreeRTOS
              </p>
            </div>

            <ChipDiagram />
          </div>
        </section>

        <section className="border-b border-line">
          <dl className="mx-auto grid w-full max-w-6xl divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="py-5 sm:px-6 sm:py-6 sm:first:pl-0"
              >
                <dt className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  {spec.label}
                </dt>
                <dd className="mt-1.5 font-mono text-xs text-fg sm:text-sm">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              What we do
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              What we bring to the board
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ title, body, icon: Icon }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-line bg-surface p-5 text-surface-fg shadow-[0_4px_0_0_var(--color-surface-edge)] transition-colors hover:border-surface-fg/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-9 place-items-center rounded-lg border border-transparent bg-button-primary text-button-primary-text">
                    <Icon />
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-surface-fg-muted">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-10 text-surface-fg shadow-[0_4px_0_0_var(--color-surface-edge)] sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-surface-fg/10 blur-3xl"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase">
                  Start here
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  Building something on ESP32?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-surface-fg-muted sm:text-base">
                  Browse what we ship, or read the notes and tooling published
                  for other embedded developers.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <Link
                  href="/simulcar.html"
                  className={buttonClasses({ size: "lg" }, "w-full sm:w-auto")}
                >
                  Explore Products
                  <ArrowUpRight />
                </Link>
                <a
                  href={DEVELOPER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses(
                    { variant: "secondary", size: "lg" },
                    "w-full sm:w-auto",
                  )}
                >
                  Developer Website
                  <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <BrandMark className="size-6" />
            <span className="text-sm font-semibold tracking-tight">
              Embedil
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              ESP32 · ESP-IDF
            </span>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href="/simulcar.html"
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
    </div>
  );
}

/**
 * Decorative ESP32 done in CSS: a chip body with pins on every edge, echoing the
 * hard bottom edge used by the buttons.
 */
function ChipDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] px-6 py-6">
      <div className="relative rounded-2xl border border-line bg-surface p-5 text-surface-fg shadow-[0_4px_0_0_var(--color-line)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-14 -top-3 flex justify-between"
        >
          {PINS.map((pin) => (
            <span key={pin} className="h-3 w-1.5 rounded-t-sm bg-surface" />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-14 -bottom-3 flex justify-between"
        >
          {PINS.map((pin) => (
            <span key={pin} className="h-3 w-1.5 rounded-b-sm bg-surface" />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-10 -left-3 flex flex-col justify-between"
        >
          {PINS.map((pin) => (
            <span key={pin} className="h-1.5 w-3 rounded-l-sm bg-surface" />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-10 -right-3 flex flex-col justify-between"
        >
          {PINS.map((pin) => (
            <span key={pin} className="h-1.5 w-3 rounded-r-sm bg-surface" />
          ))}
        </div>

        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase">
          <span>esp32 · qfn</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-surface-fg" />
            awake
          </span>
        </div>

        <div className="mt-4 grid place-items-center rounded-xl border border-dashed border-line bg-bg px-4 py-10">
          <div className="grid size-20 place-items-center rounded-lg border border-surface/25 bg-surface/10">
            <ChipIcon className="size-9 text-surface" />
          </div>
          <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
            die · xtensa
          </p>
        </div>

        <dl className="mt-4 space-y-1.5 font-mono text-[10px] text-surface-fg-muted">
          <div className="flex justify-between gap-4">
            <dt>framework</dt>
            <dd className="text-surface-fg">esp-idf</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>rtos</dt>
            <dd className="text-surface-fg">freertos</dd>
          </div>
        </dl>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg border border-line bg-bg px-3 py-2 font-mono text-[10px] text-muted">
        <span>idf.py build</span>
        <span className="text-surface">100%</span>
      </div>
    </div>
  );
}

function ArrowUpRight() {
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

function ChipIcon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </Svg>
  );
}

function TerminalIcon() {
  return (
    <Svg>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7.5 9.5l2.5 2.5-2.5 2.5M12.5 15h4" />
    </Svg>
  );
}

function WrenchIcon() {
  return (
    <Svg>
      <path d="M14.5 3.5a4.5 4.5 0 0 0-5.7 5.7L4 14v6h6l4.8-4.8a4.5 4.5 0 0 0 5.7-5.7" />
    </Svg>
  );
}

function Svg({
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
