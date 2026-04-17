import Link from 'next/link';

const SKILLS = [
  'SQL', 'Python', 'R', 'Tableau', 'Power BI',
  'Google Looker Studio', 'Excel', 'Azure',
];

export const metadata = {
  title: 'About — Sycamore Data',
  description:
    'Sycamore Data is a one-person analytics consultancy founded by Connor. Real analytics for small businesses, without the enterprise price tag.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-green-dark font-medium mb-5">
            The person behind the data.
          </h1>
          <p className="text-body text-lg leading-relaxed">
            Sycamore Data is a one-person shop — and that's intentional.
            When you work with us, you work with me.
          </p>
        </div>
      </section>

      {/* ── Section 1: Founder Story ─────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-14 items-start">

            {/* Left: photo placeholder */}
            <div className="w-full md:w-80 shrink-0">
              {/* TODO: Replace with founder photo */}
              <div className="bg-green-pale border border-border rounded-xl w-full md:w-80 h-96 flex items-center justify-center">
                <span className="text-muted text-sm">Photo coming soon</span>
              </div>
            </div>

            {/* Right: story */}
            <div className="flex-1 min-w-0">
              <h2 className="font-serif text-3xl md:text-4xl text-green-dark font-medium mb-7">
                Hi, I'm Connor.
              </h2>

              <div className="flex flex-col gap-5 text-body text-base leading-relaxed mb-8">
                <p>
                  I grew up on Long Island, surrounded by small businesses — the
                  kind my parents knew from growing up in Queens. I watched those
                  businesses work incredibly hard, and I also watched how much
                  harder everything got over time. Rising costs, more competition,
                  fewer margins for error.
                </p>
                <p>
                  I've always loved math and data. I played baseball growing up,
                  and if you know baseball, you know it's basically a sport built
                  on numbers. That same instinct — using data to understand what's
                  actually happening, not just what it looks like — is what I bring
                  to every client.
                </p>
                <p>
                  Here's what kept bothering me: the businesses that need data
                  insights the most are often the ones who can't access them. Large
                  companies spend millions on analysts and enterprise software. Small
                  businesses get a spreadsheet and a gut feeling. I started Sycamore
                  Data to change that — to bring real analytics to businesses that
                  have been priced out of it.
                </p>
                <p>
                  I'm based in Montgomery County, Maryland, and I work with small
                  businesses across the DMV and nationwide. If you're tired of making
                  decisions without the full picture, I'd love to talk.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-transparent border border-green-primary text-green-primary hover:bg-green-pale transition-colors duration-150 rounded-lg px-6 py-3 text-sm font-medium no-underline"
              >
                Book a free call
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 2: Tools & Skills ────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-green-dark font-medium mb-4">
            What I work with
          </h2>
          <p className="text-body mb-10">
            I use the same tools that enterprise analytics teams use — just
            without the enterprise price tag.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-green-pale text-green-dark border border-border rounded-full px-4 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Mission Statement Band ───────────────────────────── */}
      <section className="bg-green-dark">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="font-serif text-2xl md:text-3xl text-green-pale font-medium italic leading-relaxed">
            &ldquo;Big companies have entire analytics departments. Small businesses
            deserve the same clarity. That's what Sycamore Data is here for.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Bottom CTA Band ──────────────────────────────────────────────── */}
      <section className="bg-green-darkest">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream font-medium mb-5">
            Let's figure out what your data is telling you.
          </h2>
          <p className="text-green-pale/70 text-base mb-10">
            A free 30-minute call is all it takes to get started.
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
