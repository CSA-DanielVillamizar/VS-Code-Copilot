import React, { useRef, useEffect, useState } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, GitBranch, Scale } from "lucide-react";

const Slide06PromptsP2: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("vibes");
  
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
        Ingeniería de Prompts Avanzada (Parte 2)
      </h1>

      <div ref={contentRef} className="flex-1 min-h-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <TabsList className="bg-slate-800/50 p-2 rounded-xl border border-slate-700 mb-4">
            <TabsTrigger value="vibes" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 text-base">
              <Palette className="w-5 h-5 mr-2" />
              Vibes Coding
            </TabsTrigger>
            <TabsTrigger value="cot" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 text-base">
              <GitBranch className="w-5 h-5 mr-2" />
              Chain-of-Thought
            </TabsTrigger>
            <TabsTrigger value="pros-cons" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-6 py-3 text-base">
              <Scale className="w-5 h-5 mr-2" />
              Pros & Contras
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 min-h-0 overflow-y-auto">
            <TabsContent value="vibes" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Vibes Coding</h2>
                <p className="text-xl text-blue-300 mb-6">
                  Define el 'estilo' o 'vibra' en que quieres que la IA trabaje
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Concepto</h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      No solo le dices QUÉ hacer, sino CÓMO comunicarse. Estableces el tono, nivel de detalle, paciencia, etc.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Ejemplos de "Vibes"</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-violet-300 mb-2">🎓 Paciente y Didáctico</p>
                        <p className="text-sm text-slate-300">
                          "Explícame cada paso como si fuera mi primera vez programando. Usa analogías simples."
                        </p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-blue-300 mb-2">⚡ Directo y Eficiente</p>
                        <p className="text-sm text-slate-300">
                          "Dame solo el código, sin explicaciones largas. Comentarios breves son suficientes."
                        </p>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-green-300 mb-2">🔬 Exploratorio y Creativo</p>
                        <p className="text-sm text-slate-300">
                          "Muéstrame 3 enfoques diferentes. Explica pros y contras de cada uno."
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-orange-300 mb-2">🏢 Profesional y Robusto</p>
                        <p className="text-sm text-slate-300">
                          "Código production-ready con manejo de errores y mejores prácticas."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Cómo Aplicarlo</h3>
                    <p className="text-base text-slate-300 mb-3">
                      Agrega una sección VIBES al inicio de tu prompt:
                    </p>
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono bg-slate-900/50 p-4 rounded-lg">
{`VIBES:
- Lenguaje simple, sin jerga
- Explicaciones paso a paso
- Ejemplos concretos
- Tono amigable y motivador`}
                    </pre>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cot" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Chain-of-Thought (CoT)</h2>
                <p className="text-xl text-blue-300 mb-6">
                  Pídele a la IA que piense paso a paso antes de responder
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Por qué funciona</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-base text-green-200">✅ La IA organiza su razonamiento</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-base text-green-200">✅ Detecta errores en su lógica</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-base text-green-200">✅ Tú entiendes el proceso</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">✨ Frase Mágica ✨</h3>
                    <p className="text-xl text-white font-mono">
                      "Piensa paso a paso antes de responder."
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Comparación</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-red-300 mb-3">❌ Sin Chain-of-Thought</p>
                        <div className="bg-slate-900/50 p-4 rounded-lg">
                          <p className="text-sm text-slate-400 mb-2">Prompt:</p>
                          <p className="text-sm text-slate-300 mb-3">"Crea una función que calcule el factorial"</p>
                          <p className="text-sm text-slate-400 mb-2">Resultado:</p>
                          <p className="text-sm text-slate-300">[código directo sin explicación]</p>
                        </div>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-green-300 mb-3">✅ Con Chain-of-Thought</p>
                        <div className="bg-slate-900/50 p-4 rounded-lg">
                          <p className="text-sm text-slate-400 mb-2">Prompt:</p>
                          <p className="text-sm text-slate-300 mb-3">"Crea una función que calcule el factorial. Piensa paso a paso."</p>
                          <p className="text-sm text-slate-400 mb-2">Resultado:</p>
                          <p className="text-sm text-slate-300">
                            "Pensemos paso a paso:<br/>
                            1. El factorial de n es n × (n-1) × ... × 1<br/>
                            2. Casos especiales: factorial de 0 es 1<br/>
                            3. Puedo usar recursión o bucle<br/>
                            4. Para principiantes, bucle es más claro<br/>
                            [código con comentarios]"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pros-cons" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Pros & Contras Prompting</h2>
                <p className="text-xl text-blue-300 mb-6">
                  Pídele a la IA que evalúe opciones mostrando ventajas y desventajas
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Cuándo usarlo</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Elegir tecnologías (React vs Vue)",
                        "Decidir arquitectura (SPA vs MPA)",
                        "Seleccionar librerías",
                        "Evaluar enfoques de diseño"
                      ].map((use, i) => (
                        <div key={i} className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-base text-blue-200">• {use}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Estructura del Prompt</h3>
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono bg-slate-900/50 p-4 rounded-lg">
{`Necesito [decisión a tomar].

Muéstrame las opciones principales con:
- Pros (ventajas)
- Contras (desventajas)
- Cuándo usar cada una
- Tu recomendación para mi caso: [contexto]`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Ejemplo: Almacenamiento de Datos</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-900/50 p-5 rounded-xl">
                        <p className="text-base font-semibold text-blue-300 mb-3">Prompt:</p>
                        <p className="text-sm text-slate-300">
                          "Necesito elegir cómo almacenar datos en mi app de tareas.<br/>
                          Opciones: LocalStorage, IndexedDB, Backend con base de datos.<br/>
                          Muéstrame pros y contras. Mi contexto: app personal, pocos usuarios."
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-base font-semibold text-white mb-3">LocalStorage</p>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-semibold text-green-300 mb-1">✅ PROS</p>
                              <p className="text-xs text-slate-400">• Muy simple<br/>• Sin backend<br/>• Funciona offline</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-red-300 mb-1">❌ CONTRAS</p>
                              <p className="text-xs text-slate-400">• Límite 5-10MB<br/>• Solo texto</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-base font-semibold text-white mb-3">IndexedDB</p>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-semibold text-green-300 mb-1">✅ PROS</p>
                              <p className="text-xs text-slate-400">• Más capacidad<br/>• Datos complejos</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-red-300 mb-1">❌ CONTRAS</p>
                              <p className="text-xs text-slate-400">• API compleja<br/>• Más código</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-base font-semibold text-white mb-3">Backend + DB</p>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-semibold text-green-300 mb-1">✅ PROS</p>
                              <p className="text-xs text-slate-400">• Sincronización<br/>• Sin límites</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-red-300 mb-1">❌ CONTRAS</p>
                              <p className="text-xs text-slate-400">• Requiere servidor<br/>• Más complejo</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                        <p className="text-base font-semibold text-green-300 mb-2">💡 RECOMENDACIÓN</p>
                        <p className="text-base text-slate-300">
                          LocalStorage es perfecto para tu caso: simple, suficiente, y sin complejidad innecesaria.
                        </p>
                      </div>
                    </div>
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
  title: "Ingeniería de Prompts (Parte 2)",
  order: 5,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide06PromptsP2);

export default Slide06PromptsP2;