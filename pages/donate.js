import { useLang } from '../contexts/LanguageContext';

export default function Donate() {
  const { t, isRtl } = useLang();

  return (
    <div className={`min-h-screen bg-gray-50 page-enter ${isRtl ? 'font-urdu' : ''}`}>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className={`relative text-center py-16 px-4`}>
          <h1 className="text-3xl md:text-4xl font-bold">{t('donate.title')}</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">{t('donate.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

        {/* Expenditure */}
        <section className="opacity-0 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-6 font-urdu">
              {isRtl ? 'فی طالب علم اوسط خرچ' : 'Average Expenditure Per Student'}
            </h2>
            <div className="flex justify-center gap-6 rtl:space-x-reverse">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl px-10 py-6 border border-emerald-100 card-hover transition-all duration-300">
                <span className="block text-emerald-600 text-sm uppercase tracking-wide mb-2">
                  {isRtl ? 'ماہانہ' : 'Monthly'}
                </span>
                <span className={`text-3xl font-bold text-gray-900 ${isRtl ? 'font-urdu' : ''}`}>
                  {isRtl ? 'روپے ۴۰۰۰' : 'Rs. 4,000'}
                </span>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl px-10 py-6 border border-emerald-100 card-hover transition-all duration-300">
                <span className="block text-emerald-600 text-sm uppercase tracking-wide mb-2">
                  {isRtl ? 'سالانہ' : 'Yearly'}
                </span>
                <span className={`text-3xl font-bold text-gray-900 ${isRtl ? 'font-urdu' : ''}`}>
                  {isRtl ? 'روپے ۴۸۰۰۰' : 'Rs. 48,000'}
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto font-urdu">
              {isRtl
                ? 'تعلیم، تربیت، سکونت، کھانا اور روزمرہ کی ضروریات — سب مفت۔'
                : 'Covers education, training, accommodation, meals, and daily necessities — all provided free of cost to students.'}
            </p>
          </div>
        </section>

        {/* Appeal */}
        <section className="opacity-0 animate-fade-in-up stagger-1">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 p-8 text-center shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto font-urdu">
              {isRtl
                ? 'ہم عاجزی سے بڑے دل والے عطیہ دہندگان سے گزارش کرتے ہیں کہ وہ ادارے کی ضروریات پر غور کریں اور اپنی مخلصانہ تعاون سے ادارے کی مدد کریں، اور اپنے دوستوں اور جاننے والوں کی بھی حوصلہ افزائی کریں۔ اللہ تعالیٰ آپ کے عطیہ کو قبول فرمائے اور دنیا و آخرت میں بہترین اجر عطا فرمائے۔'
                : 'We humbly request generous donors to consider the needs of the institution and support it with their sincere contributions, and also encourage their friends and acquaintances to do the same. May Allah accept your support and grant you the best reward in both worlds.'}
            </p>
          </div>
        </section>

        {/* Bank Accounts */}
        <section>
          <h2 className={`text-2xl font-bold text-black mb-6 text-center opacity-0 animate-fade-in-up stagger-2 ${isRtl ? 'font-urdu' : ''}`}>
            {isRtl ? 'بینک ٹرانسفر کی تفصیلات' : 'Bank Transfer Details'}
          </h2>

          {/* QR Codes */}
          <div className="grid md:grid-cols-2 gap-6 mb-6 opacity-0 animate-fade-in-up stagger-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-4 font-urdu">{isRtl ? 'امداد (کیو آر کوڈ)' : 'Imdad (via QR)'}</h3>
              <div className="bg-gray-50 rounded-xl w-48 h-48 flex items-center justify-center mx-auto border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-sm text-center">{isRtl ? 'کیو آر کوڈ' : 'QR Code'}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-4 font-urdu">{isRtl ? 'زکوٰۃ (کیو آر کوڈ)' : 'Zakat (via QR)'}</h3>
              <div className="bg-gray-50 rounded-xl w-48 h-48 flex items-center justify-center mx-auto border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-sm text-center">{isRtl ? 'کیو آر کوڈ' : 'QR Code'}</p>
              </div>
            </div>
          </div>

          {/* Zakat Bank */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100 opacity-0 animate-fade-in-up stagger-3">
            <h3 className={`text-xl font-bold text-black mb-4 flex items-center gap-2 ${isRtl ? 'font-urdu rtl:flex-row-reverse' : ''}`}>
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                {isRtl ? 'زکوٰۃ' : 'Zakat'}
              </span>
              {isRtl ? 'بینک ٹرانسفر' : 'Bank Transfer'}
            </h3>
            <div className="space-y-3">
              {[
                { acc: '1501 0101 0000 1756', ifsc: 'JAKADEXPORT' },
                { acc: '0346 0101 0000 5792', ifsc: 'JAKAOBOTSHA' },
              ].map((bank, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 transition-all ${isRtl ? 'rtl:flex-row-reverse' : ''}`}>
                  <div >
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">{isRtl ? 'اکاؤنٹ' : 'Account'}</span>
                    <p className="text-lg font-mono font-bold text-black">{bank.acc}</p>
                  </div>
                  <div className={`sm:text-right ${isRtl ? 'sm:text-right' : ''}`}>
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">IFSC Code</span>
                    <p className="text-lg font-mono font-bold text-gray-900">{bank.ifsc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imdad Bank */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100 opacity-0 animate-fade-in-up stagger-4">
            <h3 className={`text-xl font-bold text-black mb-4 flex items-center gap-2 ${isRtl ? 'font-urdu rtl:flex-row-reverse' : ''}`}>
              <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">
                {isRtl ? 'امداد' : 'Imdad'}
              </span>
              {isRtl ? 'بینک ٹرانسفر' : 'Bank Transfer'}
            </h3>
            <div className="space-y-3">
              {[
                { acc: '1501 0101 0000 0283', ifsc: 'JAKAGEXPORT' },
                { acc: '1501 0101 0000 0284', ifsc: 'JAKACEXPORT' },
              ].map((bank, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all ${isRtl ? 'rtl:flex-row-reverse' : ''}`}>
                  <div >
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">{isRtl ? 'اکاؤنٹ' : 'Account'}</span>
                    <p className="text-lg font-mono font-bold text-black">{bank.acc}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">IFSC Code</span>
                    <p className="text-lg font-mono font-bold text-gray-900">{bank.ifsc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="opacity-0 animate-fade-in-up stagger-5">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h2 className={`text-xl font-bold text-black mb-2 text-center font-urdu`}>
              {isRtl ? 'عطیات کے لیے رابطہ کریں' : 'Contact for Donations'}
            </h2>
            <p className="text-gray-500 text-center mb-6 font-urdu">
              {isRtl
                ? 'آپ دفتر سے فون پر بھی رابطہ کر سکتے ہیں اور آپ کے پاس ایک نمائندہ بھیجا جا سکتا ہے۔'
                : 'You may also contact the office by phone, and a representative can be sent to you.'}
            </p>
            <div className="grid md:grid-cols-2 gap-8 font-urdu rtl:space-x-reverse">
              <div>
                <h3 className={`font-semibold text-black mb-2 flex items-center gap-2 ${isRtl ? 'font-urdu rtl:flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {isRtl ? 'فون نمبر' : 'Phone Numbers'}
                </h3>
                <div className="space-y-1 text-gray-600 text-left sm:text-left" dir="ltr">
                  <p>9419018978</p>
                  <p>7006774464</p>
                  <p>7780969812</p>
                </div>
              </div>
              <div>
                <h3 className={`font-semibold text-black mb-2 flex items-center gap-2 ${isRtl ? 'font-urdu rtl:flex-row-reverse' : ''}`}>
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {isRtl ? 'ایڈریس' : 'Address'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  دارالعلوم بلالیہ<br />
                  احمدہ کدل، لال بازار<br />
                  اور اشرف آباد، خیمبر، سری نگر<br />
                  <span className="text-sm" dir="ltr">Ph: 0194-2420536, 9419018978</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
