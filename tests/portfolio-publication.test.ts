import assert from "node:assert/strict";
import test from "node:test";

import { getPublishedProjects, isPubliclyPublishable } from "../src/features/portfolio/publication";
import type { PortfolioProject } from "../src/features/portfolio/types";

const base: PortfolioProject = {
  id: "test",
  slug: "test",
  title: "Test",
  summary: "Test project",
  context: "LAB",
  sensitivity: "PUBLIC",
  publicationStatus: "PUBLISHED",
  technologies: [],
  evidence: [],
};

test("publishes only PUBLIC content explicitly marked PUBLISHED", () => {
  assert.equal(isPubliclyPublishable(base), true);
  assert.equal(isPubliclyPublishable({ ...base, sensitivity: "CONFIDENTIAL" }), false);
  assert.equal(isPubliclyPublishable({ ...base, publicationStatus: "DRAFT" }), false);
});

test("filters non-public portfolio records", () => {
  const records: PortfolioProject[] = [
    base,
    { ...base, id: "draft", publicationStatus: "DRAFT" },
    { ...base, id: "internal", sensitivity: "INTERNAL" },
  ];
  assert.deepEqual(getPublishedProjects(records).map(({ id }) => id), ["test"]);
});
