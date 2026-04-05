import { useLang } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-auto animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8 border-b border-gray-800 pb-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-xl mb-3">Darul-Uloom Bilaliya</h3>
            <p className="text-gray-400 leading-relaxed text-sm max-w-md">
              One of the well-known Islamic institutions of Jammu & Kashmir.
              Nurturing minds and hearts in the light of the Quran and Sunnah since 25th Shawwal 1411 AH.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>Ahmada Kadal, Lal Bazar</p>
              <p>& Ashrafabad, Khimber, Srinagar</p>
              <p className="pt-1">Ph: 0194-2420536</p>
              <p>9419018978</p>
              <p>7006774464</p>
              <p>7780969812</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <div className="space-y-2 text-sm">
              {[
                { label: t('nav.home'), href: '/' },
                { label: t('nav.about'), href: '/about' },
                { label: t('nav.admission'), href: '/admission' },
                { label: t('nav.donate'), href: '/donate', accent: true },
                { label: t('nav.notifications'), href: '/notifications' },
                { label: t('nav.help'), href: '/help' },
              ].map(link => (
                <p key={link.href}>
                  <a href={link.href} className={`${
                    link.accent ? 'text-emerald-400 hover:text-emerald-300 font-semibold' : 'text-gray-400 hover:text-white'
                  } transition-all`}>
                    {link.label}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 text-center text-gray-500 text-sm flex items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Darul Uloom Bilaliya. {t('footer.rights')}</p>
          <p className="text-gray-600">{t('footer.built')}</p>
        </div>
      </div>
    </footer>
  );
}
