"use client";

import Link from "next/link";

const insuranceCategories = [
  "Property & Casualty Insurance List",
  "Social Health Insurance List",
  "Health Insurance Executives List",
  "Business Property Insurance Email List",
  "Auto Insurance Agents Email List",
  "Home Insurance Agents List",
  "Life Insurance Agents Email List",
  "Fire Insurance Agents List",
  "General Insurance Agents Email List",
  "Liability Insurance Agents Email List",
  "Pet Insurance Agents Email List",
  "Group Health Insurance Agents List",
  "Flood Insurance Agents Email List",
  "Marine Insurance Agents List",
  "Crop Insurance Agents List",
  "Credit Insurance Agents Email List",
  "Renters Insurance Agents Email List",
  "Travel Insurance Agents Email List",
  "Commercial Insurance Email List",
  "Errors & Omissions Insurance Email List",
  "Professional Liability Insurance Agents List",
  "Workers Compensation Insurance Email List",
  "Surety Bonds Agents Email List",
  "Cyber Insurance Agents Email List",
  "Inland Marine Insurance List",
  "Personal Articles Floater Insurance List",
  "Fine Arts Insurance Agents Email List",
  "Valuable Papers Insurance Email List",
  "Aviation Insurance Agents Email List",
  "Yacht Insurance Email List",
  "RV Insurance Agents List",
  "Motorcycle Insurance Agents List",
  "ATV Insurance Agents Email List",
  "Snowmobile Insurance Email List",
  "Personal Watercraft Insurance List",
  "Antique Auto Insurance Email List",
  "Classic Car Insurance Email List",
  "Umbrella Insurance Agents Email List",
  "Commercial Umbrella Insurance Email List",
  "Malpractice Insurance Agents List",
  "Product Liability Insurance List",
  "Farm Insurance Agents List",
  "Specialty Insurance Agents List",
  "Business Interruption Insurance List",
  "Earthquake Insurance Agents Email List"
];

const insuranceRegions = [
  "Healthcare Insurance Agents Email List",
  "Property Insurance Agents Email List",
  "Casualty Insurance Agents Email List",
  "Medicare Supplement Email List",
  "Long Term Care Insurance Email List",
  "Disability Insurance Agents Email List"
];

const otherIndustries = [
  { title: "Mining Industry List", desc: "Connect with key professionals and decision-makers in the global mining sector." },
  { title: "Manufacturing Industry List", desc: "Reach out to top executives and managers in the manufacturing industry." },
  { title: "Transportation Industry List", desc: "Target key contacts and logistics experts within the transportation field." },
  { title: "IT Industry Email Lists", desc: "Connect with IT professionals, CIOs, and tech decision-makers globally." },
  { title: "CEO Email List", desc: "Reach Chief Executive Officers across various industries and regions." },
  { title: "CFO Business Email List", desc: "Target Chief Financial Officers and finance leaders worldwide." },
  { title: "Used Car Dealers List", desc: "Connect with certified used car dealerships and automotive managers." },
  { title: "Asia Banking & Financial Industry Lists", desc: "Target top financial institutions, banks, and investment firms in Asia." },
  { title: "Asia Construction Industry List", desc: "Reach contractors, builders, and construction project managers across Asia." }
];

export default function InsuranceIndustry() {
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
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">INSURANCE INDUSTRY</span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Insurance Industry <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Email Lists</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Connect with top decision-makers, insurance agents, brokers, and executives globally using our highly responsive and verified B2B email lists.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Insurance <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized insurance contact lists? Click below to reach out to our data experts.
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
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Insurance Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h2>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-4">
              <p>Reach insurance industry professionals with the complete and accurate contact information to boost marketing ROI.</p>
              <p>Connect with thousands of policyholders, key managers, and top executives in the insurance sector using our highly responsive mailing list.</p>
              <p>Enhance your brand visibility and engage with a responsive audience through our customizable insurance industry email addresses.</p>
              <p>E-Data Grid offers a comprehensive and segmented database of the top insurance industry professionals that ensures your sales pitch reaches the right inbox for higher conversion rates and sales revenue.</p>
            </div>
          </div>
        </section>

        {/* 3. Categories & Regions */}
        <section className="bg-surface-container-lowest py-16 border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            
            <div className="mb-20">
              <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Insurance Industry Email Lists <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">By Category:</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-left">
                {insuranceCategories.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-sm">article</span>
                    <span className="text-sm text-on-surface-variant font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Insurance Industry Email List <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Based On Region</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left">
                {insuranceRegions.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-sm">article</span>
                    <span className="text-sm text-on-surface-variant font-medium">{item}</span>
                  </div>
                ))}
              </div>
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

        {/* 7. Insurance Industry List Text */}
        <section className="py-16 bg-background border-b border-outline-variant/30 text-center">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10">
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-center">
              <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary mb-6" data-aos="fade-up">Get Quality And Updated Leads From Insurance Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Business List</span></h2>
              <p>
                The insurance industry is highly competitive, and to stay ahead, you need a targeted approach. Our meticulously compiled Insurance Industry Email List provides you with direct access to Insurance Agents, Brokers, Executives, and Underwriters globally. By utilizing our highly responsive data, you can build meaningful relationships with key decision-makers who have the authority to purchase your products or services.
              </p>
              <p>
                At E-Data Grid, we understand the specific needs of marketers. Our database is verified and continuously updated to ensure that your message reaches the right inbox at the right time. Whether you are promoting a financial software, consulting services, or insurance products, our lists are tailored to match your specific campaign requirements.
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
