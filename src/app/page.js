import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[80vh] bg-[#020617] text-slate-100 flex flex-col justify-center items-center px-8 text-center animate-fade-in">
      <div className="max-w-xl space-y-10">
        
        {/* Chuka: Styled with an old English/classical serif look, italicized, lowercase, and wide */}
        <h1 className="text-3xl md:text-4xl font-['Baskerville','Garamond','Georgia',serif] italic tracking-[0.15em] font-light text-slate-200 lowercase">
          chuka
        </h1>
        
        <p className="text-[10px] uppercase tracking-[0.45em] text-slate-500 font-light">
          contemporary painter
        </p>
        
        <div className="w-4 h-[1px] bg-slate-800 mx-auto my-4"></div>
        
        <p className="text-slate-400 font-light tracking-wide leading-relaxed text-xs max-w-xs mx-auto">
          exploring depth, texture, and emotional landscapes through contemporary oil and canvas. a dialogue between structural form and organic chaos.
        </p>
        
        <div className="pt-4">
          <Link 
            href="/gallery" 
            className="text-[10px] uppercase tracking-[0.3em] text-slate-400 border-b border-slate-900 pb-2 hover:text-slate-100 hover:border-slate-400 transition-all duration-500 ease-out inline-block"
          >
            enter collection
          </Link>
        </div>
      </div>
    </main>
  );
}
