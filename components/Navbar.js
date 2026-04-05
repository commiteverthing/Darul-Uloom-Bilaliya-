import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLang } from '../contexts/LanguageContext';
import { LANGUAGES } from '../lib/i18n';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: 'nav.home', href: '/' },
    { label: 'nav.about', href: '/about' },
    { label: 'nav.admission', href: '/admission' },
    { label: 'nav.notifications', href: '/notifications' },
    { label: 'nav.help', href: '/help' },
    { label: 'nav.login', href: '/login' },
  ];

  return (
    <nav className="text-white shadow-lg animate-fade-in-down" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all group">
            <img src="/assets/images/logo.png" alt="Logo" className="h-12 w-12 object-cover rounded-full ring-2 ring-emerald-500/50 group-hover:ring-emerald-400 transition-all" />
            <div className="hidden sm:flex flex-col">
              <h1 className="text-xl font-bold tracking-tight">Darul Uloom Bilaliya</h1>
              <span className="text-sm font-urdu opacity-80">دارالعلوم بلالیہ</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Translate text={item.label} />
                  </Link>
                </li>
              );
            })}

            {/* Donate button */}
            <li>
              <Link
                href="/donate"
                className={`${
                  router.pathname === '/donate'
                    ? 'bg-emerald-600 ring-2 ring-emerald-500'
                    : 'bg-emerald-600 hover:bg-emerald-500'
                } text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all ml-2 shadow-lg shadow-emerald-500/20`}
              >
                <Translate text="nav.donate" />
              </Link>
            </li>

            {/* Language Selector */}
            <li className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/20 transition-all font-urdu"
              >
                <span>{LANGUAGES[lang]?.name}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)}></div>
                  <div className="absolute right-0 rtl:right-auto rtl:left-0 top-full mt-2 w-44 bg-white text-gray-900 rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-scale-in">
                    {Object.entries(LANGUAGES).map(([code, l]) => (
                      <button
                        key={code}
                        onClick={() => { setLang(code); setLangOpen(false); }}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition-all font-urdu ${
                          lang === code ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700'
                        }`}
                      >
                        <span>{l.name}</span>
                        {lang === code && (
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </li>
          </ul>

          {/* Mobile: Language + Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="lg:hidden px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-urdu"
            >
              {LANGUAGES[lang]?.name}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm border-t border-white/10 animate-fade-in-up">
            <ul className="px-4 py-3 space-y-1">
              {navItems.map((item, i) => {
                const isActive = router.pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <Translate text={item.label} />
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="block mx-1 text-center bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg"
                >
                  <Translate text="nav.donate" />
                </Link>
              </li>
            </ul>

            {/* Mobile Language Picker */}
            {langOpen && (
              <div className="px-4 pb-3 animate-fade-in">
                <div className="grid grid-cols-4 gap-2">
                  {Object.entries(LANGUAGES).map(([code, l]) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setLangOpen(false); }}
                      className={`flex items-center justify-center px-3 py-3 rounded-xl text-sm font-urdu transition-all ${
                        lang === code ? 'bg-emerald-600 text-white font-bold' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

// Translation helper component
function Translate({ text }) {
  const { t } = useLang();
  return <span className="font-urdu">{t(text)}</span>;
}
