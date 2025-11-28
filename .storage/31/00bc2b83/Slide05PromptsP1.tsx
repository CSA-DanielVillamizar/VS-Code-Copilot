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
        className="text-4xl font-bold text-white mb-4"
      >
        Ingeniería de Prompts Avanzada (Parte 1)
      </h1>

      <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 mb-4">
        <p className="text-base text-slate-300">
          <strong className="text-blue-300">Objetivo de este slide:</strong> Aprender 3 técnicas profesionales para crear prompts que generen mejores resultados. Haz clic en cada tab para explorar.
        </p>
      </div>

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
                <p className="text-xl text-blue-300 mb-4">
                  Un prompt que le pide a la IA que te ayude a crear mejores prompts
                </p>
                
                <div className="space-y-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">¿Qué es y por qué funciona?</h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-3">
                      En lugar de escribir directamente tu prompt, le pides a la IA que te guíe en el proceso. <strong>La IA se convierte en tu coach de prompts</strong>, haciendo preguntas que te ayudan a clarificar tu idea.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      <strong>Ventaja principal:</strong> Evitas olvidar detalles importantes. La IA conoce qué información necesita para darte mejores resultados.
                    </p>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Ejemplo Completo de Meta-Prompt</h3>
                    <div className="bg-slate-900/50 p-5 rounded-lg mb-4">
                      <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
{`Eres un experto en ingeniería de prompts.
Necesito crear un prompt maestro para desarrollar 
una aplicación completa.

Antes de que yo te diga qué aplicación quiero:
1. Hazme todas las preguntas necesarias sobre:
   - Objetivo de la aplicación
   - Audiencia objetivo (¿quién la usará?)
   - Funcionalidades clave (¿qué debe hacer?)
   - Restricciones técnicas (tecnologías, limitaciones)
   - Estilo visual (diseño, colores, tema)

2. Una vez que respondas mis preguntas, crea un 
   prompt maestro completo y estructurado que pueda 
   usar en VS Code con Copilot.

¿Qué preguntas tienes para mí?`}
                      </pre>
                    </div>
                    <p className="text-sm text-slate-400">
                      <strong>Resultado esperado:</strong> La IA te hará 5-8 preguntas específicas. Tus respuestas guiarán la creación de un prompt perfecto para tu proyecto.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Dónde construir tu Meta-Prompt</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "ChatGPT (GPT-4+)", desc: "Excelente para conversaciones largas" },
                        { name: "Claude (Opus/Sonnet)", desc: "Muy detallado en sus preguntas" },
                        { name: "Gemini Advanced", desc: "Bueno para proyectos técnicos" },
                        { name: "MGX.dev", desc: "Especializado en desarrollo web" }
                      ].map((tool, i) => (
                        <div key={i} className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-base text-blue-200 font-medium mb-1">{tool.name}</p>
                          <p className="text-xs text-slate-400">{tool.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <p className="text-sm text-green-200">
                      <strong>💡 Consejo para presentadores:</strong> Demuestra esto en vivo. Pega un meta-prompt en ChatGPT y muestra cómo la IA hace preguntas inteligentes.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="qa" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Q&A Prompting</h2>
                <p className="text-xl text-blue-300 mb-4">
                  Antes de empezar, pídele a la IA que te haga preguntas
                </p>
                
                <div className="space-y-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">¿Qué es Q&A Prompting?</h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-3">
                      En lugar de dar toda la información de una vez (y probablemente olvidar cosas), <strong>le pides a la IA que te interrogue</strong> sobre lo que necesita saber.
                    </p>
                    <p className="text-sm text-slate-400">
                      Es como cuando vas al doctor: primero te hace preguntas antes de diagnosticar. La IA necesita contexto para darte la mejor solución.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Por qué funciona tan bien</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-300 mb-2">✅ Clarifica ambigüedades</p>
                        <p className="text-xs text-slate-400">La IA identifica qué falta en tu solicitud</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-300 mb-2">✅ Contexto específico</p>
                        <p className="text-xs text-slate-400">Tú proporcionas detalles relevantes</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-sm font-semibold text-green-300 mb-2">✅ Resultado preciso</p>
                        <p className="text-xs text-slate-400">El output final es mucho mejor</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Estructura del Q&A Prompt</h3>
                    <div className="bg-slate-900/50 p-5 rounded-lg">
                      <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
{`[Tu solicitud general]

Antes de comenzar, hazme todas las preguntas 
que necesites sobre:
- [Aspecto 1 - ej: funcionalidades]
- [Aspecto 2 - ej: usuarios]
- [Aspecto 3 - ej: tecnología]
- [Aspecto 4 - ej: diseño]

Espera mis respuestas antes de generar código 
o crear el plan.`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Ejemplo Real: App de Gestión de Pacientes</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-900/50 p-5 rounded-xl">
                        <p className="text-sm font-semibold text-red-300 mb-3">❌ Sin Q&A (Resultado Genérico)</p>
                        <pre className="text-xs text-slate-400 whitespace-pre-wrap">
{`Prompt: "Crea una app para 
gestionar pacientes"

Resultado: App básica genérica 
que no se adapta a tu clínica 
específica.`}
                        </pre>
                      </div>

                      <div className="bg-slate-900/50 p-5 rounded-xl">
                        <p className="text-sm font-semibold text-green-300 mb-3">✅ Con Q&A (Resultado Personalizado)</p>
                        <pre className="text-xs text-slate-400 whitespace-pre-wrap">
{`Prompt: "Quiero crear una app 
para gestionar pacientes.

Antes de diseñar, pregúntame sobre:
- Tipo de clínica y especialidad
- Info a registrar por paciente
- Quién usará la app
- Reportes necesarios
- Restricciones de privacidad"

Resultado: App específica para 
tu clínica con funciones exactas.`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                    <p className="text-sm text-orange-200">
                      <strong>⚠️ Nota importante:</strong> Siempre incluye "Espera mis respuestas" al final. Esto evita que la IA genere código antes de tener toda la información.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="spec" className="h-full m-0">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full overflow-y-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Spec-Driven Design</h2>
                <p className="text-xl text-blue-300 mb-4">
                  Primero especificación completa, después código
                </p>
                
                <div className="space-y-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">¿Qué es Spec-Driven Design?</h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-3">
                      Es un enfoque donde <strong>primero creas un documento de especificación detallado</strong> (la "spec") y solo después generas el código. La spec es como el plano arquitectónico de tu software.
                    </p>
                    <p className="text-sm text-slate-400">
                      <strong>Analogía:</strong> No construyes una casa sin planos. Tampoco deberías escribir código sin una especificación clara.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Flujo Completo (5 Pasos)</h3>
                    <div className="flex items-center gap-3 text-slate-300 mb-6">
                      <div className="bg-violet-500/20 border border-violet-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-xs font-semibold">1. Idea</p>
                      </div>
                      <span className="text-lg">→</span>
                      <div className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-xs font-semibold">2. Q&A</p>
                      </div>
                      <span className="text-lg">→</span>
                      <div className="bg-green-500/20 border border-green-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-xs font-semibold">3. Spec</p>
                      </div>
                      <span className="text-lg">→</span>
                      <div className="bg-orange-500/20 border border-orange-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-xs font-semibold">4. Plan</p>
                      </div>
                      <span className="text-lg">→</span>
                      <div className="bg-purple-500/20 border border-purple-500 px-4 py-2 rounded-lg text-center flex-1">
                        <p className="text-xs font-semibold">5. Código</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Ventajas de este enfoque</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "Evita reescribir código", desc: "Detectas problemas antes de programar" },
                        { title: "Claridad total", desc: "Todos entienden qué se va a construir" },
                        { title: "Mejor código", desc: "Copilot genera código más preciso con specs claras" },
                        { title: "Ahorra tiempo", desc: "Menos iteraciones y correcciones" }
                      ].map((advantage, i) => (
                        <div key={i} className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-green-300 mb-1">✅ {advantage.title}</p>
                          <p className="text-xs text-slate-400">{advantage.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-violet-300 mb-3">Ejemplo de Especificación Completa</h3>
                    <div className="bg-slate-900/50 p-5 rounded-lg overflow-x-auto">
                      <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
{`# ESPECIFICACIÓN: App de Gestión de Tareas

## 1. Objetivo
Crear una app web simple para gestionar tareas 
personales diarias con prioridades y fechas límite.

## 2. Funcionalidades
1. Agregar nueva tarea (título, descripción, 
   fecha límite, prioridad: alta/media/baja)
2. Marcar tarea como completada
3. Editar tarea existente
4. Eliminar tarea
5. Filtrar por: todas, pendientes, completadas
6. Ordenar por: fecha, prioridad

## 3. Interfaz de Usuario
- Header: título de la app + botón "Nueva Tarea"
- Lista de tareas: cards con checkbox, título, 
  fecha, prioridad (color coded)
- Formulario modal para agregar/editar
- Botones de filtro en barra superior
- Diseño: minimalista, colores azul y blanco

## 4. Flujo de Usuario
1. Usuario abre la app → ve lista de tareas
2. Click "Nueva Tarea" → abre modal
3. Llena formulario → click "Guardar"
4. Tarea aparece en lista
5. Click checkbox → marca como completada
6. Click en tarea → abre modal para editar

## 5. Estructura de Datos
{
  id: string (UUID),
  title: string,
  description: string,
  dueDate: Date,
  priority: 'high' | 'medium' | 'low',
  completed: boolean,
  createdAt: Date
}

## 6. Tecnología
- HTML5, CSS3, JavaScript vanilla
- LocalStorage para persistencia
- Sin backend (todo en navegador)
- Responsive (mobile-first)

## 7. Restricciones
- Máximo 100 tareas almacenadas
- Sin autenticación (app personal)
- Funciona offline
- Compatible con Chrome, Firefox, Safari`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <p className="text-sm text-green-200">
                      <strong>💡 Tip para presentadores:</strong> Muestra cómo esta spec se convierte en prompts específicos para Copilot. Cada sección de la spec = un prompt.
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
  title: "Ingeniería de Prompts (Parte 1)",
  order: 4,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide05PromptsP1);

export default Slide05PromptsP1;