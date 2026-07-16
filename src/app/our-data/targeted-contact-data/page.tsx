import Link from "next/link";

const targetedLists = [
  "Advertising Agencies Email List", "Aerospace and Defense Email List",
  "Agriculture Industry Email List", "Airlines and Aviation Email List",
  "Architecture Email List", "Automotive Industry Email List",
  "Banking and Finance Email List", "Biotechnology Email List",
  "Chemical Industry Email List", "Construction Industry Email List",
  "Education Industry Email List", "Energy and Utilities Email List",
  "Engineering Email List", "Food and Beverage Email List",
  "Healthcare Email List", "Hospitality Email List",
  "Information Technology Email List", "Insurance Industry Email List",
  "Legal Services Email List", "Manufacturing Email List",
  "Media and Entertainment Email List", "Mining Industry Email List",
  "Pharmaceutical Email List", "Publishing Industry Email List",
  "Real Estate Email List", "Retail Industry Email List",
  "Telecommunications Email List", "Transportation Email List",
  "Travel and Tourism Email List", "Wholesale Trade Email List"
];

const executiveLists = [
  "Sales Executives Email List", "Marketing Executives Email List",
  "HR Executives Email List", "IT Executives Email List",
  "Finance Executives Email List", "Operations Executives Email List",
  "CEO Email List", "CFO Email List", "CIO Email List", "CMO Email List",
  "CTO Email List", "COO Email List"
];

const popularLists = [
  { t: "Canadian Business List", d: "Reach companies and key decision makers across Canadian territories.", icon: "map" },
  { t: "Malaysia Business List", d: "Target growing corporate segments and executives in Malaysia.", icon: "language" },
  { t: "Web Address Append", d: "Enrich your database by matching missing corporate domain URLs.", icon: "link" },
  { t: "Singapore Business List", d: "Connect with top businesses and professionals in Singapore.", icon: "business_center" },
  { t: "European Business List", d: "Expand your reach across the European market with accurate data.", icon: "public" },
  { t: "US Business List", d: "Tap into the largest business market with our comprehensive US lists.", icon: "flag" },
  { t: "UK Business List", d: "Access decision-makers across various industries in the UK.", icon: "location_city" },
  { t: "Australian Business List", d: "Connect with key business professionals in Australia.", icon: "explore" },
  { t: "Asian Business List", d: "Reach out to the rapidly growing businesses in the Asian market.", icon: "language" }
];

export default function TargetedContactData() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative bg-[#0b0f19] text-on-primary pt-32 md:pt-48 pb-16 md:pb-28 overflow-hidden border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e]/10 rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">TARGETED BUSINESS DATA</span>
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Targeted Business Email List <br />
                <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">&amp; B2B Email List</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Achieve successfully targeted B2B contact lists without any hurdles and connect with your potential customers in a hassle free manner.
              </p>
            </div>

            {/* Right Contact Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-[#8dc63f]">
                  <span className="material-symbols-outlined text-3xl">contact_support</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Targeted Business <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized targeted contact lists? Click below to reach out to our sales team today.
                </p>
                <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Choose Targeted Business Email List */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">WIDE COVERAGE</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Choose Targeted <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Business Email List</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
            {targetedLists.map(item => (
              <div key={item} className="flex items-start gap-3 p-2 hover:bg-surface-container-low rounded-lg transition-colors group">
                <span className="material-symbols-outlined text-[#8dc63f] text-xl shrink-0 mt-0.5">article</span>
                <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Targeted Industry Business Executives */}
        <section className="bg-surface-container-lowest border-b border-outline-variant/30 py-24">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">EXECUTIVE REACH</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
                Targeted Industry <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Business Executives</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
              {executiveLists.map(item => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 border border-outline-variant/30 rounded-xl hover:border-[#131b2e]/30 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 rounded-full bg-[#131b2e]/5 flex items-center justify-center text-[#131b2e] group-hover:bg-[#131b2e] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">person</span>
                  </div>
                  <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* 5. Popular Lists */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Our Other Popular <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Business Email Lists</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {popularLists.map(l => (
              <div key={l.t} className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-2xl shadow-md hover:shadow-2xl hover:border-[#131b2e]/30 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-[#131b2e]/10 rounded-xl flex items-center justify-center text-[#131b2e] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">{l.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-lg mb-4 text-primary font-bold">{l.t}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{l.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Refine & Speciality */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e]/30 transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#131b2e]/10 flex items-center justify-center text-[#131b2e]">
                <span className="material-symbols-outlined">filter_list</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">Refine Your List</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {["Industry", "Company Revenue", "Job Roles", "Geography", "Zip code", "Phone Number", "Email Address"].map((item, idx) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 transition-colors">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e]/30 transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#131b2e]/10 flex items-center justify-center text-[#131b2e]">
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
                <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 transition-colors">
                  <span className="material-symbols-outlined text-[#8dc63f] text-xl font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Get Quality Leads Text */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-6" data-aos="fade-up">Get Quality Leads From Targeted Business <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h2>
              <div className="text-on-surface-variant text-body-lg space-y-4 leading-relaxed">
                <p>Among all the marketing channels email lists have proven to give best results. You can reach out to your targeted audience to engage them. If you want to increase your ROI and improve business relations then choosing our targeted contact list is the best option.</p>
                <p>Our Targeted Business Email List helps you to directly contact the key decision makers and C-level executives. We provide highly responsive and updated data that helps you to run successful multi-channel marketing campaigns.</p>
                <p>With Gilbert Data's targeted email list, you can seamlessly connect with your potential clients globally and expand your business reach. Our data is gathered from authentic sources and verified regularly to ensure maximum accuracy.</p>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-[#131b2e]/5 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-9xl text-[#131b2e]/20">mail</span>
                <div className="absolute inset-0 flex items-center justify-center animate-bounce">
                  <span className="material-symbols-outlined text-6xl text-[#8dc63f]">send</span>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
