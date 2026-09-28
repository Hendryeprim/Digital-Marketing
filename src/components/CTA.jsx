import React from 'react';

const CTA = () => (
  <section className="py-24 bg-secondary text-center relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Turn Your Brand<br/>Into a Growth Story?</h2>
      <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Let's build a digital strategy designed around your business goals.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-4 bg-white text-secondary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl">Book a Free Strategy Call</button>
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">WhatsApp Us</button>
      </div>
    </div>
  </section>
);
export default CTA;
