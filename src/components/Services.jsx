import React from 'react';
import { motion } from 'framer-motion';
import { Search, Smartphone, MousePointerClick, FileText, PenTool, Users, Monitor, LineChart } from 'lucide-react';

const servicesData = [
  { id: 1, title: 'Search Engine Optimization', desc: 'Rank higher and drive organic traffic that converts.', icon: Search },
  { id: 2, title: 'Social Media Marketing', desc: 'Build community and brand loyalty across platforms.', icon: Smartphone },
  { id: 3, title: 'Google Ads & PPC', desc: 'Targeted campaigns for immediate visibility and ROI.', icon: MousePointerClick },
  { id: 4, title: 'Content Marketing', desc: 'Engaging content that tells your story and sells.', icon: FileText },
  { id: 5, title: 'Branding & Creative Design', desc: 'Visual identities that stand out and memorable.', icon: PenTool },
  { id: 6, title: 'Influencer Marketing', desc: 'Leverage authentic voices to amplify your reach.', icon: Users },
  { id: 7, title: 'Website Design & Dev', desc: 'High-performance websites optimized for conversion.', icon: Monitor },
  { id: 8, title: 'Lead Generation', desc: 'Predictable systems to fill your sales pipeline.', icon: LineChart },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Everything Your Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Needs to Grow</span> Online.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,90,0,0.1)]"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10 group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
                
                <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-300 group-hover:text-secondary transition-colors">
                  Explore Service 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
