import React from "react";
import { motion } from "framer-motion";

const tags = [
  "Social Media", "Google Ads", "Meta Ads", "Branding",
  "Websites", "Mobile Apps", "Media Production", "Offline Advertising",
  "Theatre Ads", "Performance Marketing", "Logo Design", "Email Marketing", "Immersive Ads"
];

const TrustBar = () => (
  <section className="py-10 border-y border-gray-100 bg-[#060606]/[0.01] overflow-hidden">
    <p className="text-center text-xs text-gray-400 font-semibold mb-8 uppercase tracking-[0.3em]">
      Everything under one roof
    </p>
    <div className="flex flex-wrap justify-center gap-3 px-6 opacity-70">
      {tags.map((tag, i) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-gray-400 font-medium hover:border-secondary/40 hover:text-secondary transition-all duration-200"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  </section>
);

export default TrustBar;
