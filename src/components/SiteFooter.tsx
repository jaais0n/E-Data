import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface">
      {/* Pre-footer CTA */}
      <div className="bg-primary">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-12 flex justify-center items-center text-center">
          <h2 className="font-display-lg text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-[#8dc63f] tracking-tight">Work with the best Data Team</h2>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* About Company */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <img src="/images/GDlogo.png" alt="Gilbert Data" className="h-10 w-auto object-contain" />
            </div>
            <h4 className="font-label-mono text-label-mono text-secondary mb-6 block font-bold">About Company</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>Address: 100 Main Street, Suite 500, City, Country</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">mail</span>
                <a href="mailto:info@gilbertdata.com" className="hover:text-primary transition-colors">info@gilbertdata.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">phone</span>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 234 567 890</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-label-mono text-label-mono text-secondary mb-6 block font-bold">Quick Links</h4>
            <ul className="space-y-3 text-on-surface-variant text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">- Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">- About Us</Link></li>
              <li><Link href="/our-data/b2b-marketing-data" className="hover:text-primary transition-colors">- Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">- Contact Us</Link></li>
              <li><Link href="/resources/blog" className="hover:text-primary transition-colors">- Blog</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">- Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-label-mono text-label-mono text-secondary mb-6 block font-bold">Services</h4>
            <ul className="space-y-3 text-on-surface-variant text-sm">
              <li><Link href="/our-data/technology-installs" className="hover:text-primary transition-colors">- Technology Email List</Link></li>
              <li><Link href="/our-data/healthcare-data" className="hover:text-primary transition-colors">- Healthcare Email List</Link></li>
              <li><Link href="/our-data/targeted-contact-data" className="hover:text-primary transition-colors">- State Email List</Link></li>
              <li><Link href="/our-data/b2b-marketing-data" className="hover:text-primary transition-colors">- HR Email List</Link></li>
              <li><Link href="/our-data/b2b-marketing-data" className="hover:text-primary transition-colors">- Industry Email List</Link></li>
              <li><Link href="/our-data/custom-data" className="hover:text-primary transition-colors">- Data Appending</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-3">
            <h4 className="font-label-mono text-label-mono text-secondary mb-6 block font-bold">Social Media</h4>
            <div className="flex gap-4">
              {[
                { platform: "facebook", href: "https://www.facebook.com/people/Gilbert-Data-LLC/100063899331148/", icon: <Facebook className="w-5 h-5" /> },
                { platform: "twitter", href: "https://x.com/gilbertdata", icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) },
                { platform: "linkedin", href: "https://www.linkedin.com/company/gilbertdata/", icon: <Linkedin className="w-5 h-5" /> }
              ].map((item) => (
                <a 
                  key={item.platform} 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface hover:bg-[#131b2e] hover:text-white hover:border-[#131b2e] transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-on-surface-variant">
          <p>© 2026 GilbertData. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
