import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Innovation from './components/Innovation';
import Services from './components/Services';
import CampaignShowcase from './components/CampaignShowcase';
import Results from './components/Results';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-accent overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Innovation />
      <Services />
      <CampaignShowcase />
      <Results />
      <Process />
      <CaseStudies />
      <WhyUs />
      <Testimonials />
      <Insights />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
