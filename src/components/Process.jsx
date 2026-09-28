import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '01', title: 'Discover', desc: 'Understand the business, audience and goals.' },
    { num: '02', title: 'Strategize', desc: 'Build a data-backed growth strategy.' },
    { num: '03', title: 'Create', desc: 'Develop campaigns, content and creative assets.' },
    { num: '04', title: 'Launch', desc: 'Launch campaigns across relevant platforms.' },
    { num: '05', title: 'Optimize', desc: 'Continuously analyze and improve performance.' }
  ];

  return (
    <section id="process" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-secondary">Process</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A systematic approach to driving predictable and scalable growth for your business.</p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/10 -z-10"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center w-full md:w-1/5 px-4 group"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-primary border border-white/20 flex items-center justify-center text-secondary font-bold text-2xl mb-6 relative z-10 group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,90,0,0.4)]">
                  {step.num}
                  {/* Subtle Pulse */}
                  <div className="absolute inset-0 rounded-full border border-secondary opacity-0 group-hover:animate-ping"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                
                {/* Connecting Line for Mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 -bottom-10 w-[2px] h-8 bg-white/10 transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
