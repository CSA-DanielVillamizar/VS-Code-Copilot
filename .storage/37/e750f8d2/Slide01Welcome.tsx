import React, { useRef, useEffect } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Code2, Sparkles, Brain, MessageSquare, Lightbulb, Rocket, Users } from "lucide-react";

const Slide01Welcome: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const agendaRef = useRef<HTMLDivElement>(null);
  
  const slideAnimation = useSlideAnimation();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    slideAnimation
      .addElement("title", titleRef, {
        enter: { type: "fadeIn", duration: 800 },
        group: 0,
      })
      .addElement("subtitle", subtitleRef, {
        enter: { type: "fadeIn", duration: 600, delay: 200 },
        group: 1,
      })
      .addElement("agenda", agendaRef, {
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

  const agendaItems = [
    { icon: Code2, text: "¿Qué es VS Code?" },
    { icon: Sparkles, text: "GitHub Copilot: Tu Co-Piloto" },
    { icon: Brain, text: "Modelos: Razonador vs Ejecutor" },
    { icon: MessageSquare, text: "Ingeniería de Prompts Avanzada" },
    { icon: Lightbulb, text: "El Prompt Maestro" },
    { icon: Rocket, text: "Demo en Vivo" },
    { icon: Users, text: "Actividad Práctica" },
  ];

  return (
    <section 
      className="relative flex h-full flex-col items-center justify-center text-center px-16 py-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      }}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/hero-coding-workspace.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        <h1 
          ref={titleRef}
          className="text-6xl font-bold tracking-tight text-white mb-6"
        >
          Visual Studio Code + GitHub Copilot
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-3xl text-blue-300 mb-4"
        >
          Desarrollo para No Desarrolladores
        </p>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto border border-slate-700">
          <p className="text-xl text-slate-200 mb-3">
            <strong className="text-blue-300">Presentado por:</strong>
          </p>
          <p className="text-2xl font-semibold text-white mb-2">
            Ing. Daniel Andrey Villamizar Araque
          </p>
          <p className="text-lg text-slate-300">
            M.Sc. Internet of Things | Senior Cloud Solution Architect (Infra & Apps)
          </p>
          <p className="text-base text-slate-400">
            MCT | Ex-MVP
          </p>
        </div>

        <p className="text-xl text-slate-300 mb-12">
          Aprende a crear software usando IA y herramientas modernas
        </p>

        {/* Agenda */}
        <div ref={agendaRef} className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-8">Agenda</h2>
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors"
                >
                  <Icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-lg text-slate-200 text-left">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 bg-green-500/10 border border-green-500/30 rounded-xl p-4 max-w-3xl mx-auto">
          <p className="text-lg text-green-200">
            💡 <strong>Mensaje clave:</strong> Hoy aprenderás que cualquier persona puede crear software con las herramientas adecuadas
          </p>
        </div>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "Bienvenida",
  order: 0,
  enterAnimation: { type: "fadeIn", duration: 600 },
})(Slide01Welcome);

export default Slide01Welcome;