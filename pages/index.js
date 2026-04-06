import Link from 'next/link';
import { useLang } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLang();

  return (
    <div className="page-enter overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/assets/images/hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-emerald-300/90 mb-4 font-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
            <h3 className="text-lg md:text-xl text-emerald-200/80 mb-6">Welcome to Darul Uloom Bilaliya</h3>
          </div>
          <div className="opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Darul Uloom Bilaliya
            </h1>
          </div>
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-urdu">
              {t('home.hero.description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up stagger-3">
            <Link
              href="/about"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40"
            >
              {t('home.learn_more')}
            </Link>
            <Link
              href="/donate"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/20"
            >
              {t('home.donate_now')}
            </Link>
          </div>
        </div>
      </div>

      {/* About Cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-black mb-3">{t('home.what_we_offer')}</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.education.title'),
                desc: t('home.education.desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: t('home.hifz.title'),
                desc: t('home.hifz.desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                ),
              },
              {
                title: t('home.character.title'),
                desc: t('home.character.desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3 font-urdu">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-urdu">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '875', label: 'Students' },
            { value: '72', label: 'Teachers' },
            { value: '583', label: 'Huffaz Graduated' },
            { value: '36', label: 'Years of Service' },
          ].map((stat, i) => (
            <div key={i} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <p className="text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">{t('home.cta.title')}</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto font-urdu">
            {t('home.cta.desc')}
          </p>
          <Link
            href="/donate"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            {t('home.donate_now')}
          </Link>
        </div>
      </section>
    </div>
  );
}
