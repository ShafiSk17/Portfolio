"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/ai-native-engineering", label: "AI-Native Engineering" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/demo", label: "Demo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Floating pill — high-end-visual-design §5.A */}
      <div className="mx-auto mt-5 max-w-[1200px] px-4">
        <nav
          className="flex items-center justify-between rounded-full border border-hairline bg-panel/90 backdrop-blur-md px-5 py-3 shadow-[0_1px_3px_rgba(26,36,33,0.06),0_0_0_1px_rgba(201,206,191,0.4)]"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo / name */}
          <Link
            href="/"
            className="font-display text-ink font-semibold text-[15px] tracking-[-0.01em] hover:text-accent transition-colors duration-200"
          >
            Shafi SK
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-4 py-2 rounded-full font-sans text-[13px] font-medium transition-all duration-200 ${
                      active
                        ? "bg-ink text-panel"
                        : "text-ink-muted hover:text-ink hover:bg-ink/5"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu — staggered reveal */}
        {open && (
          <div
            className="md:hidden mt-2 rounded-2xl border border-hairline bg-panel/95 backdrop-blur-xl px-4 py-4 shadow-[0_4px_24px_rgba(26,36,33,0.08)]"
            role="menu"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ href, label }, i) => {
                const active = pathname === href;
                return (
                  <li
                    key={href}
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: `${i * 60}ms`, animationFillMode: "forwards" }}
                    role="none"
                  >
                    <Link
                      href={href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-sans text-[14px] font-medium transition-colors duration-150 ${
                        active
                          ? "bg-ink text-panel"
                          : "text-ink-muted hover:text-ink hover:bg-ink/5"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
