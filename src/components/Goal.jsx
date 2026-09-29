import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, MapPin, Megaphone, ArrowRight } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "I Need Leads",
    desc: "Performance ads, landing pages and follow-ups that fill your enquiry list.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/40",
    glow: "shadow-[0_0_40px_rgba(255,90,0,0.15)]",
  },
  {
    icon: MapPin,
    title: "I Need Footfall",
    desc: "Local ads, offline branding, theatre ads and activations that bring people to your shop, showroom or site.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/40",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.15)]",
  },
  {
    icon: Megaphone,
    title: "I Need Brand Awareness",
    desc: "Branding, social media and media production that make you the name people remember.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/40",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.15)]",
  },
];

const Goal = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-28 bg-[#060606] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">What Are You Looking For?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "Outfit, sans-serif" }}>
              Choose Your <span className="text-secondary">Goal</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {goals.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              onClick={() => setActive(active === i ? null : i)}
              className={`group cursor-pointer p-8 rounded-2xl border transition-all duration-400 text-center relative overflow-hidden ${
                active === i
                  ? `${g.border} ${g.bg} ${g.glow}`
                  : "border-white/10 bg-[#060606]/[0.03] hover:border-white/20"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/20 pointer-events-none" />
              <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center ${g.bg} border ${g.border} relative z-10`}>
                <g.icon size={24} className={g.color} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10" style={{ fontFamily: "Outfit, sans-serif" }}>{g.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">{g.desc}</p>
              <a
                href="#contact"
                className={`inline-flex items-center text-sm font-semibold ${g.color} relative z-10 group-hover:opacity-100 transition-all`}
                onClick={(e) => e.stopPropagation()}
              >
                Get Started <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goal;
