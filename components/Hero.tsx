import React from 'react';
import { Button } from './Button';
import { BookOpen, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Bíblia aberta em momento de estudo" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 via-brand-900/60 to-brand-900"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center space-x-2 bg-brand-800/50 rounded-full px-4 py-1.5 mb-8 border border-brand-700/50 backdrop-blur-sm animate-fade-in-down">
          <Star className="w-4 h-4 text-accent" fill="currentColor" />
          <span className="text-brand-100 text-sm font-medium tracking-wide">Mais de 2.000 vidas transformadas</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Entenda a Bíblia como <br />
          <span className="text-accent italic">Uma História Contínua</span>
        </h1>

        <p className="text-xl md:text-2xl text-brand-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          O Plano Devocional Diário que vai te guiar pela Bíblia em ordem cronológica em 52 semanas. 
          Organize sua rotina, vença a procrastinação e aprofunde sua fé.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button onClick={scrollToPricing} variant="primary" withIcon className="w-full sm:w-auto text-xl">
            Quero Começar Minha Jornada
          </Button>
          <button 
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-accent underline underline-offset-4 transition-colors text-lg"
          >
            Saber mais sobre o plano
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-brand-200 border-t border-brand-800/50 pt-8 mt-8">
          <div className="flex flex-col items-center">
            <BookOpen className="w-6 h-6 mb-2 text-accent" />
            <span className="text-sm font-medium">Ordem Cronológica</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 mb-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">1 Ano de Estudos</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 mb-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Arquivo PDF + Capas</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6 mb-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Celular, Tablet ou Impresso</span>
          </div>
        </div>
      </div>
    </div>
  );
};