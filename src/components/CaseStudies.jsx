import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const cases = [
    { 
      client: 'Organic Skincare Brand', 
      industry: 'E-commerce',
      type: 'E-commerce Growth', 
      after: '+320%', 
      metric: 'Website Traffic',
      result: '+180% Online Sales',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      client: 'Fitness Brand', 
      industry: 'Health & Fitness',
      type: 'Lead Generation', 
      after: '+420%', 
      metric: 'Qualified Leads',
      result: '-50% Cost Per Lead',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      client: 'Restaurant Brand', 
      industry: 'Hospitality',
      type: 'Social Media Campaign', 
      after: '+280%', 
      metric: 'Reach',
      result: '+150% Engagement',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-[#060606]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work That Created <span className="text-secondary">Real Impact.</span></h2>
            <p className="text-gray-400 text-lg">We let our results do the talking. Here are a few examples of how we've helped brands scale.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
             <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">*Sample Work That Makes Brands Move.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#060606]/40 group-hover:bg-[#060606]/20 transition-colors z-10"></div>
                <img src={c.image} alt={c.client} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20 bg-[#060606]/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                  {c.industry}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{c.client}</h3>
                <p className="text-secondary font-medium mb-8 text-sm">{c.type}</p>
                
                <div className="flex items-end space-x-4 mb-4">
                  <div className="text-4xl font-extrabold text-white">{c.after}</div>
                  <div className="text-gray-400 text-sm leading-tight mb-1">{c.metric}</div>
                </div>
                
                <div className="w-full h-[1px] bg-[#060606]/10 my-6"></div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-300">{c.result}</p>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#060606]/5 flex items-center justify-center text-white group-hover:bg-secondary transition-colors duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
