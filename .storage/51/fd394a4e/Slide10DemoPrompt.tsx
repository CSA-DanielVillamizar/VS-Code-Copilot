import React, { useRef, useEffect, useState } from "react";
import { useSlideAnimation } from "@/hooks/useSlideAnimation";
import { useAppStore } from "@/store/useAppStore";
import { RegisterSlide } from "@/decorators/RegisterSlide";
import { Copy, Check, Rocket, Code2 } from "lucide-react";

const Slide10DemoPrompt: React.FC = () => {
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

  const demoPrompt = `# APP DE LISTA DE IDEAS CREATIVAS

Crea una aplicación web completamente funcional para gestionar ideas creativas con las siguientes características:

## FUNCIONALIDADES PRINCIPALES:
1. Agregar nuevas ideas con título, descripción y categoría
2. Categorías predefinidas: Negocios, Tecnología, Arte, Vida Personal, Otros
3. Marcar ideas como favoritas (estrella)
4. Eliminar ideas
5. Filtrar ideas por categoría
6. Contador de ideas totales y favoritas
7. Persistencia de datos usando localStorage

## DISEÑO DE INTERFAZ:
- Diseño moderno y limpio con degradados de color
- Header con título y contador de ideas
- Formulario para agregar ideas con:
  * Campo de título (obligatorio)
  * Área de texto para descripción
  * Selector de categoría
  * Botón "Agregar Idea"
- Filtros de categoría con botones coloridos
- Tarjetas de ideas con:
  * Título destacado
  * Descripción
  * Badge de categoría con color distintivo
  * Botón de favorito (estrella)
  * Botón de eliminar (X)
- Animaciones suaves al agregar/eliminar
- Responsive para móviles

## TECNOLOGÍAS:
- HTML5 puro
- CSS3 con Flexbox/Grid
- JavaScript vanilla (sin frameworks)
- localStorage para persistencia

## ESTRUCTURA DE ARCHIVOS:
Crea 3 archivos en la misma carpeta:
1. index.html - Estructura HTML
2. styles.css - Todos los estilos
3. app.js - Toda la lógica JavaScript

## COLORES SUGERIDOS:
- Fondo general: gradiente de azul oscuro a morado
- Tarjetas: blanco con sombra
- Categoría Negocios: azul
- Categoría Tecnología: verde
- Categoría Arte: morado
- Categoría Vida Personal: naranja
- Categoría Otros: gris

## VALIDACIONES:
- El título es obligatorio
- Mostrar mensaje si se intenta agregar sin título
- Confirmar antes de eliminar una idea
- Guardar automáticamente en localStorage cada cambio

## CARACTERÍSTICAS ADICIONALES:
- Mostrar mensaje "No hay ideas aún" cuando la lista está vacía
- Animación de entrada para nuevas ideas
- Hover effects en botones y tarjetas
- Iconos usando emojis o símbolos Unicode

IMPORTANTE: El código debe ser completamente funcional desde el primer momento. Incluye comentarios explicativos en español. La aplicación debe verse profesional y ser intuitiva de usar.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(demoPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="flex h-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-12 py-8 overflow-y-auto">
      <h1 
        ref={titleRef}
        className="text-4xl font-bold text-white mb-4"
      >
        Prompt Listo para Demo en Vivo
      </h1>

      <div className="bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3 mb-2">
          <Rocket className="w-6 h-6 text-blue-400" />
          <p className="text-lg font-semibold text-white">
            App de Lista de Ideas Creativas
          </p>
        </div>
        <p className="text-sm text-slate-300">
          Este prompt está optimizado para generar una aplicación completamente funcional en minutos usando GitHub Copilot en VS Code.
        </p>
      </div>

      <div ref={contentRef} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Left column - Instructions */}
          <div className="flex flex-col gap-4">
            <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Cómo Usar Este Prompt
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-300 mb-2">Paso 1: Preparar VS Code</p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Abre VS Code</li>
                    <li>• Crea una carpeta nueva: "lista-ideas-demo"</li>
                    <li>• Asegúrate que GitHub Copilot esté activado</li>
                  </ul>
                </div>

                <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-violet-300 mb-2">Paso 2: Crear Archivos</p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Crea "index.html" y pega el prompt como comentario</li>
                    <li>• Crea "styles.css" vacío</li>
                    <li>• Crea "app.js" vacío</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-300 mb-2">Paso 3: Generar con Copilot</p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• En index.html: escribe comentarios guía y acepta sugerencias</li>
                    <li>• En styles.css: escribe "/* Estilos para..." y deja que Copilot complete</li>
                    <li>• En app.js: escribe "// Función para..." y acepta el código</li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-orange-300 mb-2">Paso 4: Probar</p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Abre index.html en tu navegador</li>
                    <li>• Prueba agregar, filtrar y eliminar ideas</li>
                    <li>• Verifica que se guarden al recargar la página</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
              <p className="text-sm text-yellow-200 mb-2">
                <strong>⚡ Tiempo estimado:</strong> 5-8 minutos
              </p>
              <p className="text-xs text-slate-300">
                Este prompt está diseñado para que Copilot genere código de alta calidad rápidamente. Incluye todas las especificaciones necesarias para una demo exitosa.
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <p className="text-sm text-green-200 mb-2">
                <strong>✅ Características Garantizadas:</strong>
              </p>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>✓ Interfaz profesional y moderna</li>
                <li>✓ Todas las funcionalidades operativas</li>
                <li>✓ Persistencia de datos con localStorage</li>
                <li>✓ Responsive para móviles</li>
                <li>✓ Código limpio y comentado</li>
                <li>✓ Sin dependencias externas</li>
              </ul>
            </div>
          </div>

          {/* Right column - Prompt */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Prompt Completo para Copiar</h3>
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
                    <span className="text-sm">Copiar Prompt</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-xl border border-slate-700 mb-3">
              <p className="text-xs text-slate-300">
                <strong className="text-blue-300">Instrucciones:</strong> Copia este prompt completo y úsalo como comentario inicial en tu archivo index.html, o como guía para escribir comentarios específicos en cada archivo.
              </p>
            </div>

            <div className="flex-1 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
              <div className="h-full overflow-y-auto p-4">
                <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                  {demoPrompt}
                </pre>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-3">
                <p className="text-xs text-violet-200">
                  <strong>💡 Tip Pro:</strong> En lugar de pegar todo el prompt, úsalo como referencia y escribe comentarios específicos para cada sección. Copilot generará código más preciso.
                </p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-xs text-blue-200">
                  <strong>🎯 Resultado:</strong> Una aplicación completamente funcional lista para mostrar en tu demo, sin necesidad de depuración o ajustes adicionales.
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
  title: "Prompt para Demo",
  order: 9,
  enterAnimation: { type: "slideLeft", duration: 500 },
})(Slide10DemoPrompt);

export default Slide10DemoPrompt;