import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactSection from '../components/home/ContactSection';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update page title
    document.title = language === 'ar' 
      ? 'اتصل بنا - الحربي للتكييف والتبريد'
      : 'Contact Us - Al Harbi AC & Refrigeration';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#005f99] text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </h1>
          <p className="text-lg opacity-90">
            {language === 'ar' 
              ? 'نحن هنا للإجابة على استفساراتك وتلبية احتياجاتك'
              : 'We are here to answer your inquiries and meet your needs'
            }
          </p>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default ContactPage;