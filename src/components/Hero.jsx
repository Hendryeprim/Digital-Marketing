import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium tracking-wide text-gray-300 uppercase">Result-Driven Digital Marketing Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white tracking-tight">
            Turn Attention <br />
            Into Real <span className="text-secondary relative">
              Growth.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="#FF5A00" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            We build data-driven digital marketing strategies that turn visibility into qualified leads, customers and measurable business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact" className="px-8 py-4 bg-secondary text-white text-base font-semibold rounded-full hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] transform hover:-translate-y-1 text-center flex items-center justify-center">
              Get Your Free Strategy Call
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#case-studies" className="px-8 py-4 bg-transparent border border-white/20 text-white text-base font-semibold rounded-full hover:bg-white/5 transition-all text-center">
              Explore Our Work
            </a>
          </div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[600px] w-full hidden md:block"
        >
          {/* Main Visual Image container */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 glass-card">
            {/* Placeholder for high-quality imagery */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900 flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Marketing Strategy" className="object-cover w-full h-full opacity-60 mix-blend-overlay" />
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 -left-10 glass-card p-5 rounded-2xl border border-white/10 flex items-center space-x-4 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Website Traffic</p>
              <p className="text-xl font-bold text-white">+230%</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -right-5 glass-card p-5 rounded-2xl border border-white/10 flex items-center space-x-4 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-blue-400">
              <BarChart2 size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Lead Growth</p>
              <p className="text-xl font-bold text-white">+180%</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-10 left-10 glass-card p-5 rounded-2xl border border-white/10 flex items-center space-x-4 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Leads Generated</p>
              <p className="text-xl font-bold text-white">5.2K</p>
            </div>
          </motion.div>
          
          {/* Abstract elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[0.5px] border-white/5 rounded-full border-dashed animate-[spin_60s_linear_infinite] pointer-events-none -z-1"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
