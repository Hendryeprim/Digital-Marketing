import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Share2, Layers, PenTool, BarChart2, Target, Search, Mail, Film, Monitor, MapPin, Sparkles, ArrowRight } from "lucide-react";

const services = [
  { id: 1, icon: Globe, title: "Website Design & Development", desc: "Fast, mobile-friendly business websites, landing pages and e-commerce stores built to turn visitors into enquiries." },
  { id: 2, icon: Smartphone, title: "Mobile App Development", desc: "Android and iOS apps for booking, ordering, loyalty and customer engagement." },
  { id: 3, icon: Share2, title: "Social Media Marketing", desc: "Content planning, reels, posts, page handling and community management across Instagram, Facebook, YouTube and LinkedIn." },
  { id: 4, icon: Layers, title: "Branding & Identity", desc: "Brand strategy, tone, colours, taglines and complete brand guidelines that make you unforgettable." },
  { id: 5, icon: PenTool, title: "Logo Design", desc: "Distinctive, meaningful logos with full usage variations for print and digital." },
  { id: 6, icon: BarChart2, title: "Performance Marketing", desc: "Data-driven campaigns focused on measurable results: leads, calls, sales." },
  { id: 7, icon: Target, title: "Meta Ads", desc: "Facebook and Instagram ad campaigns with sharp targeting, creatives and ongoing optimisation." },
  { id: 8, icon: Search, title: "Google Ads", desc: "Search, display and YouTube ads that put you in front of customers who are actively looking for you." },
  { id: 9, icon: Mail, title: "Email Marketing", desc: "Newsletters, automations and follow-up flows that bring past customers back." },
  { id: 10, icon: Film, title: "Media Production", desc: "Ad films, corporate videos, product shoots, reels and photography, from concept to final edit." },
  { id: 11, icon: Monitor, title: "Theatre Advertisement", desc: "On-screen cinema ads that reach a captive, engaged local audience." },
  { id: 12, icon: MapPin, title: "Offline Branding", desc: "Hoardings, flex and signage, vehicle branding, brochures, standees and on-ground activations." },
  { id: 13, icon: Sparkles, title: "Immersive Advertisements", desc: "Experiential, AR and interactive campaigns that people remember and share." },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#060606] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#060606]/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles size={14} className="text-secondary" />
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">13 Services. One Team.</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-5"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Everything Under{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">One Roof</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            From your first logo to your last hoarding, we handle it all.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="group relative bg-[#060606]/[0.03] border border-white/10 p-8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_16px_50px_rgba(255,90,0,0.1)] hover:border-secondary/30 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#060606]/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-secondary group-hover:border-secondary/40 group-hover:bg-secondary/10 transition-all duration-300">
                    <s.icon size={22} />
                  </div>
                  <span className="text-secondary/50 font-bold text-sm group-hover:text-secondary transition-colors">
                    {String(s.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed group-hover:text-gray-400 transition-colors">{s.desc}</p>

                <div className="inline-flex items-center text-sm font-semibold text-gray-500 group-hover:text-secondary transition-colors">
                  Learn More
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
