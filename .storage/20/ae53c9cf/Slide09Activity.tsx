import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Download, ExternalLink, Users, CheckSquare } from "lucide-react";

const Slide09Activity: React.FC = () => {
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

  const steps = [
    {
      number: 1,
      title: "Elige tu Proyecto",
      description: "App de tareas, gastos, notas, hábitos, o tu propia idea (mantenla simple)"
    },
    {
      number: 2,
      title: "Copia el Prompt Maestro",
      description: "Usa el template que vimos y pégalo en ChatGPT, Claude o Gemini"
    },
    {
      number: 3,
      title: "Personaliza el Prompt",
      description: "Edita: objetivo, Q&A, restricciones según tu proyecto"
    },
    {
      number: 4,
      title: "Ejecuta el Prompt",
      description: "Responde las preguntas, revisa la spec y aprueba el plan"
    },
    {
      number: 5,
      title: "Lleva el Plan a VS Code",
      description: "Abre VS Code, crea los archivos y abre Copilot Chat"
    },
    {
      number: 6,
      title: "Genera el Código",
      description: "Escribe comentarios guía en cada archivo y deja que Copilot genere"
    },
    {
      number: 7,
      title: "Prueba tu App",
      description: "Abre en el navegador, prueba las funcionalidades"
    },
    {
      number: 8,
      title: "¡Celebra! 🎉",
      description: "Acabas de crear tu primera aplicación con IA"
    }
  ];

  const checklist = [
    "Tengo VS Code instalado",
    "Tengo GitHub Copilot activado",
    "Tengo acceso a ChatGPT/Claude/Gemini",
    "Copié el Prompt Maestro",
    "Elegí mi proyecto",
    "Entiendo los pasos a seguir"
  ];

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-10">
      <h1 
        ref={titleRef}
        className="text-5xl font-bold text-white mb-4"
      >
        Actividad Práctica para Asistentes
      </h1>
      
      <p className="text-xl text-blue-300 mb-6">
        Ahora es tu turno de crear tu primera aplicación con IA
      </p>

      <div ref={contentRef} className="flex-1 min-h-0 grid grid-cols-2 gap-6">
        {/* Left column - Steps */}
        <div className="flex flex-col">
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="grid grid-cols-2 gap-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Resources and checklist */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-400" />
              Recursos Adicionales
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium">
                <Download className="w-4 h-4" />
                Descargar Prompt Maestro Template
              </button>
              <button className="w-full bg-violet-500 hover:bg-violet-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium">
                <ExternalLink className="w-4 h-4" />
                Ver Ejemplo Completo
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium">
                <Users className="w-4 h-4" />
                Unirse al Grupo de Práctica
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-green-400" />
              Checklist de Éxito
            </h3>
            <div className="space-y-2">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg">
                  <div className="w-5 h-5 border-2 border-slate-600 rounded flex-shrink-0"></div>
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-xl p-5 text-center">
            <p className="text-lg font-bold text-white mb-2">
              💪 No esperes a llegar a casa
            </p>
            <p className="text-sm text-slate-300">
              Si tienes laptop, puedes empezar ahora mismo. La mejor forma de aprender es haciendo.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <h4 className="text-base font-semibold text-blue-300 mb-2">Soporte</h4>
            <div className="space-y-1 text-sm text-slate-300">
              <p>📧 Email: [tu-email@ejemplo.com]</p>
              <p>💬 Grupo: [link al grupo]</p>
              <p>⏰ Horario de consultas: [horario]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "Actividad Práctica",
  order: 8,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide09Activity);

export default Slide09Activity;