import { useLang } from '../contexts/LanguageContext';

export default function Admission() {
  const { t, isRtl } = useLang();

  const steps = isRtl
    ? [
        { num: '۱', text: 'مکمل داخلہ فارم اور ضروری دستاویزات جمع کروائیں۔' },
        { num: '۲', text: 'سمنار کے ذریعے تعارفی انٹرویو یا تشخیصی سیشن میں حاضر ہوں۔' },
        { num: '۳', text: 'داخلہ کا فیصلہ اور اندراج کی تصدیق ای میل یا فون کے ذریعے حاصل کریں۔' },
        { num: '۴', text: 'لاگو فیس ادا کرکے اور اورینٹیشن میں حاضر ہوکر اندراج مکمل کریں۔' },
      ]
    : [
        { num: '1', text: 'Submit the completed admission application form along with required documents.' },
        { num: '2', text: 'Attend an introductory interview or assessment session scheduled by the seminary.' },
        { num: '3', text: 'Receive the admission decision and enrollment confirmation via email or phone.' },
        { num: '4', text: 'Complete registration by paying the applicable fees and attending the orientation.' },
      ];

  const dates = isRtl
    ? [
        { label: 'درخواست کا مدت شروع', value: 'بعد میں اعلان کیا جائے گا' },
        { label: 'درخواست کی آخری تاریخ', value: 'بعد میں اعلان کیا جائے گا' },
        { label: 'تشخیص / انٹرویو', value: 'بعد میں اعلان کیا جائے گا' },
        { label: 'تعارفی دن', value: 'بعد میں اعلان کیا جائے گا' },
      ]
    : [
        { label: 'Application Period Opens', value: 'To Be Announced' },
        { label: 'Application Deadline', value: 'To Be Announced' },
        { label: 'Assessment / Interview', value: 'To Be Announced' },
        { label: 'Orientation Day', value: 'To Be Announced' },
      ];

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className={`relative text-center py-16 px-4 ${isRtl ? 'font-urdu' : ''}`}>
          <h1 className="text-3xl md:text-4xl font-bold">{t('admission.title')}</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">{t('admission.tagline')}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Admission Process */}
        <section className={`opacity-0 animate-fade-in-up stagger-1 ${isRtl ? 'font-urdu' : ''}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className={`text-2xl font-bold text-black mb-8 ${isRtl ? 'font-urdu' : ''}`}>
              {isRtl ? 'داخلہ کا طریقہ کار' : 'Admission Process'}
            </h2>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-5 rtl:flex-row-reverse pb-6 last:pb-0">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-lg font-bold shadow-lg shadow-emerald-500/20">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-700 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className={`opacity-0 animate-fade-in-up stagger-2 ${isRtl ? 'font-urdu' : ''}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-6">
              {isRtl ? 'اہم تاریخیں' : 'Important Dates'}
            </h2>
            <div className="space-y-3">
              {dates.map((item, i) => (
                <div key={i} className={`flex justify-between items-center bg-gray-50 rounded-xl px-6 py-4 border border-gray-100 hover:border-emerald-200 transition-all rtl:flex-row-reverse`}>
                  <span className="font-medium text-black">{item.label}</span>
                  <span className="text-gray-500 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className={`opacity-0 animate-fade-in-up stagger-3 ${isRtl ? 'font-urdu' : ''}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 card-hover transition-all duration-300">
            <h2 className="text-2xl font-bold text-black mb-3">
              {isRtl ? 'درخواست فارم' : 'Application Form'}
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {isRtl ? 'آن لائن درخواست فارم جلد دستیاب ہوگا۔' : 'The online application form will be available here soon.'}
            </p>
            <div className="bg-gray-50 rounded-xl p-12 border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">{isRtl ? 'جلد آ رہا ہے' : 'Coming Soon'}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
