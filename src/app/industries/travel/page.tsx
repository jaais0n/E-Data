"use client";

import Link from "next/link";

const categories = [
  "Tour Operators",
  "Tourism Information Centers/Offices",
  "Travel Agencies",
  "Travel Information Centers and Bureaus Email Lists",
  "Travel Agents",
  "Car Rental Services Email Lists",
  "Travel Bureaus",
  "Passenger Transport Services",
  "Travel Service Providers",
  "Airline Companies",
  "Ticketing Services/Agencies",
  "Travel Bloggers",
  "Tour Guides",
  "Travel Vloggers",
  "Tour Managers",
  "Transport and Allied Services",
  "Travel Consultants",
  "Hospitality and Accommodation Services",
  "Foreign Exchange Services",
  "Travel Related Service Providers"
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

export default function TravelIndustry() {
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
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">TRAVEL & TOURISM</span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Travel and Tourism <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Industry Email List</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Build strong relationships with key decision-makers, top-level professionals, and other experts in the travel and tourism industry worldwide.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">flight_takeoff</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Travel Industry List</h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized travel contact lists? Click below to reach out to our data experts.
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
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Travel and Tourism Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h2>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-4">
              <p>Build strong relationships with key decision-makers, top-level professionals, and other experts in the travel and tourism industry.</p>
              <p>E-Data offers an excellent opportunity to connect with travel and tourism industry experts and decision-makers from different parts of the world.</p>
              <p>Access accurate and up-to-date travel and tourism industry mailing lists to fuel your B2B marketing campaigns and boost your sales and ROI.</p>
              <p>Reach out to the highly responsive prospects in the travel and tourism industry and build long-lasting business relationships.</p>
            </div>
          </div>
        </section>

        {/* 3. Categories List */}
        <section className="bg-surface-container-lowest py-16 border-t border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Travel And Tourism Email Lists <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Database Based On Job Title</span></h2>
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
            <div className="space-y-12 text-on-surface-variant leading-relaxed text-center">
              <div className="space-y-6">
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mb-6">Target Travel And Tourism Industry Experts And Travel Companies By Email Marketing Campaigns</h3>
                <p>
                  The B2B contact database is essentially the core element of any marketing or sales campaign across the B2B sector. We provide precise, verified, and complete data of travel and tourism industry professionals to make your B2B marketing campaigns successful. So if you are looking to promote your products and services to top-level decision makers in the travel and tourism industry, you need a highly accurate and verified B2B mailing list to reach out to your prospects.
                </p>
                <p>
                  E-Data delivers highly accurate and customized mailing lists for B2B marketing campaigns. We ensure the highest level of deliverability of our marketing records to target potential prospects. With our highly effective B2B contact lists you can easily build strong business relations and generate high quality leads that maximize your ROI.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mb-6">Why Should You Go For E-Data's Travel And Tourism Industry Email Lists?</h3>
                <p>
                  At E-Data, we gather the B2B marketing data from a variety of targeted and trusted sources. Thus, our lists are highly accurate and verified to provide you the best returns on your marketing campaigns. We keep on regularly updating our database to help you build business relations across the global travel and tourism sector. By delivering customized B2B mailing lists we help you boost your overall business revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
