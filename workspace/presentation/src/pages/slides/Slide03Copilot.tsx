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
      description: "Interfaz conversacional para resolver dudas y obtener ayuda",
      whenToUse: "Cuando no sabes cómo empezar un proyecto, necesitas entender un concepto, o quieres explorar diferentes enfoques para resolver un problema",
      example: "\"¿Cómo creo una página web simple con formulario de contacto?\" - Copilot te guiará paso a paso",
      explanation: "Es como tener un mentor experto disponible 24/7. Puedes hacer preguntas en lenguaje natural y recibir respuestas contextualizadas a tu proyecto."
    },
    {
      icon: Sparkles,
      title: "Sugerencias en Tiempo Real",
      description: "Autocompletado inteligente mientras escribes código o comentarios",
      whenToUse: "Durante todo el proceso de desarrollo. Mientras escribes, Copilot predice tu siguiente línea de código",
      example: "Escribes '// crear función para calcular...' y Copilot completa automáticamente la función completa",
      explanation: "Funciona como el autocompletado de tu teléfono, pero para código. Aprende de tu estilo y el contexto del proyecto para hacer sugerencias precisas."
    },
    {
      icon: BookOpen,
      title: "Explicación de Código",
      description: "Traduce código complejo a lenguaje simple y comprensible",
      whenToUse: "Cuando encuentras código que no entiendes, heredas un proyecto, o quieres aprender cómo funciona algo",
      example: "Seleccionas un bloque de código → Click derecho → 'Explain this' → Copilot te da una explicación detallada en español",
      explanation: "Perfecto para aprender. En lugar de buscar en Google o StackOverflow, obtienes explicaciones instantáneas y contextualizadas."
    },
    {
      icon: Wrench,
      title: "Refactorización",
      description: "Mejora y optimiza código existente haciéndolo más limpio y eficiente",
      whenToUse: "Cuando tu código funciona pero es desordenado, repetitivo, o difícil de leer. También para aplicar mejores prácticas",
      example: "Seleccionas código repetitivo → 'Refactor this code' → Copilot lo reorganiza usando funciones reutilizables",
      explanation: "Como tener un editor profesional revisando tu trabajo. Copilot identifica patrones mejorables y sugiere código más elegante."
    },
    {
      icon: TestTube,
      title: "Generación de Pruebas",
      description: "Crea tests automáticos para verificar que tu código funciona correctamente",
      whenToUse: "Después de escribir funciones importantes. Los tests aseguran que cambios futuros no rompan funcionalidad existente",
      example: "Tienes una función 'calculateTotal()' → 'Generate tests' → Copilot crea múltiples tests cubriendo casos normales y edge cases",
      explanation: "Los tests son como un seguro para tu código. Copilot los genera automáticamente, ahorrándote horas de trabajo manual."
    },
    {
      icon: Code,
      title: "Autocompletado Inteligente",
      description: "Predice y escribe bloques completos de código basándose en el contexto",
      whenToUse: "Constantemente durante el desarrollo. Acepta sugerencias con Tab para acelerar tu trabajo",
      example: "Empiezas a escribir 'function fetchData' → Copilot sugiere la función completa con manejo de errores incluido",
      explanation: "Va más allá del autocompletado tradicional. Entiende la intención detrás de tu código y genera soluciones completas, no solo palabras."
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
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
          <p className="text-xl text-blue-300 font-medium mb-3">
            Un asistente de IA que vive dentro de VS Code y entiende lo que quieres hacer
          </p>
          <p className="text-base text-slate-400">
            <strong className="text-slate-300">¿Qué es?</strong> GitHub Copilot es un programador de IA entrenado con miles de millones de líneas de código público. Funciona como un copiloto que te ayuda a escribir código más rápido y con menos errores.
          </p>
          <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
            <p className="text-sm text-green-200">
              💡 <strong>Tip para presentadores:</strong> Haz clic en cada tarjeta para expandir y ver detalles completos
            </p>
          </div>
        </div>
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
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-blue-300 mb-2">
                            📚 ¿Qué hace realmente?
                          </p>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {capability.explanation}
                          </p>
                        </div>
                        
                        <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-violet-300 mb-2">
                            🎯 ¿Cuándo usarlo?
                          </p>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {capability.whenToUse}
                          </p>
                        </div>
                        
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-green-300 mb-2">
                            💻 Ejemplo Práctico
                          </p>
                          <p className="text-sm text-slate-300 leading-relaxed font-mono">
                            {capability.example}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {!isExpanded && (
                      <p className="text-sm text-blue-400 mt-2">
                        Haz clic para ver explicación detallada →
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
        <p className="text-base text-orange-200">
          <strong>Nota importante:</strong> Copilot es como tener un programador experto disponible 24/7 que nunca se cansa de responder preguntas
        </p>
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