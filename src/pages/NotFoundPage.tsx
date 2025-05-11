import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update page title
    document.title = language === 'ar' 
      ? 'الصفحة غير موجودة - الحربي للتكييف والتبريد'
      : 'Page Not Found - Al Harbi AC & Refrigeration';
  }, [language]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#005f99]">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {language === 'ar' 
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.'
            : 'Sorry, the page you are looking for does not exist or has been moved or deleted.'
          }
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/" 
            className="btn-primary flex items-center"
          >
            <Home size={18} className="mr-2 rtl:ml-2 rtl:mr-0" />
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center"
          >
            <ArrowLeft size={18} className="mr-2 rtl:ml-2 rtl:mr-0 rtl:transform rtl:rotate-180" />
            {language === 'ar' ? 'العودة للصفحة السابقة' : 'Go Back'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;