import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center text-center px-4">
      <div className="space-y-6">
        <h1 className="font-display-lg text-6xl md:text-8xl font-black text-white">404</h1>
        <h2 className="font-display-lg text-2xl md:text-3xl font-bold text-[#8dc63f]">Page Not Found</h2>
        <p className="text-white/70 max-w-md mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link href="/" className="inline-block mt-8 bg-[#8dc63f] text-[#131b2e] px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all">
          Return Home
        </Link>
      </div>
    </div>
  );
}
