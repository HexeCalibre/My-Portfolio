export type PublicationStatus = "DRAFT" | "READY_FOR_REVIEW" | "PUBLISHED" | "ARCHIVED";
export type ContentSensitivity = "PUBLIC" | "INTERNAL" | "CONFIDENTIAL";
export type ExperienceContext = "PROFESSIONAL" | "LAB" | "PERSONAL_PROJECT";

export interface EvidenceLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly kind: "repository" | "documentation" | "demo";
}

export interface PortfolioProject {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly context: ExperienceContext;
  readonly sensitivity: ContentSensitivity;
  readonly publicationStatus: PublicationStatus;
  readonly technologies: readonly string[];
  readonly evidence: readonly EvidenceLink[];
}
