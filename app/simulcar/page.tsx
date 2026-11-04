import type { Metadata } from "next";
import type { ReactNode } from "react";
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

const WHY_CARDS = [
  {
    title: "How we solve this",
    body: "Instead of mapping a slider to a motor, we simulate an actual car inside the SimulCar. When you turn the throttle, the simulated car accelerates. The actual rc car only moves according to the simulation, making it feel like the actual car.",
  },
  {
    title: "Smooth controls, not ON/OFF",
    body: "SimulCar controller allows us to map the throttle, brake and steering position smoothly from 0% to 100%. This allows you to control the car more naturally.",
  },
];

const METRICS = [
  { value: "50 Hz", label: "simulation rate" },
  { value: "<1 ms", label: "per physics step" },
  { value: "BLE", label: "control link" },
];

type Status = {
  state: string;
  pip: string;
  items: { title: string; note?: string }[];
};

const STATUSES: Status[] = [
  {
    state: "Live",
    pip: "bg-surface",
    items: [
      { title: "Throttle, brake & steering", note: "over Bluetooth LE" },
      { title: "Physics engine", note: "drive, drag, rolling, braking" },
      { title: "Controller", note: "web app (no installation)" },
    ],
  },
  {
    state: "In progress",
    pip: "bg-button-secondary animate-pulse",
    items: [
      {
        title: "Vehicle presets",
        note: "a library of real vehicles",
      },
      {
        title: "Custom car tuning",
        note: "for experimentation",
      },
    ],
  },
  {
    state: "Planned",
    pip: "bg-line",
    items: [{ title: "Handlng slopes", note: "so it works anywhere" }],
  },
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

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase shadow-[0_2px_0_0_var(--color-surface-edge)]">
              <span className="size-1.5 animate-pulse rounded-full bg-surface-fg" />
              Early build · In progress
            </p>

            <h1 className="mt-5 text-[clamp(2.1rem,7vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-balance">
              The Simulated RC car,{" "}
              <span className="text-surface">controlled via Bluetooth</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              SimulCar is a Bluetooth-controlled toy car that runs a physics
              model of a regular sized car underneath. So you get the{" "}
              <i>feel</i> of driving a larger car.
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

          <div className="w-full max-w-md lg:max-w-none">
            <SimulcarDashboard />
          </div>
        </div>
      </section>

      <Band>
        <BandHeading eyebrow="Why we simulate" title="RC cars are too small">
          When we scale a car down to 1/10th scale, its mass reduces by a factor
          of 1,000. But its frontal surface area only drops by a factor of 100.
          This means that the car experiences more air resistance relative to
          its weight, making it slow down much faster when coasting than an
          actual car.
        </BandHeading>

        <div className="grid gap-4">
          {WHY_CARDS.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-surface p-5 text-surface-fg shadow-[0_4px_0_0_var(--color-surface-edge)] sm:p-6"
            >
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-surface-fg-muted text-pretty">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band id="engine">
        <BandHeading
          eyebrow="Physics engine"
          title="Every step runs on forces, not guesses"
        >
          Each tick, the firmware integrates Newton&apos;s second law against
          the clock&apos;s actual elapsed time, not a fixed guess — so the model
          stays true no matter how the simulation loop jitters.
        </BandHeading>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {FORCES.map(({ tag, title, body }) => (
            <li key={tag} className="bg-bg p-5 sm:p-6">
              <span className="font-mono text-[10px] tracking-[0.18em] text-surface uppercase">
                {tag}
              </span>
              <h3 className="mt-2 text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted text-pretty">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <BandHeading
          eyebrow="Telemetry"
          title="It solves for its own top speed"
        >
          Rather than hard-coding a number, the firmware finds the speed where
          drag and rolling resistance alone would consume all available power,
          using a bisection search run on every preset.
        </BandHeading>

        <div className="grid gap-4 sm:grid-cols-3">
          {METRICS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-line bg-surface p-5 text-surface-fg shadow-[0_4px_0_0_var(--color-surface-edge)]"
            >
              <p className="font-mono text-2xl leading-none">{value}</p>
              <p className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <BandHeading
          eyebrow="Roadmap"
          title="Presets today, your own car tomorrow"
        >
          Pick a preset to feel the difference between a heavy sedan and a
          featherweight go-kart, or — once tuning ships — dial in mass, drag,
          power and grip yourself and feel the change instantly.
        </BandHeading>

        <div className="grid gap-8 sm:grid-cols-3">
          {STATUSES.map(({ state, pip, items }) => (
            <div key={state}>
              <p className="flex items-center gap-2 border-b border-line pb-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                <span
                  className={`size-2 shrink-0 rounded-full ${pip}`}
                  aria-hidden="true"
                />
                {state}
              </p>
              <ul className="mt-4 flex flex-col gap-3.5">
                {items.map(({ title, note }) => (
                  <li key={title}>
                    <p className="text-sm font-semibold">{title}</p>
                    {note ? (
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">
                        {note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Band>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
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

/**
 * A full-width band with the caption pinned to a narrow left column and the
 * content filling the rest — the spec-sheet rhythm the page reads in.
 */
function Band({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start lg:gap-x-16">
        {children}
      </div>
    </section>
  );
}

function BandHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-muted text-pretty sm:text-base">
        {children}
      </p>
    </div>
  );
}
