import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Award, Clock, Users, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: <CheckCircle size={20} className="text-[#005f99]" />,
      text: {
        ar: 'فريق من الفنيين المعتمدين والمهرة',
        en: 'Team of certified and skilled technicians'
      }
    },
    {
      icon: <CheckCircle size={20} className="text-[#005f99]" />,
      text: {
        ar: 'أحدث المعدات والتقنيات',
        en: 'Latest equipment and technologies'
      }
    },
    {
      icon: <CheckCircle size={20} className="text-[#005f99]" />,
      text: {
        ar: 'ضمان على جميع الخدمات',
        en: 'Warranty on all services'
      }
    },
    {
      icon: <CheckCircle size={20} className="text-[#005f99]" />,
      text: {
        ar: 'أسعار تنافسية وشفافة',
        en: 'Competitive and transparent prices'
      }
    }
  ];

  const stats = [
    {
      icon: <Award size={36} className="text-[#005f99]" />,
      value: '15+',
      label: {
        ar: 'سنوات من الخبرة',
        en: 'Years of Experience'
      }
    },
    {
      icon: <Users size={36} className="text-[#005f99]" />,
      value: '1000+',
      label: {
        ar: 'عميل راضٍ',
        en: 'Satisfied Clients'
      }
    },
    {
      icon: <Clock size={36} className="text-[#005f99]" />,
      value: '24/7',
      label: {
        ar: 'خدمة متاحة',
        en: 'Available Service'
      }
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with stats */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="About Al Harbi AC" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 bg-white shadow-lg rounded-2xl p-6 absolute -bottom-10 left-0 right-0 mx-auto w-11/12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="mt-2">
                    <p className="text-2xl font-bold text-[#005f99]">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label[language as keyof typeof stat.label]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="pt-12 lg:pt-0">
            <h2 className="section-title">{t('about.title')}</h2>
            <div className="w-20 h-1 bg-[#005f99] mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              {t('about.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.icon}
                  <span className="ml-2 rtl:mr-2 rtl:ml-0 text-gray-700">
                    {feature.text[language as keyof typeof feature.text]}
                  </span>
                </div>
              ))}
            </div>
            
            <a href="/about" className="btn-primary inline-block">
              {language === 'ar' ? 'اعرف المزيد عنا' : 'Learn More About Us'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;