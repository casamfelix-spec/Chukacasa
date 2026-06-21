export default function About() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-100 p-8 pt-24 max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif mb-6">About the Artist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[3/4] bg-slate-800 rounded border border-slate-700 flex items-center justify-center">Artist Portrait</div>
        <div>
          <p className="text-slate-300 leading-relaxed mb-4">Artist biography goes here...</p>
          <p className="text-slate-300 leading-relaxed italic">"Artist statement or philosophy about painting."</p>
        </div>
      </div>
    </main>
  );
}
