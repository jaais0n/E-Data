import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "../data";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pb-32 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[#0b0f19]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[800px] mx-auto px-5 relative z-10 text-center">
          <Link href="/resources/blog" className="inline-flex items-center gap-2 text-[#8dc63f] hover:text-white transition-colors font-label-mono text-sm font-bold mb-8">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            BACK TO BLOG
          </Link>
          <div className="flex justify-center mb-6">
            <span className="bg-[#131b2e] text-blue-400 border border-white/10 px-4 py-1.5 rounded-full font-label-mono text-xs tracking-widest font-bold">
              {blog.tag}
            </span>
          </div>
          <h1 className="font-display-lg text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/70 font-label-mono">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              {blog.date}
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">person</span>
              {blog.author}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-24">
        <article className="max-w-[800px] mx-auto px-5">
          {/* Featured Image */}
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl mb-16 border border-outline-variant/30">
            <img 
              src={blog.img} 
              alt={blog.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]" 
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display-lg prose-headings:font-bold prose-headings:text-[#131b2e] prose-a:text-[#8dc63f] hover:prose-a:text-[#9cd34c]">
            {blog.content.map((paragraph, idx) => (
              <p key={idx} className="text-[#3a485c] leading-relaxed mb-6 font-body text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-10 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl text-center shadow-lg">
            <h3 className="font-display-lg text-2xl md:text-3xl font-bold mb-4">Ready to accelerate your growth?</h3>
            <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">
              Contact our data experts today to discover how our tailored lists and appending services can transform your outreach.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] px-10 py-4 rounded-xl font-label-mono font-bold tracking-widest transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              GET IN TOUCH
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
