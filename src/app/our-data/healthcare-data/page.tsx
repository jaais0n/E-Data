import Link from "next/link";

const professionalsLists = [
  { t: "Nurses Email List", i: "medical_services" },
  { t: "Pharmacist Email List", i: "vaccines" },
  { t: "Dentist Email List", i: "dentistry" },
  { t: "Physician Email List", i: "healing" },
  { t: "Surgeons Email List", i: "health_and_safety" },
  { t: "Psychiatrist Email List", i: "psychology" },
  { t: "Cardiologist Email List", i: "monitor_heart" },
  { t: "Dermatologist Email List", i: "healing" },
  { t: "Pediatrician Email List", i: "medical_information" },
  { t: "Neurologist Email List", i: "psychology" },
  { t: "Oncologist Email List", i: "biotech" },
  { t: "Radiologist Email List", i: "medical_services" },
  { t: "Orthopedic Email List", i: "healing" },
  { t: "Optometrist Email List", i: "visibility" },
  { t: "Chiropractor Email List", i: "personal_injury" },
  { t: "Veterinarian Email List", i: "pets" },
  { t: "Therapist Email List", i: "spa" },
  { t: "Pathologist Email List", i: "science" },
  { t: "Gynecologist Email List", i: "pregnant_woman" },
  { t: "Urologist Email List", i: "water_drop" },
  { t: "Endocrinologist Email List", i: "bloodtype" },
  { t: "Gastroenterologist Email List", i: "local_hospital" },
  { t: "Nephrologist Email List", i: "science" },
  { t: "Pulmonologist Email List", i: "air" },
  { t: "Rheumatologist Email List", i: "healing" },
  { t: "Hematologist Email List", i: "bloodtype" },
  { t: "Anesthesiologist Email List", i: "masks" },
  { t: "Obstetrician Email List", i: "pregnant_woman" },
  { t: "Podiatrist Email List", i: "healing" },
  { t: "Dietitian Email List", i: "health_and_safety" },
  { t: "Paramedic Email List", i: "emergency" },
  { t: "EMT Email List", i: "emergency" },
  { t: "Medical Assistants List", i: "medical_services" },
  { t: "Healthcare Administrators List", i: "admin_panel_settings" },
  { t: "Clinic Managers List", i: "manage_accounts" },
  { t: "Hospital Directors List", i: "domain" }
];

export default function HealthcareData() {
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
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">MEDICAL &amp; HEALTHCARE DATA</span>
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Healthcare <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">Database</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Connect with the Top Healthcare Executives to Pitch your Medical Products and Services globally with our accurate and highly responsive healthcare database.
              </p>
            </div>

            {/* Right Contact Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-[#8dc63f]">
                  <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Healthcare <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Mailing List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized healthcare contact lists? Click below to reach out to our data experts.
                </p>
                <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Image and Text Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative justify-self-center lg:justify-self-start">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-[#8dc63f] opacity-20 blur-2xl rounded-full"></div>
              <img loading="lazy" decoding="async" 
                alt="Healthcare Database" 
                className="w-full max-w-[500px] h-auto object-cover rounded-2xl diffusion-shadow relative z-10"
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              />
            </div>
            <div className="space-y-6">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">GLOBAL REACH</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
                B2B Healthcare Database &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] pr-1">Mailing Lists</span>
              </h2>
              <p className="text-on-surface-variant text-body-lg leading-relaxed">
                The healthcare industry is vast and expanding rapidly. E-Data's healthcare mailing lists enables marketers to reach out to healthcare professionals, hospitals, clinics, and medical executives globally. Our data helps you to plan and execute multi-channel marketing campaigns effectively.
              </p>
              <ul className="space-y-3 mt-6">
                {['Customized Mailing Lists', 'Healthcare Exec Lists', 'Healthcare Professionals', 'Targeted Marketing Campaigns'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-on-surface font-semibold">
                    <span className="material-symbols-outlined text-[#8dc63f]">article</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Featured Categories Grid */}
        <section className="bg-surface-container-lowest py-24 border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
              <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
                Healthcare Professionals <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] pr-1">Lists</span>
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                We give you the opportunity to launch targeted marketing campaigns to specific medical domains and specialities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
              {[
                { t: "AHA Hospital Data", d: "Access comprehensive data on hospitals registered with the American Hospital Association.", i: "local_hospital" },
                { t: "AHA Medical Data", d: "Reach out to medical professionals and executives across the AHA network.", i: "medical_information" },
                { t: "AHA Pharmacy Data", d: "Target pharmacies and pharmacists with accurate and verified contact details.", i: "vaccines" },
                { t: "Nurses Mailing List", d: "Connect with registered nurses, nurse practitioners, and nursing directors.", i: "medical_services" },
                { t: "Physician Email List", d: "Engage with physicians across various medical specialities and clinics.", i: "stethoscope" },
                { t: "Medical Equipment Buyers", d: "Target decision-makers responsible for purchasing medical equipment.", i: "inventory_2" }
              ].map(item => (
                <div key={item.t} className="bg-background p-8 border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#131b2e]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#131b2e]/5 rounded-xl flex items-center justify-center text-[#131b2e] mb-6 group-hover:bg-[#131b2e] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{item.i}</span>
                  </div>
                  <h3 className="font-headline-md text-xl font-bold mb-3 text-primary">{item.t}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Massive Professionals List Grid */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">EXTENSIVE COVERAGE</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Our Healthcare Professionals <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] pr-1">Database</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="100">
            {professionalsLists.map(item => (
              <div key={item.t} className="flex items-center gap-3 p-4 bg-surface-container-low/30 border border-outline-variant/30 rounded-xl hover:border-[#131b2e]/30 hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-full bg-[#131b2e]/5 flex items-center justify-center text-[#131b2e] group-hover:bg-[#131b2e] group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-sm">{item.i}</span>
                </div>
                <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors truncate" title={item.t}>{item.t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Green CTA Bar */}
        <section className="bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] py-8 md:py-12 px-5 text-center">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-black text-[#131b2e]" data-aos="fade-up">Get Verified &amp; Customized Healthcare Email List Now</h2>
            <Link href="/contact" className="bg-[#131b2e] text-white px-8 py-3 rounded-xl font-label-mono font-bold hover:brightness-110 transition-all shadow-lg whitespace-nowrap">
              REQUEST A QUOTE
            </Link>
          </div>
        </section>

        {/* 6. Refine & Details */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e]/30 transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#131b2e]/10 flex items-center justify-center text-[#131b2e]">
                <span className="material-symbols-outlined">tune</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">Customize Your List By:</h3>
            </div>
            <p className="text-sm text-on-surface-variant mb-6">You can target the right audience using our customized healthcare email lists based on:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {["Healthcare Speciality", "Hospital Bed Size", "Patient Volume", "Number of Physicians", "State, City, Zip Code", "Sales Volume"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 transition-colors">
                  <span className="material-symbols-outlined text-[#8dc63f] text-lg font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 rounded-3xl shadow-lg hover:border-[#131b2e]/30 transition-all duration-300" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-6">
              <div className="w-10 h-10 rounded-xl bg-[#131b2e]/10 flex items-center justify-center text-[#131b2e]">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary font-bold">Our Lists Provide:</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
              {[
                "Professional Name", "Specialization", "Years of Experience", 
                "License Number", "NPI Number", "Hospital Affiliation", 
                "Email Address", "Phone & Fax Number", "Postal Address", "Website URL"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-surface-container-low/30 rounded-xl hover:bg-[#131b2e]/5 transition-colors">
                  <span className="material-symbols-outlined text-[#8dc63f] text-lg font-bold">article</span>
                  <span className="text-sm font-semibold text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
