import { Badge, Button, Card, Section } from "@/components/ui";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <header className="max-w-3xl">
        <Badge>Cybersecurity · Engineering · DFIR</Badge>
        <h1 className="mt-6 text-4xl font-semibold text-foreground">Cybersecurity Portfolio</h1>
        <p className="mt-4 text-lg text-muted">
          Secure portfolio application foundation with structured project evidence and transparent experience context.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
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
    </main>
  );
}
