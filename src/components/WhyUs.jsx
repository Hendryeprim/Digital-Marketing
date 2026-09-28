import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Zap, Database, TrendingUp } from 'lucide-react';

const WhyUs = () => {
  const pillars = [
    { icon: Compass, title: 'Strategy First', desc: 'We don’t guess. We analyze your market, competitors, and audience to build a roadmap to success.' },
    { icon: Zap, title: 'Creative Execution', desc: 'Scroll-stopping creatives and compelling copy designed specifically to convert attention into action.' },
    { icon: Database, title: 'Data Driven', desc: 'Every decision is backed by analytics. We constantly test, measure, and optimize for better ROI.' },
    { icon: TrendingUp, title: 'Long-Term Growth', desc: 'We focus on sustainable strategies that build your brand equity and deliver compounding results over time.' }
  ];

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Brands Choose to <span className="text-secondary">Grow With Us.</span></h2>
          <p className="text-gray-400 text-lg">We don't just act as an agency; we integrate with your team as a dedicated growth partner.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group p-8 bg-white/[0.03] rounded-3xl border border-white/10 hover:bg-white/[0.05] hover:border-secondary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Background Highlight */}
              <div className="absolute -inset-2 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-secondary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  <pillar.icon size={26} />
                </div>
                
                <h3 className="font-bold text-xl text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
