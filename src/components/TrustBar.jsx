import React from 'react';

const TrustBar = () => {
  // Placeholder generic logos using text for demo purposes
  const logos = ['Acme Corp', 'GlobalTech', 'InnovateInc', 'NextGen', 'Stark Ind.', 'Wayne Ent.'];

  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-500 font-medium mb-8 uppercase tracking-widest">
          Trusted by growing businesses
        </p>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
          {logos.map((logo, index) => (
            <div key={index} className="text-xl md:text-2xl font-bold font-sans text-gray-400 hover:text-gray-200 transition-colors duration-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
