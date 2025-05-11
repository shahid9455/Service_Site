import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from '../common/Logo';
import { color } from 'framer-motion';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-12 w-auto" />
            <span className={`${isScrolled ? 'text-[#005f99]' : 'text-[#005f99]'} font-bold text-xl hidden md:block mr-2 ml-2`}>
              {t('hero.title')}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
          <Link to="/" className={`px-4 py-2 rounded-lg ${location.pathname === '/' ? 'text-[#005f99] font-medium' : 'text-gray-700 hover:text-[#005f99]'}`}>
            {t('nav.home')}
          </Link>
          <Link to="/about" className={`px-4 py-2 rounded-lg ${location.pathname === '/about' ? 'text-[#005f99] font-medium' : 'text-gray-700 hover:text-[#005f99]'}`}>
            {t('nav.about')}
          </Link>
          <Link to="/services" className={`px-4 py-2 rounded-lg ${location.pathname === '/services' ? 'text-[#005f99] font-medium' : 'text-gray-700 hover:text-[#005f99]'}`}>
            {t('nav.services')}
          </Link>
          <Link to="/projects" className={`px-4 py-2 rounded-lg ${location.pathname === '/projects' ? 'text-[#005f99] font-medium' : 'text-gray-700 hover:text-[#005f99]'}`}>
            {t('nav.projects')}
          </Link>
          <Link to="/contact" className={`px-4 py-2 rounded-lg ${location.pathname === '/contact' ? 'text-[#005f99] font-medium' : 'text-gray-700 hover:text-[#005f99]'}`}>
            {t('nav.contact')}
          </Link>
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-lg text-gray-700 hover:text-[#005f99] font-medium"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </nav>

        <div className="hidden lg:flex items-center">
          <a href="tel:+966564875035" className="flex items-center btn-primary">
            <Phone size={18} className="mr-2 rtl:ml-2 rtl:mr-0" />
            <span>+966 564875035</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={toggleLanguage}
            className="mr-4 rtl:ml-4 rtl:mr-0 text-gray-700"
          >
            {language === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-[#005f99]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full">
          <nav className="container-custom py-4 flex flex-col" >
            <Link to="/" className="py-3 px-4 hover:bg-gray-100 rounded-lg">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="py-3 px-4 hover:bg-gray-100 rounded-lg">
              {t('nav.about')}
            </Link>
            <Link to="/services" className="py-3 px-4 hover:bg-gray-100 rounded-lg">
              {t('nav.services')}
            </Link>
            <Link to="/projects" className="py-3 px-4 hover:bg-gray-100 rounded-lg">
              {t('nav.projects')}
            </Link>
            <Link to="/contact" className="py-3 px-4 hover:bg-gray-100 rounded-lg">
              {t('nav.contact')}
            </Link>
            <a href="tel:+966564875035" className="mt-4 btn-primary text-center">
              <Phone size={18} className="inline-block mr-2 rtl:ml-2 rtl:mr-0" />
              <span>+966 564875035</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;