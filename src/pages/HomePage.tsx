import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import EmergencySection from '../components/home/EmergencySection';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'الحربي للتكييف والتبريد - خدمات التكييف والتبريد في جدة';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EmergencySection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;