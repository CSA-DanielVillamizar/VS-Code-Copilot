import React, { useRef, useEffect, useState } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Copy, Check, FileText, Lightbulb, BookOpen } from "lucide-react";

const Slide07MasterPrompt: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  
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

  const masterPromptTemplate = `# PROMPT MAESTRO: [Nombre de tu aplicación]

## 1. ROL
Eres un [tipo de experto] especializado en [área].

## 2. OBJETIVO GENERAL
Crear una [tipo de aplicación] que permita [funcionalidad principal].

## 3. Q&A PROMPTING
Antes de comenzar, hazme todas las preguntas necesarias sobre:
- [Aspecto 1]
- [Aspecto 2]
- [Aspecto 3]
Espera mis respuestas.

## 4. SPEC-DRIVEN DESIGN
Después de mis respuestas, crea una especificación completa con:
- Objetivo detallado
- Funcionalidades (lista numerada)
- Diseño de interfaz (descripción visual)
- Flujo de usuario
- Tecnologías a usar

## 5. PLAN DE IMPLEMENTACIÓN
Crea un plan paso a paso:
1. [Paso 1]
2. [Paso 2]
...

## 6. VIBES
- [Vibe 1: ej. Lenguaje simple]
- [Vibe 2: ej. Código comentado]
- [Vibe 3: ej. Ejemplos concretos]

## 7. RESTRICCIONES
- Tecnología: [stack específico o "el más simple posible"]
- Complejidad: MVP funcional, no perfección
- Tiempo: [si aplica]

## 8. ENTREGABLES
Al final, proporciona:
- Código completo y funcional
- Instrucciones para ejecutar
- Documentación básica`;

  const handleCopy = () => {
    navigator.clipboard.writeText(masterPromptTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-10">
      <h1 
        ref={titleRef}
        className="text-5xl font-bold text-white mb-6"
      >
        El Prompt Maestro
      </h1>

      <div ref={contentRef} className="flex-1 min-h-0 grid grid-cols-2 gap-8">
        {/* Left column - Explanation */}
        <div className="flex flex-col space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">¿Qué es un Prompt Maestro?</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Un <strong>prompt estructurado y completo</strong> que contiene todo lo necesario para que la IA (razonador + ejecutor) cree una aplicación completa de principio a fin.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Es como un <strong>blueprint arquitectónico</strong> para tu software. Define el QUÉ, CÓMO, QUIÉN y CUÁNDO del desarrollo.
            </p>
          </div>

          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-violet-300 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Las 8 Secciones Esenciales
            </h3>
            <div className="space-y-2">
              {[
                { num: "1", title: "ROL", desc: "Define qué tipo de experto necesitas (ej: desarrollador full-stack)" },
                { num: "2", title: "OBJETIVO", desc: "Describe claramente qué quieres crear" },
                { num: "3", title: "Q&A", desc: "Pide preguntas antes de empezar (evita suposiciones)" },
                { num: "4", title: "SPEC", desc: "Solicita especificación técnica completa" },
                { num: "5", title: "PLAN", desc: "Pide plan de implementación paso a paso" },
                { num: "6", title: "VIBES", desc: "Define el estilo de comunicación" },
                { num: "7", title: "RESTRICCIONES", desc: "Limita tecnología, complejidad, tiempo" },
                { num: "8", title: "ENTREGABLES", desc: "Lista qué necesitas al final" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg">
                  <div className="bg-violet-500 text-white w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold text-blue-300">Flujo de Trabajo Completo</h3>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">1.</span>
                <p><strong>Construye:</strong> Usa ChatGPT/Claude/Gemini para crear tu Prompt Maestro personalizado</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">2.</span>
                <p><strong>Guarda:</strong> Almacena en Notion, Google Docs o archivo Markdown para reutilizar</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">3.</span>
                <p><strong>Ejecuta:</strong> Pega en modelo razonador, responde preguntas, obtén especificación</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">4.</span>
                <p><strong>Implementa:</strong> Lleva el plan a VS Code + Copilot para generar el código</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
            <p className="text-base text-green-200 font-medium">
              💡 <strong>Ventaja clave:</strong> Este template es reutilizable. Créalo una vez, úsalo para todos tus proyectos
            </p>
          </div>
        </div>

        {/* Right column - Template */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">Template del Prompt Maestro</h3>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-sm">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">Copiar Template</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 mb-4">
            <p className="text-sm text-slate-300">
              <strong className="text-blue-300">Instrucciones:</strong> Copia este template y reemplaza los textos entre [corchetes] con tu información específica.
            </p>
          </div>

          <div className="flex-1 min-h-0 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            <div className="h-full overflow-y-auto p-6">
              <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                {masterPromptTemplate}
              </pre>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <p className="text-sm text-orange-200">
                <strong>📝 Tip para presentadores:</strong> Muestra un ejemplo real completado. Explica cómo cada sección guía a la IA hacia mejores resultados.
              </p>
            </div>
            
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
              <p className="text-sm text-violet-200">
                <strong>🎯 Resultado esperado:</strong> Con este prompt, la IA generará una especificación de 2-3 páginas que puedes usar directamente en VS Code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "El Prompt Maestro",
  order: 6,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide07MasterPrompt);

export default Slide07MasterPrompt;