import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Brain, Hammer, ArrowRight, Lightbulb, Rocket, AlertCircle } from "lucide-react";

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
        className="text-5xl font-bold text-white mb-6"
      >
        Modelos de IA: Razonador vs Ejecutor
      </h1>

      <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 mb-6">
        <p className="text-lg text-slate-300">
          <strong className="text-blue-300">Concepto clave:</strong> No todos los modelos de IA son iguales. Entender cuándo usar cada tipo es fundamental para el éxito de tu proyecto.
        </p>
      </div>

      <div ref={contentRef} className="flex-1 min-h-0 flex flex-col gap-6">
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
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-300 mb-2">¿QUÉ ES?</p>
                <p className="text-base text-slate-200 leading-relaxed">
                  Modelos diseñados para <strong>pensar, planificar y diseñar</strong>. Son como arquitectos que crean planos detallados antes de construir.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-blue-300 mb-2">EJEMPLOS</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-300">• ChatGPT-4 / GPT-4o</p>
                  <p className="text-sm text-slate-300">• Claude Opus / Sonnet</p>
                  <p className="text-sm text-slate-300">• Gemini Pro / Advanced</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-blue-300 mb-2">¿PARA QUÉ SIRVE?</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-300">✓ Crear especificaciones completas</p>
                  <p className="text-sm text-slate-300">✓ Diseñar arquitectura de software</p>
                  <p className="text-sm text-slate-300">✓ Generar prompts maestros</p>
                  <p className="text-sm text-slate-300">✓ Tomar decisiones técnicas</p>
                  <p className="text-sm text-slate-300">✓ Resolver problemas complejos</p>
                </div>
              </div>
              
              <div className="bg-blue-500/20 rounded-lg p-4 mt-4">
                <p className="text-sm font-semibold text-blue-200 mb-1">⏰ ¿CUÁNDO USARLO?</p>
                <p className="text-lg text-white font-medium">ANTES de escribir código</p>
                <p className="text-sm text-slate-300 mt-2">
                  Úsalo en la fase de planificación y diseño para definir QUÉ vas a construir y CÓMO lo harás.
                </p>
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
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-orange-300 mb-2">¿QUÉ ES?</p>
                <p className="text-base text-slate-200 leading-relaxed">
                  Modelos optimizados para <strong>escribir código e implementar</strong>. Son como constructores que siguen los planos para levantar el edificio.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-orange-300 mb-2">EJEMPLOS</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-300">• GitHub Copilot</p>
                  <p className="text-sm text-slate-300">• Claude Sonnet (en VS Code)</p>
                  <p className="text-sm text-slate-300">• Modelos especializados en código</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-orange-300 mb-2">¿PARA QUÉ SIRVE?</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-300">✓ Generar código línea por línea</p>
                  <p className="text-sm text-slate-300">✓ Autocompletar funciones</p>
                  <p className="text-sm text-slate-300">✓ Refactorizar código existente</p>
                  <p className="text-sm text-slate-300">✓ Corregir errores de sintaxis</p>
                  <p className="text-sm text-slate-300">✓ Implementar especificaciones</p>
                </div>
              </div>
              
              <div className="bg-orange-500/20 rounded-lg p-4 mt-4">
                <p className="text-sm font-semibold text-orange-200 mb-1">⏰ ¿CUÁNDO USARLO?</p>
                <p className="text-lg text-white font-medium">DURANTE la escritura de código</p>
                <p className="text-sm text-slate-300 mt-2">
                  Úsalo en la fase de implementación para traducir tus planes en código funcional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            Flujo de Trabajo Ideal: De la Idea a la Aplicación
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex flex-col items-center">
              <Lightbulb className="w-10 h-10 text-yellow-400 mb-2" />
              <div className="bg-violet-500/20 border border-violet-500 px-5 py-2 rounded-lg">
                <p className="text-base font-semibold text-white">1. Idea 💡</p>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center max-w-[100px]">
                Concepto inicial
              </p>
            </div>
            
            <ArrowRight className="w-6 h-6 text-slate-400" />
            
            <div className="flex flex-col items-center">
              <Brain className="w-10 h-10 text-blue-400 mb-2" />
              <div className="bg-blue-500/20 border border-blue-500 px-5 py-2 rounded-lg text-center">
                <p className="text-base font-semibold text-white">2. Razonador 🧠</p>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center max-w-[120px]">
                Planificar y diseñar
              </p>
            </div>
            
            <ArrowRight className="w-6 h-6 text-slate-400" />
            
            <div className="flex flex-col items-center">
              <Hammer className="w-10 h-10 text-orange-400 mb-2" />
              <div className="bg-orange-500/20 border border-orange-500 px-5 py-2 rounded-lg text-center">
                <p className="text-base font-semibold text-white">3. Ejecutor ⚡</p>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center max-w-[120px]">
                Escribir código
              </p>
            </div>
            
            <ArrowRight className="w-6 h-6 text-slate-400" />
            
            <div className="flex flex-col items-center">
              <Rocket className="w-10 h-10 text-green-400 mb-2" />
              <div className="bg-green-500/20 border border-green-500 px-5 py-2 rounded-lg">
                <p className="text-base font-semibold text-white">4. App ✅</p>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center max-w-[100px]">
                Aplicación funcional
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <p className="text-base text-blue-200 mb-2">
                <strong>💡 Analogía del Arquitecto</strong>
              </p>
              <p className="text-sm text-slate-300">
                El <strong>razonador</strong> es como un arquitecto que diseña los planos de una casa: define habitaciones, estructura, materiales, y cómo todo encaja.
              </p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <p className="text-base text-orange-200 mb-2">
                <strong>🔨 Analogía del Constructor</strong>
              </p>
              <p className="text-sm text-slate-300">
                El <strong>ejecutor</strong> es como un constructor que sigue esos planos: levanta paredes, instala ventanas, y construye ladrillo por ladrillo.
              </p>
            </div>
          </div>
        </div>

        {/* Common mistakes */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-base font-semibold text-red-300 mb-2">
              ❌ Error Común
            </p>
            <p className="text-sm text-slate-300">
              Pedirle a Copilot (ejecutor) que diseñe toda tu aplicación sin un plan previo. Esto resulta en código desorganizado y difícil de mantener.
            </p>
            <p className="text-sm text-green-300 mt-2">
              <strong>✅ Mejor práctica:</strong> Usa ChatGPT/Claude (razonador) para crear la especificación y el plan, LUEGO usa Copilot (ejecutor) para implementarlo.
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