
import React, { Suspense, useState, useEffect } from 'react';
import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CelebritySection from '@/components/CelebritySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Allow for initial render to complete before showing animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  // Show a simple loading state initially
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl font-bold flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-4 border-orange border-t-transparent animate-spin mb-6"></div>
          <span className="text-orange">ZONE</span>
          <span className="text-sm text-gray-400 mt-2">Loading Experience...</span>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="min-h-screen relative z-10"
      >
        <Navbar transparent={true} />
        <main>
          <Hero />
          <AboutSection />
          <ServicesSection />
          <CelebritySection limit={3} showViewAll={true} />
          <ContactSection />
        </main>
        <Footer />
        <AnimatedBackground />
      </motion.div>
    </LanguageProvider>
  );
};

export default Index;
