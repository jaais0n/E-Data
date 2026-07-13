
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

export default function SicNaicsCodeAppendPage() {
  const otherServices = popularServices.filter(s => s.href !== "/data-enhancement/sic-naics-code-append").slice(0, 3);
    return (
    <div className="min-h-screen bg-background text-on-surface">
      <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">B2B DATASETS</span>
            <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
              B2B SIC & NAICS Code & <br />
              <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">Industry Classification</span>
            </h1>
            <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed pt-2">
              Append precise industry classification codes to segment and target your audience with extreme accuracy.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined text-3xl">contact_support</span>
              </div>
              <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold tracking-widest">GET IN TOUCH</span>
              <h3 className="font-display-lg text-2xl mb-4 text-white">SIC & NAICS Append</h3>
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                Ready to segment your data efficiently? Click below to reach out to our team today.
              </p>
              <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="pb-24 pt-12">
        {/* Custom Section from Screenshot */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg" data-aos="fade-up">
            <h3 className="font-display-lg text-2xl text-primary font-bold mb-6">Customize Your Education Industry Email List By:</h3>
            <p className="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
              E-Data Grid has a well segregated, and custom-built education sector marketing lists for your data-driven marketing campaigns. With our list, marketers can reach out to multiple profiles who are well established and interested in various business sectors like higher education institutions, elementary schools, education support services, and various others.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div data-aos="fade-up" className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-4 border-b border-blue-200 pb-2">SIC Code</h4>
                <ul className="space-y-2 text-sm text-blue-900">
                  <li><strong>8211</strong> - Elementary and secondary schools</li>
                  <li><strong>8221</strong> - Colleges, universities, and professional schools</li>
                  <li><strong>8222</strong> - Junior colleges and technical institutes</li>
                  <li><strong>8231</strong> - Libraries</li>
                  <li><strong>8243</strong> - Data processing schools</li>
                  <li><strong>8244</strong> - Business and secretarial schools</li>
                  <li><strong>8249</strong> - Vocational schools, not elsewhere classified</li>
                  <li><strong>8299</strong> - Schools and educational services, not elsewhere classified</li>
                </ul>
              </div>
              <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-4 border-b border-green-200 pb-2">NAICS Code</h4>
                <ul className="space-y-2 text-sm text-green-900">
                  <li><strong>611110</strong> - Elementary and Secondary Schools</li>
                  <li><strong>611210</strong> - Junior Colleges</li>
                  <li><strong>611310</strong> - Colleges, Universities, and Professional Schools</li>
                  <li><strong>611410</strong> - Business and Secretarial Schools</li>
                  <li><strong>611420</strong> - Computer Training</li>
                  <li><strong>611519</strong> - Other Technical and Trade Schools</li>
                  <li><strong>611699</strong> - All Other Miscellaneous Schools and Instruction</li>
                  <li><strong>611710</strong> - Educational Support Services</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="font-display-lg text-2xl text-primary font-bold mb-4">Why E-Data Grid's SIC / NAICS Code Append Service?</h3>
              <p className="text-on-surface-variant mb-6 font-bold">Our SIC & NAICS Append Services:</p>
              <p className="text-on-surface-variant mb-6">E-Data Grid is a leading data-driven company, and we make certain to provide you with data which is fully verified and accurate. Having precise data makes your business more flexible.</p>
              
              <p className="text-on-surface-variant mb-6 font-bold">What Percentage Do We Append?</p>
              <p className="text-on-surface-variant mb-12">We append more than 70 to 80% of your requested list and provide you the best result. So avail our email lists to reach your targeted audiences now.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="font-display-lg text-xl text-primary font-bold mb-6 border-b border-outline-variant/30 pb-3">SIC Code Append Service</h4>
                  <ul className="space-y-4">
                    {[
                      "We provide high deliverability and campaign accuracy",
                      "Affordable pricing",
                      "E-Data Grid provides data which is CCPA and GDPR Compliant",
                      "100% CAN SPAM complaint",
                      "Increase your sales and conversion rates with our data directory",
                      "100% verified and updated",
                      "Get maximum deliverability rates of up to 95% on your marketing campaigns using our email lists."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="material-symbols-outlined text-[#8dc63f] text-xl mt-0.5">article</span>
                        <span className="text-on-surface-variant font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  {[
                    "01 Choose Your Target Industry And Geography",
                    "02 Fill in Our Lead Generation Excel File",
                    "03 Upload It Along With Required Fields",
                    "04 Download Your File Instantly",
                    "05 Target Audience Get Targeted Message At Right Time To Help Increase Lead Conversions"
                  ].map((step, i) => (
                    <div key={i} className="bg-gradient-to-r from-blue-500 to-[#8dc63f] text-white p-4 rounded-xl shadow-md font-bold transform hover:scale-105 transition-all">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-12 border-y border-outline-variant/30 grid grid-cols-1 lg:grid-cols-2 gap-16">
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

        <section className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-8 leading-tight" data-aos="fade-up">
                How E-Data Grid Help Your Business Grow With <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">SIC / NAICS Code Appending Services?</span>
              </h2>
              <div className="text-on-surface-variant text-body-lg space-y-6 leading-relaxed">
                <p>
                  With a list of targeted businesses categorized by their SIC and NAICS code, you have a better chance to reach your target prospects. It will help in enhancing your B2B multi-channel marketing campaigns.
                </p>
                <p>
                  Our team makes certain that your database consists of all the key pieces of information necessary to target prospects appropriately. For this purpose, we match your database with our vast directory. Hence, any missing element will get filled by our append service. For SIC Code Appending Services, we make use of the company name and company website address.
                </p>
                <p>
                  NAICS (North American Industry Classification System) is an industry classification system which is basically used by federal statistical agencies to classify business establishments. This information basically helps you to collect, analyze and publish statistical data related to the US business economy. We match your data with our massive database directory and fill all the missing pieces of information of your targeted audience. By NAICS code, it is helpful for you to acquire more quality leads.
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
