"use client";

import { useEffect, useState } from "react";

/** Top of the dial, in km/h; the needle maps this onto a 180° sweep. */
const TOP_SPEED = 70;

/** Length of the `r=85` semicircle (`π · r`), used to animate the arc. */
const ARC_LENGTH = 267;

// One driving loop: [time (ms), throttle (0–1), brake (0–1), speed (km/h)].
const KEYFRAMES = [
  [0, 0, 0, 0],
  [1400, 1, 0, 48],
  [3200, 1, 0, 70],
  [4200, 0, 0, 62],
  [5200, 0, 0.9, 18],
  [6200, 0, 0.9, 0],
  [7200, 0, 0, 0],
] as const;

const CYCLE = KEYFRAMES[KEYFRAMES.length - 1][0];

type Frame = { throttle: number; brake: number; speed: number };

/** The first frame of the loop — also what the server renders. */
const START: Frame = { throttle: 0, brake: 0, speed: 0 };

/** The parked frame shown when the visitor asked for reduced motion. */
const STILL: Frame = { throttle: 0.6, brake: 0, speed: 42 };

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

function frameAt(elapsed: number): Frame {
  for (let i = 0; i < KEYFRAMES.length - 1; i += 1) {
    const from = KEYFRAMES[i];
    const to = KEYFRAMES[i + 1];

    if (elapsed >= from[0] && elapsed <= to[0]) {
      const progress = (elapsed - from[0]) / (to[0] - from[0]);
      return {
        throttle: lerp(from[1], to[1], progress),
        brake: lerp(from[2], to[2], progress),
        speed: lerp(from[3], to[3], progress),
      };
    }
  }

  return START;
}

/**
 * The hero instrument cluster: a speedometer plus throttle and brake bars,
 * looping one recorded run. Purely decorative, so it is hidden from assistive
 * tech and simply holds the parked frame when reduced motion is requested.
 */
export function SimulcarDashboard() {
  const [frame, setFrame] = useState<Frame>(START);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFrame(STILL);
      return;
    }

    let handle = 0;
    let start: number | null = null;

    const step = (now: number) => {
      if (start === null) start = now;
      setFrame(frameAt((now - start) % CYCLE));
      handle = requestAnimationFrame(step);
    };

    handle = requestAnimationFrame(step);
    return () => cancelAnimationFrame(handle);
  }, []);

  const fraction = Math.min(frame.speed / TOP_SPEED, 1);

  return (
    <div
      aria-hidden="true"
      className="rounded-2xl border border-line bg-surface p-5 text-surface-fg shadow-[0_4px_0_0_var(--color-surface-edge)] sm:p-6"
    >
      <div className="flex items-baseline justify-between gap-4 font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase">
        <span>Simulated run</span>
        <span>preset: street-01</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-6">
        <div className="w-44 shrink-0">
          <svg viewBox="0 0 200 110" className="block w-full">
            <path
              d="M 15 100 A 85 85 0 0 1 185 100"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              className="stroke-surface-fg/20"
            />
            <path
              d="M 15 100 A 85 85 0 0 1 185 100"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={ARC_LENGTH}
              strokeDashoffset={ARC_LENGTH - fraction * ARC_LENGTH}
              className="stroke-surface-fg"
            />
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${-90 + fraction * 180} 100 100)`}
              className="stroke-button-secondary"
            />
            <circle cx="100" cy="100" r="6" className="fill-button-secondary" />
          </svg>
        </div>

        <div className="min-w-[160px] flex-1">
          <p className="font-mono text-4xl leading-none sm:text-5xl">
            {Math.round(frame.speed)}
            <span className="ml-2 text-sm text-surface-fg-muted">km/h</span>
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <Bar
              label="throttle"
              value={frame.throttle}
              tone="bg-button-secondary"
            />
            <Bar label="brake" value={frame.brake} tone="bg-surface-fg/70" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 font-mono text-[10px] tracking-[0.18em] text-surface-fg-muted uppercase">
        {label}
      </span>
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-fg/15">
        <span
          className={`block h-full rounded-full ${tone}`}
          style={{ width: `${Math.round(value * 100)}%` }}
        />
      </span>
    </div>
  );
}
