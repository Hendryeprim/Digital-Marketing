import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Insights = () => {
  const articles = [
    {
      category: 'Strategy',
      date: 'Oct 12, 2026',
      title: 'How to Build a Digital Marketing Strategy in 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
      category: 'Growth',
      date: 'Oct 05, 2026',
      title: 'SEO vs Paid Ads: Where Should Businesses Invest?',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      category: 'Social Media',
      date: 'Sep 28, 2026',
      title: '7 Social Media Mistakes Killing Your Organic Reach',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  return (
    <section id="insights" className="py-24 bg-primary border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ideas That Help <span className="text-secondary">Brands Grow.</span></h2>
            <p className="text-gray-400 text-lg">Insights, strategies, and industry news from our team of experts.</p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="hidden md:inline-flex items-center font-bold text-white hover:text-secondary transition-colors"
          >
            View All Articles <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="h-64 rounded-3xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="flex items-center text-xs font-bold uppercase tracking-wider mb-3">
                <span className="text-secondary">{article.category}</span>
                <span className="mx-2 text-gray-600">•</span>
                <span className="text-gray-500">{article.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors leading-tight text-white">{article.title}</h3>
              
              <span className="inline-flex items-center text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                Read Article <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
