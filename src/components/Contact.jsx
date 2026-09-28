import React from 'react';

const Contact = () => (
  <section id="contact" className="py-24 bg-[#0a0a0a]">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's Talk About Your <span className="text-secondary">Growth.</span></h2>
          <p className="text-gray-400 mb-8">Reach out to us to start building your custom strategy.</p>
          <div className="space-y-4 text-gray-300">
            <p>📧 hello@nova.agency</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Growth Ave, NY</p>
          </div>
        </div>
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white" />
            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white" />
            <textarea placeholder="Message" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white h-32"></textarea>
            <button className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors">Start the Conversation →</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;
