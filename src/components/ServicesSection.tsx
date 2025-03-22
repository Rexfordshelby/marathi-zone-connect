
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Megaphone, 
  Users, 
  Share2, 
  CalendarDays, 
  Camera, 
  ArrowRight 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { 
      key: 'pr', 
      icon: Megaphone,
      color: 'bg-orange-50',
      iconColor: 'text-orange'
    },
    { 
      key: 'celebrity', 
      icon: Users,
      color: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    { 
      key: 'social', 
      icon: Share2,
      color: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    { 
      key: 'event', 
      icon: CalendarDays,
      color: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    { 
      key: 'photo', 
      icon: Camera,
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-500'
    }
  ];

  return (
    <section id="services" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card group"
            >
              <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className={`${service.iconColor} w-8 h-8`} />
              </div>
              <h3 className="text-xl font-semibold text-zoneBlack mb-4">
                {t(`services.items.${service.key}.title`)}
              </h3>
              <p className="text-zoneBlack/70 mb-6">
                {t(`services.items.${service.key}.description`)}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-orange font-medium group-hover:text-orange-600 transition-colors"
              >
                {t('services.learnMore')}
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
