
import React from 'react';
import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CelebritySection from '@/components/CelebritySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Index = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <LanguageProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="min-h-screen"
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
      </motion.div>
    </LanguageProvider>
  );
};

export default Index;
