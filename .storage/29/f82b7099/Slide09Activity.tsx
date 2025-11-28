import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Download, ExternalLink, Users, CheckSquare, Mail, MessageCircle } from "lucide-react";

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
      description: "Selecciona una idea simple: app de tareas, gastos, notas, hábitos, o tu propia idea (mantenla simple para empezar)",
      tip: "Tip: Empieza con algo que uses diariamente. Será más fácil definir las funcionalidades."
    },
    {
      number: 2,
      title: "Copia el Prompt Maestro",
      description: "Descarga el template que vimos en el slide anterior y pégalo en ChatGPT, Claude o Gemini",
      tip: "Tip: Guarda el template en un archivo para reutilizarlo en futuros proyectos."
    },
    {
      number: 3,
      title: "Personaliza el Prompt",
      description: "Edita las secciones: objetivo general, preguntas Q&A, y restricciones técnicas según tu proyecto específico",
      tip: "Tip: Sé específico en el objetivo. En lugar de 'app de tareas', di 'app para gestionar tareas diarias con recordatorios'."
    },
    {
      number: 4,
      title: "Ejecuta el Prompt",
      description: "Pega tu prompt personalizado, responde las preguntas que te haga la IA, revisa la especificación y aprueba el plan",
      tip: "Tip: No tengas miedo de pedir cambios en la especificación si algo no te convence."
    },
    {
      number: 5,
      title: "Lleva el Plan a VS Code",
      description: "Abre VS Code, crea una carpeta nueva para tu proyecto, crea los archivos mencionados en el plan (index.html, styles.css, app.js)",
      tip: "Tip: Organiza tus archivos desde el inicio. Crea carpetas para CSS, JS e imágenes si es necesario."
    },
    {
      number: 6,
      title: "Genera el Código con Copilot",
      description: "En cada archivo, escribe comentarios guía detallados describiendo qué debe hacer cada sección, luego deja que Copilot genere el código",
      tip: "Tip: Los comentarios son clave. Escribe '// Función para agregar tarea que valide campos vacíos' en lugar de solo '// agregar tarea'."
    },
    {
      number: 7,
      title: "Prueba tu App",
      description: "Abre index.html en tu navegador, prueba todas las funcionalidades. Si algo no funciona, pregunta a Copilot Chat cómo arreglarlo",
      tip: "Tip: Prueba casos extremos: ¿qué pasa si dejas campos vacíos? ¿Si agregas 100 items?"
    },
    {
      number: 8,
      title: "¡Celebra y Comparte! 🎉",
      description: "Acabas de crear tu primera aplicación con IA. Comparte tu logro en redes sociales con #DesarrolloConIA",
      tip: "Tip: Guarda tu proyecto en GitHub. Es tu portafolio y puedes mostrarlo en entrevistas."
    }
  ];

  const checklist = [
    "Tengo VS Code instalado",
    "Tengo GitHub Copilot activado (o cuenta de prueba gratuita)",
    "Tengo acceso a ChatGPT/Claude/Gemini",
    "Descargué el Prompt Maestro Template",
    "Elegí mi proyecto y tengo clara la idea",
    "Entiendo los 8 pasos a seguir",
    "Sé dónde pedir ayuda si me atasco"
  ];

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-10">
      <h1 
        ref={titleRef}
        className="text-5xl font-bold text-white mb-4"
      >
        Actividad Práctica para Asistentes
      </h1>
      
      <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 mb-6">
        <p className="text-xl text-blue-300 mb-2">
          <strong>Ahora es tu turno:</strong> Crea tu primera aplicación con IA
        </p>
        <p className="text-base text-slate-400">
          Tiempo estimado: 20-30 minutos | Dificultad: Principiante | Requisitos: VS Code + Copilot + Navegador
        </p>
      </div>

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
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2">
                    <p className="text-xs text-green-200">
                      💡 {step.tip}
                    </p>
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
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium text-sm">
                <Download className="w-4 h-4" />
                Descargar Prompt Maestro Template (.md)
              </button>
              <button className="w-full bg-violet-500 hover:bg-violet-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium text-sm">
                <ExternalLink className="w-4 h-4" />
                Ver Ejemplo Completo (App de Tareas)
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium text-sm">
                <Users className="w-4 h-4" />
                Unirse al Grupo de Práctica
              </button>
            </div>
            
            <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
              <p className="text-xs text-orange-200">
                <strong>Recursos Online:</strong> GitHub Copilot Docs, VS Code Tutorials, Prompt Engineering Guide
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-green-400" />
              Checklist de Éxito
            </h3>
            <div className="space-y-2">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg hover:bg-slate-900/70 transition-colors">
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
              Si tienes laptop, puedes empezar ahora mismo. La mejor forma de aprender es haciendo. ¡El presentador está disponible para ayudarte!
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <h4 className="text-base font-semibold text-blue-300 mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Soporte y Contacto
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <p><strong>Presentador:</strong> Ing. Daniel Andrey Villamizar Araque</p>
              </div>
              <p className="pl-6 text-xs text-slate-400">
                M.Sc. Internet of Things | Senior Cloud Solution Architect
              </p>
              <p className="pl-6 text-xs text-slate-400">
                MCT | Ex-MVP
              </p>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-xs text-slate-400">
                  📧 Email: [Agregar email del presentador]
                </p>
                <p className="text-xs text-slate-400">
                  💬 LinkedIn: [Agregar perfil]
                </p>
                <p className="text-xs text-slate-400">
                  ⏰ Horario de consultas: Después de la charla
                </p>
              </div>
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