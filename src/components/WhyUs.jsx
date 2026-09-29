import React from "react";
import { motion } from "framer-motion";
import { Building2, CalendarCheck, Wallet, Users2, FileBarChart, CheckCircle2 } from "lucide-react";

const reasons = [
  { icon: Building2, title: "Complete Digital & Offline Marketing", desc: "From social media to hoardings ï¿½ all from one agency." },
  { icon: CalendarCheck, title: "A Clear 90-Day Plan", desc: "Measurable goals, fixed timelines, zero guesswork." },
  { icon: Wallet, title: "Plans Around Your Budget", desc: "We design what works for what you have, not the other way round." },
  { icon: Users2, title: "In-House Creative & Tech Teams", desc: "Creative, media production and technology ï¿½ all internal, all accountable." },
  { icon: FileBarChart, title: "Regular Reports", desc: "Clear performance reports and a single point of contact ï¿½ always." },
];

const WhyUs = () => {
  return (
    <section className="py-28 bg-[#060606] relative border-t border-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,0,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>
              Why Choose{" "}
              <span className="text-secondary">The Ad House</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We don't just act as an agency. We become your dedicated growth partner with a plan, a timeline and real accountability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 bg-[#060606]/[0.03] rounded-2xl border border-white/10 hover:bg-[#060606]/[0.06] hover:border-secondary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#060606]/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-secondary group-hover:border-secondary/40 group-hover:scale-110 transition-all duration-300">
                  <r.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="p-8 rounded-2xl border border-secondary/30 bg-secondary/5 flex flex-col justify-center items-center text-center"
          >
            <CheckCircle2 size={40} className="text-secondary mb-4" />
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Ready to grow?</h3>
            <p className="text-gray-400 text-sm mb-6">Tell us your goal. We will build the plan.</p>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary text-white font-semibold rounded-full hover:bg-orange-500 transition-all hover:shadow-[0_0_20px_rgba(255,90,0,0.4)]"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
