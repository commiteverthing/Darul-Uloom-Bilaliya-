import { useLang } from '../contexts/LanguageContext';

export default function About() {
  const { t, lang, isRtl } = useLang();

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        <div className={`relative text-center py-16 px-4 ${isRtl ? 'font-urdu' : ''}`}>
          <h2 className="text-4xl font-arabic text-emerald-300/90 mb-4">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
          <h3 className="text-xl text-emerald-200/80 mb-2">Welcome to Darul Uloom Bilaliya</h3>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{t('about.title')}</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">{t('about.tagline')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Introduction */}
        <section className="opacity-0 animate-fade-in-up stagger-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 card-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black font-urdu">{t('about.intro.title')}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg font-urdu">
              {t('about.intro.text')}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-urdu mt-4">
              {isRtl
                ? 'قریباً 875 طلباء قرآن مجید کے حفظ اور دیگر نبوی علوم کی تعلیم کے لیے یہاں مقیم ہیں۔ ان کی تعلیم، تربیت، سکونت، کھانا اور دیگر روزمرہ کی ضروریات مکمل طور پر مفت فراہم کی جاتی ہیں۔'
                : 'Around 875 students reside here for the memorization of the Holy Qur\'an and other Prophetic sciences (PBUH). Their education, training, accommodation, meals, and other daily necessities are provided completely free of cost.'}
            </p>
          </div>
        </section>

        {/* Staff & Administration */}
        <section className="opacity-0 animate-fade-in-up stagger-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black font-urdu">{t('about.staff.title')}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 font-urdu">
              {isRtl
                ? 'تعلیم، تربیت اور انتظام کو یقینی بنانے کے لیے اساتذہ اور عملہ کے ارکان ہر وقت فعال طور پر مصروف رہتے ہیں۔ طلباء کی بڑھتی ہوئی تعداد کی وجہ سے تعمیراتی کام سال بھر جاری رہتا ہے۔'
                : 'To ensure proper education, training, and administration, dedicated teachers and staff members remain actively engaged at all times.'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-urdu">
              {[
                { value: '875', label: isRtl ? 'طلباء' : 'Students' },
                { value: '72', label: isRtl ? 'اساتذہ' : 'Teachers' },
                { value: '38', label: isRtl ? 'عملہ' : 'Staff' },
                { value: '36', label: isRtl ? 'سال' : 'Years' },
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center card-hover border border-gray-200/50">
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Graduates */}
        <section className="opacity-0 animate-fade-in-up stagger-3">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-lg p-8 md:p-10 border border-emerald-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-200/50 p-2 rounded-lg">
                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-urdu">
                {isRtl ? 'امت کی خدمت کرنے والے فارغ التحصیل طلباء' : 'Graduates Serving the Ummah'}
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 font-urdu">
              {isRtl
                ? 'قیام کے وقت سے، ادارے نے فخر سے ممتاز علماء اور حفاظ کی پیداوار کی ہے جو مختلف شعبوں میں امت کی خدمت کر رہے ہیں۔'
                : 'Since its establishment, the institution has proudly produced distinguished scholars who are serving the Ummah in various capacities.'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-urdu">
              {[
                { value: '583', label: isRtl ? 'حفاظ کرام' : 'Huffaz-e-Kiram' },
                { value: '150', label: isRtl ? 'قراء کرام' : 'Qurra-e-Ezam' },
                { value: '193', label: isRtl ? 'علماء کرام' : 'Ulama-e-Kiram' },
                { value: '92', label: isRtl ? 'مفتیان کرام' : 'Muftiyan-e-Kiram' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center card-hover shadow-sm border border-emerald-100/50 opacity-0 animate-scale-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <p className="text-4xl font-bold text-emerald-600">{stat.value}</p>
                  <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="opacity-0 animate-fade-in-up stagger-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full card-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-black font-urdu">
                  {isRtl ? 'ہمارا مشن' : 'Our Mission'}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-urdu">
                {isRtl
                  ? 'قرآن و سنت کی بنیاد پر طلباء کو مستند اسلامی علم، عربی زبان کی مضبوط مہارت اور اچھے کردار کی پرورش کرنا تاکہ وہ معاشرے کے مفید ارکان بنیں جو حکمت اور فہم کے ساتھ اسلام کا پیغام پہنچائیں۔'
                  : 'To nurture students with authentic Islamic knowledge based on the Quran and Sunnah, along with sound Arabic language skills and good character, so they become beneficial members of society who carry the message of Islam with wisdom and understanding.'}
              </p>
            </div>
          </section>

          <section className="opacity-0 animate-fade-in-up stagger-5">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full card-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-black font-urdu">
                  {isRtl ? 'ہمارا مقصد' : 'Our Vision'}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-urdu">
                {isRtl
                  ? 'اسلامی تعلیم کا ایک ممتاز ادارہ بننا جو علم رکھنے والے اور اصولوں پر عمل کرنے والے افراد کی پیداوار کرے جو اپنے برادریوں میں مثبت تعاون دیں اور اسلام کی قدروں کو دیانتداری اور ایمانداری کے ساتھ برقرار رکھیں۔'
                  : 'To be a leading institution for Islamic education that produces knowledgeable and principled individuals who contribute positively to their communities and uphold the values of Islam with sincerity and integrity.'}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
