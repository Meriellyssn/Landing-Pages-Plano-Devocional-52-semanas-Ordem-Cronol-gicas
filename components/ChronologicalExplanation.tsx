import React from 'react';

export const ChronologicalExplanation: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-8">
          Por que a Ordem Cronológica?
        </h2>
        
        <p className="text-lg md:text-xl text-stone-600 mb-12 leading-relaxed">
          Você sabia que a Bíblia não está organizada por ordem de acontecimentos, mas sim por gêneros literários? 
          Isso muitas vezes confunde quem tenta ler de Gênesis a Apocalipse sem um guia.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500">
            <h3 className="text-xl font-bold text-brand-800 mb-3">Narrativa Conectada</h3>
            <p className="text-stone-700">
              Ao ler cronologicamente, você lê os Salmos de Davi no momento exato em que ele estava fugindo de Saul. 
              Você lê as profecias no contexto dos reis que reinavam. Tudo faz mais sentido.
            </p>
          </div>

          <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500">
            <h3 className="text-xl font-bold text-brand-800 mb-3">Visão do Todo</h3>
            <p className="text-stone-700">
              Entenda o "Grande Plano" de Deus se desenrolando na história, desde a Criação até a volta de Cristo, 
              sem se perder em genealogias ou leis desconectadas do momento histórico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};