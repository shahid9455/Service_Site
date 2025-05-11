import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Wrench, 
  RotateCcw, 
  Settings, 
  Wind, 
  Thermometer,
  CheckCircle,
  WashingMachine,
  Refrigerator,
  Home
} from 'lucide-react';
import EmergencySection from '../components/home/EmergencySection';

const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update page title
    document.title = language === 'ar' 
      ? 'خدماتنا - الحربي للتكييف والتبريد'
      : 'Our Services - Al Harbi AC & Refrigeration';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [language]);

  const servicesDetails = [
    {
      id: 1,
      title: t('services.installation'),
      icon: <Settings size={48} className="text-[#005f99]" />,
      description: {
        ar: 'نقدم خدمات تركيب جميع أنواع أنظمة التكييف والتبريد، بدءًا من المكيفات المنزلية الصغيرة وحتى أنظمة التكييف المركزية للمباني التجارية والصناعية الكبيرة. يقوم فريقنا المؤهل بتقييم احتياجاتك وتصميم وتنفيذ الحلول المناسبة لضمان أقصى كفاءة وراحة.',
        en: 'We provide installation services for all types of air conditioning and refrigeration systems, from small residential air conditioners to central air conditioning systems for large commercial and industrial buildings. Our qualified team assesses your needs and designs and implements appropriate solutions to ensure maximum efficiency and comfort.'
      },
      features: [
        {
          ar: 'دراسة وتصميم أنظمة التكييف المناسبة',
          en: 'Study and design of appropriate air conditioning systems'
        },
        {
          ar: 'تركيب المكيفات الشباك والسبليت والمركزية',
          en: 'Installation of window, split, and central air conditioners'
        },
        {
          ar: 'تركيب أنظمة التكييف للمشاريع التجارية والصناعية',
          en: 'Installation of HVAC systems for commercial and industrial projects'
        },
        {
          ar: 'تركيب أنظمة التحكم والترموستات الذكية',
          en: 'Installation of control systems and smart thermostats'
        }
      ],
      imageUrl: 'https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: t('services.washingMachineRepair'),
      icon: <WashingMachine size={48} className="text-[#005f99]" />,
      description: {
        ar: 'نقدم خدمات إصلاح شاملة لجميع أنواع الغسالات الأوتوماتيكية. فريقنا متخصص في تشخيص وإصلاح الأعطال الشائعة والمعقدة، مثل مشاكل التصريف، عدم الدوران، تسرب المياه، والأعطال الكهربائية، باستخدام قطع غيار عالية الجودة.',
        en: 'We offer comprehensive repair services for all types of automatic washing machines. Our team specializes in diagnosing and repairing common and complex faults, such as drainage issues, non-spinning, water leaks, and electrical failures, using high-quality spare parts.'
      },
      features: [
        {
          ar: 'إصلاح مشاكل عدم دوران الحلة',
          en: 'Repair of drum spinning issues'
        },
        {
          ar: 'إصلاح مشاكل تصريف المياه',
          en: 'Repair of water drainage problems'
        },
        {
          ar: 'إصلاح تسربات المياه',
          en: 'Repair of water leaks'
        },
        {
          ar: 'إصلاح الأعطال الكهربائية والإلكترونية',
          en: 'Repair of electrical and electronic faults'
        }
      ],
      imageUrl: 'https://images.pexels.com/photos/4246159/pexels-photo-4246159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: t('services.acRepair'),
      icon: <Wrench size={48} className="text-[#005f99]" />,
      description: {
        ar: 'نقدم خدمات إصلاح سريعة وفعالة لجميع أنواع أنظمة التكييف. فريقنا المؤهل قادر على تشخيص وإصلاح مجموعة واسعة من مشاكل المكيفات، من ضعف التبريد والأعطال البسيطة إلى المشاكل المعقدة، باستخدام قطع غيار أصلية وأحدث التقنيات.',
        en: 'We provide fast and effective repair services for all types of air conditioning systems. Our qualified team is able to diagnose and repair a wide range of AC problems, from poor cooling and simple malfunctions to complex issues, using original spare parts and the latest technologies.'
      },
      features: [
        {
          ar: 'إصلاح جميع أنواع أعطال التكييف',
          en: 'Repair of all types of air conditioning malfunctions'
        },
        {
          ar: 'استبدال القطع التالفة بقطع غيار أصلية',
          en: 'Replacement of damaged parts with original spare parts'
        },
        {
          ar: 'إصلاح تسربات غاز الفريون والمياه',
          en: 'Repair of freon gas and water leaks'
        },
        {
          ar: 'إصلاح مشاكل ضعف التبريد والضوضاء',
          en: 'Repair of poor cooling and noise issues'
        }
      ],
      imageUrl: 'https://images.pexels.com/photos/8761744/pexels-photo-8761744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: t('services.fridgeRepair'),
      icon: <Refrigerator size={48} className="text-[#005f99]" />,
      description: {
        ar: 'خدمات إصلاح متخصصة لجميع أنواع الثلاجات والبرادات المنزلية والتجارية. نعالج مشاكل التبريد، تسرب المياه، أعطال الكمبروسر، والمشاكل الكهربائية لضمان الحفاظ على طعامك طازجًا.',
        en: 'Specialized repair services for all types of domestic and commercial fridges and refrigerators. We handle cooling issues, water leaks, compressor failures, and electrical problems to ensure your food stays fresh.'
      },
      features: [
        {
          ar: 'إصلاح مشاكل عدم التبريد أو التبريد الزائد',
          en: 'Repair of non-cooling or over-cooling issues'
        },
        {
          ar: 'إصلاح تسربات المياه الداخلية والخارجية',
          en: 'Repair of internal and external water leaks'
        },
        {
          ar: 'إصلاح أو استبدال الكمبروسر والمروحة',
          en: 'Repair or replacement of compressor and fan'
        },
        {
          ar: 'إصلاح الأعطال الكهربائية ومشاكل الترموستات',
          en: 'Repair of electrical faults and thermostat issues'
        }
      ],
      imageUrl: 'https://images.pexels.com/photos/618116/pexels-photo-618116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: t('services.homeApplianceRepair'),
      icon: <Home size={48} className="text-[#005f99]" />,
      description: {
        ar: 'بالإضافة إلى التكييف والتبريد، نقدم خدمات إصلاح لمجموعة متنوعة من الأجهزة المنزلية الأخرى لضمان سير عمل منزلك بسلاسة.',
        en: 'In addition to AC and refrigeration, we offer repair services for a variety of other home appliances to keep your household running smoothly.'
      },
      features: [
        {
          ar: 'إصلاح الأفران والمواقد الكهربائية والغاز',
          en: 'Repair of electric and gas ovens and stoves'
        },
        {
          ar: 'إصلاح الميكروويف وغسالات الأطباق',
          en: 'Repair of microwaves and dishwashers'
        },
        {
          ar: 'إصلاح مجففات الملابس',
          en: 'Repair of clothes dryers'
        },
        {
          ar: 'تشخيص وإصلاح أعطال الأجهزة الصغيرة',
          en: 'Diagnosis and repair of small appliance faults'
        }
      ],
      imageUrl: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      title: t('services.ductwork'),
      icon: <Wind size={48} className="text-[#005f99]" />,
      description: {
        ar: 'نقدم خدمات تصميم وتركيب وصيانة وإصلاح مجاري الهواء لأنظمة التكييف المركزية. نضمن تصميم مجاري الهواء بشكل يحقق أقصى كفاءة في توزيع الهواء ويقلل من فقدان الطاقة.',
        en: 'We provide design, installation, maintenance, and repair services for air ducts for central air conditioning systems. We ensure that air ducts are designed in a way that achieves maximum efficiency in air distribution and reduces energy loss.'
      },
      features: [
        {
          ar: 'تصميم وتركيب مجاري الهواء',
          en: 'Design and installation of air ducts'
        },
        {
          ar: 'صيانة وتنظيف مجاري الهواء',
          en: 'Maintenance and cleaning of air ducts'
        },
        {
          ar: 'عزل مجاري الهواء لتقليل فقدان الطاقة',
          en: 'Insulation of air ducts to reduce energy loss'
        },
        {
          ar: 'إصلاح تسربات الهواء وتحسين كفاءة التوزيع',
          en: 'Repair of air leaks and improvement of distribution efficiency'
        }
      ],
      imageUrl: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 7,
      title: t('services.refrigerant'),
      icon: <Thermometer size={48} className="text-[#005f99]" />,
      description: {
        ar: 'نقدم خدمات شحن غاز التبريد لجميع أنواع أنظمة التكييف والتبريد. نستخدم أحدث المعدات والتقنيات لضمان التعبئة الدقيقة والآمنة للغاز، وفقًا للمعايير البيئية والصناعية.',
        en: 'We provide refrigerant charging services for all types of air conditioning and refrigeration systems. We use the latest equipment and technologies to ensure accurate and safe gas filling, according to environmental and industrial standards.'
      },
      features: [
        {
          ar: 'فحص وتعبئة غاز التبريد',
          en: 'Checking and filling refrigerant gas'
        },
        {
          ar: 'الكشف عن تسربات غاز التبريد وإصلاحها',
          en: 'Detection and repair of refrigerant gas leaks'
        },
        {
          ar: 'استخدام غازات تبريد صديقة للبيئة',
          en: 'Use of environmentally friendly refrigerant gases'
        },
        {
          ar: 'توفير حلول لتحسين كفاءة استهلاك الطاقة',
          en: 'Providing solutions to improve energy efficiency'
        }
      ],
      imageUrl: 'https://images.pexels.com/photos/7414209/pexels-photo-7414209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const processList = [
    {
      title: {
        ar: 'الاستشارة الأولية',
        en: 'Initial Consultation'
      },
      description: {
        ar: 'نقوم بتقييم احتياجاتك ومتطلباتك وتقديم المشورة الفنية المناسبة.',
        en: 'We assess your needs and requirements and provide appropriate technical advice.'
      }
    },
    {
      title: {
        ar: 'المعاينة الميدانية',
        en: 'On-Site Survey'
      },
      description: {
        ar: 'يقوم فريقنا الفني بزيارة الموقع لإجراء معاينة شاملة وتقييم دقيق.',
        en: 'Our technical team visits the site to conduct a comprehensive inspection and accurate assessment.'
      }
    },
    {
      title: {
        ar: 'تقديم العرض الفني والمالي',
        en: 'Technical and Financial Proposal'
      },
      description: {
        ar: 'نقدم عرضًا مفصلاً يتضمن الحلول المقترحة والتكاليف والجدول الزمني.',
        en: 'We provide a detailed offer that includes the proposed solutions, costs, and timeline.'
      }
    },
    {
      title: {
        ar: 'التنفيذ',
        en: 'Implementation'
      },
      description: {
        ar: 'يقوم فريقنا المتخصص بتنفيذ العمل بأعلى معايير الجودة والسلامة.',
        en: 'Our specialized team carries out the work with the highest standards of quality and safety.'
      }
    },
    {
      title: {
        ar: 'التسليم والتشغيل',
        en: 'Delivery and Operation'
      },
      description: {
        ar: 'نقوم باختبار النظام وتشغيله والتأكد من عمله بكفاءة قبل التسليم النهائي.',
        en: 'We test the system, operate it, and ensure that it works efficiently before final delivery.'
      }
    },
    {
      title: {
        ar: 'خدمة ما بعد البيع',
        en: 'After-Sales Service'
      },
      description: {
        ar: 'نقدم خدمات الدعم الفني والصيانة الدورية لضمان استمرار أداء النظام بكفاءة.',
        en: 'We provide technical support and periodic maintenance services to ensure the continued efficient performance of the system.'
      }
    }
  ];

  const faqList = [
    {
      question: {
        ar: 'ما هي وتيرة الصيانة الدورية الموصى بها لأنظمة التكييف؟',
        en: 'What is the recommended frequency for routine maintenance of air conditioning systems?'
      },
      answer: {
        ar: 'نوصي بإجراء صيانة دورية لأنظمة التكييف مرتين سنويًا كحد أدنى: مرة قبل بداية فصل الصيف ومرة قبل بداية فصل الشتاء. هذا يضمن أن نظام التكييف يعمل بكفاءة عندما تحتاجه أكثر، ويساعد في تحديد وإصلاح المشاكل المحتملة قبل أن تتطور إلى أعطال كبيرة.',
        en: 'We recommend routine maintenance for air conditioning systems at least twice a year: once before the beginning of summer and once before the beginning of winter. This ensures that the air conditioning system is working efficiently when you need it most, and helps identify and fix potential problems before they develop into major malfunctions.'
      }
    },
    {
      question: {
        ar: 'ما هي علامات تسرب غاز التبريد في المكيف؟',
        en: 'What are the signs of refrigerant leakage in the air conditioner?'
      },
      answer: {
        ar: 'هناك عدة علامات قد تشير إلى وجود تسرب في غاز التبريد، منها: انخفاض كفاءة التبريد، تكون الثلج على وحدة التبخير، صدور صوت فحيح من المكيف، ارتفاع فواتير الكهرباء دون سبب واضح. إذا لاحظت أيًا من هذه العلامات، فمن المهم الاتصال بفني متخصص على الفور لفحص المكيف وإصلاح التسرب.',
        en: 'There are several signs that may indicate a refrigerant leak, including: reduced cooling efficiency, ice formation on the evaporator unit, hissing sound from the air conditioner, increase in electricity bills without an obvious reason. If you notice any of these signs, it is important to contact a specialized technician immediately to check the air conditioner and fix the leak.'
      }
    },
    {
      question: {
        ar: 'ما هو العمر الافتراضي لنظام التكييف؟',
        en: 'What is the expected lifespan of an air conditioning system?'
      },
      answer: {
        ar: 'يختلف العمر الافتراضي لنظام التكييف حسب نوعه وجودته وظروف الاستخدام والصيانة. بشكل عام، يمكن لمكيفات السبليت أن تدوم من 10 إلى 15 سنة، بينما يمكن لأنظمة التكييف المركزية أن تدوم من 15 إلى 20 سنة إذا تم صيانتها بشكل جيد. الصيانة الدورية المنتظمة تلعب دورًا مهمًا في إطالة عمر نظام التكييف.',
        en: 'The expected lifespan of an air conditioning system varies depending on its type, quality, usage conditions, and maintenance. In general, split air conditioners can last from 10 to 15 years, while central air conditioning systems can last from 15 to 20 years if well maintained. Regular periodic maintenance plays an important role in extending the life of the air conditioning system.'
      }
    },
    {
      question: {
        ar: 'كيف أعرف أن مكيفي بحاجة إلى استبدال وليس إصلاح؟',
        en: 'How do I know that my air conditioner needs replacement and not repair?'
      },
      answer: {
        ar: 'هناك عدة مؤشرات قد تشير إلى أن مكيفك بحاجة إلى استبدال وليس إصلاح: إذا كان عمر المكيف أكثر من 10-15 سنة، إذا كانت تكاليف الإصلاح المتكررة مرتفعة، إذا كان المكيف يستهلك كمية كبيرة من الكهرباء، إذا كان المكيف لا يبرد بشكل كافي على الرغم من الإصلاحات المتكررة، أو إذا كان المكيف يستخدم نوعًا قديمًا من غازات التبريد التي لم تعد متوفرة أو تم حظرها لأسباب بيئية.',
        en: 'There are several indicators that may indicate that your air conditioner needs replacement and not repair: if the air conditioner is more than 10-15 years old, if the recurring repair costs are high, if the air conditioner consumes a large amount of electricity, if the air conditioner does not cool adequately despite repeated repairs, or if the air conditioner uses an old type of refrigerant gases that are no longer available or have been banned for environmental reasons.'
      }
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-[#005f99] text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-lg opacity-90">
            {language === 'ar' 
              ? 'نقدم مجموعة شاملة من خدمات التكييف والتبريد عالية الجودة'
              : 'We provide a comprehensive range of high-quality air conditioning and refrigeration services'
            }
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        {/* Services in detail */}
        <div className="space-y-20">
          {servicesDetails.map((service, index) => (
            <div 
              key={service.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#005f99] mb-6 text-center">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {service.description[language as keyof typeof service.description]}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle size={20} className="text-[#005f99] mt-1 min-w-[20px]" />
                      <span className="ml-3 rtl:mr-3 rtl:ml-0 text-gray-700">
                        {feature[language as keyof typeof feature]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Our Process */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005f99] mb-12 text-center">
            {language === 'ar' ? 'مراحل العمل' : 'Our Process'}
          </h2>
          
          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-[#e0e0e0]"></div>
            
            <div className="space-y-12">
              {processList.map((process, index) => (
                <div key={index} className="relative">
                  {/* Process number */}
                  <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-12 h-12 rounded-full bg-[#005f99] text-white items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? 'md:rtl:flex-row-reverse' : 'rtl:flex-row-reverse'
                  }`}>
                    <div className={`p-6 bg-white rounded-2xl shadow-md ${
                      index % 2 === 0 ? 'md:text-right md:rtl:text-left' : 'md:text-left md:rtl:text-right'
                    }`}>
                      <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#005f99] text-white font-bold text-lg mb-4 mx-auto">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[#005f99] mb-2">
                        {process.title[language as keyof typeof process.title]}
                      </h3>
                      <p className="text-gray-700">
                        {process.description[language as keyof typeof process.description]}
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005f99] mb-12 text-center">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
          </h2>
          
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-semibold text-[#005f99]">
                      {faq.question[language as keyof typeof faq.question]}
                    </h3>
                    <span className="relative flex-shrink-0 ml-1.5 rtl:mr-1.5 rtl:ml-0 w-5 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-700">
                      {faq.answer[language as keyof typeof faq.answer]}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
        
        {/* Emergency Call */}
        <div className="mt-20">
          <EmergencySection />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
