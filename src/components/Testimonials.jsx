import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CMO, TechStart Inc.',
      content: 'The Ad House didn’t just bring us leads; they completely restructured our acquisition funnel. Our cost per acquisition dropped by 40% in just three months. They are a true partner.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'David Chen',
      role: 'Founder, RetailWave',
      content: 'I’ve worked with five agencies before The Ad House, and none of them understood our brand like this team does. Their creative execution matched with rigorous data analysis is unmatched.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Emily Roberts',
      role: 'Director of Marketing, Luxe Life',
      content: 'The level of transparency and communication is incredible. We always know exactly where our budget is going and the exact ROI it’s generating. Highly recommended.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-[#060606] relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.15)_0%,_transparent_70%)] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Don't Take Our <span className="text-secondary">Word For It.</span></h2>
          <p className="text-gray-400">Hear from the founders and marketing leaders who trust us to drive their growth.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-8 bg-[#060606]/5 rounded-3xl border border-white/10 hover:bg-[#060606]/[0.08] transition-colors flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex text-secondary mb-6 space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed text-lg">"{t.content}"</p>
              </div>
              
              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full mr-4 border-2 border-white/10 object-cover" />
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-secondary font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
