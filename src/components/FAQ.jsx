import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'What digital marketing services do you offer?',
      a: 'We offer a full suite of digital marketing services including Search Engine Optimization (SEO), Social Media Marketing, Google Ads & PPC, Content Marketing, Branding & Creative Design, and Website Design & Development.'
    },
    {
      q: 'How long does SEO take to show results?',
      a: 'SEO is a long-term strategy. While you may see some initial improvements within 3-4 weeks, meaningful compounding results typically take 3 to 6 months depending on the competitiveness of your industry.'
    },
    {
      q: 'Do you manage Google Ads?',
      a: 'Yes, we are certified Google Partners and manage millions in ad spend. We build highly targeted campaigns focused entirely on lowering your Cost Per Acquisition and maximizing Return on Ad Spend.'
    },
    {
      q: 'Can you manage our social media?',
      a: 'Absolutely. We handle everything from content creation and copywriting to community management and paid social campaigns across platforms like Instagram, LinkedIn, TikTok, and Facebook.'
    },
    {
      q: 'How do you measure campaign success?',
      a: 'We measure success based on your specific business goals—typically prioritizing metrics like Qualified Leads generated, Customer Acquisition Cost (CAC), and overall Revenue Growth, rather than just vanity metrics like likes or impressions.'
    },
    {
      q: 'How can we get started?',
      a: 'Simply book a free strategy call with our team. We’ll discuss your current bottlenecks, analyze your market, and propose a customized growth roadmap for your brand.'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-secondary">Questions</span></h2>
          <p className="text-gray-400 text-lg">Everything you need to know about working with us.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === i ? 'bg-white/5 border-secondary/30' : 'bg-transparent hover:bg-white/[0.02]'}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <h3 className="font-bold text-left text-white text-lg">{faq.q}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${activeIndex === i ? 'bg-secondary text-white' : 'bg-white/10 text-gray-400'}`}>
                  {activeIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
