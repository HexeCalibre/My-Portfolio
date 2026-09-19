import type { PortfolioProject } from "./types";

export function isPubliclyPublishable(project: PortfolioProject): boolean {
  return project.publicationStatus === "PUBLISHED" && project.sensitivity === "PUBLIC";
}

export function getPublishedProjects(projects: readonly PortfolioProject[]): readonly PortfolioProject[] {
  return projects.filter(isPubliclyPublishable);
}
