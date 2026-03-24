import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSlider from '../components/ServicesSlider';
import PortfolioSection from '../components/PortfolioSection';
import PreviousWorkSection from '../components/PreviousWorkSection';
import ProjectWorkSection from '../components/ProjectWorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSlider />
      <PortfolioSection />
      <PreviousWorkSection />
      <ProjectWorkSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}