import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 px-6 py-20 md:py-32 max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center animate-fade-in">
      
      {/* Left Column: Minimalist Typography */}
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif tracking-wide text-slate-100">
          Chuka
        </h1>
        <p className="text-sm uppercase tracking-widest text-slate-400 font-light">
          Contemporary Painter
        </p>
        <div className="w-12 h-[1px] bg-slate-600 my-4"></div>
        <p className="text-slate-300 font-light leading-relaxed max-w-md text-base md:text-lg">
          Exploring depth, texture, and emotional landscapes through contemporary oil and canvas medium. Each piece stands as an open dialogue between structural form and organic chaos.
        </p>
        <div className="pt-4">
          <Link href="/gallery" className="text-sm uppercase tracking-widest text-slate-200 border-b border-slate-600 pb-1 hover:border-slate-100 transition-colors duration-300">
            View Collection
          </Link>
        </div>
      </div>

      {/* Right Column: Curated Small Paintings Side-by-Side */}
      <div className="flex-1 w-full grid grid-cols-2 gap-4 items-start">
        {/* First small painting (shifted slightly down for asymmetric elegance) */}
        <div className="rounded overflow-hidden border border-slate-900/60 shadow-2xl mt-8 transition-transform duration-700 hover:scale-[1.02]">
          <Image 
            src="/painting1.jpg" // 👈 Check/replace with an actual filename
            alt="Artwork selection"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        
        {/* Second small painting */}
        <div className="rounded overflow-hidden border border-slate-900/60 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <Image 
            src="/painting2.jpg" // 👈 Check/replace with another filename or keep same for testing
            alt="Artwork selection"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

    </main>
  );
}

