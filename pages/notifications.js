import { useLang } from '../contexts/LanguageContext';
import { getNotifications } from '../lib/admin';

export default function Notifications() {
  const { t, isRtl } = useLang();
  const notifications = getNotifications();

  return (
    <div className={`min-h-screen bg-gray-50 page-enter ${isRtl ? 'font-urdu' : ''}`}>
      {notifications.length > 0 ? (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-10 opacity-0 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-black">{t('notifications.title')}</h1>
          </div>

          <div className="space-y-4">
            {notifications.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                {item.urgent && (
                  <div className={`bg-red-50 border-b border-red-100 px-6 py-2 flex items-center gap-2 ${isRtl ? 'rtl:flex-row-reverse' : ''}`}>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className={`text-red-600 text-sm font-semibold ${isRtl ? 'font-urdu' : ''}`}>
                      {isRtl ? 'فوری' : 'Urgent'}
                    </span>
                  </div>
                )}
                <div className={`px-6 py-5 ${isRtl ? 'font-urdu' : ''}`}>
                  <div className={`flex items-start justify-between gap-4 ${isRtl ? 'rtl:flex-row-reverse' : ''}`}>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-black">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white text-center py-8 px-4">
          <h1 className="text-4xl font-bold text-black">{t('notifications.title')}</h1>
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-gray-50 rounded-2xl p-12 border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg font-urdu">{t('notifications.empty')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
