import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "90", suffix: "", label: "Days", sub: "To take your brand to the next level" },
  { value: "13", suffix: "+", label: "Services", sub: "Digital and offline marketing" },
  { value: "1", suffix: "", label: "Roof", sub: "One team, one plan, one point of contact" },
];

const Results = () => (
  <section className="py-24 bg-[#060606] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.08)_0%,_transparent_70%)] pointer-events-none" />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="py-8 md:py-0 px-6"
          >
            <div className="text-6xl md:text-7xl font-extrabold text-white mb-2 tracking-tighter" style={{ fontFamily: "Outfit, sans-serif" }}>
              <span className="text-secondary">{s.value}</span>{s.suffix}{" "}
              <span className="text-white">{s.label}</span>
            </div>
            <p className="text-sm text-gray-500 uppercase tracking-widest">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
