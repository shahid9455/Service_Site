import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: {
        ar: 'محمد العتيبي',
        en: 'Mohammed Al-Otaibi'
      },
      role: {
        ar: 'مدير مشروع',
        en: 'Project Manager'
      },
      content: {
        ar: 'قدم فريق الحربي للتكييف خدمة ممتازة في صيانة نظام التكييف المركزي في مكتبنا. كانوا محترفين ودقيقين وسريعين في تنفيذ العمل.',
        en: 'The Al Harbi AC team provided excellent service in maintaining the central air conditioning system in our office. They were professional, thorough, and quick in performing the work.'
      },
      rating: 5
    },
    {
      id: 2,
      name: {
        ar: 'سارة الزهراني',
        en: 'Sarah Al-Zahrani'
      },
      role: {
        ar: 'مالكة منزل',
        en: 'Homeowner'
      },
      content: {
        ar: 'تعاملت مع مؤسسة الحربي لتركيب مكيفات في منزلي الجديد. كانت الخدمة متميزة من البداية حتى النهاية. أنصح بشدة بالتعامل معهم.',
        en: 'I worked with Al Harbi company to install AC units in my new home. The service was excellent from start to finish. I highly recommend dealing with them.'
      },
      rating: 5
    },
    {
      id: 3,
      name: {
        ar: 'فهد القحطاني',
        en: 'Fahad Al-Qahtani'
      },
      role: {
        ar: 'مدير مطعم',
        en: 'Restaurant Manager'
      },
      content: {
        ar: 'نحن نتعامل مع الحربي للتكييف والتبريد منذ سنوات. التزامهم بالمواعيد وجودة الخدمة ممتازة. إنهم يقدمون خدمة صيانة دورية لأنظمة التبريد في مطعمنا.',
        en: 'We have been dealing with Al Harbi AC for years. Their commitment to schedules and service quality is excellent. They provide regular maintenance service for cooling systems in our restaurant.'
      },
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        fill={index < rating ? '#FFD700' : 'none'} 
        color={index < rating ? '#FFD700' : '#D1D5DB'} 
      />
    ));
  };

  const testimonialContent = testimonials[activeIndex].content[language as keyof (typeof testimonials)[0]['content']];
  const testimonialName = testimonials[activeIndex].name[language as keyof (typeof testimonials)[0]['name']];
  const testimonialRole = testimonials[activeIndex].role[language as keyof (typeof testimonials)[0]['role']];

  return (
    <section className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <div className="w-20 h-1 bg-[#005f99] mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[#005f99] opacity-20">
            <Quote size={80} />
          </div>
          
          {/* Testimonial card */}
          <div className="testimonial-card">
            <div className="mb-6 flex justify-center">
              {renderStars(testimonials[activeIndex].rating)}
            </div>
            
            <p className="text-gray-700 text-lg mb-6 text-center italic">
              {testimonialContent}
            </p>
            
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-bold text-[#005f99]">
                {testimonialName}
              </h4>
              <p className="text-gray-600">
                {testimonialRole}
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#005f99] text-white hover:bg-[#003a5f] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#005f99] text-white hover:bg-[#003a5f] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#005f99]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;