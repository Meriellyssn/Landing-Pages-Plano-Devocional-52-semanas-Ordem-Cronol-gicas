import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'Pai de família e Empresário',
    content: 'Eu sempre começava a ler a Bíblia em Janeiro e parava em Fevereiro. Com esse plano cronológico, a história ganhou vida! A estrutura do PDF me ajuda a manter o foco diário.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
  },
  {
    id: '2',
    name: 'Ana Paula Souza',
    role: 'Estudante Universitária',
    content: 'A parte de "Aplicação" mudou minha vida devocional. Antes eu só lia por ler. Agora eu leio e saio com uma missão para o meu dia. O design é lindo e muito prático.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
  },
  {
    id: '3',
    name: 'Pr. Ricardo Alves',
    role: 'Líder de Jovens',
    content: 'Indico para todos os jovens da minha igreja. É a ferramenta ideal para quem quer sair do raso e criar disciplina espiritual de verdade. As 4 opções de capas são um bônus excelente!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
  },
  {
    id: '4',
    name: 'Juliana Martins',
    role: 'Professora de Escola Dominical',
    content: 'Usar este material nas minhas aulas e devocionais pessoais foi um divisor de águas. A ordem cronológica revela detalhes da personalidade de Deus que eu nunca tinha percebido lendo aleatoriamente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces'
  },
  {
    id: '5',
    name: 'Roberto Silva',
    role: 'Engenheiro',
    content: 'Como sou muito lógico, a ordem cronológica satisfez minha necessidade de entender o "antes e depois". O material é muito bem organizado e as capas são de muito bom gosto.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces'
  }
];

export const Testimonials: React.FC = () => {
  // Duplicate list to ensure smooth infinite scroll
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-stone-50 border-t border-brand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">
          O que dizem quem já está usando
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
      </div>
      
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex animate-scroll w-max hover:[animation-play-state:paused]">
          {displayTestimonials.map((t, index) => (
            <div 
              key={`${t.id}-${index}`} 
              className="w-[300px] md:w-[400px] flex-shrink-0 mx-4 bg-white p-6 rounded-2xl shadow-md border border-stone-100 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-200"
                />
                <div>
                  <p className="font-bold text-brand-900 leading-tight">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
              </div>
              
              <div className="flex text-accent mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-stone-600 italic text-sm md:text-base leading-relaxed flex-grow">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};