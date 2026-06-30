"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightPage = pathname === "/" || pathname === "/privacy-policy" || pathname === "/terms-of-service";

  const headerClass = (isScrolled || isLightPage)
    ? "fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#131b2e]/5 transition-all duration-500 py-3 shadow-sm"
    : "fixed top-0 left-0 w-full z-50 bg-transparent border-b border-transparent transition-all duration-500 py-6";

  const textClass = (isScrolled || isLightPage) ? "text-[#3a485c]" : "text-white/90";
  const hoverTextClass = (isScrolled || isLightPage) ? "hover:text-[#131b2e]" : "hover:text-white";

  const linkClass = `font-body font-medium text-[15px] transition-all duration-200 ${textClass} ${hoverTextClass}`;
  
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const getLinkStyle = (href: string) => {
    if (isActive(href)) {
      return `font-body font-semibold text-[15px] ${(isScrolled || isLightPage) ? "text-[#8dc63f]" : "text-white"}`;
    }
    return linkClass;
  };

  const dropdownContainerClass = "absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50";
  const dropdownCardClass = "bg-white border border-[#131b2e]/5 p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col";
  
  const DropdownItem = ({ href, label, icon }: { href: string, label: string, icon: string }) => (
    <Link 
      href={href} 
      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-lowest hover:shadow-sm transition-all group/item"
    >
      <div className="w-8 h-8 rounded-lg bg-[#131b2e]/5 text-[#131b2e] flex items-center justify-center group-hover/item:scale-110 transition-transform">
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>
      <span className="text-[14px] font-medium text-[#3a485c] group-hover/item:text-[#131b2e]">{label}</span>
    </Link>
  );

  return (
    <header className={headerClass}>
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <img src="/images/GDlogo.png" alt="Gilbert Data" className="h-10 w-auto object-contain" />
        </Link>
        
        {/* Main Navigation (Desktop + Tablet) */}
        <div className="flex items-center gap-8 lg:gap-10">
          <Link href="/" className={getLinkStyle("/")}>Home</Link>
          <Link href="/about" className={getLinkStyle("/about")}>About</Link>
          
          {/* Our Data Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1.5 focus:outline-none ${getLinkStyle("/our-data")}`}>
              Our Data
              <span className="material-symbols-outlined text-[16px] group-hover:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
            </button>
            <div className={dropdownContainerClass}>
              <div className={`${dropdownCardClass} min-w-[320px]`}>
                <div className="text-xs font-bold text-[#131b2e]/70 tracking-widest uppercase mb-4 px-4">Our Data Solutions</div>
                <div className="flex flex-col space-y-1">
                  <DropdownItem href="/our-data/b2b-marketing-data" label="B2B Marketing Data" icon="storefront" />
                  <DropdownItem href="/our-data/custom-data" label="Custom Data" icon="tune" />
                  <DropdownItem href="/our-data/targeted-contact-data" label="Targeted Contact Data" icon="track_changes" />
                  <DropdownItem href="/our-data/healthcare-data" label="Healthcare Data" icon="medical_services" />
                  <DropdownItem href="/our-data/technology-installs" label="Technology Installs" icon="terminal" />
                </div>
              </div>
            </div>
          </div>

          {/* Data Enhancement Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1.5 focus:outline-none ${getLinkStyle("/data-enhancement")}`}>
              Data Enhancement
              <span className="material-symbols-outlined text-[16px] group-hover:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
            </button>
            <div className={dropdownContainerClass}>
              <div className={`${dropdownCardClass} min-w-[640px]`}>
                <div className="text-xs font-bold text-[#131b2e]/70 tracking-widest uppercase mb-4 px-4">Enhancement Services</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <DropdownItem href="/data-enhancement/data-appending" label="Data Appending" icon="database" />
                  <DropdownItem href="/data-enhancement/email-append" label="Email Append" icon="mail" />
                  <DropdownItem href="/data-enhancement/email-validation" label="Email Validation" icon="mark_email_read" />
                  <DropdownItem href="/data-enhancement/duns-number-appending" label="DUNS Number Appending" icon="domain_verification" />
                  <DropdownItem href="/data-enhancement/reverse-email-append" label="Reverse Email Append" icon="contact_mail" />
                  <DropdownItem href="/data-enhancement/phone-append" label="Phone Append" icon="phone_in_talk" />
                  <DropdownItem href="/data-enhancement/sic-naics-code-append" label="SIC & NAICS Code Append" icon="account_tree" />
                  <DropdownItem href="/data-enhancement/web-address-append" label="Web Address Append" icon="language" />
                  <DropdownItem href="/data-enhancement/fax-number-append" label="Fax Number Append" icon="fax" />
                </div>
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1.5 focus:outline-none ${getLinkStyle("/industries")}`}>
              Industries
              <span className="material-symbols-outlined text-[16px] group-hover:rotate-180 transition-transform duration-300">keyboard_arrow_down</span>
            </button>
            <div className={dropdownContainerClass}>
              <div className={`${dropdownCardClass} min-w-[640px]`}>
                <div className="text-xs font-bold text-[#131b2e]/70 tracking-widest uppercase mb-4 px-4">Industries We Serve</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <DropdownItem href="/industries/healthcare" label="Healthcare" icon="medical_services" />
                  <DropdownItem href="/industries/technology" label="Technology" icon="terminal" />
                  <DropdownItem href="/industries/education" label="Education" icon="school" />
                  <DropdownItem href="/industries/marketing" label="Marketing" icon="campaign" />
                  <DropdownItem href="/industries/retail" label="Retail" icon="storefront" />
                  <DropdownItem href="/industries/insurance" label="Insurance" icon="shield" />
                  <DropdownItem href="/industries/manufacturing" label="Manufacturing" icon="precision_manufacturing" />
                  <DropdownItem href="/industries/real-estate" label="Real Estate" icon="apartment" />
                  <DropdownItem href="/industries/staffing" label="Staffing & Recruiting" icon="group_add" />
                  <DropdownItem href="/industries/telecom" label="Tele-Communication" icon="cell_tower" />
                  <DropdownItem href="/industries/finance" label="Finance & Banking" icon="account_balance" />
                  <DropdownItem href="/industries/food" label="Food & Beverage" icon="restaurant" />
                  <DropdownItem href="/industries/travel" label="Travel" icon="flight" />
                  <DropdownItem href="/industries/automobile" label="Automobile" icon="directions_car" />
                  <DropdownItem href="/industries/oil-gas" label="Oil & Gas" icon="oil_barrel" />
                  <DropdownItem href="/industries/publishing" label="Publishing" icon="menu_book" />
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/resources/blog" className={getLinkStyle("/resources/blog")}>Blog</Link>
          <Link href="/contact" className={getLinkStyle("/contact")}>Contact Us</Link>
        </div>
        
        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#131b2e] text-white hover:bg-[#131b2e]/90 px-6 py-2.5 rounded-full font-label-mono text-[11px] transition-all font-bold shadow-md hover:scale-[1.02] uppercase tracking-wider"
          >
            Book a Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
