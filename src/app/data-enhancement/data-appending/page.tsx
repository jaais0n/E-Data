
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

export default function DataAppendingPage() {
  const otherServices = popularServices.filter(s => s.href !== "/data-enhancement/data-appending").slice(0, 3);
  // Filter out current page and take up to 3 random/first other services
  
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* 1. Enhanced Hero Banner with Grid Overlay and Gradient Glows */}
      <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e] via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">B2B DATASETS</span>
            <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
              Data Append 
              Service <br />
              <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">Database Enhancement</span>
            </h1>
            <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed pt-2">
              Enhance your existing database with accurate contact details and multi-channel data points to unlock greater marketing ROI.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined text-3xl">contact_support</span>
              </div>
              <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold tracking-widest">GET IN TOUCH</span>
              <h3 className="font-display-lg text-2xl mb-4 text-white">Data Appending Service</h3>
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                Ready to enhance your database with verified contact data? Click below to reach out to our sales team today.
              </p>
              <Link href="/contact" className="block cursor-pointer w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
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
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8" data-aos="fade-up">About Data Append 
              Service</h2>
            <div className="space-y-6">
              <div className="space-y-4 pt-4">
              {[
                "Boost ROI by reaching your target audience efficiently",
                "Maximize your marketing campaigns with complete profiles",
                "Reduce bounce rates and increase conversion rates",
                "Save time and effort by letting our experts handle the data appending process"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl">article</span>
                  <span className="text-on-surface-variant font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* 2. How Do We Append Data? */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-12 border-b border-outline-variant/30">
          <div className="text-center mb-16 space-y-4" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">PROCESS</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              How Do We <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Append Data?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">topic</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Match & Extract</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">We receive your database and match it with our master database.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-[#8dc63f]/10 text-[#7cb037] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">mark_email_read</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Match & Email Find</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Missing email addresses are appended to the matching records.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">perm_phone_msg</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Match & Phone</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Direct dial phone numbers are appended to the matched records.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">share</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Match & Social Append</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Social media links are identified and appended to the contacts.</p>
            </div>
          </div>
        </section>

        {/* 4. Popular Append Services with Search and Category Filtering */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
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

        {/* 5. Refine & Speciality Visual Dashboards */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e] transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#131b2e]/10 flex items-center justify-center text-[#131b2e]">
                <span className="material-symbols-outlined">filter_list</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">Refine Your List</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {["Industry", "Job Roles", "Employee Size", "Revenue Size", "Company Size", "Zip code", "Phone Number", "Email Address"].map((item) => (
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
              <h3 className="font-display-lg text-2xl text-primary font-bold">Our Data Speciality</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {[
                "High email deliverability", "95% Campaign accuracy", "Authenticity", 
                "Clean & Validated", "Multi-channel verification", "CCPA compliance", 
                "GDPR compliance", "CAN-SPAM compliant"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 hover:text-primary transition-colors group">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why Grow Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">SCALE & PROSPER</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-8 leading-tight" data-aos="fade-up">
                How Data Appending Service From Gilbert Data Boost <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Your Business?</span>
              </h2>
              <div className="text-on-surface-variant text-body-lg space-y-6 leading-relaxed">
                <p>
                  Gilbert Data's data appending service is critical in keeping your database up-to-date and accurate. It is an effective process to add missing information like email addresses, phone numbers, and physical addresses to your existing customer data file.
                </p>
                <p>
                  Our data append service helps you identify key data points, verify them against our master database of millions of records, and instantly fill the gaps in your database so you can seamlessly reach out to the right contacts via multiple marketing channels.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 diffusion-shadow overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grow Business Custom" className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#131b2e] rounded-full -z-0 blur-xl" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
