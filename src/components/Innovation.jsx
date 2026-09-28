import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Workflow, Eye } from 'lucide-react';

const Innovation = () => {
  const innovations = [
    { icon: Brain, title: 'AI-Powered Strategy', desc: 'We utilize predictive analytics and machine learning to forecast trends and optimize your campaigns before spending a dime.' },
    { icon: Workflow, title: 'Hyper-Personalization', desc: 'Dynamic ad creatives and content that automatically adapt to user behavior in real-time for maximum conversion.' },
    { icon: Eye, title: 'Attention Engineering', desc: 'Applying cognitive psychology to web design and copy to capture and hold user attention in an overcrowded feed.' },
    { icon: Sparkles, title: 'Web3 & Next-Gen', desc: 'Future-proofing your brand with strategies ready for decentralized web, AR experiences, and voice search optimization.' }
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-secondary" />
              <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">The Future of Marketing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Marketing, <span className="text-secondary">Evolved.</span></h2>
            <p className="text-gray-400 text-lg">We don't just follow trends. We leverage cutting-edge technology to give your brand an unfair advantage.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-secondary/40 transition-colors flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6 group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-secondary transition-all duration-300">
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
