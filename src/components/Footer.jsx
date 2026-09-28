import React from 'react';

const Footer = () => (
  <footer className="py-12 bg-primary border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-accent">nova<span className="text-secondary">.</span></h2>
          <p className="text-gray-500">Result-driven digital marketing agency helping brands grow.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-500">
            <li><a href="#" className="hover:text-secondary">Home</a></li>
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#services" className="hover:text-secondary">Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-500">
            <li>SEO</li>
            <li>Social Media</li>
            <li>Google Ads</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Social</h4>
          <ul className="space-y-2 text-gray-500">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm border-t border-white/5 pt-8">
        &copy; 2026 Nova Agency. All rights reserved.
      </div>
    </div>
  </footer>
);
export default Footer;
