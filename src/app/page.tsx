import { Badge, Button, Card, Container, Section } from "@/components/ui";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen py-8 sm:py-10 lg:py-12">
      <Container>
        <header className="max-w-[var(--layout-reading)]">
          <Badge>Cybersecurity · Engineering · DFIR</Badge>
          <h1 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">
            Cybersecurity Portfolio
          </h1>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Secure portfolio application foundation with structured project evidence and transparent experience context.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button>Explore projects</Button>
            <Button variant="secondary">View credentials</Button>
          </div>
        </header>

        <Section
          title="Project evidence"
          description="Reusable content primitives are now operational; portfolio feature composition follows in later phases."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <Badge>Personal project</Badge>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Cybersecurity Portfolio</h3>
              <p className="mt-2 text-muted">
                Full-stack portfolio engineering with controlled architecture, security, verification, and delivery evidence.
              </p>
            </Card>
            <Card>
              <Badge>Design system</Badge>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Reusable UI foundation</h3>
              <p className="mt-2 text-muted">
                Semantic tokens, accessible themes, cards, badges, sections, and button primitives.
              </p>
            </Card>
          </div>
        </Section>
      </Container>
    </main>
  );
}
