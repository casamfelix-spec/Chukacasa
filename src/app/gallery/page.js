export default function Gallery() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-100 p-8 pt-24">
      <h1 className="text-3xl font-serif mb-8 text-center">The Exhibition</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="aspect-[3/4] bg-slate-800 rounded border border-slate-700 flex items-center justify-center">Artwork 1</div>
        <div className="aspect-square bg-slate-800 rounded border border-slate-700 flex items-center justify-center">Artwork 2</div>
        <div className="aspect-[4/3] bg-slate-800 rounded border border-slate-700 flex items-center justify-center">Artwork 3</div>
      </div>
    </main>
  );
}
