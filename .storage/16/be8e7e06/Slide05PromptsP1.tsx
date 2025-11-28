import React, { useRef, useEffect, useState } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, MessageCircle, FileText } from "lucide-react";

const Slide05PromptsP1: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("meta");
  
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
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-16 py-10">
      <h1 
        ref={titleRef}
        className="text-4xl font-bold text-white mb-6"
      >
        Ingeniería de Prompts Avanzada (Parte 1)
      </h1>

      <div ref={contentRef} className="flex-1 min-h-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <TabsList className="bg-slate-800/50 p-2 rounded-xl border border-slate-700 mb-4">
            <TabsTrigger value="meta" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 text-base">
              <Sparkles className="w-5 h-5 mr-2" />
              Meta-Prompting
            </TabsTrigger>
            <TabsTrigger value="qa" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 text-base">
              <MessageCircle className="w-5 h-5 mr-2" />
              Q&A Prompting
            </TabsTrigger>
            <TabsTrigger value="spec" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 text-base">
              <FileText className="w-5 h-5 mr-2" />
              Spec-Driven Design
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 min-h-0 overflow-y-auto">
            <TabsContent value="meta" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Meta-Prompting</h2>
                <p className="text-xl text-blue-300 mb-6">
                  Un prompt que le pide a la IA que te ayude a crear mejores prompts
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Concepto</h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      En lugar de escribir directamente tu prompt, le pides a la IA que te guíe. La IA se convierte en tu coach de prompts.
                    </p>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Ejemplo de Meta-Prompt</h3>
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
{`Eres un experto en ingeniería de prompts.
Necesito crear un prompt maestro para desarrollar 
una aplicación completa.

Antes de que yo te diga qué aplicación quiero:
1. Hazme todas las preguntas necesarias sobre:
   - Objetivo de la aplicación
   - Audiencia objetivo
   - Funcionalidades clave
   - Restricciones técnicas
   - Estilo visual

2. Una vez que respondas mis preguntas, crea un 
   prompt maestro completo y estructurado que pueda 
   usar en VS Code con Copilot.

¿Qué preguntas tienes para mí?`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Dónde construirlo</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {["ChatGPT (GPT-4+)", "Claude (Opus/Sonnet)", "Gemini Advanced", "MGX.dev"].map((tool, i) => (
                        <div key={i} className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3 text-center">
                          <p className="text-base text-blue-200 font-medium">{tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="qa" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Q&A Prompting</h2>
                <p className="text-xl text-blue-300 mb-6">
                  Antes de empezar, pídele a la IA que te haga preguntas
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Por qué funciona</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-base text-green-200">✅ La IA clarifica ambigüedades</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-base text-green-200">✅ Tú proporcionas contexto específico</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-base text-green-200">✅ El resultado es mucho más preciso</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Estructura</h3>
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono bg-slate-900/50 p-4 rounded-lg">
{`[Tu solicitud]

Antes de comenzar, hazme todas las preguntas 
que necesites sobre:
- [Aspecto 1]
- [Aspecto 2]
- [Aspecto 3]

Espera mis respuestas antes de generar código.`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Ejemplo Real</h3>
                    <div className="bg-slate-900/50 p-6 rounded-xl">
                      <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
{`Quiero crear una app para gestionar pacientes 
en una clínica.

Antes de diseñar la app, hazme preguntas sobre:
- Tipo de clínica y especialidad
- Información que necesito registrar de cada paciente
- Quién usará la app (doctores, recepcionistas, ambos)
- Si necesito reportes o estadísticas
- Restricciones de privacidad de datos

Espera mis respuestas.`}
                      </pre>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-300 mb-2">❌ Sin Q&A</p>
                      <p className="text-sm text-slate-300">Resultado genérico y poco útil</p>
                    </div>
                    <div className="flex-1 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-300 mb-2">✅ Con Q&A</p>
                      <p className="text-sm text-slate-300">Resultado personalizado y preciso</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="spec" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Spec-Driven Design</h2>
                <p className="text-xl text-blue-300 mb-6">
                  Primero especificación completa, después código
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Flujo Completo</h3>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="bg-violet-500/20 border border-violet-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-sm font-semibold">1. Idea inicial</p>
                      </div>
                      <span className="text-xl">→</span>
                      <div className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-sm font-semibold">2. Q&A (clarificar)</p>
                      </div>
                      <span className="text-xl">→</span>
                      <div className="bg-green-500/20 border border-green-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-sm font-semibold">3. Especificación</p>
                      </div>
                      <span className="text-xl">→</span>
                      <div className="bg-orange-500/20 border border-orange-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-sm font-semibold">4. Plan</p>
                      </div>
                      <span className="text-xl">→</span>
                      <div className="bg-purple-500/20 border border-purple-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-sm font-semibold">5. Código</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Ventajas</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Evita reescribir código",
                        "Todos entienden qué se va a construir",
                        "Detectas problemas antes de programar",
                        "Copilot genera código más preciso"
                      ].map((advantage, i) => (
                        <div key={i} className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <p className="text-base text-green-200">✅ {advantage}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Ejemplo de Especificación</h3>
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
{`# ESPECIFICACIÓN: App de Gestión de Tareas

## Objetivo
Crear una app web simple para gestionar tareas personales.

## Funcionalidades
1. Agregar nueva tarea (título, descripción, fecha límite)
2. Marcar tarea como completada
3. Eliminar tarea
4. Filtrar por: todas, pendientes, completadas

## Interfaz
- Lista de tareas con checkboxes
- Formulario para agregar tarea
- Botones de filtro en la parte superior
- Diseño minimalista, colores azul y blanco

## Tecnología
- HTML, CSS, JavaScript vanilla
- LocalStorage para persistencia
- Sin backend (todo en el navegador)`}
                    </pre>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

RegisterSlide({
  title: "Ingeniería de Prompts (Parte 1)",
  order: 4,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide05PromptsP1);

export default Slide05PromptsP1;