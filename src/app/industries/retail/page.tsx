"use client";

import Link from "next/link";

const retailCategories = [
  "Retail Trade Industry Executives List",
  "Selling Directly To Retailers Email List",
  "Sales and Retail Managers List",
  "Store Managers, Buyers & Merchandisers Email List",
  "Convenience Stores List",
  "Health / Personal Care Stores List",
  "Home Furnishing Stores List",
  "Apparel and Accessory Stores List",
  "General Merchandise Stores List",
  "Miscellaneous Retail Stores List",
  "Building Materials, Hardware List",
  "Food Stores List",
  "Auto Dealers / Gas Stations List",
  "E-commerce Stores List",
  "Supermarket Stores List",
  "Discount Stores Email List",
  "Furniture Stores Email List",
  "Hardware Stores Email List",
  "Optical Goods Stores List",
  "Sporting Goods Stores Email List",
  "Musical Instrument Stores List",
  "Book Stores Email List",
  "Jewelry Stores Email List"
];

const otherIndustries = [
  { title: "Mining Industry List", desc: "Connect with key professionals and decision-makers in the global mining sector." },
  { title: "Manufacturing Industry List", desc: "Reach out to top executives and managers in the manufacturing industry." },
  { title: "Transportation Industry List", desc: "Target key contacts and logistics experts within the transportation field." },
  { title: "IT Industry Email Lists", desc: "Connect with IT professionals, CIOs, and tech decision-makers globally." },
  { title: "CEO Email List", desc: "Reach Chief Executive Officers across various industries and regions." },
  { title: "CFO Business Email List", desc: "Target Chief Financial Officers and finance leaders worldwide." },
  { title: "CIO Business Email List", desc: "Connect with Chief Information Officers leading technology strategies." },
  { title: "Healthcare Industry List", desc: "Reach medical professionals, hospital administrators, and healthcare executives." },
  { title: "Construction Industry List", desc: "Target contractors, builders, and construction project managers." }
];

export default function RetailIndustry() {
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
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">RETAIL INDUSTRY</span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Retail Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span> | <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Retail Business Email Lists</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Connect with top decision-makers, store managers, and retail executives globally using our highly responsive and verified B2B email lists.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Retail <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized retail contact lists? Click below to reach out to our data experts.
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
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Retail Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h2>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-4">
              <p>Connect with top decision makers with the exact details to run effective marketing campaigns using our verified B2B retail list.</p>
              <p>Our retail professionals list includes high-quality, opt-in contacts who are genuinely interested in products and services like yours.</p>
              <p>The data is thoroughly verified to remove all inaccuracies, providing you with a responsive retail database that boosts engagement and conversion rates.</p>
              <p>Achieve higher ROI and expand your business footprint with our comprehensive retail industry mailing lists.</p>
            </div>
          </div>
        </section>

        {/* 3. Categories & Job Titles */}
        <section className="bg-surface-container-lowest py-16 border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Customize Retail Trade Industry Email List <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">By Category</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-left">
              {retailCategories.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-500 text-sm">article</span>
                  <span className="text-sm text-on-surface-variant font-medium">{item}</span>
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

        {/* 7. Retail Industry List Text */}
        <section className="py-16 bg-background border-b border-outline-variant/30 text-center">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10">
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-center">
              <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary mb-6" data-aos="fade-up">Get Quality Leads From <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Retail Industry mailing List</span></h2>
              <p>
                The retail industry is highly competitive, and to stay ahead, you need a targeted approach. Our meticulously compiled Retail Industry Email List provides you with direct access to Store Managers, Retail Executives, Buyers, and Merchandisers globally. By utilizing our highly responsive data, you can build meaningful relationships with key decision-makers who have the authority to purchase your products or services.
              </p>
              <p>
                At E-Data, we understand the specific needs of marketers. Our database is verified and continuously updated to ensure that your message reaches the right inbox at the right time. Whether you are promoting a point-of-sale software, merchandising services, or retail fixtures, our lists are tailored to match your specific campaign requirements.
              </p>
              <p>
                Expand your business reach and boost your sales pipeline with our high-quality, verified data. Our targeted lists will help you maximize your return on investment and achieve your business objectives with ease.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
