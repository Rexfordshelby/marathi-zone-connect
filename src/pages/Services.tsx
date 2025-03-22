
import React from 'react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Megaphone, 
  Users, 
  Share2, 
  CalendarDays, 
  Camera, 
  Briefcase,
  Newspaper,
  Mic,
  Trophy,
  MessageSquare
} from 'lucide-react';

const ServicesPage = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-20">
        <ServicesHeader />
        <ServicesSection />
        <DetailedServices />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

const ServicesHeader = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-zoneBlack text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const DetailedServices = () => {
  const { t } = useLanguage();

  const additionalServices = [
    { 
      key: 'content', 
      icon: Newspaper,
      title: 'Content Creation',
      description: 'Expert content creation services for all your marketing needs, from articles and press releases to social media content and video scripts.'
    },
    { 
      key: 'interview', 
      icon: Mic,
      title: 'Media Interviews',
      description: 'We arrange and prepare celebrities for interviews across print, digital, TV, and radio platforms to maximize visibility and impact.'
    },
    { 
      key: 'talent', 
      icon: Trophy,
      title: 'Talent Scouting',
      description: 'Discover emerging talent in the Marathi entertainment industry with our professional scouting and development services.'
    },
    { 
      key: 'crisis', 
      icon: MessageSquare,
      title: 'Crisis Management',
      description: 'Protect your brand reputation with our expert crisis management services, handling sensitive situations with professionalism and discretion.'
    },
    { 
      key: 'consulting', 
      icon: Briefcase,
      title: 'Brand Consulting',
      description: 'Strategic consulting services to help you define and strengthen your brand identity in the Marathi market.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Specialized Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            Beyond our core offerings, we provide specialized services tailored to your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group h-full flex flex-col"
            >
              <div className="bg-orange/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-orange w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-zoneBlack mb-4">
                {service.title}
              </h3>
              <p className="text-zoneBlack/70 flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We begin with a thorough consultation to understand your brand, goals, and target audience.'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Our team develops a customized strategy tailored to your specific needs and objectives.'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'We execute the strategy with precision, leveraging our expertise and industry connections.'
    },
    {
      step: 4,
      title: 'Monitoring & Optimization',
      description: 'We continuously monitor results and make adjustments to optimize performance and outcomes.'
    },
    {
      step: 5,
      title: 'Reporting & Analysis',
      description: 'You receive detailed reports and analysis of campaign performance, impact, and ROI.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            A systematic approach that ensures successful outcomes for your projects.
          </motion.p>
        </div>

        <div className="mt-12 relative">
          {/* Process Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-orange/20 transform -translate-x-1/2"></div>
          
          {/* Process Steps */}
          <div className="space-y-16 md:space-y-0 relative">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:mb-20`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <h3 className="text-2xl font-semibold text-zoneBlack mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zoneBlack/70">
                    {item.description}
                  </p>
                </div>
                
                {/* Step Number */}
                <div className="md:w-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-orange flex items-center justify-center text-white font-bold text-lg md:text-2xl relative z-10">
                    {item.step}
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-orange/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-zoneBlack mb-6"
              >
                Ready to elevate your brand?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-zoneBlack/70 mb-8"
              >
                Contact us today to discuss how Zone Marathi PR & Marketing can help you achieve your goals in the Marathi entertainment market.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a 
                  href="/contact" 
                  className="btn-primary inline-block"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
            <div className="md:w-1/2 bg-gray-200 hidden md:block">
              <div className="h-full relative">
                <img 
                  src="/images/cta-image.jpg" 
                  alt="Get Started with Zone Marathi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-zoneBlack/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
