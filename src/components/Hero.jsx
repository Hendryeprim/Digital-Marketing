import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Static glow — no animation, GPU-friendly */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,90,0,0.15)_0%,_transparent_70%)] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.1)_0%,_transparent_70%)] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">One-Roof Advertising Agency</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-4 text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            Ninety Days.{" "}
            <span className="block">Your Brand Rebuilt.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-bold text-secondary mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
            Growth You Can Bet On.
          </motion.p>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
            The Ad House is not just a digital marketing company. Websites, mobile apps, social media, branding, ads, media production and offline advertising — everything your brand needs is under one roof.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-secondary text-white font-semibold rounded-full hover:bg-orange-500 transition-colors duration-200 shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_35px_rgba(255,90,0,0.5)] flex items-center justify-center"
            >
              Get a Free Consultation
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-[#060606]/5 border border-white/15 text-white font-semibold rounded-full hover:bg-[#060606]/10 transition-colors duration-200 text-center"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual — 2 floating cards only */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative h-[480px] lg:h-[560px] w-full hidden md:block"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=60&w=1200&auto=format&fit=crop"
              alt="The Ad House — Advertising Strategy"
              className="object-cover w-full h-full opacity-35 mix-blend-luminosity"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="absolute top-10 -left-8 glass-card p-4 rounded-2xl flex items-center space-x-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
              <TrendingUp size={18} />
            </div>
            <div>
              <p className="text-[0.6rem] text-gray-400 font-medium uppercase tracking-wider">Brand Reach</p>
              <p className="text-lg font-bold text-white">+230%</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
            style={{ willChange: "transform" }}
            className="absolute bottom-20 -right-6 glass-card p-4 rounded-2xl flex items-center space-x-3 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Users size={18} />
            </div>
            <div>
              <p className="text-[0.6rem] text-gray-400 font-medium uppercase tracking-wider">Leads Generated</p>
              <p className="text-lg font-bold text-white">5.2K+</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Intro Strip */}
      <div className="container mx-auto px-6 md:px-12 mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border border-white/10 rounded-2xl p-8 bg-[#060606]/[0.025] grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1 md:border-r md:border-white/10 md:pr-8">
            <p className="text-sm text-gray-400 leading-relaxed">
              Within 90 days, using the power of social media, we take your brand to the next level. Need leads? We deliver leads. Need footfall? We bring people to your doorstep. Whatever your goal, we work within your budget.
            </p>
          </div>
          {[
            { stat: "90", label: "Days", sub: "To take your brand to the next level" },
            { stat: "13+", label: "Services", sub: "Digital and offline marketing" },
            { stat: "1", label: "Roof", sub: "One team, one plan, one point of contact" },
          ].map(({ stat, label, sub }) => (
            <div key={label} className="text-center">
              <h3 className="text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                <span className="text-secondary">{stat}</span> {label}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
