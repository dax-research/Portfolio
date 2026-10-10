"use client";

import { useState, type PointerEvent as ReactPointerEvent } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { SharedProjectTitle } from "@/components/motion/shared-project-title";

type ProjectCardProps = {
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  tech: string[];
  href: string;
  index: number;
  projectSlug: string;
};

export function ProjectCard({
  title,
  category,
  status,
  shortDescription,
  tech,
  href,
  index,
  projectSlug,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [previewVisible, setPreviewVisible] = useState(false);
  const cursorX = useSpring(useMotionValue(0), { stiffness: 220, damping: 28, mass: 0.35 });
  const cursorY = useSpring(useMotionValue(0), { stiffness: 220, damping: 28, mass: 0.35 });

  function movePreview(event: ReactPointerEvent<HTMLAnchorElement>) {
    if (
      prefersReducedMotion !== false ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    cursorX.set(Math.max(12, Math.min(event.clientX + 18, window.innerWidth - 224)));
    cursorY.set(Math.max(12, Math.min(event.clientY + 18, window.innerHeight - 112)));
  }

  function showPreview(event: ReactPointerEvent<HTMLAnchorElement>) {
    movePreview(event);
    if (
      prefersReducedMotion === false &&
      event.pointerType === "mouse" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      setPreviewVisible(true);
    }
  }

  return (
    <>
      <Link
        href={href}
        onPointerEnter={showPreview}
        onPointerMove={movePreview}
        onPointerLeave={() => setPreviewVisible(false)}
        className="project-card group relative block border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-white/60"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {String(index).padStart(2, "0")}
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">{category}</span>
          </div>
          <span className="rounded-full border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
            {status}
          </span>
        </div>
        <SharedProjectTitle
          as="h3"
          projectSlug={projectSlug}
          className="text-2xl font-medium tracking-[-0.05em] text-[var(--ink)] md:text-3xl"
        >
          {title}
        </SharedProjectTitle>
        <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">{shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]"
            >
              {item}
            </span>
          ))}
        </div>
        <span className="project-card-cta mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)]">
          View case study
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1">
            →
          </span>
        </span>
      </Link>
      {previewVisible && prefersReducedMotion === false && typeof document !== "undefined"
        ? createPortal(
            <motion.div
              aria-hidden="true"
              className="pointer-events-none fixed left-0 top-0 z-[100] hidden w-52 border border-[var(--line)] bg-[var(--paper)] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.1)] md:block"
              style={{ x: cursorX, y: cursorY }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">Project preview</p>
              <p className="mt-2 text-lg font-medium tracking-[-0.04em] text-[var(--ink)]">{title}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{category}</p>
            </motion.div>,
            document.body,
          )
        : null}
    </>
  );
}
