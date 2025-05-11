import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Map, Facebook, Instagram, Twitter, Youtube, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const socialHover = {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 400 }
  };

  return (
    <footer className="bg-[#003a5f] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center mb-6">
              <Logo className="h-12 w-auto" fill="#ffffff" />
              <span className="font-bold text-xl ml-2 rtl:mr-2 rtl:ml-0">
                {t('hero.title')}
              </span>
            </div>
            <p className="mb-6 opacity-80 max-w-xs">
              {t('about.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-[#005f99] hover:bg-[#00a3e0] p-2 rounded-full transition-colors"
                  whileHover={socialHover}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-xl font-bold mb-6 border-b border-[#00a3e0] pb-2">
              {t('nav.services')}
            </h3>
            <ul className="space-y-3">
              {['installation', 'maintenance', 'repair', 'ductwork', 'refrigerant'].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link to="/services" className="hover:text-[#00a3e0] transition-colors flex items-center">
                    <span>→</span>
                    <span className="ml-2 rtl:mr-2 rtl:ml-0">{t(`services.${service}`)}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h3 className="text-xl font-bold mb-6 border-b border-[#00a3e0] pb-2">
              {t('contact.title')}
            </h3>
            <ul className="space-y-4">
              {[
                { Icon: Phone, href: "tel:+966564875035", text: t('contact.phone') },
                { Icon: Mail, href: "mailto:info@alharbi-ac.com", text: "info@alharbi-ac.com" },
                { Icon: Map, text: t('contact.address') },
                { Icon: Clock, text: "8:00 AM - 8:00 PM" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                >
                  <item.Icon size={20} className="mt-1 min-w-[20px]" />
                  <span className="ml-3 rtl:mr-3 rtl:ml-0">
                    {item.href ? (
                      <a href={item.href} className="hover:text-[#00a3e0] transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Emergency Service */}
          <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
            <h3 className="text-xl font-bold mb-6 border-b border-[#00a3e0] pb-2">
              {t('emergency.title')}
            </h3>
            <motion.div
              className="bg-red-600 rounded-2xl p-6 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="mb-4">
                {t('emergency.title')}
              </p>
              <motion.a
                href="tel:+966564875035"
                className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl inline-block hover:bg-gray-100 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} className="inline-block mr-2 rtl:ml-2 rtl:mr-0" />
                {t('emergency.call')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-6 border-t border-[#005f99] text-center opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            © {year} {t('footer.rights')} | Developed by Muhammad Shahid ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;