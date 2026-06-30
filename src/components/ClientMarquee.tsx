import React from "react";

const clientLogos = [
  { name: "Oracle", url: "https://logo.clearbit.com/oracle.com" },
  { name: "Sumo Logic", url: "https://logo.clearbit.com/sumologic.com" },
  { name: "Quixtec", url: "https://logo.clearbit.com/quixtec.com" },
  { name: "Doctorlink", url: "https://logo.clearbit.com/doctorlink.com" },
  { name: "Salesforce", url: "https://logo.clearbit.com/salesforce.com" },
  { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
  { name: "SAP", url: "https://logo.clearbit.com/sap.com" },
  { name: "HubSpot", url: "https://logo.clearbit.com/hubspot.com" },
  { name: "ServiceNow", url: "https://logo.clearbit.com/servicenow.com" },
  { name: "Dell", url: "https://logo.clearbit.com/dell.com" },
  { name: "Cisco", url: "https://logo.clearbit.com/cisco.com" },
  { name: "HP", url: "https://logo.clearbit.com/hp.com" },
  { name: "W. L. French", url: "https://logo.clearbit.com/wlfrench.com" },
  { name: "IBM", url: "https://logo.clearbit.com/ibm.com" },
];

export function ClientMarquee() {
  // Double the list to ensure infinite scrolling is seamless
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-surface-container-lowest py-16 border-y border-outline-variant/30 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 mb-8 text-center">
        <span className="font-label-mono text-label-mono text-secondary tracking-widest block">
          TRUSTED BY LEADERS WORLDWIDE
        </span>
      </div>

      {/* Marquee Wrapper with fading edges for premium glass/blend look */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fading overlay gradients (left and right) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
          {doubledLogos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center mx-12 h-12 w-32 select-none"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextSibling = e.currentTarget.nextElementSibling;
                  if (nextSibling) {
                    nextSibling.classList.remove('hidden');
                  }
                }}
              />
              <span className="hidden font-bold text-xl text-on-surface/40 uppercase hover:text-primary transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
