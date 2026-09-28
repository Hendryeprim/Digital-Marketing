import React from 'react';
import { motion } from 'framer-motion';

const Results = () => {
  const stats = [
    { number: "250+", label: "Happy Clients" },
    { number: "500+", label: "Campaigns" },
    { number: "10M+", label: "Impressions Generated" },
    { number: "95%", label: "Client Retention" }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Numbers That Speak <span className="text-secondary">Growth.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divider-x divider-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-[1px] h-16 bg-white/10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
