import Link from 'next/link';

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
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
];

const STEPS = [
  {
    n: '01',
    title: 'Fill out the intake form',
    desc: 'Tell us about your business and your data sources.',
  },
  {
    n: '02',
    title: 'We connect your data',
    desc: 'We handle the integrations and setup — no IT required.',
  },
  {
    n: '03',
    title: 'We build your dashboard',
    desc: 'A custom view of the metrics that matter most to you.',
  },
  {
    n: '04',
    title: 'You get your first report',
    desc: 'Delivered to your inbox with a Loom video walkthrough.',
  },
  {
    n: '05',
    title: 'Ongoing monthly delivery',
    desc: 'Reports, insights, and check-ins every month.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Sycamore Data helped us finally understand which products were actually driving profit. It changed how we make decisions.',
    name: 'Sarah M.',
    role: 'Retail Shop Owner',
  },
  {
    quote:
      "I used to dread looking at our numbers. Now I actually look forward to the monthly report.",
    name: 'James T.',
    role: 'Restaurant Owner',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left: copy + CTAs */}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-green-dark font-medium leading-[1.15] mb-6">
              Your data, finally working for you.
            </h1>
            <p className="text-body text-lg leading-relaxed max-w-lg mb-8">
              Sycamore Data gives small businesses the analytics insights
              they've been missing — without the cost of a full-time analyst.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-green-primary text-green-pale hover:bg-green-light transition-colors duration-150 rounded-lg px-6 py-3 text-sm font-medium no-underline"
              >
                Book a free call
              </Link>
              <a
                href="#how-it-works"
                className="inline-block bg-transparent border border-green-primary text-green-primary hover:bg-green-pale transition-colors duration-150 rounded-lg px-6 py-3 text-sm font-medium no-underline"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right: illustration placeholder */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-sm aspect-square bg-green-pale rounded-2xl flex items-center justify-center">
              <span className="text-green-primary text-sm tracking-wide">
                Illustration goes here
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Services Overview ────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-green-dark font-medium mb-4">
              What we do
            </h2>
            <p className="text-body max-w-xl mx-auto">
              We turn your business data into clear, actionable insights. No jargon. No fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {SERVICES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-border rounded-xl p-8"
              >
                <div className="text-3xl mb-5">{icon}</div>
                <h3 className="text-green-dark font-medium text-lg mb-3">
                  {title}
                </h3>
                <p className="text-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="text-green-primary text-sm hover:text-green-light transition-colors duration-150 no-underline"
            >
              See all services →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Section 3: How It Works ──────────────────────────────────────── */}
      <section id="how-it-works" className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-green-dark font-medium mb-4">
              How it works
            </h2>
            <p className="text-body">
              From signup to your first report in 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className="flex flex-col">
                <span className="font-serif text-4xl font-medium text-amber mb-3 leading-none">
                  {n}
                </span>
                <h3 className="text-green-dark font-medium text-base mb-2">
                  {title}
                </h3>
                <p className="text-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 4: Testimonials ──────────────────────────────────────── */}
      <section className="bg-green-dark border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="font-serif text-3xl md:text-4xl text-green-pale font-medium text-center mb-12">
            What our clients say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map(({ quote, name, role }) => (
              <div
                key={name}
                className="bg-green-primary border border-border-light rounded-xl p-8"
              >
                <p className="text-green-pale text-base leading-relaxed mb-8">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="text-green-pale font-medium text-sm">{name}</p>
                  <p className="text-muted text-sm mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 5: CTA Band ──────────────────────────────────────────── */}
      <section className="bg-green-darkest">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium mb-5">
            Ready to know what your data is telling you?
          </h2>
          <p className="text-green-pale text-base mb-10">
            Book a free 30-minute discovery call. No pressure, no commitment.
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
