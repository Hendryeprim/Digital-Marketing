import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const servicesList = [
  "Website Design & Development", "Mobile App Development", "Social Media Marketing",
  "Branding & Identity", "Logo Design", "Performance Marketing", "Meta Ads",
  "Google Ads", "Email Marketing", "Media Production", "Theatre Advertisement",
  "Offline Branding", "Immersive Advertisements",
];

const inputCls = "w-full bg-[#060606]/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-secondary/60 focus:bg-secondary/5 transition-all duration-200 text-sm";
const labelCls = "block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", business: "", phone: "", email: "", city: "",
    services: [], goal: "", budget: "", message: "", time: "", consent: false,
    honeypot: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const setField = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const toggleService = (s) => {
    setForm((p) => ({
      ...p,
      services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honeypot) return; // Spam protection
    if (!/^\d{10}$/.test(form.phone)) {
      setPhoneError("Please enter a valid 10-digit Indian phone number.");
      return;
    }
    if (form.services.length === 0) return;
    setPhoneError("");
    setLoading(true);
    // Mock submission ï¿½ replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-28 bg-[#060606] flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 border border-secondary/30 rounded-3xl bg-secondary/5 max-w-lg"
        >
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Thank you!</h2>
          <p className="text-gray-400">Our team will contact you within 24 hours.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 bg-[#060606] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              Let's Build Your Brand.
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Tell us what you need and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, label: "Phone / WhatsApp", val: "[add number]" },
                { icon: Mail, label: "Email", val: "[add email]" },
                { icon: MapPin, label: "Office Address", val: "[add address]" },
                { icon: Clock, label: "Working Hours", val: "[add hours]" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 mr-4 group-hover:bg-secondary group-hover:text-white transition-all duration-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-gray-300 text-sm">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              {["Instagram", "Facebook", "YouTube", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400 hover:text-secondary hover:border-secondary/40 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/10 rounded-3xl p-8 bg-[#060606]/[0.02] backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} value={form.honeypot} onChange={(e) => setField("honeypot", e.target.value)} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input required type="text" className={inputCls} placeholder="Your full name" value={form.name} onChange={(e) => setField("name", e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Business / Brand Name *</label>
                  <input required type="text" className={inputCls} placeholder="Your business name" value={form.business} onChange={(e) => setField("business", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Phone / WhatsApp *</label>
                  <input required type="tel" className={inputCls} placeholder="10-digit number" maxLength={10} value={form.phone} onChange={(e) => { setField("phone", e.target.value); setPhoneError(""); }} />
                  {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
                </div>
                <div>
                  <label className={labelCls}>Email Address *</label>
                  <input required type="email" className={inputCls} placeholder="your@email.com" value={form.email} onChange={(e) => setField("email", e.target.value)} />
                </div>
              </div>

              <div>
                <label className={labelCls}>City / Location</label>
                <input type="text" className={inputCls} placeholder="Your city" value={form.city} onChange={(e) => setField("city", e.target.value)} />
              </div>

              <div>
                <label className={labelCls}>Services Needed * <span className="text-gray-400 normal-case tracking-normal font-normal">(Select all that apply)</span></label>
                <div className="border border-white/10 rounded-xl p-4 bg-[#060606]/20 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto">
                  {servicesList.map((s) => (
                    <label key={s} className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer hover:text-white transition-colors">
                      <input type="checkbox" value={s} checked={form.services.includes(s)} onChange={() => toggleService(s)} className="accent-secondary w-3.5 h-3.5 cursor-pointer" />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
                {form.services.length === 0 && <p className="text-gray-400 text-xs mt-1">Please select at least one service.</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Main Goal *</label>
                  <select required className={inputCls + " cursor-pointer"} value={form.goal} onChange={(e) => setField("goal", e.target.value)}>
                    <option value="" disabled className="bg-[#0a0a0a]">Select your goal</option>
                    {["Leads", "Footfall", "Brand Awareness", "Sales", "Other"].map((o) => (
                      <option key={o} value={o} className="bg-[#0a0a0a]">{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Monthly Budget</label>
                  <select className={inputCls + " cursor-pointer"} value={form.budget} onChange={(e) => setField("budget", e.target.value)}>
                    <option value="" disabled className="bg-[#0a0a0a]">Select budget</option>
                    {["Below ?25,000", "?25,000 to ?50,000", "?50,000 to ?1,00,000", "Above ?1,00,000", "Not sure"].map((o) => (
                      <option key={o} value={o} className="bg-[#0a0a0a]">{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}>Your Message</label>
                <textarea rows={3} className={inputCls} placeholder="Tell us about your business and needs" value={form.message} onChange={(e) => setField("message", e.target.value)} />
              </div>

              <div>
                <label className={labelCls}>Preferred Contact Time</label>
                <select className={inputCls + " cursor-pointer"} value={form.time} onChange={(e) => setField("time", e.target.value)}>
                  <option value="" disabled className="bg-[#0a0a0a]">Select time</option>
                  {["Morning", "Afternoon", "Evening"].map((o) => (
                    <option key={o} value={o} className="bg-[#0a0a0a]">{o}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-start space-x-3">
                <input required type="checkbox" id="consent" className="mt-0.5 accent-secondary cursor-pointer" checked={form.consent} onChange={(e) => setField("consent", e.target.checked)} />
                <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer">
                  I agree to be contacted by <strong className="text-white">The Ad House</strong>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading || form.services.length === 0 || !form.consent}
                className="w-full bg-secondary hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(255,90,0,0.3)] hover:shadow-[0_0_40px_rgba(255,90,0,0.5)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loading ? "Sending..." : <>Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
