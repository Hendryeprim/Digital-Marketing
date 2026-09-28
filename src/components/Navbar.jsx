import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <span className="text-2xl font-bold tracking-tighter text-accent leading-none group-hover:text-secondary transition-colors">
            nova<span className="text-secondary group-hover:text-white">.</span>
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-400 mt-1.5 font-medium">Digital Marketing</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="px-5 py-2.5 bg-secondary text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-all shadow-[0_0_15px_rgba(255,90,0,0.3)] hover:shadow-[0_0_25px_rgba(255,90,0,0.5)] transform hover:-translate-y-0.5">
            Get a Free Strategy Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-primary glass-card border-b border-white/10 py-6 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="mt-4 px-6 py-3 bg-secondary text-white text-center font-medium rounded-full hover:bg-orange-600 transition-all">
            Get a Free Strategy Call
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
