"use client";

import Link from "next/link";

const manufacturingCategories = [
  "Apparel and Textile Manufacturing Email List",
  "Chemical & Allied Products Manufacturing Email List",
  "Electronic & Other Electrical Equipment Manufacturers List",
  "Food & Kindred Products Manufacturing Email List",
  "Furniture & Fixtures Manufacturing Email List",
  "Leather & Leather Products Manufacturing List",
  "Measuring, Analyzing & Controlling Instruments Email List",
  "Primary Metal Industries Manufacturing Email List",
  "Rubber and Miscellaneous Plastics Products Email List",
  "Stone, Clay, Glass & Concrete Products Email List",
  "Machinery & Computer Equipment Manufacturing Email List",
  "Paper & Allied Products Manufacturing Email List",
  "Printing, Publishing & Allied Industries Email List",
  "Lumber & Wood Products Manufacturing Email List",
  "Primary Metal Industries Email List",
  "Fabricated Metal Products Manufacturing Email List",
  "Stone, Clay, Glass and Concrete Products Email List",
  "Transportation Equipment Email List",
  "Textile Mill Products Manufacturing Email List",
  "Miscellaneous Manufacturing Industries Email List"
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

export default function ManufacturingIndustry() {
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
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">MANUFACTURING INDUSTRY</span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Manufacturing Industry Email Lists | <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Manufacturing Industry Database</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Connect with top decision-makers, executives, and professionals in the manufacturing sector globally using our highly responsive and verified B2B email lists.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Manufacturing <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized manufacturing contact lists? Click below to reach out to our data experts.
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
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8 text-primary" data-aos="fade-up">Manufacturing Industries <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h2>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed space-y-4">
              <p>Connect with top B2B companies, executives, and decision-makers accurately using our Verified Manufacturing Industry Email List.</p>
              <p>Expand your business operations globally by connecting with businesses in the manufacturing sector from different regions like USA, UK, Canada, Australia, etc.</p>
              <p>Target your B2B Marketing campaigns directly to the top manufacturing professionals using our Manufacturing Industry Database.</p>
              <p>Ensure your promotional messages are effectively delivered to your targeted audience with our highly deliverable mailing list.</p>
            </div>
          </div>
        </section>

        {/* 3. Categories */}
        <section className="bg-surface-container-lowest py-16 border-t border-b border-outline-variant/30 text-center">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-10 text-primary" data-aos="fade-up">Targeted Manufacturing Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List:</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left">
              {manufacturingCategories.map((item, i) => (
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
              <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary mb-6" data-aos="fade-up">Get Quality And Updated Leads From <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Manufacturing Industry Email List</span></h2>
              <p>
                Gilbert Data provides accurate and updated Manufacturing Industry Email List globally to help you in expanding your business. Our targeted mailing list provides you with all the required contact information of top executives and professionals in the manufacturing sector, which includes their name, job title, email address, phone number, mailing address, etc. We gather the data from highly reliable sources like business directories, seminars, trade shows, opt-in emails, surveys, feedback forms, magazines, yellow pages, government records, etc. that undergo a rigorous verification process to remove all the inaccuracies, duplicate, and missing data from our database. It ensures that your promotional messages are delivered to the right inbox to achieve a higher deliverability rate and ROI for your marketing campaigns.
              </p>
              <p>
                Our Manufacturing Industry mailing list is fully customized based on your specific business requirements to ensure your marketing messages are delivered to your targeted audience. It helps you in targeting the right audience to achieve maximum engagement and sales revenue for your business. We offer both pre-packaged and customized mailing lists to meet your specific marketing needs.
              </p>
              <p>
                Purchase our highly responsive Manufacturing Industry Email List to boost your sales and revenue for your business. It allows you to run multi-channel marketing campaigns through email, direct mail, and telemarketing to connect with your targeted audience and increase your conversion rate.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
