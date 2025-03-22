
import React, { useState } from 'react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CelebritySection from '@/components/CelebritySection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  X,
  CalendarClock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  CheckCircle
} from 'lucide-react';
import { Celebrity } from '@/types';

// Mock data for celebrities
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
    },
    bio: 'Aamir Khan is a renowned actor known for his versatile roles and dedication to his craft.',
    achievements: ['National Film Award', 'Filmfare Award', 'Padma Shri']
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
    },
    bio: 'Madhuri Dixit is a legendary actress and dancer who has captivated audiences for decades.',
    achievements: ['Filmfare Award', 'Padma Shri', 'IIFA Award']
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
    },
    bio: 'Sachin Tendulkar is a cricket legend and one of the greatest batsmen in the history of the sport.',
    achievements: ['Bharat Ratna', 'Arjuna Award', 'Rajiv Gandhi Khel Ratna']
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
    },
    bio: 'Shreya Ghoshal is a celebrated playback singer known for her melodious voice and versatility.',
    achievements: ['National Film Award', 'Filmfare Award', 'IIFA Award']
  },
  {
    id: '5',
    name: 'Amitabh Bachchan',
    profession: 'Actor',
    image: '/images/celebrities/amitabh.jpg',
    availability: false,
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com'
    },
    bio: 'Amitabh Bachchan is a legendary actor whose career spans over five decades.',
    achievements: ['National Film Award', 'Padma Vibhushan', 'Dadasaheb Phalke Award']
  },
  {
    id: '6',
    name: 'Lata Mangeshkar',
    profession: 'Singer',
    image: '/images/celebrities/lata.jpg',
    availability: false,
    socialLinks: {
      twitter: 'https://twitter.com'
    },
    bio: 'Lata Mangeshkar was a legendary singer who was known as the Nightingale of India.',
    achievements: ['Bharat Ratna', 'Padma Vibhushan', 'Dadasaheb Phalke Award']
  },
  {
    id: '7',
    name: 'Virat Kohli',
    profession: 'Cricketer',
    image: '/images/celebrities/virat.jpg',
    availability: true,
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    },
    bio: 'Virat Kohli is one of the most successful cricketers of his generation.',
    achievements: ['Arjuna Award', 'Rajiv Gandhi Khel Ratna', 'ICC Cricketer of the Year']
  },
  {
    id: '8',
    name: 'Deepika Padukone',
    profession: 'Actress',
    image: '/images/celebrities/deepika.jpg',
    availability: true,
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    bio: 'Deepika Padukone is a leading actress known for her versatile performances and global appeal.',
    achievements: ['Filmfare Award', 'IIFA Award', 'Screen Award']
  }
];

const professionOptions = ['All', 'Actor', 'Actress', 'Singer', 'Cricketer', 'Dancer', 'Comedian'];

const CelebritiesPage = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-20">
        <CelebritiesHeader />
        <CelebritiesListSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

const CelebritiesHeader = () => {
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
            {t('celebrities.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('celebrities.subtitle')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const CelebritiesListSection = () => {
  const [celebrities, setCelebrities] = useState<Celebrity[]>(initialCelebrities);
  const [filteredCelebrities, setFilteredCelebrities] = useState<Celebrity[]>(initialCelebrities);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const { t } = useLanguage();

  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    applyFilters(term, selectedProfession, availabilityFilter, sortOrder);
  };

  // Function to handle profession filter
  const handleProfessionFilter = (profession: string) => {
    setSelectedProfession(profession);
    applyFilters(searchTerm, profession, availabilityFilter, sortOrder);
  };

  // Function to handle availability filter
  const handleAvailabilityFilter = (available: boolean | null) => {
    setAvailabilityFilter(available);
    applyFilters(searchTerm, selectedProfession, available, sortOrder);
  };

  // Function to handle sort order
  const handleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    applyFilters(searchTerm, selectedProfession, availabilityFilter, newOrder);
  };

  // Function to apply all filters
  const applyFilters = (
    search: string, 
    profession: string, 
    availability: boolean | null, 
    order: 'asc' | 'desc'
  ) => {
    let filtered = [...initialCelebrities];
    
    // Apply search filter
    if (search) {
      filtered = filtered.filter(celeb => 
        celeb.name.toLowerCase().includes(search.toLowerCase()) ||
        celeb.profession.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Apply profession filter
    if (profession !== 'All') {
      filtered = filtered.filter(celeb => celeb.profession === profession);
    }
    
    // Apply availability filter
    if (availability !== null) {
      filtered = filtered.filter(celeb => celeb.availability === availability);
    }
    
    // Apply sort order
    filtered.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    
    setFilteredCelebrities(filtered);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedProfession('All');
    setAvailabilityFilter(null);
    setSortOrder('asc');
    setFilteredCelebrities(initialCelebrities);
  };

  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-zoneBlack">
              Find Celebrities
            </h2>
            
            {/* Clear Filters Button - show only when filters are applied */}
            {(searchTerm || selectedProfession !== 'All' || availabilityFilter !== null) && (
              <button
                onClick={clearFilters}
                className="flex items-center text-sm text-orange hover:text-orange-600 transition-colors"
              >
                <X size={16} className="mr-1" />
                Clear All Filters
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-zoneBlack/70 mb-2">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search by name or profession..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Profession Filter */}
            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-zoneBlack/70 mb-2">
                Profession
              </label>
              <select
                id="profession"
                value={selectedProfession}
                onChange={(e) => handleProfessionFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent appearance-none bg-white"
              >
                {professionOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Availability Filter */}
            <div>
              <label className="block text-sm font-medium text-zoneBlack/70 mb-2">
                Availability
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleAvailabilityFilter(true)}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    availabilityFilter === true
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  <CheckCircle size={16} className="mr-2" />
                  Available
                </button>
                <button
                  onClick={() => handleAvailabilityFilter(false)}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    availabilityFilter === false
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  <X size={16} className="mr-2" />
                  Unavailable
                </button>
                <button
                  onClick={() => handleAvailabilityFilter(null)}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    availabilityFilter === null
                      ? 'bg-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  <Filter size={16} className="mr-2" />
                  All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sort Controls */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-zoneBlack/70">
            Showing <span className="font-semibold text-zoneBlack">{filteredCelebrities.length}</span> celebrities
          </p>
          
          <button
            onClick={handleSortOrder}
            className="flex items-center text-sm px-4 py-2 border border-gray-300 rounded-lg hover:border-orange hover:text-orange transition-all"
          >
            Sort by Name
            <ArrowUpDown size={16} className="ml-2" />
          </button>
        </div>

        {/* Celebrities Grid */}
        {filteredCelebrities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCelebrities.map((celebrity, index) => (
              <motion.div
                key={celebrity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
                
                {/* Short Bio */}
                {celebrity.bio && (
                  <p className="text-sm text-zoneBlack/70 mb-4 line-clamp-2">
                    {celebrity.bio}
                  </p>
                )}
                
                <a 
                  href={`/celebrities/${celebrity.id}`} 
                  className="inline-block px-4 py-2 border border-orange text-orange rounded 
                           hover:bg-orange hover:text-white transition-colors"
                >
                  {t('celebrities.viewProfile')}
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <Filter size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-zoneBlack mb-2">
              No celebrities found
            </h3>
            <p className="text-zoneBlack/70 mb-6">
              Try adjusting your filters or search criteria.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CelebritiesPage;
