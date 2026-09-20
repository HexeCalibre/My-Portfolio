import { useId, type ReactNode } from "react";

export function Section({
  children,
  description,
  title,
}: Readonly<{ children: ReactNode; description?: string; title: string }>) {
  const headingId = useId();

  return (
    <section className="py-8" aria-labelledby={headingId}>
      <header className="mb-6 max-w-2xl">
        <h2 id={headingId} className="text-2xl font-semibold text-foreground">
          {title}
        </h2>
        {description ? <p className="mt-2 text-muted">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
