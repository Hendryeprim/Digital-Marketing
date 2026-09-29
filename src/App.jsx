import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Innovation from "./components/Innovation";
import Services from "./components/Services";
import CampaignShowcase from "./components/CampaignShowcase";
import Results from "./components/Results";
import Process from "./components/Process";
import Goal from "./components/Goal";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#0a0a0a", color: "#FFFFFF" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Innovation />
      <CampaignShowcase />
      <Results />
      <Process />
      <Goal />
      <WhyUs />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
