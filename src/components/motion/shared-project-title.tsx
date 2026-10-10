"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function SharedProjectTitle({
  as,
  projectSlug,
  className,
  children,
}: {
  as: "h1" | "h3";
  projectSlug: string;
  className: string;
  children: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion
    ? { layout: { duration: 0 } }
    : { layout: { duration: 0.56, ease: [0.22, 0.61, 0.36, 1] as const } };
  const layoutId = `project-title-${projectSlug}`;

  if (as === "h1") {
    return (
      <motion.h1 layoutId={layoutId} transition={transition} className={className}>
        {children}
      </motion.h1>
    );
  }

  return (
    <motion.h3 layoutId={layoutId} transition={transition} className={className}>
      {children}
    </motion.h3>
  );
}
