import type { PortfolioProject } from "./types";

export const portfolioProjects = [
  {
    id: "cybersecurity-portfolio",
    slug: "cybersecurity-portfolio",
    title: "Cybersecurity Portfolio",
    summary: "Secure full-stack portfolio engineering project with controlled architecture, security, verification, and delivery evidence.",
    context: "PERSONAL_PROJECT",
    sensitivity: "PUBLIC",
    publicationStatus: "PUBLISHED",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    evidence: [],
  },
] as const satisfies readonly PortfolioProject[];
