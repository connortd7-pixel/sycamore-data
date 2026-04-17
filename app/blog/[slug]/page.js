import Link from 'next/link';

export const metadata = {
  title: 'Coming Soon — Sycamore Data Blog',
};

export default function BlogPostPage() {
  return (
    <section className="bg-cream min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-green-dark font-medium mb-5">
          Coming soon.
        </h1>
        <p className="text-body text-lg leading-relaxed mb-10">
          This post is on its way. Check back shortly.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-transparent border border-green-primary text-green-primary hover:bg-green-pale transition-colors duration-150 rounded-lg px-6 py-3 text-sm font-medium no-underline"
        >
          Back to blog
        </Link>
      </div>
    </section>
  );
}
