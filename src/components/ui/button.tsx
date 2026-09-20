import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
}

export function Button({ className = "", type = "button", variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-accent text-accent-foreground hover:opacity-90",
    secondary: "border border-border bg-surface text-foreground hover:bg-surface-raised",
  };

  return (
    <button
      type={type}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-opacity focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
