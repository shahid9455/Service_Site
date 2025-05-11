import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Wrench, 
  Settings, 
  Wind, 
  Thermometer,
  WashingMachine,
  Refrigerator
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();

  // Define all services
  const allServices = [
    {
      id: 1,
      key: 'services.installation',
      icon: <Settings size={40} className="text-[#005f99]" />,
      description: {
        ar: 'تركيب وحدات التكييف والتبريد بكفاءة عالية ودقة متناهية.',
        en: 'Efficient and precise installation of air conditioning and refrigeration units.'
      },
      imageUrl: 'https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      key: 'services.acRepair',
      icon: <Wrench size={40} className="text-[#005f99]" />,
      description: {
        ar: 'إصلاح سريع ودقيق لجميع مشاكل ومكيفات الهواء.',
        en: 'Fast and accurate repair for all air conditioner problems.'
      },
      imageUrl: 'https://images.pexels.com/photos/8761744/pexels-photo-8761744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      key: 'services.fridgeRepair',
      icon: <Refrigerator size={40} className="text-[#005f99]" />,
      description: {
        ar: 'إصلاح جميع أنواع الثلاجات والبرادات المنزلية والتجارية.',
        en: 'Repair of all types of domestic and commercial fridges and refrigerators.'
      },
      imageUrl: 'https://images.pexels.com/photos/618116/pexels-photo-618116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      key: 'services.washingMachineRepair',
      icon: <WashingMachine size={40} className="text-[#005f99]" />,
      description: {
        ar: 'إصلاح متخصص لجميع أنواع الغسالات الأوتوماتيكية.',
        en: 'Specialized repair for all types of automatic washing machines.'
      },
      imageUrl: 'https://images.pexels.com/photos/4246159/pexels-photo-4246159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      key: 'services.ductwork',
      icon: <Wind size={40} className="text-[#005f99]" />,
      description: {
        ar: 'تصميم وتركيب وصيانة مجاري الهواء (الدكت).',
        en: 'Design, installation, and maintenance of ductwork.'
      },
      imageUrl: 'https://images.pexels.com/photos/7218568/pexels-photo-7218568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      key: 'services.refrigerant',
      icon: <Thermometer size={40} className="text-[#005f99]" />,
      description: {
        ar: 'فحص وشحن غاز التبريد (الفريون) للمكيفات.',
        en: 'Checking and charging refrigerant (Freon) for AC units.'
      },
      imageUrl: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  // Select specific services to display on the homepage
  const featuredServiceKeys = [
    'services.installation',
    'services.acRepair',
    'services.fridgeRepair',
    'services.washingMachineRepair',
    'services.ductwork',
    'services.refrigerant'
  ];

  const displayedServices = allServices;

  return (
    <section id="services" className="section-padding bg-[#f2f2f2]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('services.title')}</h2>
          <div className="w-20 h-1 bg-[#005f99] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نقدم مجموعة شاملة من خدمات التكييف والتبريد وإصلاح الأجهزة لضمان راحتك وكفاءة أنظمتك.'
              : 'We offer a comprehensive range of air conditioning, refrigeration, and appliance repair services to ensure your comfort and system efficiency.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <Link to="/services" key={service.id} className="service-card transform hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img 
                  src={service.imageUrl} 
                  alt={t(service.key)} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-center -mt-12 mb-4">
                  <div className="rounded-full bg-white p-4 shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-[#005f99]">
                  {t(service.key)}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description[language as keyof typeof service.description]}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary inline-block">
            {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
