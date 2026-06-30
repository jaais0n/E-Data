import Link from "next/link";
import { notFound } from "next/navigation";

// Utility to convert slug to formatted title
function formatSlug(slug: string) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const industryDetails: Record<string, { title: string, subtitle: string, icon: string, features: string[] }> = {
  "healthcare": {
    title: "Healthcare",
    subtitle: "Connect with hospital executives, doctors, clinics, and medical suppliers globally.",
    icon: "medical_services",
    features: ["Physicians & Doctors", "Hospital Administrators", "Medical Device Manufacturers", "Pharmacies"]
  },
  "technology": {
    title: "Technology",
    subtitle: "Target IT decision makers, CTOs, software vendors, and hardware manufacturers.",
    icon: "terminal",
    features: ["Software Developers", "IT Directors", "Cloud Architects", "Cybersecurity Experts"]
  },
  "education": {
    title: "Education",
    subtitle: "Reach out to schools, universities, deans, and EdTech decision makers.",
    icon: "school",
    features: ["University Presidents", "K-12 Principals", "Educational Suppliers", "Board of Education"]
  },
  "marketing": {
    title: "Marketing",
    subtitle: "Get in touch with CMOs, ad agencies, PR firms, and digital marketing experts.",
    icon: "campaign",
    features: ["CMOs", "Advertising Agencies", "PR Professionals", "Digital Marketers"]
  },
  "retail": {
    title: "Retail",
    subtitle: "Access databases of retail chains, e-commerce brands, and merchandising managers.",
    icon: "storefront",
    features: ["Retail Chains", "E-commerce Stores", "Merchandising Managers", "Supply Chain Heads"]
  },
  "insurance": {
    title: "Insurance",
    subtitle: "Connect with brokers, agencies, underwriters, and claims adjusters.",
    icon: "shield",
    features: ["Insurance Brokers", "Underwriters", "Claims Adjusters", "Risk Managers"]
  },
  "manufacturing": {
    title: "Manufacturing",
    subtitle: "Target plant managers, supply chain directors, and industrial distributors.",
    icon: "precision_manufacturing",
    features: ["Plant Managers", "Supply Chain Directors", "Industrial Distributors", "Quality Assurance"]
  },
  "real-estate": {
    title: "Real Estate",
    subtitle: "Reach real estate agents, brokers, property managers, and investors.",
    icon: "apartment",
    features: ["Real Estate Brokers", "Property Managers", "Commercial Investors", "Architects"]
  },
  "staffing": {
    title: "Staffing & Recruiting",
    subtitle: "Connect with HR directors, staffing agencies, and corporate recruiters.",
    icon: "group_add",
    features: ["HR Directors", "Recruitment Agencies", "Talent Acquisition", "Training Managers"]
  },
  "telecom": {
    title: "Tele-Communication",
    subtitle: "Target telecom providers, network engineers, and infrastructure operators.",
    icon: "cell_tower",
    features: ["Network Engineers", "Telecom Providers", "Infrastructure Managers", "Satellite Operators"]
  },
  "finance": {
    title: "Finance & Banking",
    subtitle: "Access investment bankers, CFOs, accountants, and credit unions.",
    icon: "account_balance",
    features: ["CFOs", "Investment Bankers", "Accountants", "Credit Unions"]
  },
  "food": {
    title: "Food & Beverage",
    subtitle: "Reach restaurants, food distributors, beverage manufacturers, and chefs.",
    icon: "restaurant",
    features: ["Restaurant Chains", "Food Distributors", "Beverage Manufacturers", "Executive Chefs"]
  },
  "travel": {
    title: "Travel",
    subtitle: "Connect with airlines, hotel chains, travel agencies, and tour operators.",
    icon: "flight",
    features: ["Hotel Chains", "Airlines", "Travel Agencies", "Tour Operators"]
  },
  "automobile": {
    title: "Automobile",
    subtitle: "Target car dealerships, auto parts manufacturers, and mechanics.",
    icon: "directions_car",
    features: ["Car Dealerships", "Auto Parts Manufacturers", "Fleet Managers", "Mechanics"]
  },
  "oil-gas": {
    title: "Oil & Gas",
    subtitle: "Access databases of drilling companies, energy executives, and refineries.",
    icon: "oil_barrel",
    features: ["Energy Executives", "Drilling Companies", "Refineries", "Petroleum Engineers"]
  },
  "publishing": {
    title: "Publishing",
    subtitle: "Reach authors, publishing houses, editors, and print media distributors.",
    icon: "menu_book",
    features: ["Publishing Houses", "Editors", "Print Media", "Authors"]
  }
};

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = industryDetails[resolvedParams.slug.toLowerCase()];

  if (!data) {
    // Basic fallback if slug is not explicitly mapped
    return (
      <div className="min-h-screen bg-background text-on-surface">
        <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 text-center">
            <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-6xl font-extrabold text-white mb-6">
              {formatSlug(resolvedParams.slug)} <span className="text-[#8dc63f]">Industry Data</span>
            </h1>
            <Link href="/contact" className="inline-block bg-[#8dc63f] text-[#131b2e] px-8 py-4 font-bold rounded-xl shadow-lg mt-8">
              Contact Us for Custom Data
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Premium Hero Section */}
      <section className="relative bg-[#0b0f19] text-on-primary pt-48 pb-28 overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e] rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8dc63f]/10 rounded-full blur-[100px] animate-pulse duration-[6000ms] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">INDUSTRY DATASETS</span>
            <h1 data-aos="fade-up" className="font-display-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl tracking-tight">
              B2B <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">{data.title}</span> <br /> Contact Lists
            </h1>
            <p className="font-body-lg text-lg text-white/70 max-w-xl leading-relaxed pt-2">
              {data.subtitle} Power your outbound campaigns with highly accurate and verified industry-specific data.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                <span className="material-symbols-outlined text-3xl">{data.icon}</span>
              </div>
              <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold tracking-widest">GET A QUOTE</span>
              <h3 className="font-display-lg text-2xl mb-4 text-white">Target {data.title} Now</h3>
              <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                Unlock direct-dials and verified emails of decision-makers in the {data.title.toLowerCase()} sector.
              </p>
              <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="py-24">


        {/* Features / Target Segments */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 pb-16">
          <div className="text-center mb-16 space-y-3" data-aos="fade-up">
            <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
              Key Target Segments in <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">{data.title}</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Discover exactly who you can reach out to in our comprehensive datasets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
            {data.features.map(feature => (
              <div key={feature} className="bg-surface-container-lowest p-6 border border-outline-variant/30 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#131b2e] transition-all">
                <div className="w-10 h-10 bg-[#131b2e]/5 rounded-lg flex items-center justify-center text-[#131b2e] mb-4">
                  <span className="material-symbols-outlined text-xl">group</span>
                </div>
                <h3 className="font-bold text-primary mb-2">{feature}</h3>
                <p className="text-sm text-on-surface-variant">Direct contacts and decision makers.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "healthcare" },
    { slug: "technology" },
    { slug: "education" },
    { slug: "marketing" },
    { slug: "retail" },
    { slug: "insurance" },
    { slug: "manufacturing" },
    { slug: "real-estate" },
    { slug: "staffing" },
    { slug: "telecom" },
    { slug: "finance" },
    { slug: "food" },
    { slug: "travel" },
    { slug: "automobile" },
    { slug: "oil-gas" },
    { slug: "publishing" }
  ];
}
