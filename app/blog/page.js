import Link from 'next/link';

const posts = [
  {
    slug: '5-numbers-every-small-business-should-track',
    title: '5 Numbers Every Small Business Owner Should Be Tracking',
    excerpt:
      'Most small business owners are drowning in data but starving for insight. Here are the five metrics that actually tell you how your business is doing — and what to do when they move.',
    date: 'April 1, 2026',
  },
  {
    slug: 'why-your-sales-report-is-probably-lying',
    title: 'Why Your Sales Report Is Probably Lying to You',
    excerpt:
      'A high revenue number feels great until you realize it\'s masking a margin problem. Here\'s how to read past the surface of your sales data and find what\'s really going on.',
    date: 'April 8, 2026',
  },
  {
    slug: 'what-is-a-kpi',
    title: 'What Is a KPI, and Which Ones Actually Matter for Your Business?',
    excerpt:
      'KPI gets thrown around a lot. But most small businesses are tracking the wrong ones — or tracking too many. Here\'s how to pick the handful that will actually help you make better decisions.',
    date: 'April 15, 2026',
  },
];

export const metadata = {
  title: 'Blog — Sycamore Data',
  description:
    'Plain-spoken advice on using data to grow your small business. No jargon, no fluff.',
};

export default function BlogPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-green-dark font-medium mb-5">
            Data tips for small businesses.
          </h1>
          <p className="text-body text-lg leading-relaxed">
            Plain-spoken advice on using data to grow your business.
            No jargon, no fluff.
          </p>
        </div>
      </section>

      {/* ── Posts Grid ───────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(({ slug, title, excerpt, date }) => (
              <div
                key={slug}
                className="bg-white border border-border rounded-xl p-8 flex flex-col"
              >
                {/* Title */}
                <h2 className="font-serif text-lg text-green-dark font-medium leading-snug mb-4">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:text-green-primary transition-colors duration-150 no-underline"
                  >
                    {title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-body text-sm leading-relaxed line-clamp-3 flex-1 mb-6">
                  {excerpt}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-muted text-xs">{date}</span>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-green-primary hover:text-green-dark text-sm transition-colors duration-150 no-underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Band ──────────────────────────────────────────────── */}
      <section className="bg-green-darkest">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium mb-5">
            Want insights like these for your own business?
          </h2>
          <p className="text-green-pale/70 text-base mb-10">
            Book a free discovery call and we'll show you what your data can do.
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
