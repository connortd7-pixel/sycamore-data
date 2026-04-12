import Link from 'next/link';

const SERVICE_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing',  href: '/pricing'  },
];

const COMPANY_LINKS = [
  { label: 'About',   href: '/about'   },
  { label: 'Blog',    href: '/blog'    },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer>

      {/* ── Main footer ── */}
      <div className="bg-green-dark">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">

          {/* Brand + tagline */}
          <div className="max-w-xs">
            <span className="font-serif text-base font-medium tracking-[0.2em] text-green-pale uppercase select-none">
              Sycamore Data
            </span>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Helping small businesses grow,<br />one insight at a time.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.07em] text-green-highlight mb-5">
                Services
              </p>
              <ul className="flex flex-col gap-3">
                {SERVICE_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted hover:text-green-pale transition-colors duration-150 no-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.07em] text-green-highlight mb-5">
                Company
              </p>
              <ul className="flex flex-col gap-3">
                {COMPANY_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted hover:text-green-pale transition-colors duration-150 no-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-green-darkest">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between gap-1">
          <p className="text-xs text-muted">
            © 2026 Sycamore Data. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Based in Maryland. Serving businesses nationwide.
          </p>
        </div>
      </div>

    </footer>
  );
}
