"use client";

import type { ReactNode } from "react";
import { LayoutGroup } from "motion/react";

export function ProjectMotionProvider({ children }: { children: ReactNode }) {
  return <LayoutGroup id="portfolio-projects">{children}</LayoutGroup>;
}
