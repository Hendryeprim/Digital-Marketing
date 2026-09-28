import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Activity, Target, Share2, MousePointer } from 'lucide-react';

const CampaignShowcase = () => {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Where Strategy Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Creativity.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just run ads. We orchestrate omni-channel campaigns that capture attention, build trust, and drive conversions at every touchpoint.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {['Social Media', 'Google Ads', 'SEO', 'Content', 'Branding'].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 hover:border-secondary hover:text-white transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            
            <a href="#case-studies" className="inline-flex items-center text-secondary font-semibold group">
              See Our Campaigns in Action
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Interactive Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full"
          >
            {/* Main Mockup Container */}
            <div className="absolute inset-0 bg-primary border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col glass-card">
              {/* Header */}
              <div className="h-16 border-b border-white/10 bg-white/5 flex items-center px-6 justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-sm text-gray-400 font-medium">Campaign Performance</div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <PieChart size={14} className="text-white" />
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 flex-1 flex flex-col gap-4 bg-gradient-to-br from-transparent to-white/[0.02]">
                
                {/* Top Stats */}
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1 flex items-center"><Target size={12} className="mr-1"/> ROAS</p>
                    <p className="text-2xl font-bold text-white">4.8x <span className="text-xs text-green-400 ml-1">↑ 12%</span></p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1 flex items-center"><Activity size={12} className="mr-1"/> Conversions</p>
                    <p className="text-2xl font-bold text-white">1,204 <span className="text-xs text-green-400 ml-1">↑ 8%</span></p>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 relative overflow-hidden flex items-end">
                  {/* Mock Chart Lines */}
                  <svg className="absolute bottom-0 w-full h-full preserveAspectRatio-none" viewBox="0 0 100 50">
                    <path d="M0,40 Q10,35 20,40 T40,25 T60,30 T80,10 T100,5 L100,50 L0,50 Z" fill="url(#grad1)" opacity="0.3"></path>
                    <path d="M0,40 Q10,35 20,40 T40,25 T60,30 T80,10 T100,5" fill="none" stroke="#FF5A00" strokeWidth="2"></path>
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF5A00" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FF5A00" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -left-6 top-24 glass p-4 rounded-xl flex items-center space-x-3 shadow-xl"
            >
              <div className="bg-yellow-500/20 p-2 rounded-lg text-blue-400"><Share2 size={20} /></div>
              <div>
                <p className="text-xs text-gray-400">Reach</p>
                <p className="font-bold text-white">2.4M</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: 1 }}
              className="absolute -right-8 bottom-32 glass p-4 rounded-xl flex items-center space-x-3 shadow-xl"
            >
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><MousePointer size={20} /></div>
              <div>
                <p className="text-xs text-gray-400">Clicks</p>
                <p className="font-bold text-white">84.2K</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampaignShowcase;
