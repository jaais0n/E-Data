"use client";

import { useState } from "react";
import Link from "next/link";
import { ClientMarquee } from "@/components/ClientMarquee";

export default function About() {
  const [activeTab, setActiveTab] = useState<"WHO WE ARE" | "WHAT WE DO" | "OUR MISSION">("WHO WE ARE");

  const tabContent = {
    "WHO WE ARE": "We helps companies to accelerate sales and customer loyalty through its high-value data and innovative multi-channel digital marketing solutions.",
    "WHAT WE DO": "We deliver comprehensive information about the companies, industries and people that drive the economy, along with the powerful tools to reach and connect to the right person and industry.",
    "OUR MISSION": "To help companies save marketing budget and make it easy for decision makers to discover and gain access to other business executives via detailed contact information."
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Header Banner */}
      <section className="bg-[#0b0f19] text-on-primary pt-40 pb-20 relative overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }} />
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
          <h1 className="font-display-lg text-4xl md:text-5xl font-bold mb-4">About <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Us</span></h1>
          <p className="font-label-mono text-label-mono text-secondary-fixed">WHO WE ARE AND OUR MISSION</p>
        </div>
      </section>

      <main className="py-24">
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image Side */}
            <div className="relative justify-self-center lg:justify-self-start">
              <img 
                alt="Business Professional" 
                className="w-full max-w-[450px] h-auto object-cover rounded-lg diffusion-shadow"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              />
              <div className="absolute -bottom-8 left-10 right-[-3rem] bg-surface-container-lowest p-8 shadow-2xl border border-outline-variant/10 rounded-lg text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2 opacity-80" style={{ transform: "rotate(180deg)" }}>format_quote</span>
                <p className="font-bold text-lg leading-tight text-on-surface">Successfully Providing Business <br/> Solution from 14 years</p>
              </div>
            </div>

            {/* Right Text Side */}
            <div className="mt-12 lg:mt-0 lg:pl-10">
              <span className="font-label-mono text-label-mono text-primary tracking-[0.2em] uppercase mb-4 block font-bold">ABOUT US</span>
              <h1 className="font-display-lg text-4xl lg:text-5xl mb-6 font-bold text-on-surface">Why <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">E-Data Grid</span> !</h1>
              <p className="text-on-surface-variant text-body-lg leading-relaxed mb-10">
                Since 2008 Gilbert data is one of the pioneer and believed data drive data driven marketing services that provides marketing solutions comprising of business list, technology user list, healthcare list and also appending services.
              </p>
              
              <div className="mb-6 min-h-[140px]">
                <div className="flex gap-8 border-b border-outline-variant/30 font-label-mono text-sm tracking-wider font-bold mb-6">
                  {(["WHO WE ARE", "WHAT WE DO", "OUR MISSION"] as const).map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 whitespace-nowrap transition-colors ${activeTab === tab ? "text-primary border-b-2 border-primary" : "text-on-surface-variant hover:text-primary"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300">
                    {tabContent[activeTab]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Our Services */}
        <section className="bg-surface-container-lowest py-28 border-y border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="font-label-mono text-label-mono text-secondary mb-4 block">SERVICES</span>
              <h2 className="font-display-lg text-display-lg text-primary mb-4" data-aos="fade-up">Our <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Services</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
               {[
                { 
                  t: "Appending", 
                  d: "Our Data Services fills missing business information to you, prevent record and help you to connect with right prospect at right time. Making way for well organized data to outreach the potential clients.",
                  href: "/data-enhancement/data-appending"
                },
                { 
                  t: "Technology List", 
                  d: "Our services are not only investing into new technologies but also making outstanding study to updating their list structure and we position our technology user's list are composed by our professionals",
                  href: "/our-data/technology-installs"
                },
                { 
                  t: "Business List", 
                  d: "Our business email lists are 100% opt-in, deliverable, and is spam-adaptive, but it's essential for your email campaign to keep the standard, and this is the reason we are diverged from other business email list distributors flow",
                  href: "/our-data/b2b-marketing-data"
                },
                { 
                  t: "International List", 
                  d: "Redefine your marketing results with our quality international business list, we warehouse over 72 million business contacts in over 820 million consumer contacts worldwide",
                  href: "/our-data/targeted-contact-data"
                }
              ].map(s => (
                <div key={s.t} className="bg-background p-8 border border-outline-variant/30 rounded-lg diffusion-shadow flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
                  <div>
                    <h3 className="font-headline-md text-xl mb-4 text-on-surface group-hover:text-primary transition-colors">{s.t}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{s.d}</p>
                  </div>
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link href={s.href} className="font-label-mono text-xs text-primary border-b border-primary pb-0.5 hover:border-b-2 transition-all">
                      READ MORE &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Technology Email List */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-28">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-secondary mb-4 block">ENGAGEMENT</span>
            <h2 className="font-display-lg text-display-lg text-primary mb-4" data-aos="fade-up">Technology <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {[
              {
                t: "Sale Software",
                d: "The term 'sales software' is commonly used in the business world to refer to applications designed to help the sales person or the team. However, CRM and MA software packages are not the only option for purchasing sales software.",
                href: "/our-data/technology-installs"
              },
              {
                t: "Marketing Software",
                d: "Marketing software encompasses a wide range of programs that assist businesses in marketing themselves and their products. There are two main types of marketing software. Digital marketing is the process of promoting a company's goods or services with the help of tools on the internet, a lot more.",
                href: "/our-data/technology-installs"
              },
              {
                t: "Security Software",
                d: "Software that secures and protects a computer, network, or other computing-enabled device is considered security software. It manages access control, protects data, safeguards the system against viruses and network/internet-based intrusions, and defends against other system-level security threats.",
                href: "/our-data/technology-installs"
              },
              {
                t: "HR Software",
                d: "Human resource management software is the beating heart of any company. It simplifies the HR administrator's routine tasks and improves the efficiency of HR operations. No matter if this is your first time shopping for an HRMS or if you're looking to upgrade, the process is crucial.",
                href: "/our-data/b2b-marketing-data"
              },
              {
                t: "ERP Software",
                d: "Provides an economic ecosystem for the businesses that serve the needs of other enterprises. Services range from general IT help to more specialized fields like legal advice and medical investigations. Among the many players in the business world are ecosystem service providers",
                href: "/our-data/technology-installs"
              }
            ].map(s => (
              <div key={s.t} className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-lg diffusion-shadow flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
                <div>
                  <h3 className="font-headline-md text-xl mb-4 text-on-surface group-hover:text-primary transition-colors">{s.t}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.d}</p>
                </div>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Link href={s.href} className="font-label-mono text-xs text-primary border-b border-primary pb-0.5 hover:border-b-2 transition-all">
                    READ MORE &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Business industry Email */}
        <section className="bg-surface-container-lowest py-28 border-t border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="font-label-mono text-label-mono text-secondary mb-4 block">SECTOR INSIGHTS</span>
              <h2 className="font-display-lg text-display-lg text-primary mb-4" data-aos="fade-up">Business <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Industry Email</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
              {[
                {
                  t: "US Business List",
                  d: "Our database contains over 30 million firmographic industries, including emails, postal, and telemarketing data that provides every record which makes this file an authoritative tool for your multi-channel marketing campaign",
                  href: "/our-data/b2b-marketing-data"
                },
                {
                  t: "Canada Business List",
                  d: "We provide relative information to how you get started with your Canadian business division, email list marketing. It can be efficiently used for Telemarketing, postal and direct marketing and Sales leads",
                  href: "/our-data/b2b-marketing-data"
                },
                {
                  t: "Healthcare List",
                  d: "We are the leading supplier of healthcare lists. Our list is complete and specifically designed for establishments and entities that are looking for hospital decision makers, physicians, and pharmacists.",
                  href: "/industries/healthcare"
                },
                {
                  t: "CVDM Business List",
                  d: "Our customized email mailing list is one of the most reliable lists, with accurate details, exact information about CVDMs from allocated organizations like healthcare, manufacturing, banking and finance, IT and much more globally.",
                  href: "/our-data/custom-data"
                }
              ].map(s => (
                <div key={s.t} className="bg-background p-8 border border-outline-variant/30 rounded-lg diffusion-shadow flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
                  <div>
                    <h3 className="font-headline-md text-xl mb-4 text-on-surface group-hover:text-primary transition-colors">{s.t}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{s.d}</p>
                  </div>
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link href={s.href} className="font-label-mono text-xs text-primary border-b border-primary pb-0.5 hover:border-b-2 transition-all">
                      READ MORE &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Our Clients Banner */}
        <ClientMarquee />
      </main>
    </div>
  );
}
