import type { Metadata } from "next";
import Link from "next/link";

import { buttonClasses } from "@/components/button";
import { ArrowDown, ArrowUpRight } from "@/components/icons";
import { SimulcarDashboard } from "@/components/simulcar-dashboard";
import { CONTROLLER_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "SimulCar — a toy car with a real physics engine",
  description:
    "SimulCar is a Bluetooth-controlled toy car that runs a real physics model underneath — drive force, rolling resistance, aerodynamic drag, and braking.",
};

const FORCES = [
  {
    tag: "drive",
    title: "Traction, then power",
    body: "Force is capped by tyre grip at low speed and by engine power once the car is rolling, so it can't out-accelerate its own motor.",
  },
  {
    tag: "rolling",
    title: "Rolling resistance",
    body: "A steady drag from the tyres themselves, scaled to the car's weight — the reason it won't coast forever.",
  },
  {
    tag: "drag",
    title: "Aerodynamic drag",
    body: "Grows with the square of speed, so top-end acceleration tapers off the way it does in a real car.",
  },
  {
    tag: "brake",
    title: "Braking & holding",
    body: "At a standstill, the brake acts as a holding force — the car only pulls away once drive force beats brake plus rolling resistance.",
  },
];

const METRICS = [
  { value: "50 Hz", label: "simulation rate" },
  { value: "<1 ms", label: "per physics step" },
  { value: "BLE", label: "control link" },
];

const STATUSES = [
  {
    title: "Throttle & brake",
    state: "live, over Bluetooth LE",
    pip: "bg-surface",
  },
  {
    title: "Physics engine",
    state: "live — drive, drag, rolling resistance, braking",
    pip: "bg-surface",
  },
  {
    title: "Steering",
    state: "in progress",
    pip: "bg-button-secondary animate-pulse",
  },
  {
    title: "Vehicle presets",
    state: "in progress",
    pip: "bg-button-secondary animate-pulse",
  },
  { title: "Custom car tuning", state: "planned", pip: "bg-line" },
];

export default function Simulcar() {
  return (
    <>
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

        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase shadow-[0_2px_0_0_var(--color-surface-edge)]">
              <span className="size-1.5 animate-pulse rounded-full bg-surface-fg" />
              Early build · steering and presets in progress
            </p>

            <h1 className="mt-5 text-[clamp(2.1rem,7vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-balance">
              SimulCar — a toy car that drives{" "}
              <span className="text-surface">like it has mass.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              SimulCar is a Bluetooth-controlled toy car that runs a real
              physics model underneath — drive force, rolling resistance,
              aerodynamic drag, and braking — instead of just mapping a slider
              to a motor.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href={CONTROLLER_PATH}
                className={buttonClasses({ size: "lg" }, "w-full sm:w-auto")}
              >
                Open the controller
                <ArrowUpRight />
              </a>
              <a
                href="#engine"
                className={buttonClasses(
                  { variant: "secondary", size: "lg" },
                  "w-full sm:w-auto",
                )}
              >
                How it drives
                <ArrowDown />
              </a>
            </div>

            <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              BLE · 50 Hz · Newtonian
            </p>
          </div>

          <div className="mt-12 max-w-3xl">
            <SimulcarDashboard />
          </div>
        </div>
      </section>

      <section
        id="engine"
        className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            Physics engine
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Every step runs on forces, not guesses
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted text-pretty sm:text-base">
            Each tick, the firmware integrates Newton&apos;s second law against
            the clock&apos;s actual elapsed time, not a fixed guess — so the
            model stays true no matter how the simulation loop jitters.
          </p>
        </div>

        <ul className="mt-9 max-w-3xl border-t border-line">
          {FORCES.map(({ tag, title, body }) => (
            <li
              key={tag}
              className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:gap-6"
            >
              <span className="w-24 shrink-0 pt-0.5 font-mono text-[10px] tracking-[0.18em] text-surface uppercase">
                {tag}
              </span>
              <div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            Self solving
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            It solves for its own top speed
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted text-pretty sm:text-base">
            Rather than hard-coding a number, the firmware finds the speed where
            drag and rolling resistance alone would consume all available power,
            using a bisection search run on every preset.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {METRICS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-line bg-surface p-5 text-surface-fg shadow-[0_4px_0_0_var(--color-surface-edge)]"
            >
              <p className="font-mono text-2xl">{value}</p>
              <p className="mt-1.5 font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            Roadmap
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Presets today, your own car tomorrow
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted text-pretty sm:text-base">
            Pick a preset to feel the difference between a heavy sedan and a
            featherweight go-kart, or — once tuning ships — dial in mass, drag,
            power and grip yourself and feel the change instantly.
          </p>
        </div>

        <ul className="mt-9 flex max-w-2xl flex-col gap-4">
          {STATUSES.map(({ title, state, pip }) => (
            <li key={title} className="flex items-start gap-3">
              <span
                className={`mt-1.5 size-2 shrink-0 rounded-full ${pip}`}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-sm leading-relaxed text-muted">{state}</p>
              </div>
            </li>
          ))}
        </ul>
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
                Take the wheel
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Drive it from your phone
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-surface-fg-muted sm:text-base">
                The controller pairs over Bluetooth LE and sends throttle and
                brake straight to the car — no app store, no account.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={CONTROLLER_PATH}
                className={buttonClasses({ size: "lg" }, "w-full sm:w-auto")}
              >
                Open the controller
                <ArrowUpRight />
              </a>
              <Link
                href="/"
                className={buttonClasses(
                  { variant: "secondary", size: "lg" },
                  "w-full sm:w-auto",
                )}
              >
                Back to Embedil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
