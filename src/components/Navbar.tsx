"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Journey", href: "/#journey" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Writing", href: "/writing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto w-[90%] flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Phuc Le (Dr.)
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-sm font-medium bg-[var(--accent)] text-[var(--bg)] px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-1" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-[var(--border)] pb-6">
          <div className="max-w-[1200px] mx-auto w-[90%] flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
