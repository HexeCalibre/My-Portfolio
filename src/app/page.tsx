import Link from "next/link";
import { Badge, Card, Container, Section } from "@/components/ui";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="border-b border-border py-16 sm:py-20 lg:py-24" aria-labelledby="hero-title">
        <Container>
          <div className="max-w-[var(--layout-reading)]">
            <Badge>Cybersecurity · IT Operations · DFIR</Badge>
            <h1 id="hero-title" className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Security-focused work, backed by evidence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              A cybersecurity portfolio documenting hands-on projects, technical capabilities, credentials, and professional work with explicit context for what was performed in production, labs, and independent projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                Explore projects
              </Link>
              <Link
                href="/resume"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-raised"
              >
                View resume
              </Link>
            </div>
            <p className="mt-5 text-sm text-muted">
              Evidence is sanitized where required and classified so lab activity is not presented as production experience.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <Section
          title="Portfolio foundation"
          description="The homepage hierarchy is being implemented incrementally from the approved UX baseline."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <Badge>Independent project</Badge>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Cybersecurity Portfolio</h3>
              <p className="mt-2 text-muted">
                Full-stack portfolio engineering with controlled architecture, security, verification, and delivery evidence.
              </p>
            </Card>
            <Card>
              <Badge>Design system</Badge>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Reusable UI foundation</h3>
              <p className="mt-2 text-muted">
                Semantic tokens, responsive layout primitives, accessible interaction foundations, and shared site chrome.
              </p>
            </Card>
          </div>
        </Section>
      </Container>
    </main>
  );
}
