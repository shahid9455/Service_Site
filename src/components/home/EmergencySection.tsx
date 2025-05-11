import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Phone, Clock } from 'lucide-react';

const EmergencySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-red-600 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <Clock size={48} className="mr-4 rtl:ml-4 rtl:mr-0 animate-pulse" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {t('emergency.title')}
              </h2>
              <p className="text-white/80 mt-1">
                {t('emergency.title')}
              </p>
            </div>
          </div>
          
          <a 
            href="tel:+966564875035" 
            className="btn-emergency flex items-center justify-center"
          >
            <Phone size={20} className="mr-2 rtl:ml-2 rtl:mr-0" />
            <span>{t('emergency.call')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;