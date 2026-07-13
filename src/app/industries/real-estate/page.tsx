"use client";

import Link from "next/link";

const realEstateCategories = [
  "Real Estate Property Managers",
  "Real Estate Appraisers Email List",
  "Real Estate Buying Agents Email Lists",
  "Real Estate Selling Agents Email List",
  "Commercial Real Estate Agents Email List",
  "Property Management Companies Email List",
  "Commercial Real Estate Brokers Email Lists",
  "Specialized Real Estate Brokers Email List",
  "Global Real Estate Professionals Email Lists",
  "Commercial Real Estate Appraisers Email Lists",
  "Commercial Property Managers Email Lists",
  "Real Estate Brokers Email List",
  "Architects Email List",
  "Real Estate Investors Email List",
  "Real Estate Agents Email List",
  "Realtors Email List",
  "Real Estate Developers Email Lists",
  "Real Estate Directors Email List"
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

export default function RealEstateIndustry() {
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
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">REAL ESTATE INDUSTRY</span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Real Estate Industry Email List | <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Real Estate Agents Mailing Lists</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Connect with top decision-makers, real estate agents, property managers, and brokers globally using our highly responsive and verified B2B email lists.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">real_estate_agent</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Real Estate <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized real estate contact lists? Click below to reach out to our data experts.
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
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Real Estate Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email Lists</span></h2>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-4">
              <p>Our Real Estate Industry Email list contains complete contact details of real estate brokers, agents, property managers, real estate developers, and many more.</p>
              <p>Through this targeted email marketing list, reach out to top decision-makers in the real estate industry to pitch the data products or services they are looking to buy to meet business needs.</p>
              <p>As a marketer, a well-planned marketing strategy is not just enough to reach your business goals, you will also need a verified and customized B2B contact list.</p>
              <p>Top-quality, real estate mailing list data provider gives you prioritized list that gets your message directly delivered to the inboxes of targeted real estate executives.</p>
            </div>
          </div>
        </section>

        {/* 3. Categories List */}
        <section className="bg-surface-container-lowest py-16 border-t border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Real Estate Industry Email List <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Can Be Customized By:</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-left">
              {realEstateCategories.map((item, i) => (
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
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16" data-aos="fade-up" data-aos-delay="100">
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

        {/* 7. Real Estate Long Text */}
        <section className="py-16 bg-background border-b border-outline-variant/30 text-center">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10">
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-center">
              <h3 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mb-6">Get Quality Leads From Real Estate Industry Business <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email Lists</span></h3>
              
              <p>
                Data is uniquely customized, targeted, verified and segmented list as per clients specific business requirements. Marketing to real estate professionals has never been simpler or more effective. If you are selling or providing property management supplies or looking out for marketing customized services then you need to connect with top decision-makers using our comprehensive real estate email list. You can pitch directly with our targeted email marketing to key executives within this industry like brokers, real estate agents, managers, etc. who have an ongoing, large-scale demand for products and services to run their business. With marketing data as the key aspect of marketing campaigns, it is vital to have the right database for pitching your sales messages.
              </p>
              <p>
                A targeted mailing list can act as a catalyst for expanding your B2B marketing initiatives. Reaching the right audience effectively using our B2B real estate email lists can help you quickly tap into your targeted audience. Start building lucrative business connections worldwide across the USA, UK, Canada, Australia, Europe, etc.
              </p>
              <p>
                Start effectively engaging your potential real estate executives with highly responsive Real Estate email lists. Take a smarter marketing approach by utilizing our high-quality marketing data for all your targeted multi-channel marketing campaigns. Target prospects via email, direct mail, or telephone effectively. The Real Estate Email List contains the contact information of all targeted decision-makers, executives, and other related professionals. Leveraging our precise, accurate database, we ensure maximum deliverability rates of your sales messages that minimize bounce rates and maximize your business ROI.
              </p>
              <p>
                When it comes to building authentic business connections, quality lists of real estate executives are of prime importance. At E-Data Grid we provide top-notch data that yields maximum revenue by reaching your target audience efficiently.
              </p>
              <p>
                And you can easily boost the conversion rate of your B2B campaigns to get higher ROI. Build stronger connections globally that boost revenue.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
