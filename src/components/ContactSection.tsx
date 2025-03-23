
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, Mail, MapPin, Send, AlertCircle, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.name');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.form.errors.phone');
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = t('contact.form.errors.phoneInvalid');
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.message');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate sending data to an API
    try {
      // In a real application, you would send this data to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t('contact.form.successTitle'),
        description: t('contact.form.successMessage'),
        duration: 5000,
      });
      
      // Reset form after successful submission
      setFormData(initialFormData);
      
    } catch (error) {
      toast({
        title: t('contact.form.errorTitle'),
        description: t('contact.form.errorMessage'),
        variant: "destructive",
        duration: 5000,
      });
      
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-zoneBlack mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="text-orange w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zoneBlack/60 mb-1">
                      {t('contact.info.phone')}
                    </h4>
                    <a href="tel:+917715808527" className="text-zoneBlack hover:text-orange transition-colors">
                      +91 7715808527
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zoneBlack/60 mb-1">
                      {t('contact.info.email')}
                    </h4>
                    <a href="mailto:zonemarathi@gmail.com" className="text-zoneBlack hover:text-orange transition-colors">
                      zonemarathi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zoneBlack/60 mb-1">
                      {t('contact.info.address')}
                    </h4>
                    <p className="text-zoneBlack">
                      Udaymitra CHS A Wing, Room No. 01,<br />
                      Kurla East, Mumbai - 400024
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-orange w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zoneBlack/60 mb-1">
                      Instagram
                    </h4>
                    <a href="https://instagram.com/iamhaarisss777" target="_blank" rel="noopener noreferrer" className="text-zoneBlack hover:text-orange transition-colors">
                      @iamhaarisss777
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Live Chat Button */}
              <div className="mt-8">
                <a 
                  href="https://wa.me/917715808527" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-green-500 text-white text-center rounded-lg 
                            font-medium transition-all hover:bg-green-600 shadow-md hover:shadow-lg"
                >
                  {t('contact.whatsappChat')}
                </a>
              </div>
            </div>
            
            {/* Map or additional info can go here */}
            <div className="bg-white shadow-lg rounded-xl p-6 h-64 relative overflow-hidden">
              <div className="absolute inset-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9170871754856!2d72.88961!3d19.0697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x38adaec65c89b957!2sKurla%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650450351201!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-zoneBlack mb-6">
                {t('contact.form.title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zoneBlack/70 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent`}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                    {errors.name && (
                      <div className="mt-1 flex items-center text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zoneBlack/70 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent`}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                    {errors.email && (
                      <div className="mt-1 flex items-center text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zoneBlack/70 mb-2">
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent`}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                  {errors.phone && (
                    <div className="mt-1 flex items-center text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zoneBlack/70 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent resize-none`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                  {errors.message && (
                    <div className="mt-1 flex items-center text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
