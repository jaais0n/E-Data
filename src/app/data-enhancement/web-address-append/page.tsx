
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

export default function WebAddressAppendPage() {
  const otherServices = popularServices.filter(s => s.href !== "/data-enhancement/web-address-append").slice(0, 3);
    
  

  

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <section className="relative bg-[#0b0f19] text-on-primary pt-32 md:pt-48 pb-16 md:pb-28 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">B2B DATASETS</span>
            <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
              B2B Web Address & <br />
              <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">URL Appending</span>
            </h1>
            <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed pt-2">
              Discover the corporate websites of your prospects to better understand their business, offerings, and scale.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined text-3xl">contact_support</span>
              </div>
              <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold tracking-widest">GET IN TOUCH</span>
              <h3 className="font-display-lg text-2xl mb-4 text-white">Web Address Append</h3>
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                Ready to enrich your data with verified corporate URLs? Click below to reach out today.
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
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-8" data-aos="fade-up">About Web Address Append Service</h2>
            <div className="space-y-6">
              <div className="space-y-4 pt-4">
              {[
                "E-Data offer Web Address Append services, which help their clients in updating their existing B2B records. You will get the web address matching to your data, as well as you will get the opportunity to target wide audiences through different marketing platforms."
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl mt-1">article</span>
                  <span className="text-on-surface-variant font-medium text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-outline-variant/30 mt-8">
              <h4 className="font-display-lg text-xl mb-4 text-primary font-bold">URL / Web Address Append (%)</h4>
              <div className="grid grid-cols-1 gap-3" data-aos="fade-up" data-aos-delay="100">
                 {[
                   "E-Data's Web Address Append service has successfully appended more than 80 to 90% in almost all the projects undertaken by them.",
                   "In some B2B cases database append percentage also increases depending on the quality of data provided by their clients and the targeted demographics.",
                   "E-Data's B2B Web Address Append services provide valid and authentic web addresses matching to clients existing records, with minimum bounce back rates.",
                   "In B2B web address append projects, they check and verify all the matched records manually to ensure they are providing quality and updated database, their experts have high proficiency in B2B database appending.",
                   "In manually verification process they utilize all their available resources to check whether the matching URL address is valid and currently running.",
                   "In addition to Web Address Append Service, E-Data also provides data appending services like Phone Append, Reverse Phone Append, Data Verification, Email Append, Reverse Email Append and many more."
                 ].map((item, i) => (
                   <div key={i} className="flex gap-2 items-start">
                     <span className="material-symbols-outlined text-[#8dc63f] text-sm mt-0.5">article</span>
                     <span className="text-on-surface-variant text-xs md:text-sm">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* 2. How Do We Append Data? */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-8 md:py-12 border-b border-outline-variant/30">
          <div className="text-center mb-10 md:mb-16 space-y-4" data-aos="fade-up">
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
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Step 1 - Upload</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Upload your database list which you want to build</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-[#8dc63f]/10 text-[#7cb037] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">mark_email_read</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Step 2 - Match & Fix</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">We fix all the duplicate records and matches with our records.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">perm_phone_msg</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Step 3 - Append</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">We will append accurate and authentic information.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">share</span>
              </div>
              <h3 className="font-headline-md text-lg text-primary mb-3 font-bold">Step 4 - Provide Verified</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">We quickly match the required details and provide you verified details.</p>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg" data-aos="fade-up">
            <h3 className="font-display-lg text-2xl text-primary font-bold mb-6">Refine Your List</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {["Industry", "Job Roles", "Employee Size", "Revenue Size", "Company Size", "Zip code", "Phone Number", "Email Address"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg" data-aos="fade-up">
            <h3 className="font-display-lg text-2xl text-primary font-bold mb-6">Our Data Speciality</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {[
                "High email deliverability", "95% Campaign accuracy", "Authenticity", 
                "Clean & Validated", "Multi-channel verification", "CCPA compliance", 
                "GDPR compliance", "CAN-SPAM compliant"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-8 leading-tight" data-aos="fade-up">
                How Web Address Append Service From E-Data <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Boost Your Business?</span>
              </h2>
              <div className="text-on-surface-variant text-body-lg space-y-6 leading-relaxed">
                <p>
                  Match the domain details of the companies with the data you have. Obtain your target audiences site to acquire valuable details of their company profile, details of their products and services and their existing clientele to pitch them successfully with E-Data's URL Append services.
                </p>
                <p>
                  Remove the obsolete web addresses from your database, appending correct website address. Build an authentic and responsive database of your target prospects by adding Web Address of your target audience, with E-Data's URL Append Service.
                </p>
                <p>
                  E-Data is best known for providing Web Address Append Service to their clients. It connects you with your B2B customers. They can help you to append web address of your target prospects manually. The match rates and percentage of URL appended data totally depend upon the number of matching records in our database.
                </p>
                <p>
                  The percentage of Web Appended B2B data records ranges from 70 to 80 percent.
                </p>
                <p>
                  After the matching of records their executive manually verify the database to provide the correct URL address.
                </p>
                <p>
                  You can easily approach to maximum target audiences of your target industries. It's time to build an appealing brand presence among targeted audience within a specific country and across the globe.
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
