import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side - Text Content (Spans 5 columns) */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                More Than Marketing.<br/>
                <span className="text-secondary">We're Your Growth Partner.</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                At Nova, we don't just run campaigns; we build scalable digital ecosystems. By combining data-driven strategy, creative execution, and cutting-edge performance marketing, we help ambitious brands outpace their competition.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                    <Target size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Strategy & Data</h4>
                    <p className="text-sm text-gray-400 mt-1">Every decision is backed by analytics and tailored to your specific market.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                    <Zap size={18} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Creative Execution</h4>
                    <p className="text-sm text-gray-400 mt-1">Compelling visuals and copy that resonate with your target audience.</p>
                  </div>
                </div>
              </div>

              <a href="#about-more" className="inline-flex items-center font-semibold text-secondary hover:text-white transition-colors group">
                Discover Our Story
                <span className="ml-2 w-8 h-[2px] bg-secondary group-hover:bg-white transition-colors duration-300 relative">
                  <span className="absolute right-0 -top-1 w-2.5 h-2.5 border-t-2 border-r-2 border-secondary group-hover:border-white transform rotate-45 transition-colors duration-300"></span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Side - Visual Composition (Spans 7 columns) */}
          <div className="lg:col-span-7 relative h-[600px] w-full hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute right-0 top-10 w-4/5 h-[450px] rounded-3xl overflow-hidden glass-card z-10"
            >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Agency Team" className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 bottom-10 w-3/5 h-[350px] rounded-3xl overflow-hidden glass-card border border-white/20 z-20 shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Strategy Planning" className="w-full h-full object-cover opacity-80" />
            </motion.div>
            
            {/* Small Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-5 bottom-32 bg-secondary text-white p-5 rounded-2xl shadow-xl z-30 max-w-[200px]"
            >
              <Rocket size={24} className="mb-3" />
              <p className="font-bold text-lg leading-tight mb-1">Performance Focused</p>
              <p className="text-xs text-white/80">We optimize for ROI, not just vanity metrics.</p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
