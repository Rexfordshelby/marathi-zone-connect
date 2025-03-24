import React from 'react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Award, Calendar, Star, Heart, CheckCircle2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutPage = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-20">
        <AboutHeader />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

const AboutHeader = () => {
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
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const { t } = useLanguage();
  
  const founder = {
    name: 'Harish A. Hire',
    role: 'CEO & Founder',
    image: '/lovable-uploads/223a9b5c-ad03-4f3c-a1b6-e54980425062.png',
    bio: 'Harish leads Zone Marathi with over 10 years of experience in PR and marketing within the entertainment industry, focusing on bringing Marathi talent to the mainstream.'
  };
  
  const team = [
    {
      name: 'Priya Joshi',
      role: 'Celebrity Relations Manager',
      image: '/images/team/priya.jpg',
      bio: 'Priya specializes in building and maintaining relationships with celebrities and influencers.'
    },
    {
      name: 'Amit Patil',
      role: 'Creative Director',
      image: '/images/team/amit.jpg',
      bio: 'Amit leads our creative team, developing innovative campaigns and visual content.'
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Event Manager',
      image: '/images/team/sneha.jpg',
      bio: 'Sneha has successfully managed over 200 events, from small gatherings to large-scale productions.'
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
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            Meet the talented professionals who make Zone Marathi PR & Marketing a success.
          </motion.p>
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-orange">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-zoneBlack">{founder.name}</h3>
              <p className="text-lg text-orange font-semibold mb-4">{founder.role}</p>
              <p className="text-gray-700">{founder.bio}</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card text-center overflow-hidden group"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={member.image || '/images/placeholder.svg'} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-zoneBlack">
                {member.name}
              </h3>
              <p className="text-orange font-medium mb-4">
                {member.role}
              </p>
              <p className="text-sm text-zoneBlack/70">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Zone Marathi PR & Marketing has been instrumental in growing our brand's presence in the Marathi market. Their celebrity connections and strategic approach yielded amazing results.",
      author: "Raj Mehta",
      company: "SunRise Productions",
      icon: Star
    },
    {
      quote: "Working with Zone Marathi was a game-changer for our event. They handled everything from celebrity bookings to media coverage, making our launch a tremendous success.",
      author: "Neha Shah",
      company: "Glamour Events",
      icon: Heart
    },
    {
      quote: "The team at Zone Marathi understands the unique dynamics of the Marathi entertainment industry. Their insights and connections have been invaluable to our marketing campaigns.",
      author: "Aditya Patil",
      company: "MarathiMax Streaming",
      icon: CheckCircle2
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
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            See what our clients say about our services and results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card relative"
            >
              <div className="absolute -top-5 left-6">
                <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                  <testimonial.icon className="text-orange w-5 h-5" />
                </div>
              </div>
              <div className="pt-6">
                <blockquote className="text-zoneBlack/80 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="ml-2">
                    <p className="font-semibold text-zoneBlack">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-zoneBlack/60">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
