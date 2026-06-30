import Link from "next/link";
import { notFound } from "next/navigation";
import { professionalsLists } from "../data";

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

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface DynamicContent {
  aboutText: string;
  subSpecialties: string[];
  keyStats: { label: string; value: string }[];
  targetAudience: string[];
  fieldsIncluded: string[];
}

function getDynamicContent(title: string, count: string): DynamicContent {
  const cleanTitle = title.replace(" Email List", "").replace(" List", "").trim();
  
  return {
    aboutText: `Our comprehensive ${title} is designed to help B2B marketers, medical equipment manufacturers, pharmaceuticals, and healthcare recruiters connect directly with top-tier ${cleanTitle} decision-makers. Every record is verified through strict data protocols to ensure high deliverability and campaign performance. Whether you are running email marketing, telemarketing, or direct mail campaigns, this dataset gives you direct-dial access to licensed and practicing professionals.`,
    subSpecialties: [
      `Licensed & Active ${cleanTitle} Professionals`,
      `Chief/Director level ${cleanTitle} Executives`,
      `Clinical & Private Practice ${cleanTitle} Specialists`,
      `Hospital & Health System Affiliated ${cleanTitle}s`,
      `State-Licensed ${cleanTitle} Practitioners`
    ],
    keyStats: [
      { label: "Deliverability Rate", value: "95%+" },
      { label: "Total Active Records", value: count || "150,000+" },
      { label: "Verification Cycle", value: "Every 45 Days" },
      { label: "Data Accuracy", value: "98% Match" }
    ],
    targetAudience: [
      "Medical Device Manufacturers",
      "Pharmaceutical Sales Representatives",
      "Continuing Medical Education (CME) Providers",
      "Healthcare Staffing & Recruitment Agencies",
      "Healthcare IT & Software Providers"
    ],
    fieldsIncluded: [
      "First Name & Last Name",
      "Direct Email Address",
      "Phone Number (Direct Dial)",
      "Mailing / Postal Address",
      "Hospital/Clinic Affiliation",
      "Medical Specialty & Sub-specialty",
      "License Number & NPI Number",
      "Geographic Location (City, State, Zip Code)",
      "Employee / Organization Size"
    ]
  };
}

export default async function HealthcareDynamicPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  
  // Find the exact item if we have customized data for it
  const itemData = professionalsLists.find(item => item.href.endsWith(resolvedParams.slug));
  if (!itemData && !resolvedParams.slug) {
    notFound();
  }

  const title = itemData ? itemData.t : formatSlug(resolvedParams.slug);
  const subtitle = itemData ? itemData.d : `Connect with targeted decision-makers in the ${title} sector.`;
  const icon = itemData ? itemData.i : "medical_services";
  const count = itemData ? itemData.count : "120,000+ Contacts";

  const dynamic = getDynamicContent(title, count);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Premium Hero Section */}
      <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold uppercase">
              HEALTHCARE BUSINESS DATA
            </span>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl font-medium mt-6 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/contact" className="bg-[#8dc63f] text-[#131b2e] hover:brightness-110 px-8 py-4 rounded-xl font-label-mono text-label-mono transition-all font-bold whitespace-nowrap shadow-lg flex items-center justify-center gap-2">
                GET A QUOTE
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative z-10 diffusion-shadow overflow-hidden rounded-2xl bg-surface-container-low/10 border border-white/5 aspect-square flex flex-col items-center justify-center p-12 text-center backdrop-blur-sm">
              <div className="w-24 h-24 bg-[#131b2e] rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
                <span className="material-symbols-outlined text-5xl text-[#8dc63f]">{icon}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Targeted Leads</h3>
              <p className="text-white/60">Fully compliant and verified records designed to boost outbound email and sales campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20 space-y-20">
        {/* Dynamic Details Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary" data-aos="fade-up">About Our {title}</h2>
            <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
              {dynamic.aboutText}
            </p>
            
            <div className="pt-6">
              <h3 className="font-display-lg text-xl font-bold text-primary mb-4">Database Segmentation & Categories Included:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-aos="fade-up" data-aos-delay="100">
                {dynamic.subSpecialties.map((spec, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <span className="material-symbols-outlined text-[#8dc63f] text-sm shrink-0">{getSpecialtyIcon(spec)}</span>
                    <span className="text-on-surface-variant text-sm font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-3xl shadow-lg space-y-6">
            <h3 className="font-display-lg text-xl font-bold text-primary border-b border-outline-variant/30 pb-4">Database Overview</h3>
            <div className="grid grid-cols-2 gap-6">
              {dynamic.keyStats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-xs text-on-surface-variant/70 uppercase block font-semibold tracking-wider">{stat.label}</span>
                  <span className="text-lg md:text-xl font-bold text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-outline-variant/30">
              <Link href="/contact" className="block w-full text-center bg-[#131b2e] hover:bg-[#1a2642] text-white py-4 rounded-xl font-semibold transition-all">
                Download Sample List
              </Link>
            </div>
          </div>
        </section>

        {/* Fields Section */}
        <section className="bg-surface-container-lowest py-20 border-y border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary mb-6" data-aos="fade-up">Who Benefits From This List?</h2>
              <div className="space-y-4">
                {dynamic.targetAudience.map((audience, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#8dc63f] text-lg mt-0.5 shrink-0">arrow_right_alt</span>
                    <span className="text-on-surface-variant text-sm md:text-base font-medium">{audience}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary mb-6" data-aos="fade-up">Information Fields Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {dynamic.fieldsIncluded.map((field, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <span className="material-symbols-outlined text-[#8dc63f] text-sm shrink-0">task_alt</span>
                    <span className="text-on-surface-variant text-xs md:text-sm font-medium">{field}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 pb-8">
          <div className="bg-[#131b2e] text-white p-10 md:p-14 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl border border-white/5">
            <div className="relative z-10 space-y-2">
              <h3 className="font-display-lg text-2xl md:text-3xl font-extrabold tracking-tight">Get Verified & Customized B2B Email List Now</h3>
              <p className="text-white/70 text-sm mt-2 font-medium">We assemble lists tailored precisely to your specific sales parameters.</p>
            </div>
            <Link href="/contact" className="relative z-10 bg-[#8dc63f] text-[#131b2e] hover:brightness-110 px-10 py-4 rounded-xl font-label-mono text-label-mono transition-all font-bold whitespace-nowrap shadow-lg">
              CONTACT US
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return professionalsLists.map(item => {
    // Extract slug from href: e.g. "/our-data/healthcare-data/physicians" -> "physicians"
    const slug = item.href.split("/").pop() || "";
    return { slug };
  });
}
