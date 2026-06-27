import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Chuka Portfolio',
  description: 'Contemporary Painter Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Changed background strictly to #020617 across the entire universe of your site */}
      <body className="bg-[#020617] text-slate-100 min-h-screen antialiased selection:bg-slate-800 selection:text-slate-200">
        <Header />
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
