
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'excellence', icon: CheckCircle2 },
    { key: 'integrity', icon: CheckCircle2 },
    { key: 'creativity', icon: CheckCircle2 },
    { key: 'collaboration', icon: CheckCircle2 },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 }
    })
  };

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
            className="section-title"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={2}
            className="section-subtitle"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mt-10">
          {/* Story & Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={3}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-zoneBlack">
              {t('about.storyTitle')}
            </h3>
            <p className="text-zoneBlack/70">
              {t('about.storyText')}
            </p>
            
            <h3 className="text-2xl font-semibold text-zoneBlack pt-6">
              {t('about.missionTitle')}
            </h3>
            <p className="text-zoneBlack/70">
              {t('about.missionText')}
            </p>

            {/* Values */}
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-zoneBlack mb-6">
                {t('about.valuesTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <value.icon className="text-orange flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-zoneBlack">
                        {t(`about.values.${value.key}.title`)}
                      </h4>
                      <p className="text-sm text-zoneBlack/70">
                        {t(`about.values.${value.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image/Video Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={4}
            className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zoneBlack/80 to-transparent z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/about-video.mp4" type="video/mp4" />
              {/* Fallback background image */}
              <img 
                src="/images/about-image.jpg" 
                alt="About Zone Marathi" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </video>

            {/* Floating stats/achievements */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="glass p-4 rounded-lg"
              >
                <h4 className="text-3xl font-bold text-white">10+</h4>
                <p className="text-gray-200 text-sm">{t('about.stats.years')}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="glass p-4 rounded-lg"
              >
                <h4 className="text-3xl font-bold text-white">500+</h4>
                <p className="text-gray-200 text-sm">{t('about.stats.events')}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="glass p-4 rounded-lg"
              >
                <h4 className="text-3xl font-bold text-white">100+</h4>
                <p className="text-gray-200 text-sm">{t('about.stats.clients')}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="glass p-4 rounded-lg"
              >
                <h4 className="text-3xl font-bold text-white">50+</h4>
                <p className="text-gray-200 text-sm">{t('about.stats.celebrities')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
