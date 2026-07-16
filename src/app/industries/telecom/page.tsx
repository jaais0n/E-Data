"use client";

import Link from "next/link";

const categories = [
  "Telecom Industry Executives",
  "Telecommunications Equipment Manufacturing",
  "Wired Telecommunications Carriers",
  "Cable Networking Service Providers",
  "Paging & Cellular Telecommunication Services",
  "Telemarketers",
  "Radio and Television Broadcasting",
  "Satellite Telecommunications",
  "Telecom Professionals",
  "Wireless Telecommunications Carriers"
];

const otherIndustries = [
  { title: "Mining Industry List", desc: "Reach out to professionals in mining, oil, gas, and extraction services globally." },
  { title: "Manufacturing Industry List", desc: "Target plant managers, supply chain directors, and industrial distributors." },
  { title: "Transportation Industry List", desc: "Connect with executives in logistics, freight, and public transit services." },
  { title: "IT Industry Email Lists", desc: "Reach software developers, IT directors, and CTOs in leading tech firms." },
  { title: "CEO Email List", desc: "Direct access to Chief Executive Officers from top global organizations." },
  { title: "CFO Business Email List", desc: "Connect with Chief Financial Officers and financial decision makers globally." },
  { title: "Used Car Dealers List", desc: "Reach out to used car dealers and executives working in this sector." },
  { title: "Asia Banking & Financial Industry Lists", desc: "Connect with investment bankers, CFOs, and financial planners across Asia." },
  { title: "Asia Construction Industry List", desc: "Target top contractors, civil engineers, and architects in the Asian market." }
];

export default function TelecommunicationIndustry() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative bg-[#0b0f19] text-on-primary pt-32 md:pt-48 pb-16 md:pb-28 overflow-hidden border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e]/10 rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">TELECOMMUNICATION</span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Tele-Communication <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Industry Email Lists</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Connect with top telecommunication industry executives, professionals, and decision makers worldwide with our highly responsive and verified B2B email lists.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">cell_tower</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Telecommunication List</h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized telecommunication contact lists? Click below to reach out to our data experts.
                </p>
                <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 Introduction Section */}
        <section className="bg-background py-10 md:py-20 border-b border-outline-variant/30">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center space-y-6">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Tele-Communication Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">List</span></h2>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-4">
              <p>Our Telecommunication Industry List is a highly responsive and verified B2B mailing list that helps you connect with top telecommunication industry executives, decision-makers, and professionals worldwide.</p>
              <p>We offer the most accurate and up-to-date telecommunication industry mailing list to help you reach out to your targeted audience and launch your marketing campaigns successfully.</p>
              <p>Our telecommunication industry email list is highly responsive and verified. It is built to help you run successful B2B multi-channel marketing campaigns and gain high business outcomes.</p>
              <p>The high-quality telecommunication industry mailing list gives you the power to reach out to the best prospects and generate high-quality leads for your business.</p>
            </div>
          </div>
        </section>

        {/* 3. Categories List */}
        <section className="bg-surface-container-lowest py-16 border-t border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Modify your Communication Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email lists</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left">
              {categories.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-500 text-sm">article</span>
                  <span className="text-sm text-on-surface-variant">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Other Popular Industries */}
        <section className="py-24 bg-background border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-12 text-primary" data-aos="fade-up">
              Our Other Popular <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Business Email Lists</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
              {otherIndustries.map((ind, i) => (
                <div key={i} className="block group bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 text-center">
                  <h3 className="font-headline-md text-xl mb-4 text-primary font-bold">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm mx-auto">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Dashboard: Refine Your List & Data Specialty */}
        <section className="py-10 md:py-20 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16" data-aos="fade-up" data-aos-delay="100">
              <div>
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold mb-8 text-primary">Refine Your List</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
                  {[
                    "Job Title",
                    "Revenue Size",
                    "Company Name",
                    "Email Address",
                    "State & City",
                    "Zip Code",
                    "Phone Numbers",
                    "Web Address"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#8dc63f] text-xl">article</span>
                      <span className="text-on-surface-variant text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold mb-8 text-primary">Our Data Specialty</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
                  {[
                    "Highly Responsive Data",
                    "Opt-in Contacts",
                    "Verified Usage",
                    "Updated Database",
                    "100% Guaranteed",
                    "24/7 Support",
                    "No Data Duplication or Decays"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#8dc63f] text-xl">article</span>
                      <span className="text-on-surface-variant text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Long Text */}
        <section className="py-16 bg-background border-b border-outline-variant/30 text-center">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10">
            <div className="space-y-8 text-on-surface-variant leading-relaxed text-center">
              <div>
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mb-6">Get Quality And Updated Leads From Communication Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email Lists</span></h3>
                <p>
                  Telecommunication Industry Email lists are highly accurate and verified B2B contact database that helps you reach out to your targeted audience and run your B2B marketing campaigns successfully. With our telecommunication industry mailing list, you can connect with top-level executives, decision makers, and professionals from the telecommunication sector worldwide. We help you connect with the best prospects and generate high-quality leads for your business. The telecommunication industry contact list helps you to build better business relations and boost your sales and ROI.
                </p>
              </div>

              <div>
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mb-6">What Makes Gilbert Data Divergent From Others?</h3>
                <p>
                  Gilbert Data offers the most accurate and up-to-date telecommunication industry mailing list to help you reach out to your targeted audience successfully. We have a highly experienced team of data experts who gather the contact details from authentic sources. We verify and update the database frequently to deliver the most reliable telecommunication industry mailing list. We help you customize the telecommunication industry email list based on your specific business requirements and launch targeted B2B marketing campaigns successfully.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
