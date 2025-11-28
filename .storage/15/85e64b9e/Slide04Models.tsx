import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Brain, Hammer, ArrowRight, Lightbulb, Rocket } from "lucide-react";

const Slide04Models: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const slideAnimation = useSlideAnimation();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    slideAnimation
      .addElement("title", titleRef, {
        enter: { type: "fadeIn", duration: 600 },
        group: 0,
      })
      .addElement("content", contentRef, {
        enter: { type: "fadeInUp", duration: 600, delay: 200 },
        group: 1,
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

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-12">
      <h1 
        ref={titleRef}
        className="text-5xl font-bold text-white mb-8"
      >
        Modelos: Razonador vs Ejecutor
      </h1>

      <div ref={contentRef} className="flex-1 min-h-0 flex flex-col gap-8">
        {/* Comparison cards */}
        <div className="grid grid-cols-2 gap-8">
          {/* Reasoner Model */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/30 p-4 rounded-xl">
                <Brain className="w-12 h-12 text-blue-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Modelo Razonador</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-blue-300 mb-2">FUNCIÓN</p>
                <p className="text-lg text-slate-200">Pensar, planificar, diseñar</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-blue-300 mb-2">EJEMPLOS</p>
                <p className="text-base text-slate-300">ChatGPT-4, Claude Opus, Gemini Pro</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-blue-300 mb-2">USO</p>
                <p className="text-base text-slate-300">Crear especificaciones y prompts maestros</p>
              </div>
              
              <div className="bg-blue-500/20 rounded-lg p-4 mt-4">
                <p className="text-sm font-semibold text-blue-200 mb-1">¿CUÁNDO?</p>
                <p className="text-lg text-white font-medium">ANTES de escribir código</p>
              </div>
            </div>
          </div>

          {/* Executor Model */}
          <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-orange-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500/30 p-4 rounded-xl">
                <Hammer className="w-12 h-12 text-orange-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Modelo Ejecutor</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-orange-300 mb-2">FUNCIÓN</p>
                <p className="text-lg text-slate-200">Escribir código, implementar</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-orange-300 mb-2">EJEMPLOS</p>
                <p className="text-base text-slate-300">GitHub Copilot, Claude Sonnet</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-orange-300 mb-2">USO</p>
                <p className="text-base text-slate-300">Generar código línea por línea</p>
              </div>
              
              <div className="bg-orange-500/20 rounded-lg p-4 mt-4">
                <p className="text-sm font-semibold text-orange-200 mb-1">¿CUÁNDO?</p>
                <p className="text-lg text-white font-medium">DURANTE la escritura de código</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Flujo de Trabajo Ideal
          </h3>
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <Lightbulb className="w-12 h-12 text-yellow-400 mb-2" />
              <div className="bg-violet-500/20 border border-violet-500 px-6 py-3 rounded-lg">
                <p className="text-lg font-semibold text-white">Idea 💡</p>
              </div>
            </div>
            
            <ArrowRight className="w-8 h-8 text-slate-400" />
            
            <div className="flex flex-col items-center">
              <Brain className="w-12 h-12 text-blue-400 mb-2" />
              <div className="bg-blue-500/20 border border-blue-500 px-6 py-3 rounded-lg text-center">
                <p className="text-lg font-semibold text-white">Razonador 🧠</p>
                <p className="text-sm text-slate-300 mt-1">Crear especificación</p>
              </div>
            </div>
            
            <ArrowRight className="w-8 h-8 text-slate-400" />
            
            <div className="flex flex-col items-center">
              <Hammer className="w-12 h-12 text-orange-400 mb-2" />
              <div className="bg-orange-500/20 border border-orange-500 px-6 py-3 rounded-lg text-center">
                <p className="text-lg font-semibold text-white">Ejecutor ⚡</p>
                <p className="text-sm text-slate-300 mt-1">Escribir código</p>
              </div>
            </div>
            
            <ArrowRight className="w-8 h-8 text-slate-400" />
            
            <div className="flex flex-col items-center">
              <Rocket className="w-12 h-12 text-green-400 mb-2" />
              <div className="bg-green-500/20 border border-green-500 px-6 py-3 rounded-lg">
                <p className="text-lg font-semibold text-white">App Funcional ✅</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
            <p className="text-lg text-blue-200">
              💡 <strong>Analogía:</strong> El razonador es el arquitecto que diseña la casa, el ejecutor es el constructor que la levanta ladrillo por ladrillo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "Modelos: Razonador vs Ejecutor",
  order: 3,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide04Models);

export default Slide04Models;