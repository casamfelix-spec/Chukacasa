import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#020617] z-50">
      <div className="max-w-5xl mx-auto px-8 h-24 flex items-center justify-between">
        {/* Replaced by a minimalist, lowercase 'home' link */}
        <Link href="/" className="text-xs uppercase tracking-[0.25em] text-slate-400 hover:text-slate-100 transition duration-500 font-light">
          home
        </Link>
        <nav className="flex gap-10 text-xs uppercase tracking-[0.25em] text-slate-400 font-light">
          <Link href="/gallery" className="hover:text-slate-100 transition duration-500">gallery</Link>
          <Link href="/about" className="hover:text-slate-100 transition duration-500">about</Link>
        </nav>
      </div>
    </header>
  );
}
