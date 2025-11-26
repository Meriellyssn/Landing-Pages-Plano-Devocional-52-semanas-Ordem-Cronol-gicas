import React from 'react';
import { Button } from './Button';
import { ShieldCheck, Check, Download } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 text-center shadow-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-wide mb-6 border border-accent/30">
            OFERTA ESPECIAL
          </span>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Plano Devocional 52 Semanas
          </h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">
            Todo o conteúdo original da @meiriellisstore para transformar seu ano.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="text-left space-y-3">
              {[
                "Cronograma Completo (PDF)",
                "Devocional Diário Guiado",
                "4 Opções de Capas Exclusivas",
                "Pronto para Imprimir (A4)",
                "Uso Digital (Tablet/Celular)"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-brand-100">
                  <div className="bg-green-500/20 p-1 rounded-full mr-3">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            
            <div className="border-l border-white/10 md:pl-12 py-4">
              <p className="text-brand-300 text-lg mb-2 line-through">De R$ 67,90</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">Por apenas</span>
                <span className="text-5xl font-bold text-accent">R$ 27,90</span>
              </div>
              <p className="text-sm text-brand-300">Pagamento único. Acesso vitalício.</p>
            </div>
          </div>

          <a 
            href="https://pay.hotmart.com/B103148785F?checkoutMode=2"
            className="hotmart-fb hotmart__button-checkout inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-lg shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent text-white hover:bg-accent-dark shadow-accent/30 focus:ring-accent w-full max-w-md mx-auto text-xl py-5 shadow-accent/50 animate-pulse"
            onClick={(e) => e.preventDefault()}
          >
            <Download className="mr-2 w-5 h-5" />
            SIM! QUERO ORGANIZAR MINHA FÉ
          </a>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center text-brand-200 text-sm">
              <ShieldCheck className="w-10 h-10 text-green-400 mr-3" />
              <div className="text-left">
                <span className="block font-bold text-white">Garantia Incondicional de 7 Dias</span>
                <span>Se não gostar, devolvemos seu dinheiro via Hotmart.</span>
              </div>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg flex items-center shadow-lg min-w-[120px] justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Hotmart_logo.svg" 
                alt="Compra Segura Hotmart" 
                className="h-6 w-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};