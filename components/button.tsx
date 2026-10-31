import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-button-primary text-button-primary-text [--btn-edge:var(--color-button-primary-edge)]",
  secondary:
    "bg-button-secondary text-button-secondary-text [--btn-edge:var(--color-button-secondary-edge)]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-8 px-3",
  md: "h-9 px-3",
  lg: "h-10 px-4",
};

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Shaped like a physical key: a 4px solid edge sits under the face at rest.
 * Hovering sinks it 1px and clicking sinks it 3px — never the whole way, so a
 * sliver of edge stays visible. The bottom stays planted throughout.
 *
 * Shared by `Button` and any `<a>`/`<Link>` that should look the same, so links
 * and buttons never drift apart visually.
 */
export function buttonClasses(
  {
    variant = "primary",
    size = "md",
  }: {
    variant?: ButtonVariant;
    size?: ButtonSize;
  } = {},
  className?: string,
) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-transparent text-sm font-medium whitespace-nowrap outline-none select-none",
    "shadow-[0_4px_0_0_var(--btn-edge)] transition-[box-shadow,translate] duration-150 ease-out",
    "hover:translate-y-px hover:shadow-[0_3px_0_0_var(--btn-edge)] active:translate-y-[3px] active:shadow-[0_1px_0_0_var(--btn-edge)] active:duration-75",
    "focus-visible:ring-2 focus-visible:ring-surface/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  );
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size }, className)}
      {...props}
    />
  );
}
