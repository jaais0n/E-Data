import Link from "next/link";
import { professionalsLists, jobTitles, facilities, states } from "./data";

function getSpecialtyIcon(job: string) {
  const name = job.toLowerCase();
  if (name.includes("cardiologist")) return "monitor_heart";
  if (name.includes("dentist")) return "dentistry";
  if (name.includes("dermatologist")) return "healing";
  if (name.includes("endocrinologist")) return "bloodtype";
  if (name.includes("gynecologist") || name.includes("obstetrics")) return "pregnant_woman";
  if (name.includes("hematologist")) return "bloodtype";
  if (name.includes("neurologist")) return "psychology";
  if (name.includes("oncologist")) return "biotech";
  if (name.includes("ophthalmologist") || name.includes("optometrist")) return "visibility";
  if (name.includes("orthopedics")) return "accessible";
  if (name.includes("pediatrician")) return "child_care";
  if (name.includes("physical therapist")) return "fitness_center";
  if (name.includes("psychiatrists")) return "psychology";
  if (name.includes("pulmonologist")) return "air";
  if (name.includes("radiologist")) return "settings_accessibility";
  if (name.includes("sleep")) return "bedtime";
  if (name.includes("sports")) return "sports_soccer";
  if (name.includes("urologist")) return "water_drop";
  if (name.includes("veterinarian")) return "pets";
  if (name.includes("pharmacist")) return "vaccines";
  if (name.includes("nurse")) return "medical_services";
  if (name.includes("geriatric")) return "elderly";
  if (name.includes("toxicology") || name.includes("pathologist") || name.includes("genetics")) return "science";
  if (name.includes("surgery") || name.includes("surgical")) return "healing";
  if (name.includes("hospice")) return "health_and_safety";
  return "stethoscope";
}

export default function HealthcareIndustryPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      <main className="flex-1">
        {/* Premium Hero Section */}
        <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold uppercase">
                INDUSTRY DATASETS
              </span>
              <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
                B2B <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">Healthcare</span> <br /> Contact Lists
              </h1>
              <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed pt-2">
                Connect with hospital executives, doctors, clinics, and medical suppliers globally. Power your outbound campaigns with highly accurate and verified industry-specific data.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">medical_services</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold tracking-widest">GET A QUOTE</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Target Healthcare Now</h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Unlock direct-dials and verified emails of decision-makers in the healthcare sector.
                </p>
                <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Extensive Coverage Grid */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">EXTENSIVE COVERAGE</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Our Healthcare Professionals <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] pr-1">Database</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 font-medium">
              Access over <span className="font-bold text-[#8dc63f]">24M+</span> verified records across 56 highly targeted specialties and facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
            {professionalsLists.map(item => (
              <Link href={item.href} key={item.t} className="bg-surface-container-lowest p-6 border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#131b2e] hover:-translate-y-1 transition-all group block">
                <div className="w-12 h-12 bg-[#131b2e]/5 rounded-xl flex items-center justify-center text-[#131b2e] mb-5 group-hover:bg-[#131b2e] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{item.i}</span>
                </div>
                <h3 className="font-bold text-primary mb-2 group-hover:text-[#131b2e] transition-colors">{item.t}</h3>
                <p className="text-sm text-on-surface-variant line-clamp-2">{item.d}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-[#8dc63f]/15 text-[#4a6b1e] dark:text-[#a5e051] px-2.5 py-1 rounded-md text-xs font-bold border border-[#8dc63f]/20">
                  <span className="material-symbols-outlined text-[14px]">group</span>
                  {item.count}
                </div>
                <div className="mt-5 flex items-center text-[#8dc63f] font-semibold text-sm gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Job Titles Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary" data-aos="fade-up">Healthcare Job Titles by Specialties</h2>
            <p className="text-on-surface-variant max-w-3xl mx-auto mt-4">We offer our targeted healthcare email list through various job titles across specialties to help you connect with key decision-makers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
            {jobTitles.map(job => (
              <div key={job} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#8dc63f] text-lg mt-0.5 shrink-0">{getSpecialtyIcon(job)}</span>
                <span className="text-sm text-on-surface hover:text-[#131b2e] cursor-pointer transition-colors">{job}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities & States Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mb-8" data-aos="fade-up">Healthcare Database By Facility</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {facilities.map(facility => (
                <div key={facility} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8dc63f] text-lg mt-0.5 shrink-0">location_city</span>
                  <span className="text-sm text-on-surface hover:text-[#131b2e] cursor-pointer transition-colors">{facility}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-primary mb-8" data-aos="fade-up">Top States in USA - Healthcare Facility</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {states.slice(0, 20).map(state => (
                <div key={state} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#8dc63f] text-lg mt-0.5 shrink-0">map</span>
                  <span className="text-sm text-on-surface hover:text-[#131b2e] cursor-pointer transition-colors truncate">{state}</span>
                </div>
              ))}
              <div className="flex items-start gap-2">
                <span className="text-sm text-on-surface font-semibold italic">...and all other states</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
