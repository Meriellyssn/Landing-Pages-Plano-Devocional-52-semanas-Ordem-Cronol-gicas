import React from 'react';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { PreviewSection } from './components/PreviewSection';
import { ChronologicalExplanation } from './components/ChronologicalExplanation';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Sticky Header for Mobile CTA visibility */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm md:hidden py-3 px-4 flex justify-between items-center">
        <span className="font-serif font-bold text-brand-900">Devocional 52 Semanas</span>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-accent text-white px-4 py-2 rounded-lg font-bold text-sm"
        >
          Baixar Agora
        </button>
      </header>

      <main>
        <Hero />
        <TargetAudience />
        <ChronologicalExplanation />
        <PreviewSection />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;