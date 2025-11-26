import React, { useRef, useState, useEffect } from 'react';
import { PenTool, Heart, Lightbulb, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';

const previewImages = [
  "https://i.ibb.co/YBpxsKct/15.png",
  "https://i.ibb.co/kP6XR1L/17.png",
  "https://i.ibb.co/BHmpVTtr/20.png",
  "https://i.ibb.co/dsJGjKDS/21.png",
  "https://i.ibb.co/HLkS58hw/2.png",
  "https://i.ibb.co/gFm66Zrz/3.png",
  "https://i.ibb.co/hRVmhHsC/1.png"
];

// Note: If images do not load, it is because the provided URLs are viewer pages (ibb.co) 
// and not direct image files (.jpg/.png). 
// For production, please use the direct link to the image file.

export const PreviewSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate images multiple times to create a long scrolling experience
  const displayImages = [...previewImages, ...previewImages, ...previewImages];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: ReturnType<typeof setInterval>;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!isHovered && scrollContainer) {
          // If we reached near the end, reset (not perfect infinite loop, but good enough for preview)
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
             scrollContainer.scrollLeft = 0;
          } else {
             scrollContainer.scrollLeft += 1;
          }
        }
      }, 30); // Adjust speed here (lower = faster)
    };

    startAutoScroll();

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Approximately one card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="details" className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Por dentro do material</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 mt-2 mb-6">
            Visualize sua Transformação
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Cada página foi desenhada intencionalmente para guiar você em uma jornada de profundidade e intimidade com Deus.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Carousel Column */}
          <div 
            className="w-full lg:w-1/2 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Fading Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-50 to-transparent z-10 pointer-events-none"></div>

            {/* Left Arrow */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-brand-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-brand-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 py-4 px-4 scrollbar-hide select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {displayImages.map((src, idx) => (
                <div key={idx} className="flex-shrink-0 w-56 md:w-64 rounded-xl overflow-hidden shadow-lg border border-brand-100 transition-transform duration-300 hover:scale-[1.02]">
                  <img 
                    src={src} 
                    alt={`Página do Devocional ${idx}`} 
                    className="w-full h-auto object-cover" 
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-stone-400 mt-4 italic">Imagens reais do produto digital (PDF)</p>
          </div>

          {/* Explanation Features */}
          <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-24">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-serif font-bold text-brand-800 mb-6">O que você vai encontrar:</h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Leitura Direcionada",
                    desc: "Saiba exatamente qual capítulo ler. Sem indecisão, sem perda de tempo.",
                    icon: Bookmark
                  },
                  {
                    title: "Aprendizado Ativo",
                    desc: "Espaço dedicado para 'O que aprendi' e 'Palavras-chave'. Escrever ajuda a fixar o conteúdo na memória.",
                    icon: Lightbulb
                  },
                  {
                    title: "Aplicação Pessoal",
                    desc: "A Bíblia é um espelho. O campo 'Aplicação' te desafia a trazer o ensino para a sua vida real hoje.",
                    icon: PenTool
                  },
                  {
                    title: "Vida de Oração",
                    desc: "Registre seus motivos de oração e veja como Deus responde ao longo das 52 semanas.",
                    icon: Heart
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-50 text-brand-600 border border-brand-100">
                        <feature.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-brand-900">{feature.title}</h4>
                      <p className="mt-1 text-stone-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};