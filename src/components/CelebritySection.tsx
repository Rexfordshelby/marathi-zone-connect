
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  CalendarClock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Celebrity } from '@/types';

// Note: In a real application, this would be fetched from an API
const initialCelebrities: Celebrity[] = [
  {
    id: '1',
    name: 'Aamir Khan',
    profession: 'Actor',
    image: '/images/celebrities/aamir.jpg',
    availability: true,
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '2',
    name: 'Madhuri Dixit',
    profession: 'Actress',
    image: '/images/celebrities/madhuri.jpg',
    availability: true,
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: '3',
    name: 'Sachin Tendulkar',
    profession: 'Cricketer',
    image: '/images/celebrities/sachin.jpg',
    availability: false,
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '4',
    name: 'Shreya Ghoshal',
    profession: 'Singer',
    image: '/images/celebrities/shreya.jpg',
    availability: true,
    socialLinks: {
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    }
  }
];

interface CelebritySectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const CelebritySection: React.FC<CelebritySectionProps> = ({ 
  limit = 0,
  showViewAll = true 
}) => {
  const { t } = useLanguage();
  const [celebrities] = useState<Celebrity[]>(initialCelebrities);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Only apply limit if it's greater than 0
  const displayedCelebrities = limit > 0 ? celebrities.slice(0, limit) : celebrities;
  
  const totalSlides = Math.ceil(displayedCelebrities.length / 3);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube
  };

  return (
    <section id="celebrities" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('celebrities.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            {t('celebrities.subtitle')}
          </motion.p>
        </div>

        <div className="relative mt-12">
          {/* Mobile Slider Controls */}
          <div className="flex justify-center mb-8 md:hidden">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-orange hover:text-orange transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="px-4">
              <span className="text-sm font-medium text-gray-600">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-orange hover:text-orange transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Desktop Grid / Mobile Slider */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(${-currentSlide * 100}%)`,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            }}
          >
            {displayedCelebrities.map((celebrity, index) => (
              <motion.div
                key={celebrity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group overflow-hidden"
              >
                <div className="relative h-72 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={celebrity.image || '/images/placeholder.svg'} 
                    alt={celebrity.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zoneBlack to-transparent opacity-50"></div>
                  
                  {/* Availability Badge */}
                  <div className={`absolute top-4 right-4 flex items-center space-x-1 ${
                    celebrity.availability ? 'bg-green-500' : 'bg-red-500'
                  } text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    <CalendarClock size={14} />
                    <span>
                      {celebrity.availability ? t('celebrities.available') : t('celebrities.unavailable')}
                    </span>
                  </div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {celebrity.socialLinks && Object.entries(celebrity.socialLinks).map(([platform, url]) => {
                      const SocialIcon = socialIcons[platform as keyof typeof socialIcons];
                      return SocialIcon ? (
                        <a 
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white flex items-center justify-center 
                                   text-zoneBlack hover:bg-orange hover:text-white transition-colors"
                          aria-label={`${celebrity.name} on ${platform}`}
                        >
                          <SocialIcon size={16} />
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-zoneBlack">
                  {celebrity.name}
                </h3>
                <p className="text-orange mb-4">
                  {celebrity.profession}
                </p>
                <a 
                  href={`/celebrities/${celebrity.id}`} 
                  className="inline-flex items-center text-zoneBlack/70 font-medium 
                           hover:text-orange transition-colors"
                >
                  {t('celebrities.viewProfile')}
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Desktop Slider Controls */}
          <div className="hidden md:flex justify-center mt-12">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-300 text-gray-600 
                        hover:border-orange hover:text-orange transition-colors mr-4"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-300 text-gray-600
                        hover:border-orange hover:text-orange transition-colors"
              aria-label="Next slide"  
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link 
              to="/celebrities" 
              className="btn-primary inline-flex items-center"
            >
              {t('celebrities.viewAll')}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CelebritySection;
