import Link from 'next/link';

// ─── Data ──────────────────────────────────────────────────────────────────

const TIERS = [
  {
    name: 'Starter',
    price: '$299',
    bestFor: "I just want to know what's working.",
    badge: null,
    featured: false,
    features: [
      '1 Performance Dashboard',
      'Standard monthly report',
      'Up to 2 data sources',
      'No dedicated analyst',
      '5 business day response time',
    ],
  },
  {
    name: 'Growth',
    price: '$699',
    bestFor: 'I want regular insights I can actually act on.',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Up to 3 Performance Dashboards',
      'Custom monthly report',
      'Up to 5 data sources',
      'Shared analyst',
      'Monthly video walkthrough',
      '2 business day response time',
    ],
  },
  {
    name: 'Pro',
    price: '$1,299',
    bestFor: 'I need a real data partner.',
    badge: null,
    featured: false,
    features: [
      'Unlimited dashboards',
      'Executive + custom monthly report',
      'Unlimited data sources',
      'Dedicated analyst',
      'Bi-weekly video walkthrough',
      'Same business day response time',
    ],
  },
];

const ADDONS = [
  {
    title: 'One-time Data Audit',
    price: '$499',
    desc: 'A comprehensive review of your existing data collection and reporting practices. Delivered as a written report with recommendations.',
  },
  {
    title: 'Custom Project',
    price: '$150/hour',
    desc: 'Ad hoc analysis, special reports, or deep-dive investigations. Scoped and quoted before work begins.',
  },
  {
    title: 'Data Migration & Setup',
    price: '$299–$999',
    desc: 'Connecting and structuring new data sources. Priced based on complexity.',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Pricing — Sycamore Data',
  description:
    'Simple, transparent pricing for small business analytics. Three plans starting at $299/mo. No hidden fees, no long-term contracts.',
};

export default function PricingPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-green-dark font-medium mb-5">
            Simple, transparent pricing
          </h1>
          <p className="text-body text-lg">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── Subscription Tiers ──────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TIERS.map(({ name, price, bestFor, badge, featured, features }) => (
              <div key={name} className="flex flex-col">

                {/* Badge slot — reserves space so cards align on desktop */}
                <div className="h-8 flex items-center justify-center mb-3">
                  {badge && (
                    <span className="inline-block bg-green-primary text-green-pale text-xs font-medium tracking-wide px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  )}
                </div>

                {/* Card */}
                <div
                  className={`flex flex-col flex-1 rounded-xl p-8 ${
                    featured
                      ? 'bg-green-pale border-2 border-green-primary'
                      : 'bg-white border border-border'
                  }`}
                >
                  {/* Tier name + price */}
                  <div className="mb-6">
                    <h2 className="text-green-dark font-medium text-xl mb-1">
                      {name}
                    </h2>
                    <p className="text-body text-sm italic mb-4">{bestFor}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl text-green-dark font-medium">
                        {price}
                      </span>
                      <span className="text-muted text-sm">/mo</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border mb-6" />

                  {/* Feature list */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-green-primary text-sm leading-6 shrink-0">✓</span>
                        <span className="text-body text-sm leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`block text-center text-sm font-medium rounded-lg px-6 py-3 transition-colors duration-150 no-underline ${
                      featured
                        ? 'bg-green-primary text-green-pale hover:bg-green-light'
                        : 'bg-transparent border border-green-primary text-green-primary hover:bg-green-pale'
                    }`}
                  >
                    Get started
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-ons ─────────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-green-dark font-medium mb-4">
              Need something extra?
            </h2>
            <p className="text-body max-w-xl mx-auto">
              Our add-on services are available to any client, on any plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDONS.map(({ title, price, desc }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-8">
                <h3 className="text-green-dark font-medium text-lg mb-2">{title}</h3>
                <p className="text-amber font-medium text-base mb-4">{price}</p>
                <p className="text-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Bottom CTA Band ──────────────────────────────────────────────── */}
      <section className="bg-green-darkest">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium mb-5">
            Not sure which plan is right for you?
          </h2>
          <p className="text-green-pale/70 text-base mb-10">
            Book a free discovery call and we'll recommend the best fit for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber text-white hover:bg-amber-light transition-colors duration-150 rounded-lg px-8 py-4 text-sm font-medium no-underline"
          >
            Book a free call
          </Link>
        </div>
      </section>
    </>
  );
}
