import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Download, Terminal, Zap, Puzzle, GitBranch, Globe } from "lucide-react";

const Slide02VSCode: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const slideAnimation = useSlideAnimation();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    slideAnimation
      .addElement("title", titleRef, {
        enter: { type: "slideInLeft", duration: 600 },
        group: 0,
      })
      .addElement("content", contentRef, {
        enter: { type: "fadeIn", duration: 600, delay: 200 },
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

  const features = [
    {
      icon: Download,
      title: "Gratis y Multiplataforma",
      description: "Funciona en Windows, Mac y Linux. Descarga gratuita sin restricciones. Ideal para empezar sin inversión inicial."
    },
    {
      icon: Zap,
      title: "Rápido y Ligero",
      description: "Se inicia en segundos y consume pocos recursos. Perfecto para computadoras con especificaciones modestas."
    },
    {
      icon: Puzzle,
      title: "Miles de Extensiones",
      description: "Marketplace con extensiones para cualquier lenguaje o framework. Personaliza tu entorno según tus necesidades."
    },
    {
      icon: Terminal,
      title: "Terminal Integrada",
      description: "Ejecuta comandos sin salir del editor. Soporta múltiples shells (Bash, PowerShell, CMD)."
    },
    {
      icon: GitBranch,
      title: "Control de Versiones",
      description: "Git integrado nativamente. Gestiona tu código, commits y branches sin herramientas externas."
    },
    {
      icon: Globe,
      title: "IntelliSense",
      description: "Autocompletado inteligente que sugiere código mientras escribes. Aprende sintaxis más rápido."
    }
  ];

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-12">
      <h1 
        ref={titleRef}
        className="text-5xl font-bold text-white mb-8"
      >
        ¿Qué es Visual Studio Code?
      </h1>

      <div ref={contentRef} className="flex-1 min-h-0 grid grid-cols-2 gap-8">
        {/* Left column - Description */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <p className="text-2xl text-blue-300 font-semibold mb-4">
              Un editor de texto inteligente para escribir código
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Visual Studio Code (VS Code) es un <strong className="text-white">editor de código fuente gratuito</strong> desarrollado por Microsoft que combina la simplicidad de un editor de texto con herramientas poderosas de desarrollo.
            </p>
            <p className="text-base text-slate-400 leading-relaxed mb-6">
              <strong className="text-slate-300">¿Por qué es importante?</strong> A diferencia de IDEs complejos, VS Code es ligero pero extensible. Puedes empezar con lo básico y agregar funcionalidades según las necesites. Es la puerta de entrada perfecta al desarrollo de software.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <p className="text-lg text-blue-200 font-medium mb-2">
                💡 Analogía Simple
              </p>
              <p className="text-base text-slate-300">
                Es como <strong>Microsoft Word, pero para código</strong>. Y con GitHub Copilot integrado, ni siquiera necesitas saber escribir el código tú mismo.
              </p>
            </div>
          </div>

          {/* Flow diagram */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <p className="text-base text-slate-400 mb-4 text-center">
              <strong className="text-white">El Flujo de Trabajo</strong>
            </p>
            <div className="flex items-center justify-center gap-4 text-slate-300">
              <div className="bg-violet-500/20 border border-violet-500 px-6 py-3 rounded-lg text-center">
                <span className="text-base font-semibold">Tu Idea 💡</span>
              </div>
              <span className="text-2xl">→</span>
              <div className="bg-blue-500/20 border border-blue-500 px-6 py-3 rounded-lg text-center">
                <span className="text-base font-semibold">VS Code + IA</span>
              </div>
              <span className="text-2xl">→</span>
              <div className="bg-green-500/20 border border-green-500 px-6 py-3 rounded-lg text-center">
                <span className="text-base font-semibold">App Real ✨</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 text-center">
              Desde concepto hasta aplicación funcional en minutos, no días
            </p>
          </div>
        </div>

        {/* Right column - Features grid */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-2">Características Clave</h2>
            <p className="text-sm text-slate-400">
              Estas características hacen de VS Code la herramienta ideal para principiantes y profesionales
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:scale-105"
                >
                  <Icon className="w-10 h-10 text-blue-400 mb-3" />
                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "¿Qué es VS Code?",
  order: 1,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide02VSCode);

export default Slide02VSCode;