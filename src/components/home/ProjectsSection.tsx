import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: {
        ar: 'مجمع تجاري - الحمدانية',
        en: 'Commercial Complex - Al Hamdaniyah'
      },
      description: {
        ar: 'تركيب وصيانة أنظمة تكييف مركزية لمجمع تجاري كبير.',
        en: 'Installation and maintenance of central air conditioning systems for a large commercial complex.'
      },
      imageUrl: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: {
        ar: 'فيلا سكنية - حي الشاطئ',
        en: 'Residential Villa - Al Shati District'
      },
      description: {
        ar: 'تصميم وتركيب نظام تكييف مركزي متكامل لفيلا فاخرة.',
        en: 'Design and installation of an integrated central air conditioning system for a luxury villa.'
      },
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: {
        ar: 'مستشفى خاص - حي الروضة',
        en: 'Private Hospital - Al Rawdah District'
      },
      description: {
        ar: 'تركيب وصيانة أنظمة تكييف وتهوية متخصصة لقطاع الرعاية الصحية.',
        en: 'Installation and maintenance of specialized HVAC systems for the healthcare sector.'
      },
      imageUrl: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: {
        ar: 'مطعم ومقهى - الكورنيش',
        en: 'Restaurant & Cafe - Corniche'
      },
      description: {
        ar: 'تركيب أنظمة تكييف وتهوية مطابخ متخصصة لمطعم ومقهى.',
        en: 'Installation of specialized kitchen HVAC systems for a restaurant and cafe.'
      },
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-[#005f99] mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title[language as keyof typeof project.title]} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.1)]"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title[language as keyof typeof project.title]}
                </h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description[language as keyof typeof project.description]}
                </p>
                <a 
                  href="/projects" 
                  className="text-white flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span>{t('projects.viewmore')}</span>
                  <ArrowRight size={16} className="ml-1 rtl:mr-1 rtl:ml-0 rtl:transform rtl:rotate-180" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/projects" className="btn-primary inline-block">
            {language === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;