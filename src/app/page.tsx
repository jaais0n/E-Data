"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ClientMarquee } from "@/components/ClientMarquee";

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="relative bg-[#f7f9fb] text-primary pt-32 pb-12 md:pb-20 overflow-hidden border-b border-outline-variant/20">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#131b2e05_1px,transparent_1px),linear-gradient(to_bottom,#131b2e05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#131b2e]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#8dc63f]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
          {/* Centered Hero Content */}
          <div className="text-center max-w-4xl mx-auto space-y-4 flex flex-col items-center" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-[#3a485c] tracking-widest font-bold">B2B INTELLIGENCE ENGINE</span>
            
            <h1 className="font-display-lg text-3xl md:text-5xl font-black text-[#131b2e] leading-[1.1] tracking-tight">
              Reach Your <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-500 to-[#8dc63f] italic animate-gradient font-black">Ideal Audience</span> <br />
              with Targeted Email Lists
            </h1>
            
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed font-medium">
              Among all marketing channels, email lists deliver the highest ROI. Gilbert Data matches, enriches, and validates direct contacts to power your outreach campaigns.
            </p>

            <div className="pt-1">
              <Link href="/contact" className="bg-[#131b2e] text-white hover:bg-primary/90 px-8 py-3.5 rounded-full font-label-mono text-xs transition-all font-bold whitespace-nowrap shadow-lg flex items-center gap-2">
                GET STARTED <span className="text-sm">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Bento Grid Layout (Inspired by Automenthic) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-12" data-aos="fade-up" data-aos-delay="200">
            
            {/* Card 1: Integrations (Col Span 3) */}
            <div className="lg:col-span-3 bg-white border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="flex gap-2 mb-6">
                  <div className="bg-surface-container-low border border-outline-variant/20 p-2.5 rounded-2xl flex items-center justify-center text-[#8dc63f]">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <div className="bg-surface-container-low border border-outline-variant/20 p-2.5 rounded-2xl flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div className="bg-surface-container-low border border-outline-variant/20 p-2.5 rounded-2xl flex items-center justify-center text-purple-500">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                </div>
                <h3 className="font-display-lg text-lg font-bold text-[#131b2e] mb-2">Global Channels</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Multi-channel pipelines spanning verified business emails, direct dials, and physical addresses.
                </p>
              </div>
            </div>

            {/* Card 2: Rotating Image Slider (Col Span 4, Row Span 2) */}
            <div className="lg:col-span-4 lg:row-span-2 relative overflow-hidden rounded-3xl border border-outline-variant/30 group shadow-2xl min-h-[350px] lg:min-h-full">
              <RotatingImage />
            </div>

            {/* Card 3: Accuracy Highlight (Col Span 3) */}
            <div className="lg:col-span-3 bg-[#8dc63f] text-[#131b2e] rounded-3xl p-8 hover:brightness-105 transition-all flex flex-col justify-between group shadow-lg">
              <div>
                <div className="font-display-lg text-5xl font-black mb-4 tracking-tight">98%</div>
                <h3 className="font-display-lg text-lg font-bold mb-2">Accuracy Verified</h3>
                <p className="text-xs text-[#131b2e]/80 leading-relaxed font-semibold">
                  Deliverability rate backed by dual automated filters and manual expert validation checks.
                </p>
              </div>
            </div>

            {/* Card 4: Total Database Stats (Col Span 2) */}
            <div className="lg:col-span-2 bg-[#131b2e] border border-white/10 rounded-3xl p-8 hover:bg-[#131b2e]/80 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="bg-white/5 border border-white/10 w-10 h-10 rounded-xl flex items-center justify-center text-[#8dc63f] mb-6">
                  <span className="material-symbols-outlined text-lg">database</span>
                </div>
                <div className="font-display-lg text-3xl font-extrabold text-white mb-1">72M+</div>
                <p className="text-[11px] text-white/60 leading-normal font-medium">
                  Verified B2B contact records in our system.
                </p>
              </div>
            </div>

            {/* Card 5: Compliance Stat (Col Span 3) */}
            <div className="lg:col-span-3 bg-white border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="font-display-lg text-4xl font-black text-[#8dc63f] mb-3">100%</div>
                <h3 className="font-display-lg text-base font-bold text-[#131b2e] mb-2">GDPR & CCPA Compliant</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Opt-in, spam-adaptive, and privacy-first database systems for secure campaign routing.
                </p>
              </div>
            </div>

            {/* Card 6: Target Marketing (Col Span 5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white to-[#8dc63f]/5 border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group shadow-sm">
              <div className="space-y-2 max-w-xs">
                <h3 className="font-display-lg text-lg font-bold text-[#131b2e]">Precision Targeting</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Directly reach C-level executives, VP, and Director profiles without any gatekeepers.
                </p>
              </div>
              <div className="flex -space-x-3 items-center shrink-0">
                {[33, 12, 47, 65, 8].map((imgId, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-surface-container-high shadow-md">
                    <img loading="lazy" decoding="async" src={`https://i.pravatar.cc/100?img=${imgId}`} alt="Target professional" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Stats Ribbon */}
      <section className="bg-surface-container-lowest py-16 border-y border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant/30" data-aos="fade-up">
          {[
            { v: "20K+", l: "Validated industry contacts updated daily in our databases." },
            { v: "72M+", l: "Active decision maker profiles mapped globally." },
            { v: "98%", l: "Deliverability accuracy rate backed by manual validation." }
          ].map((item, idx) => (
            <div key={idx} className={`${idx > 0 ? "pt-8 md:pt-0 md:pl-8" : ""} space-y-2`}>
              <div className="font-display-lg text-4xl md:text-5xl font-black text-primary tracking-tight">{item.v}</div>
              <p className="text-xs md:text-sm text-on-surface-variant font-medium max-w-xs mx-auto leading-relaxed">{item.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-28 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end" data-aos="fade-up">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-label-mono text-label-mono text-secondary tracking-widest font-bold">INTELLIGENCE PLATFORM</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary leading-tight tracking-tight" data-aos="fade-up">
              Features to Boost Your <br />
              <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Sales Productivity</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-sm md:text-base text-on-surface-variant leading-relaxed font-medium">
            We provide precision intelligence features built to clean your CRM data, segment targets, and accelerate campaign conversions.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" data-aos="fade-up" data-aos-delay="100">
          
          {/* Top Row - Card 1: Smart Appending (Col Span 7) */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
            <div className="md:col-span-7 space-y-4">
              <span className="material-symbols-outlined text-[#8dc63f] text-3xl">database</span>
              <h3 className="font-display-lg text-xl font-bold text-primary">Smart Data Appending</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Fill critical gaps in your target account records. Automatically enrich name and business files with direct dials, validated emails, and verified titles.
              </p>
            </div>
            {/* Visual Panel */}
            <div className="md:col-span-5 bg-background border border-outline-variant/40 rounded-2xl p-5 space-y-3 shadow-inner">
              <div className="flex justify-between text-[10px] font-bold text-on-surface-variant border-b border-outline-variant/20 pb-2">
                <span>Field</span>
                <span>Match State</span>
              </div>
              <div className="space-y-2 text-[10px]">
                <div className="flex justify-between items-center bg-surface-container-lowest p-2 rounded border border-outline-variant/20">
                  <span className="font-medium text-primary">Email Address</span>
                  <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Appended</span>
                </div>
                <div className="flex justify-between items-center bg-surface-container-lowest p-2 rounded border border-outline-variant/20">
                  <span className="font-medium text-primary">Direct Phone</span>
                  <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Appended</span>
                </div>
                <div className="flex justify-between items-center bg-surface-container-lowest p-2 rounded border border-outline-variant/20">
                  <span className="font-medium text-primary">SIC / NAICS Code</span>
                  <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Appended</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Row - Card 2: Real-Time Analytics (Col Span 5) */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4 mb-6">
              <span className="material-symbols-outlined text-blue-500 text-3xl">trending_up</span>
              <h3 className="font-display-lg text-xl font-bold text-primary">Real-Time Validation</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Track your data purity metrics on-the-fly. Monitor live campaign validation checks to keep bounce rates below 2%.
              </p>
            </div>
            {/* Visual graph mockup — area chart */}
            <div className="bg-gradient-to-br from-blue-50 to-[#8dc63f]/10 border border-outline-variant/30 rounded-2xl p-5 relative overflow-hidden min-h-[150px]">
              <div className="flex gap-6 text-[10px] font-bold mb-3">
                <div><div className="text-on-surface-variant">Live Purity</div><div className="text-primary text-base font-black">99.4%</div></div>
                <div><div className="text-on-surface-variant">Active Filters</div><div className="text-primary text-base font-black">Clean</div></div>
                <div><div className="text-on-surface-variant">Bounce Rate</div><div className="text-[#8dc63f] text-base font-black">&lt;1.8%</div></div>
              </div>
              <svg className="w-full h-20" viewBox="0 0 200 50" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#131b2e" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#131b2e" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,40 C20,35 30,15 50,18 C70,21 80,38 100,22 C120,8 140,28 160,14 C175,5 185,18 200,10 L200,50 L0,50Z" fill="url(#areaGrad)"/>
                <path d="M0,40 C20,35 30,15 50,18 C70,21 80,38 100,22 C120,8 140,28 160,14 C175,5 185,18 200,10" fill="none" stroke="#131b2e" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="50" cy="18" r="2.5" fill="#8dc63f"/>
                <circle cx="100" cy="22" r="2.5" fill="#8dc63f"/>
                <circle cx="160" cy="14" r="2.5" fill="#8dc63f"/>
                <circle cx="200" cy="10" r="2.5" fill="#8dc63f"/>
              </svg>
            </div>
          </div>

          {/* Bottom Row - Card 3: Tech Stack Tracking (Col Span 4) */}
          <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3 mb-6">
              <span className="material-symbols-outlined text-purple-500 text-3xl">developer_board</span>
              <h3 className="font-display-lg text-lg font-bold text-primary">Tech Stack Tracking</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Filter prospects by the hardware and software systems they are using. Uncover Salesforce, SAP, or AWS accounts.
              </p>
            </div>
            {/* Horizontal bar chart */}
            <div className="space-y-2.5">
              {[
                { label: "AWS", pct: 72, color: "#f59e0b" },
                { label: "SAP", pct: 58, color: "#8b5cf6" },
                { label: "HubSpot", pct: 85, color: "#ec4899" },
                { label: "Azure", pct: 64, color: "#3b82f6" }
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-3 text-[10px]">
                  <span className="font-bold text-primary w-12 shrink-0">{t.label}</span>
                  <div className="flex-1 bg-outline-variant/20 rounded-full h-2 overflow-hidden">
                    <div className="h-2 rounded-full transition-all duration-700" style={{width:`${t.pct}%`, background: t.color}}></div>
                  </div>
                  <span className="font-black text-primary w-8 text-right">{t.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Card 4: Account Profiling (Col Span 4) */}
          <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3 mb-5">
              <span className="material-symbols-outlined text-[#8dc63f] text-3xl">group_work</span>
              <h3 className="font-display-lg text-lg font-bold text-primary">Account Profiling</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Map entire organizational structures dynamically. Connect with regional VPs, directors, and primary managers.
              </p>
            </div>
            {/* Radial gauge */}
            <div className="flex items-center gap-5">
              <svg viewBox="0 0 100 60" className="w-28 h-20 shrink-0">
                <path d="M10,55 A45,45 0 0,1 90,55" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round"/>
                <path d="M10,55 A45,45 0 0,1 90,55" fill="none" stroke="#8dc63f" strokeWidth="8" strokeLinecap="round" strokeDasharray="113" strokeDashoffset="28"/>
                <text x="50" y="52" textAnchor="middle" fontSize="16" fontWeight="900" fill="#131b2e">87%</text>
              </svg>
              <div className="space-y-2 text-[10px] font-bold">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#8dc63f] inline-block"></span><span className="text-on-surface-variant">C-Level <span className="text-primary">34%</span></span></div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span><span className="text-on-surface-variant">VP / Director <span className="text-primary">29%</span></span></div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-400 inline-block"></span><span className="text-on-surface-variant">Manager <span className="text-primary">24%</span></span></div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Card 5: Compliance Audit (Col Span 4) */}
          <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3 mb-5">
              <span className="material-symbols-outlined text-orange-400 text-3xl">gavel</span>
              <h3 className="font-display-lg text-lg font-bold text-primary">Compliance Audit Logs</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Strict data privacy checks matching active global regulations. Always CCPA, GDPR, and CAN-SPAM compliant.
              </p>
            </div>
            {/* Stacked column chart */}
            <div>
              <div className="flex items-end gap-2 h-20 mb-2">
                {[
                  { label: "Jan", v: 65, color: "#f97316" },
                  { label: "Feb", v: 80, color: "#f97316" },
                  { label: "Mar", v: 72, color: "#f97316" },
                  { label: "Apr", v: 90, color: "#8dc63f" },
                  { label: "May", v: 88, color: "#8dc63f" },
                  { label: "Jun", v: 100, color: "#8dc63f" }
                ].map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full rounded-t-md transition-all duration-700" style={{height:`${b.v * 0.72}px`, background: b.color, opacity: 0.85}}></div>
                    <span className="text-[8px] text-on-surface-variant font-bold">{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-1">
                <span className="text-[9px] bg-primary/5 border border-[#131b2e]/10 text-primary font-bold px-2.5 py-1 rounded-full">GDPR</span>
                <span className="text-[9px] bg-primary/5 border border-[#131b2e]/10 text-primary font-bold px-2.5 py-1 rounded-full">CCPA</span>
                <span className="text-[9px] bg-primary/5 border border-[#131b2e]/10 text-primary font-bold px-2.5 py-1 rounded-full">CAN-SPAM</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Workflow Section */}
      <section className="bg-surface-container-lowest py-28 border-y border-outline-variant/30 text-center">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 space-y-10 md:space-y-20">
          <div className="space-y-4 max-w-xl mx-auto" data-aos="fade-up">
            <span className="font-label-mono text-label-mono text-secondary tracking-widest font-bold">SIMPLE WORKFLOW</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary leading-tight tracking-tight" data-aos="fade-up">
              Get Started in <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] whitespace-nowrap">3 Simple Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {[
              {
                step: "01",
                t: "Define Target Criteria",
                d: "Tell us about your target client profiles, fields needed, and preferred industry categories.",
                v: (
                  <div className="space-y-3 w-full max-w-[240px] mx-auto text-left">
                    <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant select-none">search</span>
                      <span className="text-[10px] text-on-surface-variant font-medium">Target: US Tech Companies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        $10M+ Rev
                      </span>
                      <span className="text-[10px] bg-blue-500/10 text-blue-600 border border-blue-500/20 px-2.5 py-1 rounded-lg font-bold">VP / Director</span>
                      <span className="text-[10px] bg-purple-500/10 text-purple-600 border border-purple-500/20 px-2.5 py-1 rounded-lg font-bold">United States</span>
                    </div>
                  </div>
                )
              },
              {
                step: "02",
                t: "Database Matching",
                d: "We match parameters with our B2B database, verifying emails and validating phone numbers.",
                v: (
                  <div className="space-y-2.5 w-full max-w-[240px] mx-auto text-left">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
                        <span>Database Match</span>
                        <span className="text-emerald-500">98.8% Accuracy</span>
                      </div>
                      <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-[#8dc63f] h-full w-[98.8%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[9px] font-semibold text-on-surface-variant">
                      <div className="bg-surface-container-low border border-outline-variant/20 px-2 py-1 rounded-lg flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px] text-emerald-500 select-none">done</span> Emails OK
                      </div>
                      <div className="bg-surface-container-low border border-outline-variant/20 px-2 py-1 rounded-lg flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px] text-emerald-500 select-none">done</span> Phones OK
                      </div>
                    </div>
                  </div>
                )
              },
              {
                step: "03",
                t: "Acquire & Scale",
                d: "Quality segment checklist checks complete. Download your verified custom lists instantly.",
                v: (
                  <div className="space-y-3 w-full max-w-[240px] mx-auto">
                    <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-2.5 flex items-center gap-2 text-left">
                      <span className="material-symbols-outlined text-lg text-emerald-500 select-none">description</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold text-primary truncate">GilbertData_Leads.csv</p>
                        <p className="text-[8px] text-on-surface-variant font-medium">12,450 Verified Contacts</p>
                      </div>
                    </div>
                    <div className="w-full bg-[#131b2e] hover:bg-primary/95 text-white text-[10px] font-bold py-2.5 rounded-xl cursor-pointer transition-all shadow-md flex items-center justify-center gap-1.5 group-hover:scale-[1.03] duration-300">
                      <span className="material-symbols-outlined text-sm select-none">download</span>
                      DOWNLOAD LIST
                    </div>
                  </div>
                )
              }
            ].map((s, i) => (
              <div key={i} className="bg-background border border-outline-variant/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center space-y-6 group">
                <div className="space-y-4">
                  <span className="font-label-mono text-xs text-[#8dc63f] font-bold block">STEP {s.step}</span>
                  <h3 className="font-display-lg text-lg font-bold text-primary uppercase tracking-wider">{s.t}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs mx-auto">{s.d}</p>
                </div>
                <div className="w-full pt-4 border-t border-outline-variant/20">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. Custom Solution Banner */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-8 md:py-12">
        <div className="bg-gradient-to-r from-[#131b2e] via-[#131b2e] to-[#131b2e] text-white p-6 md:p-14 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl border border-white/5" data-aos="fade-up">
          <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }} />
          <div className="relative z-10 space-y-2">
            <h3 className="font-display-lg text-2xl md:text-3xl font-extrabold tracking-tight text-white font-black">Get Verified & Customized B2B Email List Now</h3>
            <p className="text-white/70 text-sm mt-2 font-medium">We assemble lists tailored precisely to your specific sales parameters.</p>
          </div>
          <Link href="/contact" className="relative z-10 bg-[#8dc63f] text-[#131b2e] hover:brightness-110 px-10 py-4 rounded-xl font-label-mono text-label-mono transition-all font-bold whitespace-nowrap shadow-lg">
            CONTACT US
          </Link>
        </div>
      </section>

      {/* 7. Client Logos Marquee */}
      <ClientMarquee />

      {/* 6. Testimonials */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-28 text-center">
        <span className="font-label-mono text-label-mono text-secondary mb-4 block">Reliability Verified</span>
        <h2 className="font-display-lg text-display-lg mb-4" data-aos="fade-up">Everything starts with the <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f] italic">Customers</span></h2>
        <p className="text-body-lg text-on-surface-variant mb-10 md:mb-20 max-w-2xl mx-auto">We give 100% data authenticity and quality leads to our clients.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { q: "Our marketing efforts skyrocketed thanks to the precise email lists. The data was accurate and helped us close deals faster than ever before.", n: "Sarah Jenkins", r: "Marketing Director" },
            { q: "The lead quality from GilbertData is unmatched. We saw a 3x increase in response rate on our outreach campaigns.", n: "Michael Chen", r: "VP of Sales" },
            { q: "Highly recommended data partner. The verification process is thorough, and the customer support is extremely helpful.", n: "Elena Rostova", r: "Growth Lead" }
          ].map((t, idx) => (
            <div key={t.n} className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-lg diffusion-shadow flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
              <div>
                <div className="flex gap-1 text-primary/30 mb-6">
                  <span className="material-symbols-outlined text-4xl opacity-40">format_quote</span>
                </div>
                <p className="text-body-md text-on-surface-variant mb-8 italic">"{t.q}"</p>
              </div>
              <div>
                <div className="flex text-[#f6993f] mb-4 gap-0.5 text-sm">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
                    <img loading="lazy" decoding="async" src={`https://i.pravatar.cc/150?img=${idx + 10}`} alt={t.n} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm">{t.n}</p>
                    <p className="text-xs text-on-surface-variant">{t.r}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* 8. Ready to Scale Outreach CTA */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 text-center space-y-8 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl mt-10 md:mt-20 group hover:shadow-2xl transition-all duration-300">
        <h2 className="font-display-lg text-3xl md:text-5xl font-black text-primary leading-tight max-w-2xl mx-auto tracking-tight" data-aos="fade-up">
          Ready to Accelerate Your <br /> Target Sales Campaigns?
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed font-medium">
          Unlock highly targeted B2B contact lists matching your specific client criteria today.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="bg-[#131b2e] text-white hover:bg-primary/90 px-8 py-3.5 rounded-full font-label-mono text-xs transition-all font-bold shadow-md">
            GET STARTED
          </Link>
          <Link href="/about" className="bg-transparent border border-outline-variant/40 text-primary hover:bg-surface-container-low px-8 py-3.5 rounded-full font-label-mono text-xs transition-all font-bold">
            LEARN MORE
          </Link>
        </div>
      </section>
    </main>
  );
}

const ROTATING_SLIDES = [
  { img: "/images/img1.png", tag: "TARGET OUTREACH", text: "Connecting you with decision makers globally" },
  { img: "/images/img2.png", tag: "DATA INTEGRITY", text: "Powering outbound outreach with verified emails" },
  { img: "/images/img3.png", tag: "CRM ENRICHMENT", text: "Enriching B2B databases with validated direct dials" },
  { img: "/images/img4.jpg", tag: "LEAD GENERATION", text: "Scaling your pipeline with high-quality prospects" }
];

function RotatingImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-full">
      {ROTATING_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
            <span className="font-label-mono text-[10px] text-[#8dc63f] font-bold block mb-2 transition-all duration-500 transform translate-y-0 opacity-100">
              {slide.tag}
            </span>
            <h4 className="text-white font-bold text-lg leading-snug transition-all duration-500 transform translate-y-0 opacity-100">
              {slide.text}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
