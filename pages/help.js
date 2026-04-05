import { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';

export default function HelpDesk() {
  const { t, isRtl } = useLang();
  const [openFaqs, setOpenFaqs] = useState({});
  const [form, setForm] = useState({ name: '', relation: 'Parent', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', relation: 'Parent', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const faqData = [
    {
      category: isRtl ? 'داخلہ' : 'Admission',
      items: isRtl
        ? [
            { q: 'میں اپنے بچے کا داخلہ کیسے کروا سکتا ہوں؟', a: 'احمدہ کدل، لال بازار اور اشرف آباد، خیمبر، سری نگر میں دفتر کا دورہ کریں اور داخلہ فارم جمع کروائیں۔ تمام تعلیم، سکونت اور کھانا مکمل طور پر مفت فراہم کیے جاتے ہیں۔' },
            { q: 'کون سے دستاویزات ضروری ہیں؟', a: 'مطلوبہ دستاویزات کی مکمل فہرست کے لیے 9419018978 یا 7006774464 پر دفتر سے رابطہ کریں۔' },
            { q: 'کیا کوئی داخلہ ٹیسٹ ہے؟', a: 'جی ہاں، ایک تعارفی انٹرویو یا تشخیصی سیشن لیا جاتا ہے۔ داخلہ سے پہلے شیڈول کا اعلان کیا جاتا ہے۔' },
          ]
        : [
            { q: 'How do I enroll my child?', a: 'Visit the office at Ahmada Kadal, Lal Bazar & Ashrafabad, Khimber, Srinagar to submit the admission form. All education, accommodation, and meals are provided free of cost.' },
            { q: 'What documents are required?', a: 'Contact the office at 9419018978 or 7006774464 for the complete list of required documents before your visit.' },
            { q: 'Is there an entrance test?', a: 'Yes, an introductory interview or assessment session is conducted. The schedule is announced before the admission period.' },
          ],
    },
    {
      category: isRtl ? 'روزمرہ شیڈول' : 'Daily Schedule',
      items: isRtl
        ? [
            { q: 'والدین کب مل سکتے ہیں؟', a: 'ملاقات کے اوقات دفتر سے طے ہوتے ہیں۔ براہ کرم 0194-2420536 پر کال کریں اور اپنی ملاقات کے شیڈول کی تصدیق کریں۔' },
            { q: 'میں اپنے بچے کی کارکردگی کیسے دیکھ سکتا ہوں؟', a: 'آپ کا بچہ اپنی ڈیش بورڈ رپورٹس شیئر کر سکتا ہے۔ اگر آپ کے بچے کو لاگ ان کی تفصیلات نہیں ملیں تو دفتر سے رابطہ کریں۔' },
            { q: 'کھانے کا انتظام کیسے ہے؟', a: 'تمام کھانے کیمپس پر تیار کیے جاتے ہیں اور مفت فراہم کیے جاتے ہیں۔ خصوصی غذائی انتظامات کے لیے دفتر سے بات کریں۔' },
          ]
        : [
            { q: 'What time can parents visit?', a: 'Visiting hours are managed by the office. Please call 0194-2420536 to confirm your visit schedule.' },
            { q: 'How can I check my child\'s progress?', a: 'Your child can share their dashboard reports. Contact the office for account access if your child has not yet received their login details.' },
            { q: 'How are meals managed?', a: 'All meals are prepared on campus and provided free of cost. Special dietary arrangements can be discussed with the office.' },
          ],
    },
    {
      category: isRtl ? 'عمومی' : 'General',
      items: isRtl
        ? [
            { q: 'کیا طلباء کے لیے کوئی فیس ہے؟', a: 'نہیں۔ تمام اخراجات بشمول تعلیم، تربیت، سکونت، کھانا اور روزمرہ کی ضروریات مکمل طور پر مفت فراہم کیے جاتے ہیں۔' },
            { q: 'میں کس طرح عطیہ دے سکتا ہوں؟', a: 'بینک ٹرانسفر کی تفصیلات اور کیو آر کوڈز کے لیے ہماری Donate صفحہ ملاحظہ کریں۔ یا براہ راست دفتر سے رابطہ کریں۔' },
            { q: 'کیا میں گھر پر نمائندہ بلوا سکتا ہوں؟', a: 'جی ہاں۔ 9419018978 پر دفتر سے کال کریں اور ایک نمائندہ آپ کے پاس بھیجا جائے گا۔' },
          ]
        : [
            { q: 'Is there any fee for students?', a: 'No. All expenses including education, training, accommodation, meals, and daily necessities are provided completely free of cost.' },
            { q: 'How can I donate or support the institution?', a: 'Visit our Donate page for bank transfer details and QR codes. You can also contact the office directly for a representative visit.' },
            { q: 'Can I request a representative to visit my home?', a: 'Yes. Call the office at 9419018978 and a representative can be sent to you.' },
          ],
    },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 page-enter ${isRtl ? 'font-urdu' : ''}`}>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative text-center py-14 px-4">
          <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">{t('help.title')}</h1>
          <p className="text-gray-300 mt-3 text-lg max-w-xl mx-auto">{t('help.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{isRtl ? 'فوری اقدامات' : 'Quick Actions'}</h2>
          <div className="grid md:grid-cols-4 gap-4 opacity-0 animate-fade-in-up stagger-1">
            {[
              { label: t('nav.help'), desc: '0194-2420536', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', href: 'tel:01942420536', color: 'from-emerald-500 to-emerald-600' },
              { label: t('nav.donate'), desc: isRtl ? 'ہمارے طلباء کی حمایت کریں' : 'Support our students', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', href: '/donate', color: 'from-blue-500 to-blue-600' },
              { label: t('nav.admission'), desc: isRtl ? 'اپنے بچے کا داخلہ کروائیں' : 'Enroll your child', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', href: '/admission', color: 'from-purple-500 to-purple-600' },
              { label: t('nav.notifications'), desc: isRtl ? 'تازہ ترین اپ ڈیٹس' : 'Latest updates', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', href: '/notifications', color: 'from-amber-500 to-amber-600' },
            ].map((action, i) => (
              <a key={i} href={action.href}>
                <div className={`bg-gradient-to-br ${action.color} text-white rounded-xl p-6 card-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rtl:space-x-reverse`}>
                  <svg className="w-8 h-8 mb-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                  </svg>
                  <p className="font-semibold text-lg">{action.label}</p>
                  <p className="text-white/70 text-sm mt-1">{action.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="opacity-0 animate-fade-in-up stagger-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{isRtl ? 'عمومی سوالات' : 'Frequently Asked Questions'}</h2>
          <div className="space-y-8">
            {faqData.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2 rtl:flex-row-reverse">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">{cat.category}</span>
                </h3>
                <div className="space-y-2">
                  {cat.items.map((item, itemIdx) => {
                    const idx = `${catIdx}-${itemIdx}`;
                    return (
                      <div key={itemIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left rtl:text-right"
                        >
                          <span className="text-sm font-medium text-gray-900 pe-4">{item.q}</span>
                          <svg
                            className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaqs[idx] ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openFaqs[idx] && (
                          <div className={`px-6 pb-4 animate-fade-in ${isRtl ? 'rtl:text-right' : ''}`}>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden opacity-0 animate-fade-in-up stagger-3">
            <div className={`px-6 py-5 bg-gradient-to-r from-emerald-50 to-green-50 border-b border-emerald-100 ${isRtl ? 'font-urdu' : ''}`}>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 rtl:flex-row-reverse">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {isRtl ? 'ہمیں پیغام بھیجیں' : 'Send Us a Message'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {isRtl ? 'ہم آپ کی درخواست کا جلد از جلد جواب دیں گے۔' : 'We\'ll respond to your inquiry as soon as possible.'}
              </p>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border-b border-emerald-200 text-emerald-700 px-6 py-3 text-sm animate-fade-in-up">
                {isRtl ? 'آپ کا پیغام جمع ہو چکا ہے۔ شکریہ!' : 'Your message has been submitted. Thank you!'}
              </div>
            )}

            <form onSubmit={handleSubmit} className={`p-6 space-y-5 ${isRtl ? 'font-urdu' : ''}`}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {isRtl ? 'آپ کا نام' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {isRtl ? 'طلباء سے تعلق' : 'Relation to Student'}
                  </label>
                  <select
                    value={form.relation}
                    onChange={(e) => setForm({ ...form, relation: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  >
                    <option>{isRtl ? 'والد' : 'Parent'}</option>
                    <option>{isRtl ? 'سرپرست' : 'Guardian'}</option>
                    <option>{isRtl ? 'رشتہ دار' : 'Relative'}</option>
                    <option>{isRtl ? 'دیگر' : 'Other'}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {isRtl ? 'فون نمبر' : 'Phone Number'}
                </label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {isRtl ? 'آپ کا پیغام' : 'Your Message'}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {isRtl ? 'پیغام جمع کروائیں' : 'Submit Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info Card */}
        <section className="opacity-0 animate-fade-in-up stagger-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{isRtl ? 'فون' : 'Phone'}</h3>
                <div className="text-gray-400 space-y-1 text-sm ltr" dir="ltr">
                  <p>0194-2420536</p>
                  <p>9419018978</p>
                  <p>7006774464</p>
                  <p>7780969812</p>
                </div>
              </div>
              <div className="font-urdu">
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{isRtl ? 'ایڈریس' : 'Address'}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  دارالعلوم بلالیہ<br />
                  احمدہ کدل، لال بازار<br />
                  اور اشرف آباد، خیمبر، سری نگر
                </p>
              </div>
              <div>
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {isRtl ? 'ملاقات کے اوقات' : 'Visiting Hours'}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {isRtl
                    ? 'براہ کرم اپنی ملاخت کی تصدیق کے لیے دفتر کو کال کریں۔ آپ کے گھر پر بھی ایک نمائندہ بھیجا جا سکتا ہے۔'
                    : 'Please call the office to confirm your visit. A representative can also be sent to your home upon request.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
