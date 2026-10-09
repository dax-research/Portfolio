"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <div className="md:hidden" onKeyDown={handleKeyDown}>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-10 items-center gap-2 border border-[var(--line)] px-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
      >
        <span aria-hidden="true" className={`menu-icon${open ? " menu-icon-open" : ""}`}>
          <span />
          <span />
        </span>
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-menu absolute left-0 right-0 top-full z-20 border-b border-[var(--line)] bg-[var(--paper)] px-6 py-4 shadow-[0_12px_20px_rgba(17,17,17,0.06)]"
        >
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 md:px-8">
            {navItems.map((item, index) => (
              <li key={item.href} className="border-b border-[var(--line)]">
                <Link
                  href={item.href}
                  aria-current={
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? "page"
                      : undefined
                  }
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center gap-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--muted)]"
                >
                  <span className="mono text-[10px] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
