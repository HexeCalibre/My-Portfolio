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
          title="Project Phoenix"
          description="Enterprise cybersecurity transformation work presented at executive level, with operational evidence deliberately sanitized for public use."
        >
          <Card>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:items-start">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Production / Professional</Badge>
                  <Badge>Cybersecurity transformation</Badge>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-foreground sm:text-3xl">
                  Building a controlled cybersecurity foundation from real infrastructure evidence
                </h3>
                <p className="mt-4 max-w-[var(--layout-reading)] leading-relaxed text-muted">
                  Project Phoenix is an enterprise cybersecurity transformation initiative supported by controlled project planning and infrastructure-discovery evidence. The work includes documenting and validating network relationships so security decisions can be based on a defensible operational baseline rather than assumptions.
                </p>
                <p className="mt-4 max-w-[var(--layout-reading)] leading-relaxed text-muted">
                  Public portfolio evidence is intentionally limited to the method, governance, and security outcomes. Device identifiers, physical locations, topology details, internal labels, and other sensitive operational data remain excluded.
                </p>
                <div className="mt-6">
                  <Link
                    href="/projects"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-raised"
                  >
                    Explore project evidence
                  </Link>
                </div>
              </div>

              <aside className="rounded-lg border border-border bg-surface-raised p-5" aria-label="Project Phoenix evidence summary">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">Evidence snapshot</p>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm text-muted">Context</dt>
                    <dd className="mt-1 font-semibold text-foreground">Production / Professional</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Focus</dt>
                    <dd className="mt-1 font-semibold text-foreground">Cybersecurity foundation & infrastructure discovery</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Evidence</dt>
                    <dd className="mt-1 font-semibold text-foreground">Controlled project plan & verified mapping records</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Disclosure</dt>
                    <dd className="mt-1 font-semibold text-foreground">Sanitized for public portfolio use</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </Card>
        </Section>

        <Section
          title="Proof of Impact"
          description="Evidence-backed indicators from Project Phoenix. Counts describe the controlled assessment register, not unsupported claims of risk reduction or remediation."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <p className="text-3xl font-semibold text-foreground">112</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Findings registered</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Technical findings and observations consolidated into a controlled vendor-facing risk register.
              </p>
            </Card>
            <Card>
              <p className="text-3xl font-semibold text-foreground">14</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Critical / potential critical</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Preliminary priority classifications requiring evidence-based validation before final risk acceptance.
              </p>
            </Card>
            <Card>
              <p className="text-3xl font-semibold text-foreground">63</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">High / potential high</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Higher-priority items surfaced for technical explanation, corrective action, ownership, and closure evidence.
              </p>
            </Card>
            <Card>
              <p className="text-3xl font-semibold text-foreground">33</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">TBV classifications</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Items explicitly marked To Be Verified so uncertainty is preserved instead of being presented as confirmed fact.
              </p>
            </Card>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Project Phoenix records 103 open items in the current controlled summary. Critical and high classifications are preliminary and are recalibrated as contractual scope, technical evidence, likelihood, and business impact are validated. Sensitive finding details remain private.
          </p>
        </Section>

        <Section
          title="Featured Projects"
          description="Selected work with explicit context so professional delivery and independent engineering are not conflated."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="flex flex-wrap gap-2">
                <Badge>Production / Professional</Badge>
                <Badge>Cybersecurity transformation</Badge>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Project Phoenix</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Enterprise cybersecurity transformation work grounded in controlled planning, infrastructure discovery, risk registration, and evidence validation. Public details are sanitized to protect operational information.
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                Focus: governance · infrastructure evidence · risk assessment
              </p>
            </Card>

            <Card>
              <div className="flex flex-wrap gap-2">
                <Badge>Independent Project</Badge>
                <Badge>Secure delivery</Badge>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Cybersecurity Portfolio</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Full-stack portfolio engineering using controlled requirements, architecture, CI verification, dependency review, and evidence-based delivery rather than treating the site as a simple static profile.
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">
                Focus: Next.js · TypeScript · security engineering · delivery governance
              </p>
            </Card>
          </div>

          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-raised"
            >
              View all projects
            </Link>
          </div>
        </Section>
      </Container>
    </main>
  );
}
