import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  // Navigation
  'nav.home': {
    ar: 'الرئيسية',
    en: 'Home'
  },
  'nav.about': {
    ar: 'من نحن',
    en: 'About Us'
  },
  'nav.services': {
    ar: 'خدماتنا',
    en: 'Services'
  },
  'nav.projects': {
    ar: 'المشاريع',
    en: 'Projects'
  },
  'nav.contact': {
    ar: 'اتصل بنا',
    en: 'Contact Us'
  },
  // Hero Section
  'hero.title': {
    ar: 'مؤسسة الحربي للتكييف والتبريد',
    en: 'Al Harbi AC & Refrigeration'
  },
  'hero.subtitle': {
    ar: 'خدمات التكييف والتبريد على مدار 24/7 في جدة',
    en: '24/7 HVAC Solutions in Jeddah'
  },
  'hero.cta': {
    ar: 'اطلب خدمة الآن',
    en: 'Request Service Now'
  },
  // About Section
  'about.title': {
    ar: 'من نحن',
    en: 'About Us'
  },
  'about.description': {
    ar: 'مؤسسة الحربي للتكييف والتبريد هي شركة رائدة في مجال التكييف والتبريد في المملكة العربية السعودية. نقدم خدمات متكاملة تشمل التركيب والصيانة والإصلاح لجميع أنواع أنظمة التكييف والتبريد.',
    en: 'Al Harbi AC & Refrigeration is a leading HVAC company in Saudi Arabia. We provide comprehensive services including installation, maintenance, and repair for all types of air conditioning and refrigeration systems.'
  },
  // Services Section
  'services.title': {
    ar: 'خدماتنا',
    en: 'Our Services'
  },
  'services.installation': {
    ar: 'تركيب',
    en: 'Installation'
  },
  'services.washingMachineRepair': {
    ar: 'إصلاح غسالات أوتوماتيكية',
    en: 'Automatic Washing Machine Repair'
  },
  'services.acRepair': {
    ar: 'إصلاح مكيفات',
    en: 'AC Repair Services'
  },
  'services.ductwork': {
    ar: 'أعمال مجاري الهواء',
    en: 'Ductwork'
  },
  'services.refrigerant': {
    ar: 'شحن غاز التبريد',
    en: 'Refrigerant Charging'
  },
  // Contact Section
  'contact.title': {
    ar: 'اتصل بنا',
    en: 'Contact Us'
  },
  'contact.address': {
    ar: 'جدة – الحمدانية، جدة 23743، السعودية',
    en: 'Jeddah - Al Hamdaniyah, Jeddah 23743, Saudi Arabia'
  },
  'contact.phone': {
    ar: '+966 564875035',
    en: '+966 564875035'
  },
  'contact.form.name': {
    ar: 'الاسم',
    en: 'Name'
  },
  'contact.form.email': {
    ar: 'البريد الإلكتروني',
    en: 'Email'
  },
  'contact.form.phone': {
    ar: 'رقم الهاتف',
    en: 'Phone'
  },
  'contact.form.message': {
    ar: 'الرسالة',
    en: 'Message'
  },
  'contact.form.submit': {
    ar: 'إرسال',
    en: 'Submit'
  },
  // Footer
  'footer.rights': {
    ar: 'جميع الحقوق محفوظة لمؤسسة الحربي للتكييف والتبريد',
    en: 'All rights reserved to Al Harbi AC & Refrigeration'
  },
  // Emergency
  'emergency.title': {
    ar: 'خدمة طوارئ 24/7',
    en: '24/7 Emergency Service'
  },
  'emergency.call': {
    ar: 'اتصل الآن',
    en: 'Call Now'
  },
  // Projects
  'projects.title': {
    ar: 'مشاريعنا',
    en: 'Our Projects'
  },
  'projects.viewmore': {
    ar: 'عرض المزيد',
    en: 'View More'
  },
  // Testimonials
  'testimonials.title': {
    ar: 'آراء العملاء',
    en: 'Testimonials'
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    if (!translations[key as keyof typeof translations]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key as keyof typeof translations][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
