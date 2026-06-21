export default function Home() {
  return (
    <main className="min-h-screen bg-[#00061C] text-slate-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-serif mb-4">Artist Name</h1>
      <p className="text-xl text-slate-400 mb-8 italic">Contemporary Painter</p>
      <div className="w-full max-w-2xl aspect-[4/3] bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
        <p className="text-slate-500">Featured Painting Placeholder</p>
      </div>
    </main>
  );
}
