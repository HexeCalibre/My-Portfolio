import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  return (
    <article className={`rounded-lg border border-border bg-surface p-6 shadow-sm ${className}`}>
      {children}
    </article>
  );
}
