
import React from 'react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="pt-20">
        <ContactHeader />
        <ContactSection />
        <QuestionsSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

const ContactHeader = () => {
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
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const QuestionsSection = () => {
  const faqs = [
    {
      question: "How do I book a celebrity for my event?",
      answer: "To book a celebrity for your event, you can contact us through our contact form or call us directly. We'll discuss your requirements, suggest appropriate celebrities, and handle all the arrangements."
    },
    {
      question: "What services do you offer for PR campaigns?",
      answer: "Our PR services include media relations, press releases, media coverage, social media promotion, event publicity, and crisis management. We tailor our approach to your specific needs and goals."
    },
    {
      question: "How much does it cost to hire a celebrity?",
      answer: "Celebrity fees vary depending on their popularity, the type of event, duration, and requirements. Contact us with your event details, and we'll provide you with a customized quote."
    },
    {
      question: "Do you handle social media management for celebrities?",
      answer: "Yes, we offer comprehensive social media management services for celebrities, including content creation, posting schedule, engagement strategies, and analytics reporting."
    },
    {
      question: "Can you organize complete events or just provide celebrities?",
      answer: "We offer end-to-end event management services, from concept development and planning to execution and post-event analysis. We can handle the entire event or just arrange celebrity appearances."
    },
    {
      question: "What areas do you serve?",
      answer: "While we specialize in the Marathi entertainment industry, we operate throughout Maharashtra and can arrange services anywhere in India or internationally depending on requirements."
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-subtitle"
          >
            Find answers to common questions about our services.
          </motion.p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h3 className="text-lg font-semibold text-zoneBlack pr-8">
                    {faq.question}
                  </h3>
                  <div className="w-5 h-5 relative">
                    <span className="absolute top-1/2 left-0 right-0 w-5 h-0.5 bg-orange transform -translate-y-1/2 group-open:rotate-180 transition-transform"></span>
                    <span className="absolute top-1/2 left-0 right-0 w-5 h-0.5 bg-orange transform -translate-y-1/2 rotate-90 group-open:opacity-0 transition-opacity"></span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0 text-zoneBlack/70">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
