
import React, { useState, useEffect } from 'react';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Allow for initial render to complete before showing animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

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
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}
        className="min-h-screen relative z-10"
      >
        <Navbar transparent={true} />
        <main>
          <Hero />
          <AboutSection />
          <CeoSection />
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

const CeoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-orange">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/placeholder.svg" 
                    alt="Harish A. Hire - CEO & Founder"
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback className="bg-orange/20 text-orange text-2xl">
                    HAH
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-zoneBlack">Harish A. Hire</h3>
              <p className="text-lg text-orange font-semibold mb-4">CEO & Founder</p>
              <p className="text-gray-700">
                Harish leads Zone Marathi with over 10 years of experience in PR and marketing 
                within the entertainment industry, focusing on bringing Marathi talent to the mainstream.
              </p>
              <div className="mt-4 flex justify-center md:justify-start">
                <a 
                  href="https://instagram.com/iamhaarisss777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange/80 transition-colors"
                >
                  @iamhaarisss777
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
