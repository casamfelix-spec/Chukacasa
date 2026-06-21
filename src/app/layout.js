import './globals.css';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000638] text-slate-100 min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
