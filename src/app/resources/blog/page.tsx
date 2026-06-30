import Link from "next/link";
import { blogs } from "./data";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Header Banner */}
      <section className="bg-[#0b0f19] text-on-primary pt-40 pb-20 relative overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }} />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
          <h1 className="font-display-lg text-4xl md:text-5xl font-bold mb-4">Our <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Blog</span></h1>
          <p className="font-label-mono text-label-mono text-secondary-fixed">LATEST INSIGHTS AND INDUSTRY NEWS</p>
        </div>
      </section>

      <main className="py-24">
        {/* Blog Grid */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {blogs.map(b => (
              <Link key={b.id} href={`/resources/blog/${b.slug}`} className="block group cursor-pointer">
                <article className="flex flex-col h-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.1]" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="font-label-mono text-[10px] text-primary mb-3 block">{b.tag}</span>
                      <h3 className="font-headline-md text-xl group-hover:text-primary transition-colors mb-4 line-clamp-2">{b.title}</h3>
                      <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">{b.d}</p>
                    </div>
                    <div className="border-t border-outline-variant/20 pt-4 flex justify-between items-center text-xs text-on-surface-variant font-label-mono">
                      <span>{b.date}</span>
                      <span>By {b.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
