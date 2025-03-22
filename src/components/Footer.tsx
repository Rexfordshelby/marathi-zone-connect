
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Youtube, url: '#', label: 'YouTube' },
    { icon: Twitter, url: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'celebrity', path: '/celebrities' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <footer className="bg-zoneBlack text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="inline-block">
              <div className="text-2xl font-bold flex items-center">
                <span className="text-white">Zone</span>
                <span className="text-orange">Marathi</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-zoneBlack-400 flex items-center justify-center
                            transition-all hover:bg-orange hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-orange transition-colors"
                  >
                    {t(`nav.${link.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <PhoneCall size={18} className="text-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">+91 1234567890</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-orange mt-1 flex-shrink-0" />
                <a 
                  href="mailto:zonemarathi@gmail.com" 
                  className="text-gray-300 hover:text-orange transition-colors"
                >
                  zonemarathi@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {t('footer.address')}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
              {t('footer.newsletter')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('footer.newsletterText')}
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-2 rounded bg-zoneBlack-400 border border-gray-700 
                           focus:outline-none focus:border-orange text-white"
                required
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-orange text-white rounded 
                           hover:bg-orange-600 transition-colors"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Zone Marathi PR & Marketing. {t('footer.rightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
