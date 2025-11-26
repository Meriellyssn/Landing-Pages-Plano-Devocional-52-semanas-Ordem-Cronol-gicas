import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-brand-300 py-12 border-t border-brand-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-serif text-2xl text-white mb-4">Plano Devocional Diário</h3>
        <p className="mb-8 max-w-md mx-auto">
          "Lâmpada para os meus pés é a tua palavra e luz para o meu caminho." <br/>
          <span className="italic text-brand-500">- Salmos 119:105</span>
        </p>
        <div className="text-sm text-brand-600">
          <p>&copy; {new Date().getFullYear()} @meiriellisstore. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não é afiliado ao Facebook ou Google.</p>
        </div>
      </div>
    </footer>
  );
};