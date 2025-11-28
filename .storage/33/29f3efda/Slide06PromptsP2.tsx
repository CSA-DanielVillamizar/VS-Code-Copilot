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
        className="text-4xl font-bold text-white mb-4"
      >
        Ingeniería de Prompts Avanzada (Parte 2)
      </h1>

      <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 mb-4">
        <p className="text-base text-slate-300">
          <strong className="text-blue-300">Continuación:</strong> 3 técnicas adicionales para controlar el estilo, razonamiento y toma de decisiones de la IA.
        </p>
      </div>

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
                <p className="text-xl text-blue-300 mb-4">
                  Define el 'estilo' o 'vibra' en que quieres que la IA trabaje contigo
                </p>
                
                <div className="space-y-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">¿Qué es Vibes Coding?</h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-3">
                      No solo le dices a la IA <strong>QUÉ hacer</strong>, sino <strong>CÓMO comunicarse</strong> contigo. Estableces el tono, nivel de detalle, paciencia, formalidad, etc.
                    </p>
                    <p className="text-sm text-slate-400">
                      <strong>Analogía:</strong> Es como decirle a un chef no solo qué cocinar, sino si quieres la comida picante, suave, con mucha sal, vegetariana, etc. El resultado es el mismo plato pero adaptado a tu gusto.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Ejemplos de "Vibes" (Estilos de Trabajo)</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-violet-300 mb-3">🎓 Paciente y Didáctico</p>
                        <p className="text-sm text-slate-300 mb-3">
                          "Explícame cada paso como si fuera mi primera vez programando. Usa analogías simples del mundo real."
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          Ideal para: Principiantes absolutos, aprendizaje
                        </p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-blue-300 mb-3">⚡ Directo y Eficiente</p>
                        <p className="text-sm text-slate-300 mb-3">
                          "Dame solo el código, sin explicaciones largas. Comentarios breves en línea son suficientes."
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          Ideal para: Desarrolladores con experiencia
                        </p>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-green-300 mb-3">🔬 Exploratorio y Creativo</p>
                        <p className="text-sm text-slate-300 mb-3">
                          "Muéstrame 3 enfoques diferentes para resolver esto. Explica pros y contras de cada uno."
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          Ideal para: Explorar opciones, aprender patrones
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-orange-300 mb-3">🏢 Profesional y Robusto</p>
                        <p className="text-sm text-slate-300 mb-3">
                          "Código production-ready con manejo de errores completo, validaciones y mejores prácticas."
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          Ideal para: Proyectos empresariales, código crítico
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Cómo Aplicar Vibes en tu Prompt</h3>
                    <p className="text-sm text-slate-300 mb-4">
                      Agrega una sección <strong>VIBES</strong> al inicio de tu Prompt Maestro:
                    </p>
                    <div className="bg-slate-900/50 p-5 rounded-lg">
                      <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
{`VIBES (Estilo de Trabajo):
- Lenguaje simple, sin jerga técnica innecesaria
- Explicaciones paso a paso con ejemplos
- Tono amigable y motivador
- Código bien comentado en español
- Si hay errores, explica por qué ocurrieron
- Celebra pequeños logros ("¡Excelente! Ahora...")

Con este estilo, ayúdame a crear...`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <p className="text-sm text-green-200">
                      <strong>💡 Resultado:</strong> La IA adapta su comunicación a tu estilo preferido. Mismo código, diferente experiencia de desarrollo.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cot" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Chain-of-Thought (CoT)</h2>
                <p className="text-xl text-blue-300 mb-4">
                  Pídele a la IA que piense paso a paso antes de responder
                </p>
                
                <div className="space-y-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">¿Qué es Chain-of-Thought?</h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-3">
                      Es una técnica que <strong>obliga a la IA a mostrar su razonamiento</strong> antes de dar la respuesta final. En lugar de saltar directamente a la solución, la IA explica su proceso mental.
                    </p>
                    <p className="text-sm text-slate-400">
                      <strong>Analogía:</strong> Es como pedirle a un estudiante que muestre su trabajo en un examen de matemáticas, no solo la respuesta final.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Por qué funciona tan bien</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-300 mb-2">✅ Organiza razonamiento</p>
                        <p className="text-xs text-slate-400">La IA estructura su pensamiento lógicamente</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-300 mb-2">✅ Detecta errores</p>
                        <p className="text-xs text-slate-400">Al explicar, la IA identifica fallos en su lógica</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-300 mb-2">✅ Aprendes el proceso</p>
                        <p className="text-xs text-slate-400">Tú entiendes el CÓMO, no solo el QUÉ</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold text-yellow-300 mb-3">✨ La Frase Mágica ✨</h3>
                    <div className="bg-slate-900/50 p-4 rounded-lg inline-block">
                      <p className="text-2xl text-white font-mono">
                        "Piensa paso a paso antes de responder."
                      </p>
                    </div>
                    <p className="text-sm text-slate-400 mt-4">
                      Esta simple frase mejora dramáticamente la calidad de las respuestas de la IA
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Comparación: Con vs Sin Chain-of-Thought</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-red-300 mb-3">❌ Sin Chain-of-Thought</p>
                        <div className="bg-slate-900/50 p-4 rounded-lg space-y-3">
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Prompt:</p>
                            <p className="text-sm text-slate-300">"Crea una función que calcule el factorial de un número"</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Resultado:</p>
                            <pre className="text-xs text-slate-400 font-mono">
{`function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n-1);
}`}
                            </pre>
                            <p className="text-xs text-red-300 mt-2">Sin explicación del por qué</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                        <p className="text-base font-semibold text-green-300 mb-3">✅ Con Chain-of-Thought</p>
                        <div className="bg-slate-900/50 p-4 rounded-lg space-y-3">
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Prompt:</p>
                            <p className="text-sm text-slate-300">"Crea una función que calcule el factorial. <strong>Piensa paso a paso.</strong>"</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 mb-1">Resultado:</p>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              "Pensemos paso a paso:<br/>
                              1. El factorial de n es n × (n-1) × ... × 1<br/>
                              2. Casos especiales: factorial de 0 es 1<br/>
                              3. Puedo usar recursión o bucle<br/>
                              4. Para principiantes, bucle es más claro<br/>
                              Aquí está el código con comentarios..."
                            </p>
                            <p className="text-xs text-green-300 mt-2">Explicación completa del razonamiento</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                    <p className="text-sm text-orange-200">
                      <strong>📊 Estudios demuestran:</strong> Chain-of-Thought mejora la precisión de las respuestas de IA en un 30-50% en tareas complejas.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pros-cons" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Pros & Contras Prompting</h2>
                <p className="text-xl text-blue-300 mb-4">
                  Pídele a la IA que evalúe opciones mostrando ventajas y desventajas
                </p>
                
                <div className="space-y-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">¿Qué es Pros & Contras Prompting?</h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-3">
                      En lugar de pedir una recomendación directa, <strong>solicitas un análisis balanceado</strong> de todas las opciones disponibles con sus ventajas y desventajas.
                    </p>
                    <p className="text-sm text-slate-400">
                      <strong>Beneficio clave:</strong> Tomas decisiones informadas en lugar de seguir ciegamente una sugerencia. Entiendes los trade-offs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Cuándo usar esta técnica</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { case: "Elegir tecnologías", example: "React vs Vue vs Angular" },
                        { case: "Decidir arquitectura", example: "Monolito vs Microservicios" },
                        { case: "Seleccionar librerías", example: "Axios vs Fetch API" },
                        { case: "Evaluar enfoques", example: "SPA vs SSR vs SSG" }
                      ].map((use, i) => (
                        <div key={i} className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-blue-300 mb-1">{use.case}</p>
                          <p className="text-xs text-slate-400">Ej: {use.example}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Estructura del Prompt</h3>
                    <div className="bg-slate-900/50 p-5 rounded-lg">
                      <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
{`Necesito tomar una decisión sobre [tema].

Opciones disponibles: [Opción A, Opción B, Opción C]

Para cada opción, muéstrame:
1. Pros (ventajas específicas)
2. Contras (desventajas y limitaciones)
3. Casos de uso ideales (cuándo elegir esta opción)
4. Casos donde NO es recomendable

Mi contexto específico: [describe tu situación]

Al final, dame tu recomendación basada en mi contexto.`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Ejemplo Completo: Almacenamiento de Datos</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-900/50 p-5 rounded-xl">
                        <p className="text-base font-semibold text-blue-300 mb-3">📝 Prompt Completo:</p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          "Necesito elegir cómo almacenar datos en mi app de lista de tareas.<br/><br/>
                          <strong>Opciones:</strong> LocalStorage, IndexedDB, Backend con base de datos.<br/><br/>
                          Para cada opción, muéstrame pros, contras y cuándo usarla.<br/><br/>
                          <strong>Mi contexto:</strong> App personal para uso individual, máximo 100 tareas, debe funcionar offline."
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-base font-semibold text-white mb-3">LocalStorage</p>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-green-300 mb-1">✅ PROS</p>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                • Muy simple de usar<br/>
                                • Sin configuración<br/>
                                • Funciona offline<br/>
                                • Perfecto para datos simples
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-red-300 mb-1">❌ CONTRAS</p>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                • Límite 5-10MB<br/>
                                • Solo strings<br/>
                                • Sin sincronización
                              </p>
                            </div>
                            <div className="bg-blue-500/10 rounded p-2">
                              <p className="text-xs text-blue-200">
                                <strong>Ideal para:</strong> Apps personales simples
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-base font-semibold text-white mb-3">IndexedDB</p>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-green-300 mb-1">✅ PROS</p>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                • Mayor capacidad<br/>
                                • Datos complejos<br/>
                                • Búsquedas rápidas<br/>
                                • Transacciones
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-red-300 mb-1">❌ CONTRAS</p>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                • API compleja<br/>
                                • Más código<br/>
                                • Curva de aprendizaje
                              </p>
                            </div>
                            <div className="bg-blue-500/10 rounded p-2">
                              <p className="text-xs text-blue-200">
                                <strong>Ideal para:</strong> Apps con muchos datos
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-base font-semibold text-white mb-3">Backend + DB</p>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-green-300 mb-1">✅ PROS</p>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                • Sincronización<br/>
                                • Sin límites<br/>
                                • Multi-dispositivo<br/>
                                • Backups automáticos
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-red-300 mb-1">❌ CONTRAS</p>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                • Requiere servidor<br/>
                                • Más complejo<br/>
                                • Costos de hosting
                              </p>
                            </div>
                            <div className="bg-blue-500/10 rounded p-2">
                              <p className="text-xs text-blue-200">
                                <strong>Ideal para:</strong> Apps colaborativas
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                        <p className="text-base font-semibold text-green-300 mb-2">💡 RECOMENDACIÓN PARA TU CASO</p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          <strong>LocalStorage</strong> es perfecto para tu contexto: app personal, pocos datos, necesitas simplicidad. 
                          IndexedDB sería overkill, y Backend innecesario sin multi-dispositivo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                    <p className="text-sm text-orange-200">
                      <strong>🎯 Resultado:</strong> Tomas decisiones técnicas informadas basadas en tu contexto específico, no en modas o suposiciones.
                    </p>
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