export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 md:pt-48 pb-24">
      <div className="max-w-[800px] mx-auto px-5">
        <h1 className="font-display-lg text-4xl font-extrabold mb-8 text-primary">Terms of Service</h1>
        <p className="text-on-surface-variant mb-6">Last Updated: June 2026</p>
        
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            Welcome to E-Data. By accessing or using our website, datasets, or services, you agree to comply with and be bound by the following Terms of Service.
          </p>
          
          <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-primary pt-4" data-aos="fade-up">1. Use of Services</h2>
          <p>
            You agree to use our marketing database, contact lists, and services strictly in accordance with CAN-SPAM, GDPR, CCPA, and all other applicable laws.
          </p>

          <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-primary pt-4" data-aos="fade-up">2. Intellectual Property</h2>
          <p>
            All content, database structures, designs, and proprietary tools displayed on this website are the intellectual property of E-Data and cannot be copied without prior written consent.
          </p>

          <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-primary pt-4" data-aos="fade-up">3. Limitation of Liability</h2>
          <p>
            E-Data shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our contact lists.
          </p>
        </div>
      </div>
    </div>
  );
}
