# Project Rules & Style Guidelines

## Banner CTA Design
When creating CTA (Call to Action) banners or mini banners inside pages, ALWAYS strictly adhere to the following color code and layout pattern requested by the user:

- **Background**: Very dark blue/black (`bg-[#131b2e]`) or similar dark gradient.
- **Title**: White text. Example: `Get Verified & Customized [Service] Now`.
- **Subtitle**: Faint white text (`text-white/70`). Example: `We assemble lists tailored precisely to your specific sales parameters.`
- **Button**: Solid light green background (`bg-[#8dc63f]`), dark text (`text-[#131b2e]`), NO gradients on the button background. Text must be ALL CAPS: `CONTACT US`.

Example HTML Structure:
```tsx
<section className="max-w-[1280px] mx-auto px-5 md:px-10 py-12">
  <div className="bg-gradient-to-r from-[#131b2e] via-[#131b2e] to-[#131b2e] text-on-primary p-10 md:p-14 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-2xl border border-white/5">
    <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }} />
    <div className="relative z-10 space-y-2">
      <h3 className="font-display-lg text-2xl md:text-3xl font-extrabold tracking-tight">Get Verified & Customized B2B Email List Now</h3>
      <p className="text-white/70 text-sm mt-2 font-medium">We assemble lists tailored precisely to your specific sales parameters.</p>
    </div>
    <Link href="/contact" className="relative z-10 bg-[#8dc63f] text-[#131b2e] hover:brightness-110 px-10 py-4 rounded-xl font-label-mono text-label-mono transition-all font-bold whitespace-nowrap shadow-lg">
      CONTACT US
    </Link>
  </div>
</section>
```
