import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Contact Us", href: "#contact" },
  ];

  const serviceLinks = [
    "Website Design & Development",
    "Mobile App Development",
    "Social Media Marketing",
    "Branding & Identity",
    "Performance Marketing",
    "Media Production",
    "Offline Branding",
  ];

  const socials = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

  return (
    <footer className="bg-[#040404] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-extrabold mb-2 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              The Ad<span className="text-secondary"> House</span><span className="text-secondary">.</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-xs leading-relaxed">
              Ninety Days. Your Brand Rebuilt. Growth You Can Bet On.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-gray-400 hover:text-secondary hover:border-secondary/40 transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-secondary text-sm transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Phone / WhatsApp</span>
                [add number]
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Email</span>
                [add email]
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Office</span>
                [add address]
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Hours</span>
                [add hours]
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>Copyright 2026 The Ad House. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
