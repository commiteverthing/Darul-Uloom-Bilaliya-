import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Poppins, Inter } from 'next/font/google';
import { LanguageProvider } from '../contexts/LanguageContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <div className={`${poppins.variable} ${inter.variable} flex flex-col min-h-screen font-sans`}>
        <Navbar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
