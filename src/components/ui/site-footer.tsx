import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Cybersecurity portfolio · Evidence presented with explicit experience context.</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li><Link className="hover:text-foreground" href="/projects">Projects</Link></li>
            <li><Link className="hover:text-foreground" href="/resume">Resume</Link></li>
            <li><Link className="hover:text-foreground" href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
