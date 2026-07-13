"use client";

import Link from "next/link";

const educationCategories = [
  "Elementary and Secondary Schools",
  "Colleges, Universities",
  "Junior Colleges",
  "Technical & Trade Schools",
  "Educational Support Services",
  "Child Day Care Services",
  "Business & Secretarial Schools",
  "Computer Training Schools",
  "Professional & Management Development",
  "Fine Arts Schools",
  "Sports & Recreation Instruction",
  "Language Schools",
  "Educational Testing Services"
];

const jobTitles = [
  "Administrators",
  "Admissions Directors",
  "Board of Education Members",
  "Chancellors / Vice Chancellors",
  "Deans",
  "Directors",
  "Principals",
  "Professors",
  "Superintendents",
  "Teachers",
  "Guidance Counselors",
  "Librarians",
  "Athletic Directors",
  "Financial Aid Directors",
  "Department Heads"
];

const otherIndustries = [
  { title: "Mining Industry List", desc: "Reach out to professionals in mining, oil, gas, and extraction services globally." },
  { title: "Manufacturing Industry List", desc: "Target plant managers, supply chain directors, and industrial distributors." },
  { title: "Transportation Industry List", desc: "Connect with executives in logistics, freight, and public transit services." },
  { title: "IT Industry Email Lists", desc: "Reach software developers, IT directors, and CTOs in leading tech firms." },
  { title: "Asia Banking & Financial Industry Lists", desc: "Connect with investment bankers, CFOs, and financial planners across Asia." },
  { title: "Asia Construction Industry List", desc: "Target top contractors, civil engineers, and architects in the Asian market." },
  { title: "CEO Email List", desc: "Direct access to Chief Executive Officers from top global organizations." },
  { title: "CXO Business Email List", desc: "Connect with C-level executives including CMOs, COOs, and CIOs." }
];

export default function EducationIndustry() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e]/10 rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">EDUCATION INDUSTRY</span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Education Industry <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Email Lists</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Schools, Colleges, Universities & Educational Services. Connect with millions of verified top-level decision makers from the education sector globally.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Education <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized education contact lists? Click below to reach out to our data experts.
                </p>
                <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 Introduction Section */}
        <section className="bg-background py-20 border-b border-outline-variant/30">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center space-y-6">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Why Choose Our Education Industry Lists?</h2>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-4">
              <p>Reach over 2.5 million verified education contacts with exact details to expand your B2B marketing reach globally.</p>
              <p>Highly accurate, reliable, and continuously updated to maintain a 95% deliverability guarantee.</p>
              <p>Segmented by job titles, specialization, geographic location, and institutional budgets for precise targeting.</p>
            </div>
          </div>
        </section>

        {/* 3. Categories & Job Titles */}
        <section className="bg-surface-container-lowest py-16 border-t border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Customize Your Education Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span> By:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-left mb-16">
              {educationCategories.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-500 text-sm">article</span>
                  <span className="text-sm text-on-surface-variant">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Educational Mailing Lists By Job Titles:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-left">
              {jobTitles.map((item, i) => (
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
              {otherIndustries.slice(0, 9).map((ind, i) => (
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
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16" data-aos="fade-up" data-aos-delay="100">
              <div>
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold mb-8 text-primary">Refine Your List</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
                  {[
                    "Job Title",
                    "SIC / NAICS / Employee Size",
                    "Area of Operations",
                    "Annual Revenue",
                    "Zip Codes",
                    "Industry Size",
                    "SIC/NAICS Codes"
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
                    "High quality email addresses",
                    "Better Targeting",
                    "Regular Updates",
                    "Verified and Curated",
                    "Tele-Verified Database",
                    "High Deliverability",
                    "CAN-Spam passed Email Database"
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
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-center">
              <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary mb-6" data-aos="fade-up">Education Industry List By E-Data Grid</h2>
              <p className="text-lg md:text-xl text-on-surface-variant">
                The Education Industry Email List from E-Data Grid is an optimal, highly-responsive database meticulously gathered and verified to ensure your message reaches top-tier decision-makers. Whether you are looking to connect with K-12 principals, university deans, or specialized school directors, our lists provide the comprehensive coverage you need.
              </p>
              <p className="text-lg md:text-xl text-on-surface-variant">
                We continually update and cleanse our records to guarantee high deliverability, enabling you to build impactful marketing campaigns. Expand your global reach and connect with key figures in educational institutions to effectively promote your services, software, and products.
              </p>
              <p className="text-lg md:text-xl text-on-surface-variant">
                Our Education Industry Email List includes the most comprehensive and verified information available, helping you execute your marketing strategies efficiently. Ensure your sales pipeline is always full with high-quality leads generated through targeted outreach.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
