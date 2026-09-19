import type { ReactNode } from "react";

export function Badge({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
      {children}
    </span>
  );
}
