
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import FloatingObjects from './3d/FloatingObjects';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedLogo from './3d/AnimatedLogo';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zoneBlack to-zoneBlack/70 opacity-80 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback background image */}
          <img 
            src="/images/hero-fallback.jpg" 
            alt="Zone Marathi PR & Marketing" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </video>
      </div>

      {/* 3D Floating Objects */}
      <FloatingObjects className="opacity-60" />

      <div className="container mx-auto px-4 py-20 relative z-20 text-center">
        {/* 3D Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[200px] mb-8"
        >
          <Suspense fallback={<div className="text-white">Loading 3D...</div>}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <AnimatedLogo text="ZONE" />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </Suspense>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-orange/20 text-orange mb-6"
          >
            <span className="text-sm font-medium">{t('hero.tagline')}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {t('hero.title1')} <span className="text-orange">{t('hero.titleHighlight')}</span> {t('hero.title2')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 111, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="btn-primary min-w-[160px]"
            >
              {t('hero.buttons.learnMore')}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 111, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-secondary min-w-[160px]"
            >
              {t('hero.buttons.contactUs')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-300">{t('hero.scrollDown')}</span>
          <ArrowDown size={24} className="text-orange animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
