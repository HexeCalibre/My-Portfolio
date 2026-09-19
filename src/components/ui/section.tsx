import type { ReactNode } from "react";

export function Section({
  children,
  description,
  title,
}: Readonly<{ children: ReactNode; description?: string; title: string }>) {
  return (
    <section className="py-8" aria-labelledby={`section-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
      <header className="mb-6 max-w-2xl">
        <h2
          id={`section-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className="text-2xl font-semibold text-foreground"
        >
          {title}
        </h2>
        {description ? <p className="mt-2 text-muted">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
