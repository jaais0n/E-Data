"use client";

import { useState } from "react";
import { ClientMarquee } from "@/components/ClientMarquee";

const faqs = [
  {
    q: "How is E-Data Grid different from other data list providers?",
    a: "E-Data Grid has been a pioneer in specialized data products for 14 years. We offer comprehensive data management, cleansing, multi-channel verification, and other services. We deliver and provide niche knowledge to boost productivity. Customized fields can boost your company's bottom line, as we work the extra mile."
  },
  {
    q: "How does E-Data Grid collect data? What are the sources?",
    a: "Our data is compiled from trusted business registries, public archives, annual reports, business directories, and multi-channel verification networks to ensure absolute authenticity."
  },
  {
    q: "How reliable is E-Data Grid data?",
    a: "Our datasets are updated and verified every 90 days. We maintain an industry-leading delivery rate and accuracy score across all compiled files."
  },
  {
    q: "How does E-Data Grid validate data?",
    a: "We use a dual-verification process utilizing advanced automated matching algorithms paired with manual human intelligence verification."
  },
  {
    q: "What if I find information, I know is wrong?",
    a: "We offer a data replacement guarantee. If you discover any inaccurate or disconnected record exceeding our bounce threshold, we will replace it free of charge."
  },
  {
    q: "What is the deliverability guarantee?",
    a: "We guarantee up to 95% deliverability on all B2B email and multi-channel marketing campaigns."
  },
  {
    q: "How does the list get sent to me?",
    a: "Customized datasets are delivered securely via an encrypted CSV or Excel download link, or direct API integration depending on your infrastructure."
  },
  {
    q: "What is single-use rental?",
    a: "Single-use rental allows you to acquire a list for one specific outreach campaign. We also offer multi-use license options for ongoing marketing operations."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-[#131b2e]/30 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <h3 className="font-headline-md text-lg font-bold text-primary">{q}</h3>
        </div>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          <p className="text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* 1. Header Banner */}
      <section className="bg-[#0b0f19] text-on-primary pt-40 pb-20 relative overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }} />
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
          <h1 className="font-display-lg text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Us</span></h1>
          <p className="font-label-mono text-label-mono text-secondary-fixed">LET'S CONNECT AND BUILD YOUR PIPELINE</p>
        </div>
      </section>

      <main className="py-24">
        {/* 2. Content & Form Split */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pb-24 border-b border-outline-variant/30">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed font-semibold">
              With our B2B and B2C lead generation and marketing services, marketers search business by reaching prospects across the Globe. Here are the Email lists we offer:
            </p>
            <div className="space-y-8">
              {[
                { t: "Technology User List", d: "Get in touch with the top technology users, and IT decision makers to promote your products with end-to-end technology email list." },
                { t: "Healthcare Email List", d: "Reach out to the Healthcare professionals, experts, and hospitals with our complete set of healthcare mailing list." },
                { t: "C-level Email List", d: "Get in contact with the chief officers of various companies from different departments, with a verified C-level mailing list." },
                { t: "B2B Email List", d: "Maximize your ROI with our customized B2B Email lists from the industry's most trusted database provider." },
                { t: "Industry Email List", d: "Target your audience across industries with 95% deliverability guarantee on all your multi-channel marketing campaigns." }
              ].map(s => (
                <div key={s.t} className="flex gap-4 items-start group">
                  <span className="material-symbols-outlined text-2xl text-primary mt-1 select-none">article</span>
                  <div>
                    <h4 className="font-headline-md text-base md:text-lg mb-1 group-hover:text-primary transition-colors">{s.t}</h4>
                    <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-8 md:p-10 border border-outline-variant/30 rounded-lg diffusion-shadow">
            <span className="font-label-mono text-label-mono text-secondary mb-2 block font-bold">CONTACT</span>
            <h3 className="font-display-lg text-2xl mb-8">Get a Free Quote</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
                <div className="space-y-2">
                  <label className="font-label-mono text-[10px] text-on-surface-variant">First Name *</label>
                  <input type="text" required className="w-full bg-background border border-outline-variant/40 p-4 rounded text-sm outline-none focus:border-primary text-on-surface" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-mono text-[10px] text-on-surface-variant">Last Name</label>
                  <input type="text" className="w-full bg-background border border-outline-variant/40 p-4 rounded text-sm outline-none focus:border-primary text-on-surface" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-mono text-[10px] text-on-surface-variant">Work Email *</label>
                <input type="email" required className="w-full bg-background border border-outline-variant/40 p-4 rounded text-sm outline-none focus:border-primary text-on-surface" />
              </div>
              <div className="space-y-2">
                <label className="font-label-mono text-[10px] text-on-surface-variant">Phone</label>
                <input type="tel" className="w-full bg-background border border-outline-variant/40 p-4 rounded text-sm outline-none focus:border-primary text-on-surface" />
              </div>
              <div className="space-y-2">
                <label className="font-label-mono text-[10px] text-on-surface-variant">Message *</label>
                <textarea required rows={4} className="w-full bg-background border border-outline-variant/40 p-4 rounded text-sm outline-none focus:border-primary text-on-surface resize-none"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] text-[#131b2e] py-4 font-label-mono text-label-mono font-bold hover:brightness-110 transition-all rounded shadow-lg">Submit Inquiry</button>
            </form>
          </div>
        </section>

        {/* 3. Sales Team & Offices */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-secondary mb-4 block">GET IN TOUCH</span>
            <h2 className="font-display-lg text-3xl md:text-4xl text-primary uppercase" data-aos="fade-up">OUR SALES TEAM IS READY TO <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">HELP YOU</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {[
              {
                i: "location_on",
                t: "Head office",
                d: "E Data Grid Solutions Inc.\n848 N. Rainbow Blvd, Unit #3119 Las Vegas, NV,89107"
              },
              {
                i: "corporate_fare",
                t: "Corporate offices",
                d: "E-Data Grid Solutions. LLC.\n#347, 5th Ave, New York, NY 10016"
              },
              {
                i: "mail",
                t: "Contact Details",
                d: "Phone: +1 212-372-7547\nEmail: info@edatagrid.com"
              }
            ].map(c => (
              <div key={c.t} className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-lg diffusion-shadow text-center flex flex-col items-center group hover:scale-[1.02] transition-transform duration-300">
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary transition-colors duration-300">{c.i}</span>
                </div>
                <h3 className="font-headline-md text-lg mb-4 text-on-surface">{c.t}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Partner Logos */}
        <ClientMarquee />

        {/* 5. FAQs */}
        <section className="max-w-[800px] mx-auto px-5 md:px-10 py-24">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-secondary mb-4 block">QUESTIONS</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">Frequently Asked <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Questions</span></h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
