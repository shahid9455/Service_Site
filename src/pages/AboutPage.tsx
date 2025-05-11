import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update page title
    document.title = language === 'ar' 
      ? 'من نحن - الحربي للتكييف والتبريد'
      : 'About Us - Al Harbi AC & Refrigeration';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#005f99] text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-lg opacity-90">
            {language === 'ar' 
              ? 'نبذة عن مؤسسة الحربي للتكييف والتبريد وخدماتنا'
              : 'Learn about Al Harbi AC & Refrigeration and our services'
            }
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#005f99] mb-6">
              {language === 'ar' ? 'قصتنا' : 'Our Story'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'ar' 
                ? 'تأسست مؤسسة الحربي للتكييف والتبريد في عام 2008 على يد مجموعة من المهندسين والفنيين المهرة ذوي الخبرة الواسعة في مجال التكييف والتبريد. بدأنا كشركة صغيرة في جدة، وبفضل التزامنا بالجودة والموثوقية، نمت الشركة لتصبح واحدة من الشركات الرائدة في مجال خدمات التكييف والتبريد في المملكة.'
                : 'Al Harbi AC & Refrigeration was established in 2008 by a group of skilled engineers and technicians with extensive experience in the field of air conditioning and refrigeration. We started as a small company in Jeddah, and thanks to our commitment to quality and reliability, the company has grown to become one of the leading companies in the field of HVAC services in the Kingdom.'
              }
            </p>
            <p className="text-gray-700 mb-4">
              {language === 'ar' 
                ? 'على مر السنين، قمنا بتوسيع خدماتنا لتلبية الاحتياجات المتنوعة لعملائنا من القطاعين السكني والتجاري. نحن نتميز بفريق متخصص من الفنيين المدربين على أعلى مستوى، ونستخدم أحدث التقنيات والمعدات لضمان تقديم خدمات عالية الجودة.'
                : 'Over the years, we have expanded our services to meet the diverse needs of our residential and commercial customers. We are distinguished by a specialized team of highly trained technicians, and we use the latest technologies and equipment to ensure the delivery of high-quality services.'
              }
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Al Harbi AC Team" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005f99] mb-6 text-center">
            {language === 'ar' ? 'رؤيتنا ومهمتنا' : 'Our Vision & Mission'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#f8f9fa] p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-[#005f99] mb-4">
                {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar' 
                  ? 'أن نكون الشركة الرائدة في مجال خدمات التكييف والتبريد في المملكة العربية السعودية، من خلال تقديم حلول مبتكرة وصديقة للبيئة وذات جودة عالية.'
                  : 'To be the leading company in the field of air conditioning and refrigeration services in Saudi Arabia, by providing innovative, environmentally friendly, and high-quality solutions.'
                }
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-[#005f99] mb-4">
                {language === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar' 
                  ? 'توفير خدمات تكييف وتبريد ذات جودة عالية وموثوقة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع الالتزام بأعلى معايير الجودة والسلامة والاستدامة البيئية.'
                  : 'To provide high-quality and reliable air conditioning and refrigeration services that meet the needs of our customers and exceed their expectations, while adhering to the highest standards of quality, safety, and environmental sustainability.'
                }
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005f99] mb-6 text-center">
            {language === 'ar' ? 'قيمنا' : 'Our Values'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border-t-4 border-[#005f99]">
              <h3 className="text-xl font-bold text-[#005f99] mb-3">
                {language === 'ar' ? 'الجودة' : 'Quality'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar' 
                  ? 'نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا.'
                  : 'We are committed to delivering the highest quality standards in all our services.'
                }
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border-t-4 border-[#005f99]">
              <h3 className="text-xl font-bold text-[#005f99] mb-3">
                {language === 'ar' ? 'النزاهة' : 'Integrity'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar' 
                  ? 'نؤمن بالصدق والشفافية في جميع تعاملاتنا مع العملاء.'
                  : 'We believe in honesty and transparency in all our dealings with customers.'
                }
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border-t-4 border-[#005f99]">
              <h3 className="text-xl font-bold text-[#005f99] mb-3">
                {language === 'ar' ? 'الابتكار' : 'Innovation'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar' 
                  ? 'نسعى دائمًا لتبني أحدث التقنيات والحلول المبتكرة.'
                  : 'We constantly seek to adopt the latest technologies and innovative solutions.'
                }
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border-t-4 border-[#005f99]">
              <h3 className="text-xl font-bold text-[#005f99] mb-3">
                {language === 'ar' ? 'خدمة العملاء' : 'Customer Service'}
              </h3>
              <p className="text-gray-700">
                {language === 'ar' 
                  ? 'رضا العملاء هو أولويتنا القصوى ونسعى دائمًا لتجاوز توقعاتهم.'
                  : 'Customer satisfaction is our top priority and we always strive to exceed their expectations.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;