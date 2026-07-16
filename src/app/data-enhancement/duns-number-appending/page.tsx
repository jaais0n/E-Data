
import Link from "next/link";

const popularServices = [
  { t: "Data Appending", d: "Enhance, update, and enrich your existing customer and prospect databases with accurate contact details.", icon: "database", href: "/data-enhancement/data-appending" },
  { t: "Email Append", d: "Append missing, verified business email addresses to your existing customer or prospect database.", icon: "mail", href: "/data-enhancement/email-append" },
  { t: "Email Validation", d: "Cleanse your existing lists by identifying and removing invalid, decayed, or honeypot email addresses.", icon: "mark_email_read", href: "/data-enhancement/email-validation" },
  { t: "DUNS Number Append", d: "Append verified DUNS numbers to your B2B records to accurately identify corporate entities.", icon: "domain_verification", href: "/data-enhancement/duns-number-appending" },
  { t: "Reverse Email Append", d: "Have an email but missing the name, title, or company? We reverse-append full profile data.", icon: "contact_mail", href: "/data-enhancement/reverse-email-append" },
  { t: "Phone Append", d: "Add direct-dial phone numbers and mobile contacts to accelerate your telemarketing and sales cadence.", icon: "phone_in_talk", href: "/data-enhancement/phone-append" },
  { t: "SIC & NAICS Code Append", d: "Append industry classification codes to segment and target your audience with extreme precision.", icon: "account_tree", href: "/data-enhancement/sic-naics-code-append" },
  { t: "Web Address Append", d: "Discover the corporate websites of your prospects to better understand their business.", icon: "language", href: "/data-enhancement/web-address-append" },
  { t: "Fax Number Append", d: "Add verified fax numbers to your contact lists for complete multi-channel outreach strategies.", icon: "fax", href: "/data-enhancement/fax-number-append" }
];

export default function DunsNumberAppendingPage() {
  const otherServices = popularServices.filter(s => s.href !== "/data-enhancement/duns-number-appending").slice(0, 3);
  // Filter out current page and take up to 3 random/first other services
  
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* 1. Enhanced Hero Banner with Grid Overlay and Gradient Glows */}
      <section className="relative bg-[#0b0f19] text-on-primary pt-32 md:pt-48 pb-16 md:pb-28 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e] via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">B2B DATASETS</span>
            <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
              Duns Number 
              Appending Services <br />
              <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">Database Enhancement</span>
            </h1>
            <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed pt-2">
              Append verified DUNS numbers to your B2B records to accurately identify corporate entities and evaluate creditworthiness.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined text-3xl">contact_support</span>
              </div>
              <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold tracking-widest">GET IN TOUCH</span>
              <h3 className="font-display-lg text-2xl mb-4 text-white">DUNS Number Append</h3>
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                Ready to enhance your business database with verified DUNS numbers? Click below to reach out to our sales team today.
              </p>
              <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="pb-24 pt-12">
        {/* Overview Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 pb-16 pt-8">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg" data-aos="fade-up">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8" data-aos="fade-up">About Duns Number 
              Appending Services</h2>
            <div className="space-y-6">
              <div className="space-y-4 pt-4">
              {[
                "In order to comprehend the potential customers for your company, you need to use an extremely comprehensive DUNs database. We help you in bringing only valid business leads.",
                "In order to increase your sales certainty, you need a DUNs list that is both verified and responsive. We guarantee a high rate of responsive leads from the people in our DUNs email list.",
                "Customization is done to match specific values. In this particular list we make use of the specific DUNS Numbers, which allows our database to implement a more effective and advantage ground marketing. In order to acquire more sales and carry out a number of effective marketing variables."
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl mt-1">article</span>
                  <span className="text-on-surface-variant font-medium text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Note: The Process section was absent in the Duns Appending screenshot, jumping straight to the Banner */}

        {/* 3. Popular Append Services with Search and Category Filtering */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">ENHANCEMENTS</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Our Other Popular <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Append Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {otherServices.map(l => (
              <Link href={l.href} key={l.t} className="block group bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:shadow-2xl hover:border-[#131b2e] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#131b2e]/5 group-hover:bg-[#131b2e]/10 rounded-xl flex items-center justify-center text-[#131b2e] group-hover:text-[#131b2e] mb-6 transition-colors">
                  <span className="material-symbols-outlined text-2xl">{l.icon}</span>
                </div>
                <h3 className="font-headline-md text-lg mb-3 text-primary group-hover:text-[#131b2e] transition-colors font-bold flex items-center justify-between">
                  {l.t}
                  <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward_ios</span>
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{l.d}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Refine & Speciality Visual Dashboards - customized for DUNS page */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e] transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#131b2e]/10 flex items-center justify-center text-[#131b2e]">
                <span className="material-symbols-outlined">filter_list</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">List Includes</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {["NAICS/SIC Codes & Ranges", "Email Address", "State or City", "Zip Code", "Phone Number", "Web Address"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 hover:text-[#131b2e] transition-colors group">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e] transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#8dc63f]/10 flex items-center justify-center text-[#8dc63f]">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">Service Benefits</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {[
                "Affordable Pricing", "Unlimited Usage", "One-click Download", 
                "100% Verified Email Lists", "B2B Targeted", "MS Excel Supported CSV files format"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Grow Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-4" data-aos="fade-up">
                  DUNs Number Append <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Service</span>
                </h2>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  The DUNs Number is an exclusive document that shows the consistency of nine digits that was designed to provide conventional identification to distinct businesses individuals within standardizing logic that cover a delivery time frame. A DUNS would list identifies a business via a DUNs number. It is a unique nine digit identification code that is assigned to every business and organization in the world by Dun & Bradstreet (D&B).
                </p>
              </div>
              
              <div>
                <h3 className="font-display-lg text-2xl md:text-3xl font-bold mb-4">
                  Extended Form Of DUNS
                </h3>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  The percentage of our DUNs Number list Appending Services is higher. To get the company name, that you lack details of, you just need to fill our list append excel sheet format and hand it to us. Our delivery system is 100% connect; further, there will be no result delay. The range of the appended percentage is from 65 to 80 percent on average.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 diffusion-shadow overflow-hidden rounded-3xl">
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grow Business Custom" className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#131b2e] rounded-full -z-0 blur-xl" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
