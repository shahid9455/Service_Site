import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronRight, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative h-screen bg-gradient-to-r from-[#003a5f] to-[#005f99] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4792482/pexels-photo-4792482.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="btn-primary flex items-center"
            >
              {t('hero.cta')}
              {language === 'ar' ? (
                <ChevronRight className="ml-2 rtl:rotate-180" size={20} />
              ) : (
                <ChevronRight className="ml-2" size={20} />
              )}
            </a>
            <a href="tel:+966564875035" className="btn-secondary flex items-center">
              <Phone size={18} className="mr-2 rtl:ml-2 rtl:mr-0" />
              <span>+966 564875035</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;