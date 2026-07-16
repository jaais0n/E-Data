"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const marketingLists = [
  { t: "Technology Email List", i: "terminal", cat: "Industry" },
  { t: "Healthcare Email List", i: "medical_services", cat: "Healthcare & Science" },
  { t: "C-Level Email List", i: "person", cat: "Executive & Org" },
  { t: "Agriculture Email List", i: "grass", cat: "Industry" },
  { t: "Education Email List", i: "school", cat: "Industry" },
  { t: "Hospitality Email List", i: "hotel", cat: "Industry" },
  { t: "Real Estate Email List", i: "apartment", cat: "Industry" },
  { t: "Mining Email List", i: "construction", cat: "Industry" },
  { t: "Construction Email List", i: "build", cat: "Industry" },
  { t: "Energy & Utilities Email List", i: "bolt", cat: "Industry" },
  { t: "Finance & Banking Email List", i: "payments", cat: "Industry" },
  { t: "Insurance Email List", i: "shield", cat: "Industry" },
  { t: "Retail & Wholesale Email List", i: "storefront", cat: "Industry" },
  { t: "Transportation Email List", i: "local_shipping", cat: "Industry" },
  { t: "Legal Services Email List", i: "gavel", cat: "Industry" },
  { t: "Manufacturing Email List", i: "precision_manufacturing", cat: "Industry" },
  { t: "Media & Entertainment Email List", i: "movie", cat: "Industry" },
  { t: "Non-Profit Organizations List", i: "volunteer_activism", cat: "Executive & Org" },
  { t: "Telecommunications Email List", i: "settings_phone", cat: "Industry" },
  { t: "Automotive Industry Email List", i: "directions_car", cat: "Industry" },
  { t: "Government Agencies List", i: "account_balance", cat: "Executive & Org" },
  { t: "Publishing Industry Email List", i: "menu_book", cat: "Industry" },
  { t: "Pharmaceutical Email List", i: "science", cat: "Healthcare & Science" },
  { t: "Biotechnology Email List", i: "biotech", cat: "Healthcare & Science" },
  { t: "Chemical Industry Email List", i: "science", cat: "Industry" },
  { t: "Food & Beverage Email List", i: "restaurant", cat: "Industry" },
  { t: "Travel & Tourism Email List", i: "flight", cat: "Industry" },
  { t: "Aerospace & Defense Email List", i: "rocket_launch", cat: "Industry" }
];

const popularLists = [
  { t: "Canadian Business List", d: "Reach companies and key decision makers across Canadian territories with validated contacts.", icon: "map", badge: "Trending" },
  { t: "Malaysia Business List", d: "Target growing corporate segments and executives in Malaysia's tech and finance sectors.", icon: "language" },
  { t: "Web Address Append", d: "Enrich your database by matching missing corporate domain URLs with active profiles.", icon: "link", badge: "Popular" },
  { t: "Singapore Business List", d: "Connect with high-level executives in Asia's financial hub with verified direct contacts.", icon: "domain" },
  { t: "European Business List", d: "GDPR-compliant lists covering major European Union markets and corporate entities.", icon: "euro", badge: "GDPR Compliant" },
  { t: "US Business List", d: "Firmographic details, emails, and direct-dials covering over 30M business profiles in the US.", icon: "flag", badge: "Hot" },
  { t: "UK Business Data", d: "Connect directly with decision makers across the United Kingdom's diverse industries.", icon: "location_city" },
  { t: "Australia Business Lists", d: "High-deliverability lists targeting verified Australian corporations and local leads.", icon: "partner_exchange" },
  { t: "Asia Business Lists", d: "Broad corporate coverage targeting key growth markets across the Asian continent.", icon: "public" }
];

export default function B2bMarketingData() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Industry", "Healthcare & Science", "Executive & Org"];

  const filteredLists = useMemo(() => {
    return marketingLists.filter(list => {
      const matchesSearch = list.t.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCat === "All" || list.cat === selectedCat;
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCat]);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* 1. Enhanced Hero Banner with Grid Overlay and Gradient Glows */}
      <section className="relative bg-[#0b0f19] text-on-primary pt-32 md:pt-48 pb-16 md:pb-28 overflow-hidden border-b border-outline-variant/10">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e] via-transparent to-transparent pointer-events-none" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">B2B DATASETS</span>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
              B2B Email List &amp; <br />
              <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">B2B Contact Database</span>
            </h1>
            <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed">
              Acquire high-accuracy target emails and validated contact profiles to launch hyper-targeted outbound pipelines.
            </p>
          </div>

          {/* Right Contact Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined text-3xl">contact_support</span>
              </div>
              <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
              <h3 className="font-display-lg text-2xl mb-4 text-white">B2B <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Image */}
            <div className="relative justify-self-center lg:justify-self-start">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-[#8dc63f] opacity-20 blur-2xl rounded-full"></div>
              <img loading="lazy" decoding="async" 
                alt="B2B Email List Solutions" 
                className="w-full max-w-[500px] h-auto object-cover rounded-2xl diffusion-shadow relative z-10"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              />
            </div>
            {/* Right Text */}
            <div className="space-y-6">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">CORE INTELLIGENCE</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
                B2B Email List <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Solutions</span>
              </h2>
              <div className="space-y-4 text-on-surface-variant text-body-lg leading-relaxed">
                <p>
                  Having the exact B2B Email List details can double the profit. If you are struggling with a decayed or incomplete database, our verified intelligence gives you clean contact routes straight to key stakeholders.
                </p>
                <p>
                  Marketing is all about reaching the right customer with the right message at the right time. Our data products are built with high firmographic precision to align with your vertical targeting strategy.
                </p>
                <p>
                  Reaching out to decision-makers directly bypasses gatekeepers. We provide verified emails, direct-dial phone numbers, and job functions to streamline your sales team's outreach cycle.
                </p>
                <p>
                  Our customized databases are updated every 90 days. We deploy human validation combined with advanced AI matching to maintain high deliverability standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Interactive Choose B2B Email Marketing Lists */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-10 md:mb-16 space-y-4" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">AVAILABLE DATASETS</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Choose B2B Email <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Marketing Lists</span>
            </h2>
            <p className="text-sm text-on-surface-variant max-w-md mx-auto">Browse our high-deliverability directory lists grouped for specific sectors and target roles.</p>
          </div>

          {/* Interactive Search & Filter Controls */}
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
                placeholder="Search datasets..."
                className="w-full bg-surface-container-lowest border border-outline-variant/30 pl-11 pr-4 py-3 rounded-xl text-sm outline-none focus:border-[#131b2e] focus:ring-2 focus:ring-[#131b2e] transition-all text-on-surface"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant/40 hover:text-on-surface">
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Grid Results */}
          {filteredLists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300">
              {filteredLists.map(list => (
                <div 
                  key={list.t} 
                  className="flex items-center gap-4 p-5 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl hover:bg-white hover:border-[#131b2e] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-[#131b2e]/10 rounded-xl flex items-center justify-center text-[#131b2e] group-hover:bg-[#131b2e] group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-lg">{list.i}</span>
                  </div>
                  <span className="text-sm font-bold text-on-surface group-hover:text-[#131b2e] transition-colors">{list.t}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 md:py-12 bg-surface-container-low/20 rounded-2xl border border-dashed border-outline-variant/40">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-4">folder_open</span>
              <p className="text-on-surface-variant text-sm font-semibold">No datasets found matching your criteria.</p>
              <button onClick={() => { setSearch(""); setSelectedCat("All"); }} className="mt-4 text-xs text-[#131b2e] font-bold underline">Clear Filters</button>
            </div>
          )}
        </section>

        {/* 5. Popular Lists Grid with Hover Reveal and Custom Badges */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">GLOBAL COVERAGE</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Our Other Popular <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Business Email Lists</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {popularLists.map(l => (
              <div key={l.t} className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#131b2e] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
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
                <Link href="/contact" className="font-label-mono text-[10px] text-[#131b2e] border-b border-[#131b2e] w-max pb-0.5 mt-8 cursor-pointer hover:border-b-2 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  Contact Us &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Dashboard Interface for Refine & Speciality */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
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
                  <span className="material-symbols-outlined text-[#131b2e] text-xl font-bold font-display">verified</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Why Grow Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">ROI AMPLIFIED</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-8 leading-tight" data-aos="fade-up">
                How Gilbert Data Help You Grow Your Business With <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">B2B Email List?</span>
              </h2>
              <div className="text-on-surface-variant text-body-lg space-y-6 leading-relaxed">
                <p>
                  GilbertData provides the foundational intelligence for high-performance enterprise outreach. We compile targeted marketing contact fields, verifying all records through a triple-layer validation process before delivery.
                </p>
                <p>
                  Our customizable databases allow you to narrow down segments based on industry, revenue, and geography, so you target high-value clients who are actually aligned with your solutions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 diffusion-shadow overflow-hidden rounded-3xl">
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grow Business" className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#131b2e] rounded-full -z-0 blur-xl" />
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
