
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'celebrity', path: '/celebrities' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !transparent
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-orange flex items-center"
            >
              <span className="text-zoneBlack">Zone</span>
              <span className="text-orange">Marathi</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="nav-link"
                >
                  {t(`nav.${link.name}`)}
                </Link>
              ))}
              
              <button 
                onClick={toggleLanguage} 
                className="flex items-center space-x-1 ml-4 px-3 py-1 rounded-full border border-orange/30 
                          hover:border-orange text-orange/80 hover:text-orange transition-all"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language === 'en' ? 'मराठी' : 'ENG'}</span>
              </button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguage} 
              className="mr-4 flex items-center space-x-1 px-2 py-1 rounded-full 
                        border border-orange/30 text-orange/80 transition-all"
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{language === 'en' ? 'मराठी' : 'ENG'}</span>
            </button>
            
            <button
              onClick={toggleMenu}
              className="text-zoneBlack hover:text-orange transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="block py-2 text-zoneBlack/80 hover:text-orange transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(`nav.${link.name}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
