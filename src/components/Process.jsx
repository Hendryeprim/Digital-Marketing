import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    days: "Days 1 to 15",
    title: "Discovery & Strategy",
    desc: "We study your business, competitors and customers, set your goal (leads, footfall or sales) and fix the plan and budget.",
    color: "from-secondary/20 to-orange-700/10",
  },
  {
    num: "02",
    days: "Days 16 to 45",
    title: "Build & Launch",
    desc: "Branding, website, content and creatives are ready. Social media and ad campaigns go live.",
    color: "from-purple-500/20 to-purple-800/10",
  },
  {
    num: "03",
    days: "Days 46 to 75",
    title: "Optimise & Scale",
    desc: "We track every rupee, cut what does not work and put more into what does.",
    color: "from-blue-500/20 to-blue-800/10",
  },
  {
    num: "04",
    days: "Days 76 to 90",
    title: "Accelerate & Report",
    desc: "Full performance report, results review and a growth roadmap for the next phase.",
    color: "from-emerald-500/20 to-emerald-800/10",
  },
];

const Process = () => {
  return (
    <section id="how-we-work" className="py-28 bg-[#060606] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#060606]/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            The <span className="text-secondary">90-Day Growth Plan</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0" />

          <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative group w-full md:w-1/4 text-center md:text-left"
              >
                {/* Step Circle */}
                <div className="relative mx-auto md:mx-0 w-16 h-16 mb-6 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="w-14 h-14 rounded-full border-2 border-secondary/40 group-hover:border-secondary bg-[#060606] flex items-center justify-center relative z-10 group-hover:shadow-[0_0_25px_rgba(255,90,0,0.4)] transition-all duration-300">
                    <span className="text-secondary font-extrabold text-lg" style={{ fontFamily: "Outfit, sans-serif" }}>{step.num}</span>
                  </div>
                </div>

                {/* Vertical line (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 top-16 h-10 w-[2px] bg-[#060606]/10 -translate-x-1/2" />
                )}

                <div className="px-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">{step.days}</p>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
