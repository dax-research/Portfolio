"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import type { Project } from "@/data/portfolio";

type WorkflowStep = Project["workflow"][number];

export function WorkflowDiagram({ steps }: { steps: WorkflowStep[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(listRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const animateIn = isInView && prefersReducedMotion === false;

  return (
    <motion.ol
      ref={listRef}
      className="grid gap-3 md:grid-cols-4"
      aria-label="Project workflow steps"
    >
      {steps.map((step, index) => (
        <motion.li
          key={step.label}
          className="workflow-step relative min-h-36 border border-[var(--line)] bg-[var(--paper)] p-4"
          initial={false}
          animate={animateIn ? { opacity: [0, 1], y: [12, 0] } : { opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.42,
            delay: prefersReducedMotion ? 0 : index * 0.07,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
            Step {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-lg font-medium tracking-[-0.03em] text-[var(--ink)]">
            {step.label}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.detail}</p>
          {index < steps.length - 1 ? (
            <>
              <motion.span
                aria-hidden="true"
                className="workflow-connector absolute -right-3 top-1/2 z-10 hidden h-px w-3 origin-left bg-[var(--ink)] md:block"
                initial={false}
                animate={animateIn ? { scaleX: [0, 1] } : { scaleX: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.3,
                  delay: prefersReducedMotion ? 0 : index * 0.07 + 0.22,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              />
              <span
                className="workflow-chevron absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-[var(--line)] bg-[var(--paper)] md:block"
                aria-hidden="true"
              />
            </>
          ) : null}
        </motion.li>
      ))}
    </motion.ol>
  );
}
