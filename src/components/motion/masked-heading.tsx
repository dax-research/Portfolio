"use client";

import { useEffect, type ReactNode } from "react";
import { motion, useAnimate, useReducedMotion } from "motion/react";

export function MaskedHeadingText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [scope, animate] = useAnimate<HTMLSpanElement>();

  useEffect(() => {
    if (prefersReducedMotion !== false || !scope.current) {
      return;
    }
    const controls = animate(
      scope.current,
      { y: ["108%", "0%"] },
      { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    );
    return () => controls.stop();
  }, [animate, prefersReducedMotion, scope]);

  return (
    <span className="block overflow-hidden py-[0.08em] -my-[0.08em]">
      <motion.span
        ref={scope}
        className={`block ${className ?? ""}`}
        initial={false}
      >
        {children}
      </motion.span>
    </span>
  );
}
