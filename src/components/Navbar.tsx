import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Phone, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLanguageChange = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    changeLanguage(newLang);
    closeMenu(); // Close menu after language change
  };

  useEffect(() => {
    // Close menu on route change
    closeMenu();
  }, [location]);

  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/about', label: t('navigation.about') },
    { path: '/services', label: t('navigation.services') },
    { path: '/contact', label: t('navigation.contact') },
  ];
  
  // Consistent navbar styles with white background
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg py-3 text-gray-800`;

  const linkClasses = `transition-colors hover:text-[#005f99]`;

  const activeLinkClasses = `font-semibold text-[#005f99] border-b-2 border-[#005f99]`;

  const iconColor = 'text-gray-800';
  const mobileMenuBg = 'bg-white';
  const mobileLinkColor = 'text-gray-800';
  const mobileHoverBg = 'hover:bg-gray-100';
  const mobileActiveBg = 'bg-gray-100 font-semibold text-[#005f99]';

  return (
    <nav className={navClasses}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-bold ${iconColor}`}>
          {language === 'ar' ? 'الحربي' : 'Al Harbi'}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${linkClasses} ${location.pathname === item.path ? activeLinkClasses : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+966564875035" className={`flex items-center ${linkClasses}`}>
            <Phone size={18} className={`mr-1 rtl:ml-1 rtl:mr-0 ${iconColor}`} />
            +966 56 487 5035
          </a>
          <button onClick={handleLanguageChange} className={`flex items-center ${linkClasses}`}>
            <Globe size={18} className={`mr-1 rtl:ml-1 rtl:mr-0 ${iconColor}`} />
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className={iconColor}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 ${mobileMenuBg} transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-4 shadow-lg border-t border-gray-200' : 'max-h-0 py-0'
        }`}
      >
        <div className={`container-custom flex flex-col space-y-2 ${mobileLinkColor}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`block text-center py-2 rounded ${mobileHoverBg} transition-colors ${location.pathname === item.path ? mobileActiveBg : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+966564875035" className={`flex items-center justify-center py-2 rounded ${mobileHoverBg} transition-colors`}>
            <Phone size={18} className="mr-1 rtl:ml-1 rtl:mr-0" />
            +966 56 487 5035
          </a>
          <button onClick={handleLanguageChange} className={`flex items-center justify-center py-2 rounded ${mobileHoverBg} transition-colors`}>
            <Globe size={18} className="mr-1 rtl:ml-1 rtl:mr-0" />
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
