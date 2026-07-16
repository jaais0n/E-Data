"use client";

import { useState } from "react";
import Link from "next/link";

const techCategories = [
  {
    category: "ERP SOFTWARE",
    items: ["SAP Users", "Oracle Users", "Microsoft Dynamics Users", "Infor Users", "Epicor Users", "Sage Users", "Lawson Users", "JD Edwards Users", "NetSuite Users", "PeopleSoft Users", "QAD Users", "Workday Users", "Plex Systems Users", "Syspro Users", "Acumatica Users"]
  },
  {
    category: "CRM SOFTWARE",
    items: ["Salesforce Users", "Microsoft Dynamics CRM Users", "Oracle CRM Users", "SAP CRM Users", "Siebel CRM Users", "SugarCRM Users", "Act! Users", "GoldMine Users", "HubSpot CRM Users", "Zoho CRM Users", "Insightly Users", "Pipedrive Users", "Nimble Users", "Freshsales Users", "Zendesk Sell Users"]
  },
  {
    category: "DBMS SOFTWARE",
    items: ["Oracle Database Users", "Microsoft SQL Server Users", "IBM DB2 Users", "MySQL Users", "PostgreSQL Users", "MongoDB Users", "Sybase Users", "Teradata Users", "Cassandra Users", "Redis Users", "MariaDB Users", "SQLite Users", "Amazon Aurora Users", "Couchbase Users"]
  },
  {
    category: "OS SOFTWARE",
    items: ["Windows Users", "Linux Users", "Unix Users", "Mac OS Users", "IBM AIX Users", "HP-UX Users", "Solaris Users", "Ubuntu Users", "Red Hat Enterprise Linux Users", "CentOS Users", "Debian Users", "FreeBSD Users"]
  },
  {
    category: "HARDWARE USERS",
    items: ["Cisco Users", "Dell Users", "HP Users", "IBM Users", "Apple Users", "Lenovo Users", "Sun Microsystems Users", "Juniper Networks Users", "EMC Users", "NetApp Users", "HPE Users", "Asus Users", "Acer Users"]
  },
  {
    category: "CLOUD COMPUTING USERS",
    items: ["Amazon Web Services (AWS) Users", "Microsoft Azure Users", "Google Cloud Platform Users", "IBM Cloud Users", "Oracle Cloud Users", "VMware Users", "Salesforce Cloud Users", "Alibaba Cloud Users", "Rackspace Users", "DigitalOcean Users"]
  },
  {
    category: "BIG DATA USERS",
    items: ["Hadoop Users", "Splunk Users", "Tableau Users", "QlikView Users", "Apache Spark Users", "Cloudera Users", "Hortonworks Users", "MapR Users", "Palantir Users", "Talend Users", "Alteryx Users"]
  },
  {
    category: "NETWORKING USERS",
    items: ["Juniper Networks Users", "F5 Networks Users", "Brocade Users", "Palo Alto Networks Users", "Cisco Meraki Users", "Aruba Networks Users", "Fortinet Users", "Riverbed Users", "Extreme Networks Users"]
  },
  {
    category: "SECURITY SOFTWARE USERS",
    items: ["Symantec Users", "McAfee Users", "Trend Micro Users", "Check Point Users", "Fortinet Users", "RSA Security Users", "Kaspersky Users", "FireEye Users", "CrowdStrike Users", "Sophos Users", "SonicWall Users", "Barracuda Networks Users"]
  },
  {
    category: "BUSINESS INTELLIGENCE",
    items: ["Tableau Users", "Microsoft Power BI Users", "Qlik Sense Users", "Looker Users", "Sisense Users", "Domo Users", "MicroStrategy Users", "IBM Cognos Users", "SAP BusinessObjects Users", "SAS Users"]
  },
  {
    category: "MARKETING AUTOMATION",
    items: ["Marketo Users", "HubSpot Users", "Pardot Users", "Eloqua Users", "ActiveCampaign Users", "Mailchimp Users", "Keap Users", "Ontraport Users", "Klaviyo Users", "Sendinblue Users"]
  },
  {
    category: "E-COMMERCE SOFTWARE",
    items: ["Shopify Users", "Magento Users", "WooCommerce Users", "BigCommerce Users", "Salesforce Commerce Cloud Users", "PrestaShop Users", "OpenCart Users", "Volusion Users", "Squarespace Commerce Users"]
  },
  {
    category: "HR SOFTWARE",
    items: ["Workday Users", "BambooHR Users", "Paycom Users", "ADP Users", "UltiPro Users", "Zenefits Users", "Gusto Users", "Oracle HCM Users", "SAP SuccessFactors Users", "Cornerstone OnDemand Users"]
  },
  {
    category: "PROJECT MANAGEMENT",
    items: ["Jira Users", "Asana Users", "Trello Users", "Monday.com Users", "Wrike Users", "Smartsheet Users", "Basecamp Users", "ClickUp Users", "Microsoft Project Users", "Airtable Users"]
  },
  {
    category: "ACCOUNTING SOFTWARE",
    items: ["QuickBooks Users", "Xero Users", "FreshBooks Users", "Sage Intacct Users", "Zoho Books Users", "Wave Accounting Users", "NetSuite ERP Users", "Odoo Users", "Kashoo Users"]
  },
  {
    category: "SUPPLY CHAIN MANAGEMENT",
    items: ["SAP SCM Users", "Oracle SCM Users", "JDA Software Users", "Manhattan Associates Users", "Infor SCM Users", "HighJump Users", "Descartes Users", "Kinaxis Users", "Blue Yonder Users"]
  },
  {
    category: "CONTENT MANAGEMENT",
    items: ["WordPress Users", "Drupal Users", "Joomla Users", "Sitecore Users", "Adobe Experience Manager Users", "Contentful Users", "Kentico Users", "Liferay Users", "Umbraco Users", "Ghost Users"]
  },
  {
    category: "IT SERVICE MANAGEMENT",
    items: ["ServiceNow Users", "BMC Remedy Users", "Jira Service Management Users", "Zendesk Users", "Freshservice Users", "SolarWinds Users", "Ivanti Users", "ManageEngine Users", "Cherwell Users"]
  }
];

const faqs = [
  {
    q: "How is Gilbert Data different from other data/list providers?",
    a: "Gilbertdata has been a leader in specialised data products for 14 years. We offer comprehensive data management, cleaning, multi-channel verification, and other services. We fix data and provide niche knowledge to boost productivity. Custom data fields can boost your company’s bottom line, so we went the extra mile."
  },
  {
    q: "How does Gilbert Data collect data? What are the sources?",
    a: "We obtain authentic information from offline and online sources such worldwide gatherings, face-to-face meetings, public directories and records, and governmental organisations. Our continually updated master database is selected with this information in mind, giving you access to highly detailed, validated data across several channels."
  },
  {
    q: "How reliable is Gilbert Data data?",
    a: "80% of our business comes from returning customers, and they all promote us and give referrals. Both the product and the client are important to Gilbertdata. If you’re expanding, we can offer reliable advice."
  },
  {
    q: "How does Gilbert Data validate data?",
    a: "Everything about a contact is checked, double checked, and cleaned before it even makes it into our master data warehouse of 56+ million contacts. De-duplication, syntax error checking, blacklist screening, bounce and compliance check, spam and garbage removal, and data delivery validation are all part of our cleansing and validation process."
  },
  {
    q: "What if I find information I know is wrong?",
    a: "Information is ever-changing and unpredictable. This quarter’s business manager could be today’s chief executive officer at another firm. Customers are always on the go, so we verify the accuracy of their records on a regular basis."
  },
  {
    q: "What is the deliverability guarantee?",
    a: "Our deliverability percentage ranges from 90% to 95% because of our stringent data hygiene procedures, which in turn leads to a large number of repeat customers and satisfied end users who are happy to refer us to their friends."
  },
  {
    q: "How does the list get sent to me?",
    a: "We prepare the contact information in the required CSV fields and columns."
  },
  {
    q: "What is single use rental?",
    a: "Single-use data purchases offer neither ownership nor access to the data. It’s single-use. You can choose from various usage options based on your campaign goals."
  }
];

export default function TechnologyInstalls() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative bg-[#0b0f19] text-on-primary pt-32 md:pt-48 pb-16 md:pb-28 overflow-hidden border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#131b2e]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#131b2e]/10 rounded-full blur-[120px] animate-pulse duration-[8000ms] pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-mono text-label-mono text-secondary-fixed mb-2 block tracking-widest font-bold">TECHNOLOGY INSTALLS</span>
              <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-extrabold tracking-tight">
                Technology Users <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] italic pr-1">List</span>
              </h1>
              <p className="text-body-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Gilbert Data technology email lists will help marketers to connect with technology professionals, technology users, and decision makers from the IT industry. Reach out to top technology executives globally using our comprehensive and updated technology email list.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#131b2e] p-10 border border-[#1a2642] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center min-h-[440px]">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-3xl">memory</span>
                </div>
                <span className="font-label-mono text-label-mono text-[#8dc63f] mb-2 block font-bold">GET IN TOUCH</span>
                <h3 className="font-display-lg text-2xl mb-4 text-white">Technology <span className="text-transparent bg-clip-text pr-1 bg-gradient-to-r from-blue-400 to-[#8dc63f]">Email List</span></h3>
                <p className="text-sm text-white/70 mb-8 leading-relaxed max-w-sm">
                  Ready to acquire your customized technology contact lists? Click below to reach out to our data experts.
                </p>
                <Link href="/contact" className="w-full bg-gradient-to-r from-[#8dc63f] to-[#9cd34c] hover:brightness-110 text-[#131b2e] py-4 rounded-2xl font-label-mono text-label-mono hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-lg font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 Introduction Section */}
        <section className="bg-background py-10 md:py-20 border-b border-outline-variant/30">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center space-y-6">
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Are you an IT service provider, software supplier, or software marketer looking for ways to expand your market footprint globally? GilbertData Technology Users List empowers you with an extensive database of IT decision-makers, tech professionals, and businesses that use specific hardware, software, and cloud applications.
            </p>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Whether you are targeting users of CRM, ERP, Cloud platforms, DBMS, or Networking software, our meticulously compiled lists ensure your marketing messages reach the right inbox. With a deliverability rate of over 95%, we guarantee that your campaigns achieve maximum ROI and conversion rates.
            </p>
          </div>
        </section>

        {/* 2. Image and Text Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-10 py-24 border-b border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative justify-self-center lg:justify-self-start">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-[#8dc63f] opacity-20 blur-2xl rounded-full"></div>
              <img loading="lazy" decoding="async" 
                alt="Technology Installs" 
                className="w-full max-w-[500px] h-auto object-cover rounded-2xl diffusion-shadow relative z-10"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              />
            </div>
            <div className="space-y-6">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">WHY CHOOSE US</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
                Benefits of Our Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] pr-1">Users List</span>
              </h2>
              <ul className="space-y-4 mt-6">
                {[
                  { title: "Comprehensive Coverage", desc: "Access to thousands of tech contacts across various industries." },
                  { title: "Verified and Updated", desc: "Data is regularly cleansed and verified to maintain high accuracy." },
                  { title: "High Deliverability", desc: "Ensures your emails bypass spam filters and land in the inbox." },
                  { title: "Customization", desc: "Segment lists based on specific technologies, company size, revenue, and geography." },
                  { title: "Global Reach", desc: "Connect with professionals in the USA, UK, Canada, Europe, Australia, and more." }
                ].map(item => (
                  <li key={item.title} className="flex items-start gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-[#8dc63f] mt-1 shrink-0">article</span>
                    <div>
                      <span className="font-bold text-primary">{item.title}:</span> <span className="text-on-surface-variant">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3 & 4. Customization and Massive Grid */}
        <section className="bg-surface-container-lowest py-24 border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 text-center mb-10 md:mb-16">
            <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest mb-4 block">CATEGORIES</span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-black mb-6" data-aos="fade-up">
              Key Technology Users List From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] pr-1">GilbertData</span>
            </h2>
            <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">
              Our technology lists are segmented into various categories to ensure you reach the exact right professionals utilizing the software and hardware products relevant to your services.
            </p>
          </div>
          
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up" data-aos-delay="100">
              {techCategories.map((cat, i) => (
                <div key={i} className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-2xl hover:border-[#131b2e]/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-display-lg text-xl font-bold text-primary mb-6 uppercase tracking-wide border-b border-outline-variant/30 pb-4">
                    {cat.category}
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-on-surface-variant hover:text-primary transition-colors group">
                        <span className="material-symbols-outlined text-[#8dc63f] text-sm mt-1 shrink-0 group-hover:scale-110 transition-transform">article</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ Section */}
        <section className="bg-background py-24 border-b border-outline-variant/30">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="text-center mb-10 md:mb-16 space-y-3" data-aos="fade-up">
              <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">FAQ</span>
              <h2 className="font-display-lg text-3xl md:text-5xl font-black" data-aos="fade-up">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8dc63f] pr-1">Questions</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-[#131b2e]/30 transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <h3 className="font-headline-md text-lg font-bold text-primary">{faq.q}</h3>
                    </div>
                    <span className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <p className="text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



      </main>
    </div>
  );
}
