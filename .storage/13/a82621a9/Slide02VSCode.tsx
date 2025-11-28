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
      description: "Windows, Mac, Linux - sin costo alguno"
    },
    {
      icon: Zap,
      title: "Rápido y Ligero",
      description: "Inicia en segundos, consume pocos recursos"
    },
    {
      icon: Puzzle,
      title: "Miles de Extensiones",
      description: "Personaliza con herramientas para cualquier lenguaje"
    },
    {
      icon: Terminal,
      title: "Terminal Integrada",
      description: "Ejecuta comandos sin salir del editor"
    },
    {
      icon: GitBranch,
      title: "Control de Versiones",
      description: "Git integrado para gestionar tu código"
    },
    {
      icon: Globe,
      title: "IntelliSense",
      description: "Autocompletado inteligente mientras escribes"
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
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              VS Code combina la simplicidad de un editor de texto con herramientas poderosas de desarrollo, haciéndolo accesible tanto para principiantes como para profesionales.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <p className="text-lg text-blue-200 font-medium">
                💡 Es como Word, pero para código
              </p>
              <p className="text-base text-slate-400 mt-2">
                Y con Copilot, ni siquiera necesitas saber escribir el código
              </p>
            </div>
          </div>

          {/* Flow diagram */}
          <div className="flex items-center justify-center gap-4 text-slate-300">
            <div className="bg-violet-500/20 border border-violet-500 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold">Tu Idea 💡</span>
            </div>
            <span className="text-2xl">→</span>
            <div className="bg-blue-500/20 border border-blue-500 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold">VS Code</span>
            </div>
            <span className="text-2xl">→</span>
            <div className="bg-green-500/20 border border-green-500 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold">App Real ✨</span>
            </div>
          </div>
        </div>

        {/* Right column - Features grid */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white mb-2">Características Clave</h2>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:scale-105"
                >
                  <Icon className="w-10 h-10 text-blue-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400">
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