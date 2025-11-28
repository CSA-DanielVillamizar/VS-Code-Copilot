import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { CheckCircle2, Circle, Clock } from "lucide-react";

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
      description: "Pegar el prompt maestro preparado y responder 2-3 preguntas rápidas"
    },
    {
      time: "2-4 min",
      title: "Revisar el Plan",
      description: "Mostrar el plan de implementación generado y explicar cada paso"
    },
    {
      time: "4-7 min",
      title: "Generar Código con Copilot",
      description: "Abrir VS Code, crear archivos, escribir comentarios guía y dejar que Copilot genere el código"
    },
    {
      time: "7-8 min",
      title: "Probar la App",
      description: "Abrir en navegador, probar funcionalidades y mostrar que funciona"
    }
  ];

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-12">
      <h1 
        ref={titleRef}
        className="text-5xl font-bold text-white mb-8"
      >
        Demo en Vivo
      </h1>

      <div ref={contentRef} className="flex-1 min-h-0 grid grid-cols-2 gap-8">
        {/* Left column - Steps */}
        <div className="flex flex-col">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Proyecto de Ejemplo</h2>
            <p className="text-xl text-blue-300 font-medium mb-2">
              App de Lista de Ideas
            </p>
            <p className="text-base text-slate-400">
              Una aplicación simple para registrar y gestionar ideas creativas
            </p>
          </div>

          <div className="flex-1 min-h-0 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 overflow-y-auto">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Flujo de la Demo (8 minutos)
            </h3>
            <div className="space-y-4">
              {demoSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 p-5 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 px-3 py-1 rounded-lg flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-300">{step.time}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Demo area and key points */}
        <div className="flex flex-col gap-6">
          <div className="flex-1 min-h-0 bg-slate-900/80 backdrop-blur-sm rounded-2xl border-2 border-blue-500/50 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-2xl font-semibold text-white mb-2">
                Área de Demo en Vivo
              </p>
              <p className="text-base text-slate-400">
                Aquí se mostrará el proceso en tiempo real
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Puntos Clave</h3>
            <div className="space-y-3">
              {[
                "El Prompt Maestro guía todo el proceso",
                "ChatGPT crea la especificación completa",
                "Copilot genera el código automáticamente",
                "Los comentarios guían a Copilot",
                "El resultado es funcional desde el inicio"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-xl p-6 text-center">
            <p className="text-2xl font-bold text-white mb-2">
              ⚡ Esto tomó menos de 10 minutos
            </p>
            <p className="text-base text-slate-300">
              Y tú puedes hacerlo exactamente igual
            </p>
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