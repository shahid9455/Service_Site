import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  location: {
    ar: string;
    en: string;
  };
  testimonial: {
    ar: string;
    en: string;
  };
  client: {
    ar: string;
    en: string;
  };
  category: string;
  imageUrl: string;
  completed: string;
}

const ProjectsPage: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: {
        ar: 'مجمع تجاري - الحمدانية',
        en: 'Commercial Complex - Al Hamdaniyah'
      },
      description: {
        ar: 'قمنا بتركيب وصيانة أنظمة تكييف مركزية لمجمع تجاري كبير يضم أكثر من 50 محلاً تجارياً. تضمن المشروع تصميم وتنفيذ نظام تكييف متكامل يلبي احتياجات المجمع التجاري مع مراعاة كفاءة استهلاك الطاقة.',
        en: 'We installed and maintained central air conditioning systems for a large commercial complex that includes more than 50 commercial stores. The project included the design and implementation of an integrated air conditioning system that meets the needs of the commercial complex while taking into account energy efficiency.'
      },
      location: {
        ar: 'الحمدانية، جدة',
        en: 'Al Hamdaniyah, Jeddah'
      },
      testimonial: {
        ar: 'قدمت مؤسسة الحربي خدمة ممتازة في تركيب وصيانة أنظمة التكييف في المجمع التجاري. كانوا محترفين للغاية وأنجزوا العمل في الوقت المحدد وبالميزانية المتفق عليها.',
        en: 'Al Harbi provided excellent service in installing and maintaining the air conditioning systems in the commercial complex. They were very professional and completed the work on time and within the agreed budget.'
      },
      client: {
        ar: 'شركة النخبة للاستثمار العقاري',
        en: 'Elite Real Estate Investment Company'
      },
      category: 'commercial',
      imageUrl: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: '2022'
    },
    {
      id: 2,
      title: {
        ar: 'فيلا سكنية - حي الشاطئ',
        en: 'Residential Villa - Al Shati District'
      },
      description: {
        ar: 'قمنا بتصميم وتركيب نظام تكييف مركزي متكامل لفيلا فاخرة في حي الشاطئ بجدة. تضمن المشروع تركيب أنظمة تكييف عالية الكفاءة مع نظام تحكم ذكي يتيح للعميل التحكم في درجة الحرارة في كل غرفة بشكل منفصل.',
        en: 'We designed and installed an integrated central air conditioning system for a luxury villa in Al Shati District in Jeddah. The project included the installation of high-efficiency air conditioning systems with a smart control system that allows the client to control the temperature in each room separately.'
      },
      location: {
        ar: 'حي الشاطئ، جدة',
        en: 'Al Shati District, Jeddah'
      },
      testimonial: {
        ar: 'أنا سعيد جدًا بالخدمة التي قدمها فريق الحربي. لقد كانوا محترفين للغاية وقدموا لي حلولاً مخصصة تناسب احتياجاتي. نظام التكييف يعمل بشكل ممتاز ويوفر الراحة لعائلتي طوال العام.',
        en: 'I am very happy with the service provided by the Al Harbi team. They were very professional and provided me with customized solutions that suit my needs. The air conditioning system works excellently and provides comfort for my family throughout the year.'
      },
      client: {
        ar: 'الدكتور أحمد الزهراني',
        en: 'Dr. Ahmed Al-Zahrani'
      },
      category: 'residential',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: '2023'
    },
    {
      id: 3,
      title: {
        ar: 'مستشفى خاص - حي الروضة',
        en: 'Private Hospital - Al Rawdah District'
      },
      description: {
        ar: 'قمنا بتركيب وصيانة أنظمة تكييف وتهوية متخصصة لمستشفى خاص في حي الروضة. تضمن المشروع تركيب أنظمة تكييف وتهوية متطورة تلبي المعايير الصحية الصارمة المطلوبة للمستشفيات، مع التركيز على جودة الهواء والتحكم في الرطوبة.',
        en: 'We installed and maintained specialized HVAC systems for a private hospital in Al Rawdah District. The project included the installation of advanced HVAC systems that meet the strict health standards required for hospitals, with a focus on air quality and humidity control.'
      },
      location: {
        ar: 'حي الروضة، جدة',
        en: 'Al Rawdah District, Jeddah'
      },
      testimonial: {
        ar: 'قدم فريق الحربي خدمة استثنائية في تركيب أنظمة التكييف والتهوية في مستشفانا. لقد كانوا على دراية كاملة بالمتطلبات الخاصة للمنشآت الصحية وقدموا حلولاً تلبي جميع المعايير المطلوبة.',
        en: 'The Al Harbi team provided exceptional service in installing HVAC systems in our hospital. They were fully aware of the special requirements for health facilities and provided solutions that meet all the required standards.'
      },
      client: {
        ar: 'مستشفى الشفاء الخاص',
        en: 'Al Shifa Private Hospital'
      },
      category: 'healthcare',
      imageUrl: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: '2021'
    },
    {
      id: 4,
      title: {
        ar: 'مطعم ومقهى - الكورنيش',
        en: 'Restaurant & Cafe - Corniche'
      },
      description: {
        ar: 'قمنا بتركيب أنظمة تكييف وتهوية متخصصة لمطعم ومقهى على كورنيش جدة. تضمن المشروع تركيب أنظمة تكييف عالية الكفاءة مع أنظمة تهوية خاصة للمطابخ وأنظمة شفط للروائح والأبخرة.',
        en: 'We installed specialized HVAC systems for a restaurant and cafe on Jeddah Corniche. The project included the installation of high-efficiency air conditioning systems with special ventilation systems for kitchens and exhaust systems for odors and vapors.'
      },
      location: {
        ar: 'الكورنيش، جدة',
        en: 'Corniche, Jeddah'
      },
      testimonial: {
        ar: 'نحن سعداء جدًا بالخدمة التي قدمها فريق الحربي. لقد قاموا بتركيب أنظمة تكييف وتهوية ممتازة تلبي احتياجاتنا الخاصة كمطعم ومقهى. الهواء نظيف وجودة الخدمة ممتازة.',
        en: 'We are very pleased with the service provided by the Al Harbi team. They installed excellent HVAC systems that meet our special needs as a restaurant and cafe. The air is clean and the quality of service is excellent.'
      },
      client: {
        ar: 'مطعم ومقهى البحر الأزرق',
        en: 'Blue Sea Restaurant & Cafe'
      },
      category: 'hospitality',
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: '2022'
    },
    {
      id: 5,
      title: {
        ar: 'مجمع سكني - حي النزهة',
        en: 'Residential Complex - Al Nuzha District'
      },
      description: {
        ar: 'قمنا بتركيب أنظمة تكييف مركزية لمجمع سكني كبير يضم 20 شقة في حي النزهة. تضمن المشروع تصميم وتنفيذ نظام تكييف متكامل يلبي احتياجات جميع السكان مع توفير التحكم الفردي في كل شقة.',
        en: 'We installed central air conditioning systems for a large residential complex that includes 20 apartments in Al Nuzha District. The project included the design and implementation of an integrated air conditioning system that meets the needs of all residents while providing individual control in each apartment.'
      },
      location: {
        ar: 'حي النزهة، جدة',
        en: 'Al Nuzha District, Jeddah'
      },
      testimonial: {
        ar: 'نشكر مؤسسة الحربي على الخدمة الممتازة في تركيب وصيانة أنظمة التكييف في مجمعنا السكني. العمل كان احترافيًا والنتائج ممتازة.',
        en: 'We thank Al Harbi for the excellent service in installing and maintaining the air conditioning systems in our residential complex. The work was professional and the results are excellent.'
      },
      client: {
        ar: 'شركة الإسكان للتطوير العقاري',
        en: 'Housing Company for Real Estate Development'
      },
      category: 'residential',
      imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: '2021'
    },
    {
      id: 6,
      title: {
        ar: 'مركز تسوق - حي الصفا',
        en: 'Shopping Center - Al Safa District'
      },
      description: {
        ar: 'قمنا بتركيب وصيانة أنظمة تكييف مركزية لمركز تسوق كبير في حي الصفا. تضمن المشروع تصميم وتنفيذ نظام تكييف متكامل يلبي احتياجات المركز التجاري الكبير مع مراعاة كفاءة استهلاك الطاقة والتحكم في درجات الحرارة في مختلف أقسام المركز.',
        en: 'We installed and maintained central air conditioning systems for a large shopping center in Al Safa District. The project included the design and implementation of an integrated air conditioning system that meets the needs of the large commercial center while taking into account energy efficiency and temperature control in the various sections of the center.'
      },
      location: {
        ar: 'حي الصفا، جدة',
        en: 'Al Safa District, Jeddah'
      },
      testimonial: {
        ar: 'قدم فريق الحربي خدمة ممتازة في تركيب وصيانة أنظمة التكييف في مركز التسوق. كانوا محترفين للغاية وأنجزوا العمل بسرعة ودقة.',
        en: 'The Al Harbi team provided excellent service in installing and maintaining the air conditioning systems in the shopping center. They were very professional and completed the work quickly and accurately.'
      },
      client: {
        ar: 'شركة الصفا للاستثمار',
        en: 'Al Safa Investment Company'
      },
      category: 'commercial',
      imageUrl: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      completed: '2020'
    }
  ];

  useEffect(() => {
    // Update page title
    document.title = language === 'ar' 
      ? 'مشاريعنا - الحربي للتكييف والتبريد'
      : 'Our Projects - Al Harbi AC & Refrigeration';
    
    // Initial filter
    filterProjects('all');
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [language]);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#005f99] text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'مشاريعنا' : 'Our Projects'}
          </h1>
          <p className="text-lg opacity-90">
            {language === 'ar' 
              ? 'استكشف بعض المشاريع التي قمنا بتنفيذها'
              : 'Explore some of the projects we have implemented'
            }
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => filterProjects('all')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeFilter === 'all' 
                ? 'bg-[#005f99] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === 'ar' ? 'الكل' : 'All'}
          </button>
          <button 
            onClick={() => filterProjects('residential')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeFilter === 'residential' 
                ? 'bg-[#005f99] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === 'ar' ? 'سكني' : 'Residential'}
          </button>
          <button 
            onClick={() => filterProjects('commercial')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeFilter === 'commercial' 
                ? 'bg-[#005f99] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === 'ar' ? 'تجاري' : 'Commercial'}
          </button>
          <button 
            onClick={() => filterProjects('healthcare')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeFilter === 'healthcare' 
                ? 'bg-[#005f99] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === 'ar' ? 'رعاية صحية' : 'Healthcare'}
          </button>
          <button 
            onClick={() => filterProjects('hospitality')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeFilter === 'hospitality' 
                ? 'bg-[#005f99] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {language === 'ar' ? 'ضيافة' : 'Hospitality'}
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title[language as keyof typeof project.title]} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#005f99]">
                    {project.title[language as keyof typeof project.title]}
                  </h3>
                  <span className="bg-[#e0e0e0] text-gray-700 text-sm px-3 py-1 rounded-full">
                    {project.completed}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description[language as keyof typeof project.description].substring(0, 120)}...
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {project.location[language as keyof typeof project.location]}
                  </span>
                  <span className="capitalize">
                    {language === 'ar' ? 
                      project.category === 'residential' ? 'سكني' : 
                      project.category === 'commercial' ? 'تجاري' : 
                      project.category === 'healthcare' ? 'رعاية صحية' : 'ضيافة'
                      : project.category
                    }
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;