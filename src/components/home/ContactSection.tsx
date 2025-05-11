import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section-padding bg-[#f2f2f2]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-[#005f99] mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map and Contact Info */}
            <div className="bg-[#005f99] text-white p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone size={20} className="mt-1" />
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h4 className="font-semibold">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </h4>
                    <a href="tel:+966564875035" className="hover:underline">
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mt-1" />
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h4 className="font-semibold">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <a href="mailto:info@alharbi-ac.com" className="hover:underline">
                      info@alharbi-ac.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="mt-1" />
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h4 className="font-semibold">
                      {language === 'ar' ? 'العنوان' : 'Address'}
                    </h4>
                    <p>{t('contact.address')}</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.1749576139366!2d39.22042221529886!3d21.558461284915683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMzJzMwLjYiTiAzOcKwMTMnMjIuOCJF!5e0!3m2!1sen!2ssa!4v1621956084952!5m2!1sen!2ssa" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Al Harbi AC & Refrigeration Map"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-[#005f99] mb-6">
                {language === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
              </h3>
              
              {submitSuccess && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  {language === 'ar' 
                    ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا!'
                    : 'Your message has been sent successfully. We will contact you soon!'
                  }
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#005f99] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#005f99] focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#005f99] focus:outline-none"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#005f99] focus:outline-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>{language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <span>{t('contact.form.submit')}</span>
                      <Send size={18} className="ml-2 rtl:mr-2 rtl:ml-0" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;