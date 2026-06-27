import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#020617] text-slate-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-serif mb-2 tracking-wide">Chuka</h1>
      <p className="text-xl text-slate-400 mb-8 italic">Contemporary Painter</p>
      
      {/* Container for the real image */}
      <div className="w-full max-w-2xl rounded-lg overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50">
        <Image 
          src="/tree.jpeg" // 👈 Change this to your exact filename (e.g., /sunset.jpg)
          alt="Featured Artwork by Chuka"
          width={800}          // Tells Next.js the aspect ratio shape
          height={600}         // Tells Next.js the aspect ratio shape
          className="w-full h-auto object-cover"
          priority             // Loads this image instantly without lag
        />
      </div>
    </main>
  );
}

