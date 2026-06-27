import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[85vh] bg-[#020617] text-slate-100 flex flex-col justify-center items-center px-8 text-center animate-fade-in">
      <div className="max-w-xl space-y-8">
        {/* Artist Name: Tiny, spaced out, hyper-refined */}
        <h1 className="text-xl md:text-2xl font-serif tracking-[0.3em] font-light text-slate-100 uppercase">
          Chuka
        </h1>
        
        <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500 font-light">
          contemporary painter
        </p>
        
        {/* Thin, elegant separator line */}
        <div className="w-6 h-[1px] bg-slate-800 mx-auto my-6"></div>
        
        {/* Smaller, lighter paragraph body text */}
        <p className="text-slate-400 font-light tracking-wide leading-relaxed text-xs md:text-sm max-w-sm mx-auto antialiased">
          exploring depth, texture, and emotional landscapes through contemporary oil and canvas. a dialogue between structural form and organic chaos.
        </p>
        
        <div className="pt-4">
          <Link 
            href="/gallery" 
            className="text-[10px] uppercase tracking-[0.3em] text-slate-400 border-b border-slate-800 pb-2 hover:text-slate-100 hover:border-slate-300 transition-all duration-500 ease-out inline-block"
          >
            enter collection
          </Link>
        </div>
      </div>
    </main>
  );
}
