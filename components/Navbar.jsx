'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing',  href: '/pricing'  },
  { label: 'About',    href: '/about'    },
  { label: 'Blog',     href: '/blog'     },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href) =>
    `text-sm no-underline transition-colors duration-150 ${
      pathname === href
        ? 'text-green-primary'
        : 'text-muted hover:text-green-primary'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="no-underline">
          <span className="font-serif text-base font-medium tracking-[0.2em] text-green-primary uppercase select-none">
            Sycamore Data
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm bg-green-primary text-green-pale hover:bg-green-light transition-colors duration-150 px-5 py-2.5 no-underline"
            style={{ borderRadius: '8px' }}
          >
            Book a free call
          </Link>
        </div>

        {/* ── Mobile hamburger button ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px bg-green-primary transition-all duration-200 origin-center ${
              menuOpen ? 'w-5 rotate-45 translate-y-[6px]' : 'w-5'
            }`}
          />
          <span
            className={`block h-px bg-green-primary transition-all duration-200 ${
              menuOpen ? 'w-5 opacity-0' : 'w-5'
            }`}
          />
          <span
            className={`block h-px bg-green-primary transition-all duration-200 origin-center ${
              menuOpen ? 'w-5 -rotate-45 -translate-y-[6px]' : 'w-5'
            }`}
          />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-border px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm text-center bg-green-primary text-green-pale hover:bg-green-light transition-colors duration-150 px-5 py-2.5 no-underline"
            style={{ borderRadius: '8px' }}
            onClick={() => setMenuOpen(false)}
          >
            Book a free call
          </Link>
        </div>
      )}
    </nav>
  );
}
