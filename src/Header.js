import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a192f]/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif text-slate-100 tracking-wide">
          ARTIST NAME
        </Link>
        <nav className="flex gap-8 text-sm uppercase tracking-wider text-slate-300">
          <Link href="/gallery" className="hover:text-slate-100 transition">Gallery</Link>
          <Link href="/about" className="hover:text-slate-100 transition">About</Link>
        </nav>
      </div>
    </header>
  );
}
