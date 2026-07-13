"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const popularLists = [
  { t: "Mining Industry List", d: "Target key operators, decision makers, and engineers across global mining and extraction operations.", icon: "construction", cat: "Industrial & Construction", badge: "Specialty" },
  { t: "Manufacturing Industry List", d: "Connect with manufacturing plant managers, operations executives, and corporate buyers.", icon: "precision_manufacturing", cat: "Industrial & Construction" },
  { t: "Transportation Industry List", d: "Reach logistics directors, fleet managers, and supply chain executives globally.", icon: "local_shipping", cat: "Industrial & Construction" },
  { t: "IT Industry Email Lists", d: "Connect with tech leaders, CIOs, CTOs, and IT decision makers across various industry segments.", icon: "terminal", cat: "Tech & Executive", badge: "Trending" },
  { t: "Asia Banking & Financial Industry Data", d: "Target financial officers, investment analysts, and banking decision makers in the Asian market.", icon: "payments", cat: "Finance & Banking", badge: "High Match" },
  { t: "Asia Construction Industry List", d: "Connect with project managers, builders, and construction executives across developing Asian regions.", icon: "build", cat: "Industrial & Construction" },
  { t: "Healthcare Industry Lists", d: "Reach out to medical professionals, healthcare administrators, and hospital networks.", icon: "medical_services", cat: "Healthcare", badge: "Verified" },
  { t: "CXO Email List", d: "Connect directly with Chief Executive Officers, CFOs, COOs, and top-tier corporate leaders.", icon: "person", cat: "Tech & Executive", badge: "Executive" },
  { t: "CFO Business Email List", d: "Target chief financial officers and financial directors for high-ticket financial services.", icon: "account_balance", cat: "Tech & Executive" }
];

export default function CustomDataPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Industrial & Construction", "Tech & Executive", "Finance & Banking", "Healthcare"];

  const filteredLists = useMemo(() => {
    return popularLists.filter(list => {
      const matchesSearch = list.t.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCat === "All" || list.cat === selectedCat;
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCat]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* 1. Enhanced Hero Banner with Grid Overlay and Gradient Glows */}
      <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden border-b border-outline-variant/10">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e] via-transparent to-transparent pointer-events-none" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">CUSTOM ENGINEERING</span>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
              Custom Email List <br />
              <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">Building Services</span>
            </h1>
            <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed">
              Tailored database engineering to source, verify, and validate contact lists built specifically to your business criteria.
            </p>
          </div>

          {/* Right Contact Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined text-3xl">contact_support</span>
              </div>
              <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
              <h3 className="font-display-lg text-2xl mb-4 text-white">Custom <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                Ready to acquire your customized B2B contact lists? Click below to reach out to our sales team today.
              </p>
              <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="py-24">
        {/* 2. Image and Text Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 pb-24 border-b border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative justify-self-center lg:justify-self-start">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-[#8dc63f] opacity-20 blur-2xl rounded-full"></div>
              <img 
                alt="Custom Email List Solutions" 
                className="w-full max-w-[500px] h-auto object-cover rounded-2xl diffusion-shadow relative z-10"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              />
            </div>
            {/* Right Text */}
            <div className="space-y-6">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">DATABASE ON-DEMAND</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
                Custom Email <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">List</span>
              </h2>
              <div className="space-y-4 text-on-surface-variant text-body-lg leading-relaxed">
                <p>
                  Having the accurate custom email list details can double the profit. If you are struggling with a decayed or incomplete database, our verified intelligence gives you clean contact routes straight to key stakeholders.
                </p>
                <p>
                  Marketing is all about reaching the right customer with the right message at the right time. Our data products are built with high firmographic precision to align with your vertical targeting strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Methodology section with visually attractive glass card */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30 text-center">
          <div className="max-w-4xl mx-auto space-y-8 bg-surface-container-low/40 p-12 rounded-3xl border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8dc63f]/5 rounded-full blur-2xl pointer-events-none" />
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">METHODOLOGY</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              What is custom list <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">building services?</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Custom list building is the process of generating highly targeted leads based on custom criteria such as geography, industry, job titles, technologies, and other specific parameters. It allows companies to run tailored marketing campaigns with high accuracy.
            </p>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              At E-Data Grid, we specialize in building custom databases that match your precise target audience parameters, ensuring maximum outreach conversion rates and campaign performance.
            </p>
          </div>
        </section>

        {/* 4. How we can help in Custom list building - Visual Cards Dashboard */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">CAPABILITIES</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              How we can help in <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Custom list building</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
            {/* B2B Email Lists */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-md hover:border-[#131b2e] hover:shadow-xl transition-all duration-300">
              <h3 className="font-headline-md text-lg text-primary mb-6 border-b border-outline-variant/20 pb-3 font-bold">B2B <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email Lists</span></h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                {["Geography", "Industry", "Revenue Size", "Employee Size", "Tech Stack", "Job Titles", "Web Activity"].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-[#131b2e] transition-colors py-1 cursor-pointer group">
                    <span className="text-[#131b2e] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* B2C Email Lists */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-md hover:border-[#131b2e] hover:shadow-xl transition-all duration-300">
              <h3 className="font-headline-md text-lg text-primary mb-6 border-b border-outline-variant/20 pb-3 font-bold">B2C <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email Lists</span></h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                {["Demographics", "Income Level", "Interest & Hobbies", "Location", "Buying Behavior", "Household Data"].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-[#131b2e] transition-colors py-1 cursor-pointer group">
                    <span className="text-[#131b2e] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Append Process */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-md hover:border-[#131b2e]/20 hover:shadow-xl transition-all duration-300">
              <h3 className="font-headline-md text-lg text-primary mb-6 border-b border-outline-variant/20 pb-3 font-bold">Append Process</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                {["Phone appending", "Email appending", "Social profile appending", "Firmographic appending"].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-[#131b2e] transition-colors py-1 cursor-pointer group">
                    <span className="text-[#8dc63f] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* QA Process */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-md hover:border-[#131b2e]/20 hover:shadow-xl transition-all duration-300">
              <h3 className="font-headline-md text-lg text-primary mb-6 border-b border-outline-variant/20 pb-3 font-bold">QA Process</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                {["Automation check", "Manual review", "Domain validation", "Direct-dial validation"].map(item => (
                  <li key={item} className="flex items-center gap-2 hover:text-[#131b2e] transition-colors py-1 cursor-pointer group">
                    <span className="text-[#8dc63f] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Popular Industry Lists with Search and Category Filtering */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">SECTOR LISTS</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Our Other Popular <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Industry Email Lists</span>
            </h2>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/20">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2.5 rounded-full font-label-mono text-xs font-bold transition-all ${
                    selectedCat === cat
                      ? "bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] text-[#131b2e] shadow-md scale-105"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-on-surface-variant/60">
                <span className="material-symbols-outlined text-xl">search</span>
              </span>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search industries..."
                className="w-full bg-surface-container-lowest border border-outline-variant/30 pl-11 pr-4 py-3 rounded-xl text-sm outline-none focus:border-[#131b2e] focus:ring-2 focus:ring-[#131b2e] transition-all text-on-surface"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant/40 hover:text-on-surface">
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Grid display with custom design */}
          {filteredLists.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
              {filteredLists.map(l => (
                <div key={l.t} className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-md hover:shadow-2xl hover:border-[#131b2e] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  {l.badge && (
                    <span className="absolute top-4 right-4 bg-[#131b2e]/10 text-[#131b2e] font-label-mono text-[9px] font-bold px-2.5 py-1 rounded-full border border-[#131b2e]/20">
                      {l.badge}
                    </span>
                  )}
                  <div>
                    <div className="w-12 h-12 bg-[#131b2e]/10 rounded-xl flex items-center justify-center text-[#131b2e] mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-2xl">{l.icon}</span>
                    </div>
                    <h3 className="font-headline-md text-lg mb-4 text-primary font-bold">{l.t}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{l.d}</p>
                  </div>
                  <Link href="/contact" className="font-label-mono text-[10px] text-[#131b2e] border-b border-[#131b2e] w-max pb-0.5 mt-8 cursor-pointer hover:border-b-2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    Contact Us &rarr;
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-surface-container-low/20 rounded-2xl border border-dashed border-outline-variant/40">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-4">folder_open</span>
              <p className="text-on-surface-variant text-sm font-semibold">No industries found matching your criteria.</p>
              <button onClick={() => { setSearch(""); setSelectedCat("All"); }} className="mt-4 text-xs text-[#131b2e] font-bold underline">Clear Filters</button>
            </div>
          )}
        </section>

        {/* 7. Refine & Speciality Visual Dashboards */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Refine Your List */}
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e] transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#131b2e]/10 flex items-center justify-center text-[#131b2e]">
                <span className="material-symbols-outlined">filter_list</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">Refine Your List</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {["Industry", "Company Revenue", "Job Roles", "Geography", "Zip code", "Phone Number", "Email Address"].map((item, idx) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 hover:text-[#131b2e] transition-colors group">
                  <span className="font-mono text-xs text-on-surface-variant/40 group-hover:text-[#131b2e]/60">0{idx + 1}</span>
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Data Speciality */}
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e] transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#8dc63f]/10 flex items-center justify-center text-[#8dc63f]">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">Our Data Speciality</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {[
                "High email deliverability", "95% Campaign accuracy", "Authenticity", 
                "Clean & Validated", "Multi-channel verification", "CCPA compliance", 
                "GDPR compliance", "CAN-SPAM compliant"
              ].map((item, idx) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 hover:text-primary transition-colors group">
                  <span className="font-mono text-xs text-on-surface-variant/40 group-hover:text-[#131b2e]/60">0{idx + 1}</span>
                  <span className="material-symbols-outlined text-[#131b2e] text-xl font-bold">verified</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Why Grow Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">SCALE & PROSPER</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-8 leading-tight" data-aos="fade-up">
                How E-Data Grid Help Your Business Grow With <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Custom Email List?</span>
              </h2>
              <div className="text-on-surface-variant text-body-lg space-y-6 leading-relaxed">
                <p>
                  E-Data Grid provides the foundational intelligence for high-performance enterprise outreach. We compile targeted marketing contact fields, verifying all records through a triple-layer validation process before delivery.
                </p>
                <p>
                  Our customizable databases allow you to narrow down segments based on industry, revenue, and geography, so you target high-value clients who are actually aligned with your solutions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 diffusion-shadow overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grow Business Custom" className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#131b2e] rounded-full -z-0 blur-xl" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
