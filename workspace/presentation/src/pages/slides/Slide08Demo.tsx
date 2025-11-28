import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Clock, Zap } from "lucide-react";

const Slide08Demo: React.FC = () => {
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

  const demoSteps = [
    {
      time: "0-2 min",
      title: "Usar el Prompt Maestro en ChatGPT",
      description: "Pegar el prompt maestro preparado y responder 2-3 preguntas rápidas de la IA",
      whatToShow: "Pantalla de ChatGPT con el prompt y las preguntas que hace la IA",
      tip: "Prepara el prompt antes de la demo para ahorrar tiempo"
    },
    {
      time: "2-4 min",
      title: "Revisar la Especificación Generada",
      description: "Mostrar el documento de especificación completo que generó la IA",
      whatToShow: "Scroll por la especificación destacando: objetivo, funcionalidades, diseño, plan",
      tip: "Explica cómo cada sección del Prompt Maestro se tradujo en la spec"
    },
    {
      time: "4-7 min",
      title: "Generar Código con Copilot en VS Code",
      description: "Abrir VS Code, crear archivos, escribir comentarios guía y dejar que Copilot genere el código",
      whatToShow: "VS Code en pantalla completa, escribiendo comentarios y aceptando sugerencias de Copilot",
      tip: "Usa comentarios muy descriptivos: '// Función para agregar tarea que valide campos vacíos'"
    },
    {
      time: "7-8 min",
      title: "Probar la Aplicación Funcionando",
      description: "Abrir index.html en navegador, probar funcionalidades principales y mostrar que todo funciona",
      whatToShow: "Navegador con la app funcionando, agregar/completar/eliminar tareas",
      tip: "Prueba casos reales: agregar tarea, marcar completada, eliminar"
    }
  ];

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-12 py-8 overflow-y-auto">
      <h1 
        ref={titleRef}
        className="text-4xl font-bold text-white mb-4"
      >
        Demo en Vivo: De Idea a App en 8 Minutos
      </h1>

      <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-xl border border-slate-700 mb-4">
        <p className="text-base text-blue-300 mb-1">
          <strong>Objetivo de la demo:</strong> Mostrar el flujo completo desde el Prompt Maestro hasta una aplicación funcional
        </p>
        <p className="text-sm text-slate-400">
          Proyecto ejemplo: <strong className="text-white">App de Lista de Ideas</strong> - Una aplicación simple para registrar y gestionar ideas creativas
        </p>
      </div>

      <div ref={contentRef} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Left column - Steps */}
          <div className="flex flex-col">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700 mb-3">
              <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Flujo de la Demo (8 minutos totales)
              </h2>
              <p className="text-xs text-slate-400">
                Cada paso está cronometrado. Practica antes para mantener el ritmo y no exceder el tiempo.
              </p>
            </div>

            <div className="space-y-3 overflow-y-auto">
              {demoSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className="bg-blue-500/20 px-2 py-1 rounded-lg flex-shrink-0">
                      <span className="text-xs font-semibold text-blue-300">{step.time}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-1">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 ml-8">
                    <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-2">
                      <p className="text-xs font-semibold text-violet-300 mb-1">🖥️ Qué mostrar:</p>
                      <p className="text-xs text-slate-400">{step.whatToShow}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2">
                      <p className="text-xs font-semibold text-green-300 mb-1">💡 Tip:</p>
                      <p className="text-xs text-slate-400">{step.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Demo area and key points */}
          <div className="flex flex-col gap-4">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 border-blue-500/50 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-white mb-2">
                  Área de Demo en Vivo
                </p>
                <p className="text-sm text-slate-400 mb-3">
                  Aquí se mostrará el proceso en tiempo real
                </p>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-left">
                  <p className="text-xs text-orange-200 mb-2">
                    <strong>⚠️ Preparación previa:</strong>
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Tener ChatGPT abierto en una pestaña</li>
                    <li>• VS Code abierto con Copilot activado</li>
                    <li>• Prompt Maestro copiado y listo</li>
                    <li>• Navegador listo para abrir archivos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700">
              <h3 className="text-base font-semibold text-white mb-3">Puntos Clave a Enfatizar</h3>
              <div className="space-y-2">
                {[
                  { text: "El Prompt Maestro guía TODO el proceso", icon: "🎯" },
                  { text: "ChatGPT (razonador) crea la especificación", icon: "🧠" },
                  { text: "Copilot (ejecutor) genera el código", icon: "⚡" },
                  { text: "Los comentarios descriptivos son cruciales", icon: "💬" },
                  { text: "El resultado es funcional desde el inicio", icon: "✅" },
                  { text: "No necesitas ser programador experto", icon: "🎓" }
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-base flex-shrink-0">{point.icon}</span>
                    <p className="text-sm text-slate-300">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <p className="text-xl font-bold text-white">
                  Menos de 10 minutos
                </p>
              </div>
              <p className="text-sm text-slate-300 mb-1">
                De idea a aplicación funcional
              </p>
              <p className="text-xs text-slate-400">
                Y tú puedes hacerlo exactamente igual siguiendo este proceso
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
              <p className="text-xs text-blue-200">
                <strong>📊 Estadística impactante:</strong> Lo que antes tomaba días o semanas, ahora toma minutos. Esto es el poder de combinar IA razonadora + IA ejecutora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "Demo en Vivo",
  order: 7,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide08Demo);

export default Slide08Demo;