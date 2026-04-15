'use client';

import Link from 'next/link';
import { useState } from 'react';

// ─── Data ──────────────────────────────────────────────────────────────────

const OVERVIEW_CARDS = [
  {
    icon: '📊',
    title: 'Performance Dashboards',
    desc: 'Real-time KPI tracking so you always know where your business stands.',
  },
  {
    icon: '📈',
    title: 'Sales & Revenue Analysis',
    desc: 'Spot trends, find opportunities, and forecast with confidence.',
  },
  {
    icon: '👥',
    title: 'Customer Behavior Analytics',
    desc: 'Understand who your customers are and what keeps them coming back.',
  },
  {
    icon: '📣',
    title: 'Marketing Analytics',
    desc: 'See which channels are working and where your budget is actually going.',
  },
  {
    icon: '⚙️',
    title: 'Operational Analytics',
    desc: 'Find inefficiencies, benchmark your costs, and improve your processes.',
  },
  {
    icon: '📝',
    title: 'Custom Reporting',
    desc: "Have a specific business question? We'll build a report around it.",
  },
];

const ACCORDION_ITEMS = [
  {
    title: 'Performance Dashboards',
    body: 'Your dashboard is a live view of the metrics that matter most to your business — updated automatically from your data sources. We configure it around your specific KPIs so you\'re never looking at numbers that don\'t apply to you. Delivered as a shared link you can access anytime.',
    included: [
      'KPI selection and configuration',
      "Connection to up to your plan's data source limit",
      'Monthly updates and refinements',
      'Shared dashboard link',
    ],
  },
  {
    title: 'Sales & Revenue Analysis',
    body: "We dig into your sales data to show you what's driving revenue, what's underperforming, and where the opportunities are. Every month you'll get a clear picture of your trends — not just a spreadsheet of numbers.",
    included: [
      'Revenue trend analysis',
      'Product or service performance breakdown',
      'Period-over-period comparisons',
      'Short-term forecasting',
    ],
  },
  {
    title: 'Customer Behavior Analytics',
    body: 'Understanding your customers is the fastest path to growing your business. We analyze purchase patterns, retention rates, and lifetime value so you know exactly who your best customers are and how to find more of them.',
    included: [
      'Customer segmentation',
      'Retention and churn analysis',
      'Lifetime value modeling',
      'Repeat purchase patterns',
    ],
  },
  {
    title: 'Marketing Analytics',
    body: "Stop guessing which marketing is working. We connect your campaign data and show you exactly where your leads and sales are coming from — so you can put your budget where it performs.",
    included: [
      'Channel attribution',
      'Campaign ROI analysis',
      'Audience insights',
      'Lead source tracking',
    ],
  },
  {
    title: 'Operational Analytics',
    body: 'Efficiency gains are often hiding in plain sight. We analyze your operational data to find cost inefficiencies, benchmark your performance, and identify process improvements.',
    included: [
      'Cost analysis',
      'Efficiency benchmarking',
      'Process performance tracking',
      'Operational trend reporting',
    ],
  },
  {
    title: 'Custom Reporting',
    body: "Have a specific question your regular reports don't answer? We'll build a custom report around it. Scoped and quoted before work begins.",
    included: [
      'One-on-one scoping call',
      'Custom data pull and analysis',
      'Written report with findings and recommendations',
      'One round of revisions',
    ],
  },
];

// ─── Accordion ─────────────────────────────────────────────────────────────

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="border-t border-border">
      {ACCORDION_ITEMS.map(({ title, body, included }, i) => (
        <div key={title} className="border-b border-border">

          {/* Header row */}
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            aria-expanded={openIndex === i}
          >
            <span className="text-green-dark font-medium text-base">{title}</span>
            <span className="text-amber text-xl leading-none shrink-0 w-5 text-center">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>

          {/* Expanded panel */}
          {openIndex === i && (
            <div className="bg-green-pale rounded-xl px-7 py-6 mb-5">
              <p className="text-body text-sm leading-relaxed mb-5">{body}</p>
              <p className="text-green-dark text-xs font-medium uppercase tracking-[0.06em] mb-3">
                What's included
              </p>
              <ul className="flex flex-col gap-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-primary text-sm leading-5 shrink-0">✓</span>
                    <span className="text-body text-sm leading-5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-green-dark font-medium mb-5">
            What we do
          </h1>
          <p className="text-body text-lg leading-relaxed">
            We turn your business data into clear, actionable insights. Every
            service is delivered online, with a real human behind every report.
          </p>
        </div>
      </section>

      {/* ── Section 1: Overview Cards ────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OVERVIEW_CARDS.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-8">
                <div className="text-3xl mb-5">{icon}</div>
                <h3 className="text-green-dark font-medium text-base mb-2">{title}</h3>
                <p className="text-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Accordion Breakdown ──────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20">

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-green-dark font-medium mb-4">
              A closer look
            </h2>
            <p className="text-muted text-base">
              Click any service to see exactly what's included.
            </p>
          </div>

          <Accordion />

        </div>
      </section>

      {/* ── Bottom CTA Band ──────────────────────────────────────────────── */}
      <section className="bg-green-darkest">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium mb-5">
            Ready to see what your data can do?
          </h2>
          <p className="text-green-pale/70 text-base mb-10">
            Book a free 30-minute discovery call and we'll recommend the right
            services for your business.
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
