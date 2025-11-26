import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">
            Para quem é este devocional?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-red-800/80 mb-6 flex items-center">
              <XCircle className="w-6 h-6 mr-2" />
              Você se sente assim?
            </h3>
            <ul className="space-y-4">
              {[
                "Começa a ler a Bíblia e para no meio do caminho (Levítico?)",
                "Sente que sua vida espiritual está estagnada por falta de disciplina",
                "Lê versículos soltos mas não entende o contexto histórico",
                "Tem dificuldade de orar ou aplicar o que leu no dia a dia",
                "Não consegue organizar um tempo de qualidade com Deus",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-stone-600">
                  <span className="mr-3 text-red-400 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-900 text-white p-8 rounded-2xl shadow-xl transform md:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-accent mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Este plano é para você que deseja:
            </h3>
            <ul className="space-y-4">
              {[
                "Ler a Bíblia inteira de forma organizada em 1 ano",
                "Entender a história da Salvação na ordem que aconteceu",
                "Ter um roteiro diário simples para seguir sem se perder",
                "Registrar sua jornada espiritual e o que Deus tem falado",
                "Transformar a leitura bíblica em um hábito inegociável",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-brand-100">
                  <CheckCircle className="w-5 h-5 mr-3 text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};