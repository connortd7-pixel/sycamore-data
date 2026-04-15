const TRUST_ITEMS = [
  {
    icon: '📅',
    label: 'Free, no-obligation call',
    desc: '30 minutes. No sales pressure. Just a real conversation.',
  },
  {
    icon: '🔒',
    label: 'Your data stays private',
    desc: 'We never share or sell your business information.',
  },
  {
    icon: '⚡',
    label: 'Fast turnaround',
    desc: 'Most clients have their first report within 48 hours of signing up.',
  },
];

export const metadata = {
  title: 'Contact — Sycamore Data',
  description:
    'Book a free 30-minute discovery call with Sycamore Data. No pressure, no commitment — just a real conversation about your business.',
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-green-dark font-medium mb-5">
            Let's talk about your data.
          </h1>
          <p className="text-body text-lg leading-relaxed max-w-2xl mx-auto">
            Book a free 30-minute discovery call. We'll learn about your business,
            look at what data you have, and recommend the best path forward.
            No pressure, no commitment.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* ── Left: Calendly embed (~60%) ── */}
            <div className="flex-[3]">
              {/* TODO: Replace this div with Calendly inline embed once URL is available */}
              <div className="bg-white border border-border rounded-xl h-[600px] flex items-center justify-center">
                <p className="text-muted text-sm">
                  Calendly booking widget will load here
                </p>
              </div>
            </div>

            {/* ── Right: Contact form (~40%) ── */}
            <div className="flex-[2]">
              <p className="text-muted text-sm mb-5">Prefer to send a message?</p>

              {/* TODO: Wire up form submission — consider Formspree, Resend, or similar */}
              <form className="flex flex-col gap-5">

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-green-dark text-sm font-medium">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-body focus:outline-none focus:border-green-primary transition-colors duration-150"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="business" className="text-green-dark text-sm font-medium">
                    Business name
                  </label>
                  <input
                    id="business"
                    type="text"
                    name="business"
                    autoComplete="organization"
                    className="bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-body focus:outline-none focus:border-green-primary transition-colors duration-150"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-green-dark text-sm font-medium">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-body focus:outline-none focus:border-green-primary transition-colors duration-150"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-green-dark text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-white border border-border rounded-lg px-4 py-2.5 text-sm text-body focus:outline-none focus:border-green-primary transition-colors duration-150 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-primary text-green-pale hover:bg-green-light transition-colors duration-150 rounded-lg px-6 py-3 text-sm font-medium"
                >
                  Send message
                </button>

                <p className="text-muted text-xs text-center">
                  We'll get back to you within one business day.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {TRUST_ITEMS.map(({ icon, label, desc }) => (
              <div key={label}>
                <div className="text-3xl mb-3">{icon}</div>
                <p className="text-green-dark font-medium text-sm mb-1">{label}</p>
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
            Not ready to book yet?
          </h2>
          <p className="text-green-pale/70 text-base mb-10">
            That's okay. Browse our services or check out our pricing to learn more first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="inline-block bg-transparent border border-green-pale text-green-pale hover:bg-green-dark transition-colors duration-150 rounded-lg px-6 py-3 text-sm font-medium no-underline"
            >
              See our services
            </a>
            <a
              href="/pricing"
              className="inline-block bg-amber text-white hover:bg-amber-light transition-colors duration-150 rounded-lg px-6 py-3 text-sm font-medium no-underline"
            >
              View pricing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
