export const LANGUAGES = {
  en: { name: 'English', dir: 'ltr' },
  ur: { name: 'اردو', dir: 'rtl' },
  fa: { name: 'فارسی', dir: 'rtl' },
  ar: { name: 'العربية', dir: 'rtl' },
};

export const DEFAULT_LANG = 'en';

// Detect language from browser
export function detectLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const saved = localStorage.getItem('dub-lang');
  if (saved && LANGUAGES[saved]) return saved;

  const browserLang = (navigator.language || '').slice(0, 2);
  const map = { ur: 'ur', fa: 'fa', ar: 'ar', ps: 'ar' }; // Pashto maps to Arabic script
  return map[browserLang] || DEFAULT_LANG;
}

export function setLanguage(lang) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('dub-lang', lang);
}

// Translation dictionary
export const translations = {
  // Navbar
  'nav.home': { en: 'Home', ur: 'ہوم', fa: 'خانه', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ur: 'تعارف', fa: 'درباره ما', ar: 'حول' },
  'nav.admission': { en: 'Admission', ur: 'داخلہ', fa: 'پذیرش', ar: 'القبول' },
  'nav.notifications': { en: 'Notifications', ur: 'اطلاعات', fa: 'اعلانات', ar: 'إشعارات' },
  'nav.login': { en: 'Login', ur: 'لاگ ان', fa: 'ورود', ar: 'تسجيل الدخول' },
  'nav.donate': { en: 'Donate', ur: 'عطیہ', fa: 'کمک', ar: 'تبرع' },
  'nav.help': { en: 'Help', ur: 'مدد', fa: 'راهنما', ar: 'مساعدة' },
  'nav.language': { en: 'Language', ur: 'زبان', fa: 'زبان', ar: 'اللغة' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', ur: 'جملہ حقوق محفوظ ہیں۔', fa: 'تمام حقوق محفوظ است.', ar: 'جميع الحقوق محفوظة.' },
  'footer.built': { en: 'Built with sincerity', ur: 'دیانتداری سے تعمیر کیا گیا', fa: 'با صداقت ساخته شده', ar: 'مبني على الإخلاص' },

  // Home
  'home.hero.subtitle': {
    en: 'A place of knowledge, devotion, and the pursuit of Islamic excellence',
    ur: 'علم، عقیدت اور اسلامی مہارت کا ایک مرکز',
    fa: 'جایی برای دانش، عبادت و جستجوی عالی اسلامی',
    ar: 'مكان للمعرفة والتفاني والسعي نحو التميز الإسلامي',
  },
  'home.hero.description': {
    en: 'Nurturing minds and hearts in the light of the Quran and Sunnah.',
    ur: 'قرآن و سنت کی روشنی میں ذہنوں اور دلوں کی پرورش۔',
    fa: 'پرورش ذهن‌ها و دل‌ها در نور قرآن و سنت.',
    ar: 'تنشئة العقول والقلوب بنور القرآن والسنة.',
  },
  'home.learn_more': { en: 'Learn More', ur: 'مزید جانیں', fa: 'بیشتر بدانید', ar: 'اعرف المزيد' },
  'home.donate_now': { en: 'Donate Now', ur: 'ابھی عطیہ دیں', fa: 'همین الان کمک کنید', ar: 'تبرع الآن' },
  'home.what_we_offer': { en: 'What We Offer', ur: 'ہم کیا پیش کرتے ہیں', fa: 'چه ارائه می‌دهیم', ar: 'ماذا نقدم' },
  'home.education.title': { en: 'Islamic Education', ur: 'اسلامی تعلیم', fa: 'آموزش اسلامی', ar: 'التعليم الإسلامي' },
  'home.education.desc': { en: 'Comprehensive Quranic studies, Hadith, Fiqh, and Islamic sciences taught by qualified scholars.', ur: 'قرآنی علوم، حدیث، فقہ اور اسلامی علوم جو اہل علماء کے ذریعے پڑھائے جاتے ہیں۔', fa: 'مطالعات جامع قرآنی، حدیث، فقه و علوم اسلامی توسط علمای واجد شرایط.', ar: 'دراسات قرآنية شاملة وحديث وفقه وعلوم إسلامية يدرسها علماء مؤهلون.' },
  'home.hifz.title': { en: 'Memorization (Hifz)', ur: 'حفظ قرآن', fa: 'حفظ قرآن', ar: 'حفظ القرآن' },
  'home.hifz.desc': { en: 'Structured Hifz program with personalized guidance to help students memorize the Holy Quran.', ur: 'منظم حفظ پروگرام جس میں طلباء کو قرآن مجید حفظ کرنے میں ذاتی رہنمائی دی جاتی ہے۔', fa: 'برنامه ساختارمند حفظ با راهنمایی شخصی برای کمک به دانش‌آموزان در حفظ قرآن مجید.', ar: 'برنامج حفظ منظم مع إرشاد مخصص لمساعدة الطلاب على حفظ القرآن الكريم.' },
  'home.character.title': { en: 'Character Building', ur: 'کردار سازی', fa: 'ساخت شخصیت', ar: 'بناء الشخصية' },
  'home.character.desc': { en: 'Focus on developing strong moral values, discipline, and spiritual growth in every student.', ur: 'ہر طالب علم میں مضبوط اخلاقی قدروں، نظم و ضبط اور روحانی نشوونما پر توجہ۔', fa: 'تمرکز بر توسعه ارزش‌های اخلاقی قوی، نظم و رشد معنوی در هر دانش‌آموز.', ar: 'التركيز على تنمية القيم الأخلاقية القوية والانضباط والنمو الروحي لكل طالب.' },
  'home.cta.title': { en: 'Help Us Continue This Noble Work', ur: 'ہمارے ساتھ اس نیک کام میں شامل ہوں', fa: 'به ما در ادامه این کار نیک کمک کنید', ar: 'ساعدنا على مواصلة هذا العمل النبيل' },
  'home.cta.desc': { en: 'Your generous donation provides education, meals, and accommodation to our students — all completely free of cost.', ur: 'آپ کا عطیہ ہمारे طلباء کی تعلیم، کھانے اور رہائش فراہم کرتا ہے — سب مفت۔', fa: 'کمک سخاوتمندانه شما آموزش، غذا و اسکان را برای دانش‌آموزان ما فراهم می‌کند.', ar: 'يسمح تبرعك الكريم بتوفير التعليم والوجبات والإقامة لطلابنا مجانًا.' },

  // Login
  'login.title': { en: 'Student Login', ur: 'طالب علم لاگ ان', fa: 'ورود دانش‌آموز', ar: 'تسجيل دخول الطالب' },
  'login.subtitle': { en: 'Access your dashboard', ur: 'اپنے ڈیش بورڈ تک رسائی کریں', fa: 'به داشبورد خود دسترسی پیدا کنید', ar: 'الوصول إلى لوحة التحكم' },
  'login.student_id': { en: 'Student ID', ur: 'اسٹوڈنٹ آئی ڈی', fa: 'شناسه دانش‌آموز', ar: 'معرف الطالب' },
  'login.password': { en: 'Password', ur: 'پاس ورڈ', fa: 'رمز عبور', ar: 'كلمة المرور' },
  'login.remember': { en: 'Remember me', ur: 'مجھے یاد رکھیں', fa: 'مرا به خاطر بسپار', ar: 'تذكرني' },
  'login.forgot': { en: 'Forgot password?', ur: 'پاس ورڈ بھول گئے؟', fa: 'رمز عبور را فراموش کرده‌اید؟', ar: 'نسيت كلمة المرور؟' },
  'login.submit': { en: 'Student Login', ur: 'لاگ ان', fa: 'ورود', ar: 'تسجيل الدخول' },
  'login.help': { en: 'Visit the office for login details', ur: 'لاگ ان کی تفصیلات کے لیے دفتر تشریف لائیں', fa: 'برای جزئیات ورود به دفتر مراجعه کنید', ar: 'قم بزيارة المكتب للحصول على تفاصيل تسجيل الدخول' },

  // About
  'about.title': { en: 'About Darul Uloom Bilaliya', ur: 'دارالعلوم بلالیہ کا تعارف', fa: 'درباره دارالعلوم بلالیه', ar: 'حول دار العلوم بلالية' },
  'about.tagline': { en: 'A legacy of Islamic education, character building, and community service in Jammu & Kashmir', ur: 'جموں و کشمیر میں اسلامی تعلیم، کردار سازی اور کمیونٹی سروس کا وراثتی سلسلہ', fa: 'میراث آموزش اسلامی، ساخت شخصیت و خدمات اجتماعی در جامو و کشمیر', ar: 'إرث من التعليم الإسلامي وبناء الشخصية وخدمة المجتمع في جامو وكشمير' },
  'about.intro.title': { en: 'Introduction', ur: 'تعارف', fa: 'مقدمه', ar: 'مقدمة' },
  'about.intro.text': {
    en: 'Darul Uloom Bilaliya is one of the well-known Islamic institutions of Jammu & Kashmir. Established on 25th Shawwal 1411 AH, it is now progressing through its 36th year of journey.',
    ur: 'دارالعلوم بلالیہ جموں و کشمیر کے معروف اسلامی اداروں میں سے ایک ہے۔ 25 شوال 1411ھ کو قائم ہوا، اب اپنے 36 ویں سال میں داخل ہو رہا ہے۔',
    fa: 'دارالعلوم بلالیه یکی از موسسات مشهور اسلامی جامو و کشمیر است که در 25 شوال 1411 هجری تاسیس شد.',
    ar: 'دار العلوم بلالية هي واحدة من المؤسسات الإسلامية المعروفة في جامو وكشمير. تأسست في 25 شوال 1411 هـ.',
  },
  'about.staff.title': { en: 'Staff & Administration', ur: 'عملہ اور انتظامیہ', fa: 'کارکنان و مدیریت', ar: 'الموظفون والإدارة' },

  // Notifications
  'notifications.title': { en: 'Notifications', ur: 'اطلاعات', fa: 'اعلانات', ar: 'إشعارات' },
  'notifications.empty': { en: 'No notifications at this time.', ur: 'اس وقت کوئی اطلاع نہیں۔', fa: 'هیچ اعلانی در حال حاضر.', ar: 'لا توجد إشعارات حاليًا.' },

  // Donate
  'donate.title': { en: 'Donate', ur: 'عطیہ', fa: 'کمک', ar: 'تبرع' },
  'donate.subtitle': { en: 'Support our students with your generous contributions', ur: 'اپنے سخاوت مند عطیات سے ہمارے طلباء کی مدد کریں', fa: 'با کمک‌های سخاوتمندانه خود از دانش‌آموزان ما حمایت کنید', ar: 'ادعم طلابنا بتبرعاتك الكريمة' },

  // Admission
  'admission.title': { en: 'Admission', ur: 'داخلہ', fa: 'پذیرش', ar: 'القبول' },
  'admission.tagline': { en: 'Begin your journey of Islamic scholarship', ur: 'علم دین کے سفر کا آغاز کریں', fa: 'سفر علمی اسلامی خود را آغاز کنید', ar: 'ابدأ رحلتك في العلم الإسلامي' },

  // Help Desk
  'help.title': { en: 'Help Desk', ur: 'ہیلپ ڈیسک', fa: 'میز کمک', ar: 'مكتب المساعدة' },
  'help.subtitle': { en: 'Assistance for parents and guardians of Darul Uloom Bilaliya students', ur: 'دارالعلوم بلالیہ کے طلباء کے والدین اور سرپرستوں کی معاونت', fa: 'کمک به والدین و سرپرستان دانش‌آموزان دارالعلوم بلالیه', ar: 'مساعدة أولياء أمور طلاب دار العلوم بلالية' },

  // Admin
  'admin.login_title': { en: 'Admin Access', ur: 'ایڈمن رسائی', fa: 'دسترسی مدیریت', ar: 'الوصول إلى الإدارة' },
  'admin.login_sub': { en: 'Authorized personnel only', ur: 'صرف مجاز اہلکار', fa: 'فقط پرسنل مجاز', ar: 'للموظفين المصرح لهم فقط' },
  'admin.username': { en: 'Username', ur: 'صارف نام', fa: 'نام کاربری', ar: 'اسم المستخدم' },
};

// Get translation for a key
export function useTranslation(lang) {
  return function t(key) {
    const entry = t[key];
    if (!entry) return key;
    return entry[lang] || entry[DEFAULT_LANG] || key;
  };
}
