import React, { useRef, useEffect, useState } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { MessageSquare, Sparkles, BookOpen, Wrench, TestTube, Code } from "lucide-react";

const Slide03Copilot: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const slideAnimation = useSlideAnimation();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    slideAnimation
      .addElement("title", titleRef, {
        enter: { type: "fadeIn", duration: 600 },
        group: 0,
      })
      .addElement("intro", introRef, {
        enter: { type: "fadeIn", duration: 600, delay: 200 },
        group: 1,
      })
      .addElement("cards", cardsRef, {
        enter: { type: "fadeInUp", duration: 600, delay: 400 },
        group: 2,
      })
      .setMode("parallel")
      .startGrouped();

    initializedRef.current = true;
    useAppStore.getState().setCurrentSlideAPI(slideAnimation);

    return () => {
      slideAnimation.reset();
      useAppStore.getState().setCurrentSlideAPI(null);
      initializedRef.current = false;
    };
  }, []);

  const capabilities = [
    {
      icon: MessageSquare,
      title: "Copilot Chat",
      description: "Conversar con la IA para resolver dudas",
      whenToUse: "Cuando no sabes cómo empezar o necesitas entender algo",
      example: "\"¿Cómo creo una página web simple?\""
    },
    {
      icon: Sparkles,
      title: "Sugerencias en Tiempo Real",
      description: "Completa automáticamente lo que escribes",
      whenToUse: "Mientras escribes código o comentarios",
      example: "Escribes '// crear función para...' y Copilot completa"
    },
    {
      icon: BookOpen,
      title: "Explicación de Código",
      description: "Te explica qué hace un código que no entiendes",
      whenToUse: "Cuando ves código complejo",
      example: "Seleccionas código → \"Explícame esto\""
    },
    {
      icon: Wrench,
      title: "Refactorización",
      description: "Mejora código existente haciéndolo más limpio",
      whenToUse: "Cuando tu código funciona pero es desordenado",
      example: "\"Mejora esta función\""
    },
    {
      icon: TestTube,
      title: "Generación de Pruebas",
      description: "Crea tests automáticos para tu código",
      whenToUse: "Cuando quieres asegurar que todo funciona",
      example: "\"Genera tests para esta función\""
    },
    {
      icon: Code,
      title: "Autocompletado Inteligente",
      description: "Predice y escribe código completo por ti",
      whenToUse: "Durante todo el proceso de desarrollo",
      example: "Empieza a escribir y acepta sugerencias con Tab"
    }
  ];

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-12">
      <h1 
        ref={titleRef}
        className="text-5xl font-bold text-white mb-6"
      >
        GitHub Copilot: Tu Co-Piloto de IA
      </h1>

      <div ref={introRef} className="mb-6">
        <p className="text-xl text-blue-300 font-medium">
          Un asistente de IA que vive dentro de VS Code y entiende lo que quieres hacer
        </p>
      </div>

      <div ref={cardsRef} className="flex-1 min-h-0 overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isExpanded = expandedCard === index;
            
            return (
              <div
                key={index}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 cursor-pointer transition-all hover:border-blue-500 ${
                  isExpanded ? 'col-span-3 bg-slate-800/80' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-base text-slate-300 mb-3">
                      {capability.description}
                    </p>
                    
                    {isExpanded && (
                      <div className="mt-4 space-y-3 animate-in fade-in duration-300">
                        <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-violet-300 mb-1">
                            ¿Cuándo usarlo?
                          </p>
                          <p className="text-base text-slate-300">
                            {capability.whenToUse}
                          </p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-green-300 mb-1">
                            Ejemplo
                          </p>
                          <p className="text-base text-slate-300 font-mono">
                            {capability.example}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {!isExpanded && (
                      <p className="text-sm text-blue-400 mt-2">
                        Haz clic para ver más →
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "GitHub Copilot",
  order: 2,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide03Copilot);

export default Slide03Copilot;