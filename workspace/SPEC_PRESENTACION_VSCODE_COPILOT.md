# ESPECIFICACIÓN COMPLETA
## Aplicación Web de Presentación Interactiva
### "Visual Studio Code + GitHub Copilot: Desarrollo para No Desarrolladores"

---

## 📋 ÍNDICE

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Contexto y Objetivos](#contexto-y-objetivos)
3. [Perfil de Audiencia](#perfil-de-audiencia)
4. [Contenido Programático](#contenido-programático)
5. [Arquitectura de la Aplicación](#arquitectura-de-la-aplicación)
6. [Diseño de Interfaz y Experiencia](#diseño-de-interfaz-y-experiencia)
7. [Storyboard de Interacción](#storyboard-de-interacción)
8. [Estructura de Navegación](#estructura-de-navegación)
9. [Plan de Implementación Técnica](#plan-de-implementación-técnica)
10. [Modelo de Datos](#modelo-de-datos)
11. [Notas del Presentador](#notas-del-presentador)
12. [Criterios de Éxito](#criterios-de-éxito)

---

## 1. RESUMEN EJECUTIVO

### Propósito
Crear una aplicación web interactiva profesional que sirva como **la presentación completa** para una charla de 60 minutos sobre cómo personas sin experiencia en programación pueden crear software utilizando Visual Studio Code y GitHub Copilot.

### Propuesta de Valor
- **Para el presentador**: Una herramienta moderna, fluida y profesional que reemplaza PowerPoint con navegación intuitiva y contenido dinámico.
- **Para la audiencia**: Una experiencia visual impactante que demuestra el poder de la IA en desarrollo, con contenido accesible desde sus dispositivos móviles.
- **Meta-mensaje**: La propia aplicación es prueba viviente de que se puede crear software profesional usando IA.

### Características Clave
- ✅ Navegación tipo keynote moderna (teclado + clic)
- ✅ Diseño responsive (proyección + móvil/tablet)
- ✅ Contenido pre-cargado (funciona con internet inestable)
- ✅ Animaciones suaves y transiciones profesionales
- ✅ Modo presentador con notas privadas
- ✅ Sección de actividad práctica interactiva
- ✅ Editor de contenido JSON para actualizaciones rápidas

---

## 2. CONTEXTO Y OBJETIVOS

### Contexto
La charla se presenta en un entorno educativo/profesional donde la audiencia busca aprender cómo la inteligencia artificial puede democratizar el desarrollo de software, permitiendo a no desarrolladores crear soluciones tecnológicas reales.

### Objetivos Principales

1. **Educativo**: Enseñar conceptos de IA aplicada al desarrollo de software de forma simple y visual.
2. **Inspiracional**: Demostrar que cualquier persona puede crear software con las herramientas adecuadas.
3. **Práctico**: Proporcionar un framework (Prompt Maestro) que los asistentes puedan usar inmediatamente.
4. **Experiencial**: Incluir una actividad práctica donde los asistentes construyan su primer MVP.

### Mensaje Central
> "Con Visual Studio Code, GitHub Copilot y buenos prompts, cualquier persona puede transformar ideas en software funcional."

---

## 3. PERFIL DE AUDIENCIA

### Demografía
- **Tamaño**: 30-60 asistentes
- **Edad**: 20-50 años (mayoría 25-40)
- **Nivel técnico**: Principalmente no desarrolladores
  - Profesionales de negocios, salud, educación, administración
  - Usuarios avanzados de herramientas de oficina
  - Algunos estudiantes de ingeniería con conocimientos básicos

### Necesidades
- Lenguaje simple, sin jerga técnica excesiva
- Ejemplos visuales y concretos
- Instrucciones paso a paso claras
- Contenido accesible desde sus dispositivos

### Expectativas
- Aprender algo aplicable inmediatamente
- Ver demostraciones en vivo
- Llevarse recursos para practicar después

---

## 4. CONTENIDO PROGRAMÁTICO

### 4.1 ESTRUCTURA GENERAL DE LA CHARLA (60 minutos)

```
┌─────────────────────────────────────────────────────────────┐
│  SECCIÓN                           │ TIEMPO    │ TIPO        │
├─────────────────────────────────────────────────────────────┤
│  1. Bienvenida y Agenda            │  3 min    │ Intro       │
│  2. ¿Qué es VS Code?               │  5 min    │ Contexto    │
│  3. GitHub Copilot: Tu Co-Piloto  │  8 min    │ Explicación │
│  4. Modelos: Razonador vs Ejecutor │  5 min    │ Conceptual  │
│  5. Ingeniería de Prompts Avanzada │ 15 min    │ Técnicas    │
│  6. El Prompt Maestro              │ 10 min    │ Framework   │
│  7. Demo en Vivo                   │  8 min    │ Práctica    │
│  8. Actividad para Asistentes      │  6 min    │ Ejercicio   │
└─────────────────────────────────────────────────────────────┘
```

---

### 4.2 CONTENIDO DETALLADO POR SECCIÓN

#### **SECCIÓN 1: Bienvenida y Agenda**

**Objetivo**: Establecer el tono, presentar al ponente y dar overview de la charla.

**Contenido**:
- Título de la charla con animación de entrada
- Nombre del presentador
- Agenda visual con 8 puntos principales
- Mensaje motivacional: "Hoy aprenderás a crear software sin ser programador"

**Elementos visuales**:
- Hero section con gradiente azul oscuro
- Iconos para cada sección de la agenda
- Animación de fade-in progresivo

---

#### **SECCIÓN 2: ¿Qué es Visual Studio Code?**

**Objetivo**: Introducir VS Code de forma simple y accesible.

**Contenido**:
- **Definición simple**: "Un editor de texto inteligente para escribir código"
- **Características clave para no desarrolladores**:
  - ✅ Gratis y multiplataforma (Windows, Mac, Linux)
  - ✅ Interfaz intuitiva y personalizable
  - ✅ Miles de extensiones disponibles
  - ✅ Integración con GitHub
  - ✅ Terminal integrada
- **Por qué es importante**: "Es la puerta de entrada al mundo del desarrollo"

**Elementos visuales**:
- Screenshot limpio de VS Code
- Iconos de sistemas operativos
- Diagrama simple: "Tu idea → VS Code → Aplicación real"

**Nota del presentador**:
> "No necesitas ser programador para usar VS Code. Es como Word, pero para código. Y con Copilot, ni siquiera necesitas saber escribir el código."

---

#### **SECCIÓN 3: GitHub Copilot - Tu Co-Piloto de IA**

**Objetivo**: Explicar qué es Copilot y cómo funciona en términos simples.

**Contenido Principal**:

**3.1 ¿Qué es GitHub Copilot?**
- "Un asistente de IA que vive dentro de VS Code"
- "Entiende lo que quieres hacer y escribe el código por ti"
- "Entrenado con millones de líneas de código público"

**3.2 Agentes / Capacidades de Copilot**

Presentar como tarjetas interactivas expandibles:

| **Agente/Capacidad** | **¿Para qué sirve?** | **¿Cuándo usarlo?** | **Ejemplo** |
|----------------------|----------------------|---------------------|-------------|
| **💬 Copilot Chat** | Conversar con la IA para resolver dudas, explicar código o planificar | Cuando no sabes cómo empezar o necesitas entender algo | "¿Cómo creo una página web simple?" |
| **✨ Sugerencias en Tiempo Real** | Completa automáticamente lo que estás escribiendo | Mientras escribes código o comentarios | Escribes `// crear función para...` y Copilot completa |
| **📖 Explicación de Código** | Te explica qué hace un código que no entiendes | Cuando ves código complejo | Seleccionas código → "Explícame esto" |
| **🔧 Refactorización** | Mejora código existente haciéndolo más limpio | Cuando tu código funciona pero es desordenado | "Mejora esta función" |
| **🧪 Generación de Pruebas** | Crea tests automáticos para tu código | Cuando quieres asegurar que todo funciona | "Genera tests para esta función" |

**Elementos visuales**:
- Tarjetas con iconos para cada capacidad
- Al hacer clic, se expande con ejemplo visual
- Animación de typing para simular sugerencias de Copilot

**Nota del presentador**:
> "Copilot es como tener un programador experto sentado a tu lado, disponible 24/7, que nunca se cansa de responder preguntas."

---

#### **SECCIÓN 4: Modelos - Razonador vs Ejecutor**

**Objetivo**: Enseñar cuándo usar modelos de planificación vs modelos de ejecución.

**Contenido**:

**4.1 Dos tipos de modelos de IA**

```
┌─────────────────────────────────────────────────────────┐
│                    MODELO RAZONADOR                     │
├─────────────────────────────────────────────────────────┤
│  Función: Pensar, planificar, diseñar                  │
│  Ejemplos: ChatGPT o1, Claude Opus, Gemini Pro         │
│  Uso: Crear especificaciones, prompts maestros         │
│  Cuándo: ANTES de escribir código                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    MODELO EJECUTOR                      │
├─────────────────────────────────────────────────────────┤
│  Función: Escribir código, implementar                 │
│  Ejemplos: GitHub Copilot, Claude Sonnet               │
│  Uso: Generar código línea por línea                   │
│  Cuándo: DURANTE la escritura de código                │
└─────────────────────────────────────────────────────────┘
```

**4.2 Flujo de trabajo ideal**

```
Idea 💡
  ↓
Modelo Razonador 🧠
(Crear especificación y plan)
  ↓
Modelo Ejecutor ⚡
(Escribir código con Copilot)
  ↓
Aplicación Funcional ✅
```

**Casos de uso**:
- ❌ **Error común**: Pedirle a Copilot que diseñe toda tu app sin plan
- ✅ **Mejor práctica**: Usar ChatGPT para planificar, luego Copilot para ejecutar

**Elementos visuales**:
- Diagrama de flujo animado
- Comparación lado a lado con iconos
- Ejemplos de prompts para cada tipo

**Nota del presentador**:
> "Piensa en el razonador como el arquitecto que diseña la casa, y el ejecutor como el constructor que la levanta ladrillo por ladrillo."

---

#### **SECCIÓN 5: Ingeniería de Prompts Avanzada**

**Objetivo**: Enseñar técnicas específicas para mejorar la calidad de los prompts.

Esta es la sección más densa y debe ser **altamente visual e interactiva**.

---

##### **5.1 Meta-Prompting**

**Definición**:
> "Un prompt que le pide a la IA que te ayude a crear mejores prompts"

**Concepto**:
- En lugar de escribir directamente tu prompt, le pides a la IA que te guíe
- La IA se convierte en tu coach de prompts

**Ejemplo de Meta-Prompt**:

```
Eres un experto en ingeniería de prompts.
Necesito crear un prompt maestro para desarrollar una aplicación completa.

Antes de que yo te diga qué aplicación quiero:
1. Hazme todas las preguntas necesarias sobre:
   - Objetivo de la aplicación
   - Audiencia objetivo
   - Funcionalidades clave
   - Restricciones técnicas
   - Estilo visual

2. Una vez que respondas mis preguntas, crea un prompt maestro
   completo y estructurado que pueda usar en VS Code con Copilot.

¿Qué preguntas tienes para mí?
```

**Dónde construirlo**:
- ChatGPT (GPT-4 o superior)
- Claude (Opus o Sonnet)
- MGX.dev
- Gemini Advanced

**Elementos visuales**:
- Tarjeta con el meta-prompt completo
- Botón "Copiar prompt"
- Animación mostrando el flujo: Meta-prompt → Preguntas → Prompt Maestro

---

##### **5.2 Q&A Prompting**

**Definición**:
> "Antes de empezar, pídele a la IA que te haga preguntas"

**Por qué funciona**:
- La IA clarifica ambigüedades
- Tú proporcionas contexto específico
- El resultado final es mucho más preciso

**Estructura**:
```
[Tu solicitud]

Antes de comenzar, hazme todas las preguntas que necesites sobre:
- [Aspecto 1]
- [Aspecto 2]
- [Aspecto 3]

Espera mis respuestas antes de generar código.
```

**Ejemplo real**:
```
Quiero crear una app para gestionar pacientes en una clínica.

Antes de diseñar la app, hazme preguntas sobre:
- Tipo de clínica y especialidad
- Información que necesito registrar de cada paciente
- Quién usará la app (doctores, recepcionistas, ambos)
- Si necesito reportes o estadísticas
- Restricciones de privacidad de datos

Espera mis respuestas.
```

**Elementos visuales**:
- Comparación lado a lado:
  - ❌ Sin Q&A: resultado genérico
  - ✅ Con Q&A: resultado personalizado
- Animación de chat simulado

---

##### **5.3 Spec-Driven Design**

**Definición**:
> "Primero especificación completa, después código"

**Flujo**:
```
1. Idea inicial
   ↓
2. Q&A Prompting (clarificar)
   ↓
3. Especificación detallada (documento completo)
   ↓
4. Plan de implementación (paso a paso)
   ↓
5. Código con Copilot (ejecución)
```

**Ventajas**:
- ✅ Evita reescribir código
- ✅ Todos entienden qué se va a construir
- ✅ Detectas problemas antes de programar
- ✅ Copilot genera código más preciso

**Ejemplo de especificación**:
```markdown
# ESPECIFICACIÓN: App de Gestión de Tareas

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
- Sin backend (todo en el navegador)
```

**Elementos visuales**:
- Diagrama de flujo del proceso
- Ejemplo de spec en formato documento
- Antes/después: código sin spec vs con spec

---

##### **5.4 Vibes Coding**

**Definición**:
> "Define el 'estilo' o 'vibra' en que quieres que la IA trabaje"

**Concepto**:
- No solo le dices QUÉ hacer, sino CÓMO comunicarse
- Estableces el tono, nivel de detalle, paciencia, etc.

**Ejemplos de "vibes"**:

```
VIBE: Paciente y didáctico
"Explícame cada paso como si fuera mi primera vez programando.
Usa analogías simples. No asumas que sé términos técnicos."

VIBE: Directo y eficiente
"Dame solo el código, sin explicaciones largas.
Comentarios breves en el código son suficientes."

VIBE: Exploratorio y creativo
"Muéstrame 3 enfoques diferentes para resolver esto.
Explica pros y contras de cada uno."

VIBE: Profesional y robusto
"Escribe código production-ready con manejo de errores,
validaciones y mejores prácticas de la industria."
```

**Cómo aplicarlo**:
Agrega una sección VIBES al inicio de tu prompt:

```
VIBES:
- Lenguaje simple, sin jerga
- Explicaciones paso a paso
- Ejemplos concretos
- Tono amigable y motivador
```

**Elementos visuales**:
- Tarjetas con diferentes "vibes"
- Comparación de outputs con diferentes vibes
- Selector interactivo de vibe

---

##### **5.5 Chain-of-Thought (Cadena de Pensamiento)**

**Definición**:
> "Pídele a la IA que piense paso a paso antes de responder"

**Por qué funciona**:
- La IA organiza su razonamiento
- Detecta errores en su propia lógica
- Tú entiendes el proceso, no solo el resultado

**Frase mágica**:
```
"Piensa paso a paso antes de responder."
```

**Ejemplo sin CoT**:
```
Prompt: "Crea una función que calcule el factorial de un número"
Resultado: [código directo sin explicación]
```

**Ejemplo con CoT**:
```
Prompt: "Crea una función que calcule el factorial de un número.
        Piensa paso a paso antes de escribir el código."

Resultado:
"Pensemos paso a paso:
1. El factorial de n es n × (n-1) × (n-2) × ... × 1
2. Casos especiales: factorial de 0 es 1
3. Puedo usar recursión o un bucle
4. Para principiantes, un bucle es más claro
5. Necesito validar que n sea positivo

Aquí está el código:
[código con comentarios explicativos]"
```

**Elementos visuales**:
- Comparación lado a lado
- Animación de "pensamiento" de la IA
- Diagrama de flujo del razonamiento

---

##### **5.6 Pros & Contras Prompting**

**Definición**:
> "Pídele a la IA que evalúe opciones mostrando ventajas y desventajas"

**Cuándo usarlo**:
- Elegir tecnologías (React vs Vue vs Vanilla JS)
- Decidir arquitectura (SPA vs MPA)
- Seleccionar librerías
- Evaluar enfoques de diseño

**Estructura del prompt**:
```
Necesito [decisión a tomar].

Muéstrame las opciones principales con:
- Pros (ventajas)
- Contras (desventajas)
- Cuándo usar cada una
- Tu recomendación para mi caso específico: [contexto]
```

**Ejemplo**:
```
Necesito elegir cómo almacenar datos en mi app de tareas.

Opciones: LocalStorage, IndexedDB, Backend con base de datos.

Muéstrame pros y contras de cada una.
Mi contexto: app personal, pocos usuarios, sin necesidad de sincronización.
```

**Respuesta esperada**:
```
OPCIÓN 1: LocalStorage
✅ Pros:
  - Muy simple de usar
  - No requiere backend
  - Funciona offline
❌ Contras:
  - Límite de 5-10MB
  - Solo texto (debes serializar objetos)
  - No funciona entre dispositivos

OPCIÓN 2: IndexedDB
✅ Pros:
  - Más capacidad (50MB+)
  - Mejor para datos complejos
❌ Contras:
  - API más compleja
  - Requiere más código

OPCIÓN 3: Backend + DB
✅ Pros:
  - Sincronización entre dispositivos
  - Sin límites de almacenamiento
❌ Contras:
  - Requiere servidor y hosting
  - Más complejo de implementar

RECOMENDACIÓN para tu caso:
LocalStorage es perfecto. Es simple, suficiente para una app personal,
y no necesitas la complejidad de las otras opciones.
```

**Elementos visuales**:
- Tabla comparativa interactiva
- Iconos ✅ ❌ para pros y contras
- Destacar la recomendación final

---

#### **SECCIÓN 6: El Prompt Maestro**

**Objetivo**: Presentar el framework completo que los asistentes pueden usar.

**Contenido**:

**6.1 ¿Qué es un Prompt Maestro?**
> "Un prompt estructurado y completo que contiene todo lo necesario para que la IA (razonador + ejecutor) cree una aplicación completa de principio a fin."

**6.2 Estructura del Prompt Maestro**

```markdown
# PROMPT MAESTRO: [Nombre de tu aplicación]

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
- Documentación básica
```

**6.3 Ejemplo Concreto: App de Registro de Gastos**

```markdown
# PROMPT MAESTRO: App de Registro de Gastos Personales

## 1. ROL
Eres un desarrollador full-stack experto en crear aplicaciones web
simples y funcionales para usuarios no técnicos.

## 2. OBJETIVO GENERAL
Crear una aplicación web para registrar y visualizar gastos personales
diarios, con categorías y gráficos simples.

## 3. Q&A PROMPTING
Antes de comenzar, hazme preguntas sobre:
- Categorías de gastos que quiero usar (ej: comida, transporte, etc.)
- Si necesito múltiples usuarios o es solo para mí
- Tipo de gráficos o reportes que quiero ver
- Si necesito exportar datos (PDF, Excel, etc.)
- Preferencias de diseño (colores, estilo)

Espera mis respuestas antes de continuar.

## 4. SPEC-DRIVEN DESIGN
Después de mis respuestas, crea una especificación completa que incluya:
- Lista detallada de funcionalidades
- Mockup textual de la interfaz
- Flujo de usuario (desde que abre la app hasta que registra un gasto)
- Estructura de datos

## 5. PLAN DE IMPLEMENTACIÓN
Crea un plan de implementación paso a paso:
1. Configuración inicial del proyecto
2. Estructura HTML base
3. Estilos CSS
4. Funcionalidad JavaScript
5. Persistencia de datos
6. Gráficos y reportes
7. Pruebas y ajustes

## 6. VIBES
- Lenguaje simple y didáctico
- Código bien comentado en español
- Explicaciones paso a paso
- Ejemplos de uso incluidos
- Tono motivador y paciente

## 7. RESTRICCIONES
- Tecnología: HTML, CSS, JavaScript vanilla (sin frameworks)
- Almacenamiento: LocalStorage (sin backend)
- Complejidad: MVP funcional, interfaz limpia pero simple
- Compatibilidad: Navegadores modernos (Chrome, Firefox, Safari)

## 8. ENTREGABLES
Al final del proceso, proporciona:
- Código completo en archivos separados (HTML, CSS, JS)
- Instrucciones claras para abrir y usar la app
- README con explicación de cómo funciona
- Lista de posibles mejoras futuras
```

**6.4 Dónde Construir y Usar el Prompt Maestro**

**Paso 1: Construir el Prompt Maestro**
- Usa un modelo razonador (ChatGPT-4, Claude Opus, Gemini Advanced)
- Copia el template del Prompt Maestro
- Personalízalo para tu proyecto específico
- Guárdalo en:
  - Notion
  - Google Docs
  - Archivo Markdown en tu computadora
  - Repositorio de GitHub

**Paso 2: Ejecutar con el Modelo Razonador**
- Pega tu Prompt Maestro en ChatGPT/Claude
- Responde las preguntas del Q&A
- Revisa y aprueba la especificación
- Obtén el plan de implementación completo

**Paso 3: Llevar a VS Code + Copilot**
- Abre VS Code
- Crea los archivos según el plan
- Usa Copilot Chat para generar cada sección
- Usa comentarios para guiar a Copilot:
  ```javascript
  // Función para agregar un nuevo gasto
  // Debe validar que el monto sea positivo
  // Debe asignar un ID único
  // Debe guardar en localStorage
  ```
- Copilot generará el código automáticamente

**Paso 4: Iterar y Mejorar**
- Prueba la aplicación
- Si algo no funciona, pregunta a Copilot Chat
- Refina y ajusta según necesites

**Elementos visuales**:
- Diagrama de flujo completo del proceso
- Template del Prompt Maestro en una tarjeta copiable
- Ejemplo real completo y expandible
- Iconos para cada herramienta (ChatGPT, VS Code, etc.)
- Video o GIF animado mostrando el flujo

**Nota del presentador**:
> "Este Prompt Maestro es tu plantilla reutilizable. Una vez que lo tienes, puedes adaptarlo para cualquier proyecto: app de tareas, registro de pacientes, inventario, lo que necesites."

---

#### **SECCIÓN 7: Demo en Vivo**

**Objetivo**: Mostrar el proceso completo en acción, en tiempo real.

**Contenido**:

**7.1 Preparación de la Demo**
- Tener VS Code abierto en pantalla
- Tener ChatGPT/Claude abierto en otra pestaña
- Proyecto de ejemplo: "App de Lista de Ideas"

**7.2 Flujo de la Demo (8 minutos)**

```
MINUTO 0-2: Usar el Prompt Maestro en ChatGPT
- Mostrar el prompt maestro ya preparado
- Pegar en ChatGPT
- Responder 2-3 preguntas rápidas
- Obtener la especificación

MINUTO 2-4: Revisar el Plan
- Mostrar el plan de implementación generado
- Explicar brevemente cada paso
- Destacar la claridad del plan

MINUTO 4-7: Generar Código con Copilot
- Abrir VS Code
- Crear archivo index.html
- Escribir comentarios guía:
  "<!-- Página para registrar ideas creativas
       - Formulario con título y descripción
       - Lista de ideas guardadas
       - Botón para eliminar ideas
       - Estilos modernos con CSS -->"
- Dejar que Copilot genere el código
- Crear archivo styles.css con comentarios
- Crear archivo script.js con comentarios
- Mostrar cómo Copilot completa automáticamente

MINUTO 7-8: Probar la App
- Abrir en navegador
- Agregar 2-3 ideas de ejemplo
- Mostrar que funciona
- Destacar: "Esto tomó menos de 10 minutos"
```

**Elementos visuales en la presentación**:
- Sección con iframe o video pre-grabado (backup si internet falla)
- Checklist de pasos visible durante la demo
- Timer visible
- Resumen de "Qué acabamos de hacer"

**Nota del presentador**:
> "Lo que acaban de ver es el proceso real. No es magia, es metodología. Y ustedes pueden hacerlo exactamente igual."

---

#### **SECCIÓN 8: Actividad Práctica para Asistentes**

**Objetivo**: Que los asistentes construyan su primer MVP usando el Prompt Maestro.

**Contenido**:

**8.1 Introducción a la Actividad**
- "Ahora es tu turno de crear tu primera aplicación con IA"
- Tiempo estimado: 20-30 minutos (después de la charla)
- Pueden hacerlo en el momento o llevárselo de tarea

**8.2 Instrucciones Paso a Paso**

```
┌─────────────────────────────────────────────────────────┐
│  PASO 1: Elige tu Proyecto                             │
├─────────────────────────────────────────────────────────┤
│  Opciones sugeridas para principiantes:                │
│  □ App de registro de tareas                           │
│  □ App de registro de gastos                           │
│  □ App de notas rápidas                                │
│  □ App de seguimiento de hábitos                       │
│  □ App de registro de pacientes (si eres del área)    │
│  □ Tu propia idea (mantenla simple)                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PASO 2: Copia el Prompt Maestro                       │
├─────────────────────────────────────────────────────────┤
│  [Botón: Copiar Template del Prompt Maestro]           │
│                                                         │
│  Pégalo en ChatGPT, Claude o Gemini                    │
│  (Recomendado: ChatGPT-4 o Claude)                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PASO 3: Personaliza el Prompt                         │
├─────────────────────────────────────────────────────────┤
│  Edita estas secciones:                                │
│  - OBJETIVO GENERAL: describe tu app                   │
│  - Q&A PROMPTING: qué quieres que te pregunte          │
│  - RESTRICCIONES: tecnología simple (HTML/CSS/JS)      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PASO 4: Ejecuta el Prompt                             │
├─────────────────────────────────────────────────────────┤
│  1. Pega tu prompt en la IA                            │
│  2. Responde las preguntas que te haga                 │
│  3. Revisa la especificación generada                  │
│  4. Aprueba el plan de implementación                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PASO 5: Lleva el Plan a VS Code                       │
├─────────────────────────────────────────────────────────┤
│  1. Abre VS Code                                       │
│  2. Crea una nueva carpeta para tu proyecto            │
│  3. Crea los archivos: index.html, styles.css, app.js │
│  4. Abre Copilot Chat (Ctrl+I o Cmd+I)                │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PASO 6: Genera el Código con Copilot                  │
├─────────────────────────────────────────────────────────┤
│  En cada archivo, escribe comentarios guía:            │
│                                                         │
│  Ejemplo en index.html:                                │
│  <!-- App de [tu proyecto]                             │
│       Debe tener:                                      │
│       - [Funcionalidad 1]                              │
│       - [Funcionalidad 2]                              │
│       - [Funcionalidad 3] -->                          │
│                                                         │
│  Deja que Copilot genere el código                     │
│  Acepta las sugerencias con Tab                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PASO 7: Prueba tu App                                 │
├─────────────────────────────────────────────────────────┤
│  1. Abre index.html en tu navegador                    │
│  2. Prueba todas las funcionalidades                   │
│  3. Si algo no funciona:                               │
│     - Pregunta a Copilot Chat: "¿Por qué no funciona?"│
│     - Describe el error que ves                        │
│     - Copilot te ayudará a arreglarlo                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PASO 8: ¡Celebra! 🎉                                  │
├─────────────────────────────────────────────────────────┤
│  Acabas de crear tu primera aplicación con IA          │
│  Comparte tu logro en redes sociales                   │
│  Etiqueta: #DesarrolloConIA #GitHubCopilot             │
└─────────────────────────────────────────────────────────┘
```

**8.3 Recursos Adicionales**

- **[Botón] Descargar Prompt Maestro Template** (archivo .txt o .md)
- **[Botón] Ver Ejemplo Completo** (código de la demo)
- **[Botón] Unirse al Grupo de Práctica** (Discord/Telegram/WhatsApp)
- **[Link] Documentación de GitHub Copilot**
- **[Link] Tutoriales de VS Code en español**

**8.4 Checklist de Éxito**

```
□ Tengo VS Code instalado
□ Tengo GitHub Copilot activado (o cuenta de prueba)
□ Tengo acceso a ChatGPT/Claude/Gemini
□ Copié el Prompt Maestro
□ Elegí mi proyecto
□ Entiendo los pasos a seguir
□ Sé dónde pedir ayuda si me atasco
```

**8.5 Soporte Post-Charla**

- Email del presentador: [email]
- Grupo de práctica: [link]
- Horario de consultas: [si aplica]

**Elementos visuales**:
- Diseño tipo "tutorial interactivo"
- Cada paso en una tarjeta expandible
- Iconos grandes y claros
- Botones de acción destacados
- Progress bar visual (8 pasos)
- Sección de FAQ al final

**Nota del presentador**:
> "No esperen a llegar a casa. Si tienen laptop, pueden empezar ahora mismo. Yo estaré disponible para ayudarles. La mejor forma de aprender es haciendo."

---

## 5. ARQUITECTURA DE LA APLICACIÓN

### 5.1 Stack Tecnológico

**Frontend**:
- **Framework**: React 18+ con Vite
- **Styling**: Tailwind CSS + Shadcn-UI components
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Syntax Highlighting**: Prism.js o React Syntax Highlighter

**Gestión de Estado**:
- React Context API (para navegación y modo presentador)
- LocalStorage (para guardar progreso y notas)

**Deployment**:
- Build estático optimizado
- Compatible con Vercel, Netlify, GitHub Pages

---

### 5.2 Estructura de Carpetas

```
presentation-app/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── vscode-screenshot.png
│   │   │   ├── copilot-demo.gif
│   │   │   └── icons/
│   │   └── videos/
│   │       └── demo-backup.mp4
│   └── content/
│       └── slides-content.json
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── PresenterNotes.tsx
│   │   ├── slides/
│   │   │   ├── SlideContainer.tsx
│   │   │   ├── Slide01Welcome.tsx
│   │   │   ├── Slide02WhatIsVSCode.tsx
│   │   │   ├── Slide03GitHubCopilot.tsx
│   │   │   ├── Slide04ModelsComparison.tsx
│   │   │   ├── Slide05PromptEngineering.tsx
│   │   │   ├── Slide06MasterPrompt.tsx
│   │   │   ├── Slide07LiveDemo.tsx
│   │   │   └── Slide08Activity.tsx
│   │   ├── ui/
│   │   │   ├── Card.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── AnimatedSection.tsx
│   │   │   └── ProgressBar.tsx
│   │   └── interactive/
│   │       ├── ExpandableCard.tsx
│   │       ├── ComparisonTable.tsx
│   │       ├── FlowDiagram.tsx
│   │       └── CopyButton.tsx
│   ├── context/
│   │   ├── PresentationContext.tsx
│   │   └── PresenterModeContext.tsx
│   ├── hooks/
│   │   ├── useKeyboardNavigation.ts
│   │   ├── useSlideProgress.ts
│   │   └── usePresenterMode.ts
│   ├── data/
│   │   ├── slidesData.ts
│   │   ├── promptTemplates.ts
│   │   └── presenterNotes.ts
│   ├── utils/
│   │   ├── animations.ts
│   │   └── localStorage.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── PRESENTER_GUIDE.md
│   ├── PROMPT_MASTER_TEMPLATE.md
│   └── ACTIVITY_INSTRUCTIONS.md
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

### 5.3 Componentes Principales

#### **AppLayout**
- Contenedor principal de la aplicación
- Maneja el estado global de navegación
- Renderiza el slide actual
- Incluye controles de navegación

#### **SlideContainer**
- Wrapper para cada slide individual
- Maneja animaciones de entrada/salida
- Aplica transiciones suaves

#### **Navigation**
- Barra de navegación inferior
- Indicadores de progreso (dots)
- Botones prev/next
- Contador de slides (ej: "3 / 8")

#### **PresenterNotes**
- Panel lateral (oculto por defecto)
- Se activa con tecla "P"
- Muestra notas privadas del presentador
- Timer de la presentación

#### **Interactive Components**
- **ExpandableCard**: Tarjetas que se expanden al hacer clic
- **CodeBlock**: Bloques de código con syntax highlighting y botón copiar
- **ComparisonTable**: Tablas comparativas animadas
- **FlowDiagram**: Diagramas de flujo con animaciones

---

## 6. DISEÑO DE INTERFAZ Y EXPERIENCIA

### 6.1 Principios de Diseño

1. **Minimalismo Profesional**: Espacios en blanco generosos, jerarquía visual clara
2. **Alto Contraste**: Texto siempre legible, incluso desde lejos
3. **Animaciones Sutiles**: Transiciones suaves que no distraen
4. **Responsive**: Funciona perfectamente en proyección, desktop, tablet y móvil
5. **Accesibilidad**: Navegación por teclado, tamaños de fuente adecuados

---

### 6.2 Sistema de Diseño

#### **Paleta de Colores (Dark Mode)**

```css
/* Colores Principales */
--background: #0a0e1a;        /* Fondo principal oscuro */
--surface: #141824;           /* Superficies elevadas */
--surface-light: #1e2330;     /* Superficies más claras */

/* Colores de Acento */
--primary: #3b82f6;           /* Azul principal */
--primary-light: #60a5fa;     /* Azul claro */
--primary-dark: #2563eb;      /* Azul oscuro */

--secondary: #8b5cf6;         /* Violeta (acentos) */
--accent: #10b981;            /* Verde (éxito, checks) */

/* Colores de Texto */
--text-primary: #f8fafc;      /* Texto principal */
--text-secondary: #cbd5e1;    /* Texto secundario */
--text-muted: #64748b;        /* Texto atenuado */

/* Colores Semánticos */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

#### **Tipografía**

```css
/* Fuentes */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;

/* Tamaños (escala modular 1.25) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.25rem;    /* 20px */
--text-xl: 1.5rem;     /* 24px */
--text-2xl: 2rem;      /* 32px */
--text-3xl: 2.5rem;    /* 40px */
--text-4xl: 3rem;      /* 48px */
--text-5xl: 4rem;      /* 64px */

/* Pesos */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

#### **Espaciado**

```css
/* Sistema de espaciado (base 4px) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

#### **Bordes y Sombras**

```css
/* Radios de borde */
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */

/* Sombras */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.6);
```

---

### 6.3 Layout de Slides

#### **Estructura Base de Cada Slide**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [Número de Slide]                    [Progress Dots]  │
│                                                         │
│                                                         │
│                    [TÍTULO PRINCIPAL]                   │
│                                                         │
│                                                         │
│                     [CONTENIDO]                         │
│                                                         │
│                                                         │
│                                                         │
│                                                         │
│  [← Anterior]                          [Siguiente →]   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### **Tipos de Layout**

1. **Hero Layout** (Slide 1 - Bienvenida)
   - Título grande centrado
   - Subtítulo
   - Animación de entrada impactante

2. **Content Layout** (Slides 2-4)
   - Título en la parte superior
   - Contenido en 2 columnas (texto + visual)
   - Bullets o tarjetas

3. **Feature Grid Layout** (Slide 3 - Copilot Agents)
   - Título
   - Grid de tarjetas expandibles (2x3 o 3x2)

4. **Comparison Layout** (Slide 4 - Modelos)
   - Título
   - Dos columnas lado a lado
   - Diagrama de flujo central

5. **Technique Showcase Layout** (Slide 5 - Prompt Engineering)
   - Título
   - Tabs o acordeón para cada técnica
   - Ejemplos de código

6. **Template Layout** (Slide 6 - Prompt Maestro)
   - Título
   - Bloque de código grande y copiable
   - Explicación lateral

7. **Demo Layout** (Slide 7)
   - Título
   - Área de video/iframe
   - Checklist de pasos

8. **Activity Layout** (Slide 8)
   - Título motivacional
   - Pasos numerados en tarjetas
   - Botones de acción destacados

---

### 6.4 Componentes UI Específicos

#### **Card Component**
```tsx
<Card variant="default | elevated | outlined">
  <CardHeader>
    <CardIcon /> {/* Opcional */}
    <CardTitle />
  </CardHeader>
  <CardContent>
    {children}
  </CardContent>
  <CardFooter> {/* Opcional */}
    <Button />
  </CardFooter>
</Card>
```

#### **CodeBlock Component**
```tsx
<CodeBlock
  language="javascript | markdown | bash"
  code={codeString}
  showLineNumbers={true}
  highlightLines={[3, 5, 7]}
  copyable={true}
/>
```

#### **ExpandableCard Component**
```tsx
<ExpandableCard
  title="Meta-Prompting"
  icon={<SparklesIcon />}
  preview="Un prompt que le pide a la IA..."
>
  {/* Contenido expandido */}
</ExpandableCard>
```

---

## 7. STORYBOARD DE INTERACCIÓN

### 7.1 Flujo de Navegación

```
Usuario abre la app
  ↓
Slide 1: Bienvenida (auto-play animación)
  ↓
Usuario presiona → o hace clic en "Siguiente"
  ↓
Slide 2: ¿Qué es VS Code? (fade-in)
  ↓
Usuario presiona → o hace clic
  ↓
Slide 3: GitHub Copilot
  - Usuario hace clic en tarjeta "Copilot Chat"
  - Tarjeta se expande mostrando detalles
  - Usuario cierra tarjeta o hace clic en otra
  ↓
Usuario presiona → para siguiente slide
  ↓
Slide 4: Modelos (animación de diagrama)
  ↓
Slide 5: Ingeniería de Prompts
  - Usuario hace clic en tab "Meta-Prompting"
  - Contenido cambia con transición
  - Usuario explora otros tabs
  ↓
Slide 6: Prompt Maestro
  - Usuario hace clic en "Copiar Template"
  - Feedback visual: "¡Copiado!"
  ↓
Slide 7: Demo en Vivo
  - Video/iframe se reproduce
  - Usuario puede pausar/reanudar
  ↓
Slide 8: Actividad
  - Usuario hace clic en "Descargar Template"
  - Usuario hace clic en "Ver Ejemplo"
  - Modal se abre con ejemplo completo
```

---

### 7.2 Interacciones Específicas

#### **Navegación por Teclado**
- `→` o `Space`: Siguiente slide
- `←`: Slide anterior
- `Home`: Primer slide
- `End`: Último slide
- `P`: Toggle modo presentador
- `F`: Toggle fullscreen
- `Esc`: Salir de fullscreen o cerrar modales

#### **Navegación por Clic**
- Clic en botones "Anterior" / "Siguiente"
- Clic en dots de progreso (saltar a slide específico)
- Clic en elementos interactivos (tarjetas, tabs, botones)

#### **Gestos Táctiles (Móvil/Tablet)**
- Swipe izquierda: Siguiente slide
- Swipe derecha: Slide anterior
- Tap en elementos interactivos

---

### 7.3 Animaciones y Transiciones

#### **Transiciones entre Slides**
- **Tipo**: Fade + Slide
- **Duración**: 400ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

```typescript
const slideTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};
```

#### **Animaciones de Elementos**

**Fade In Stagger** (para listas):
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

**Scale on Hover** (para tarjetas):
```typescript
const cardHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};
```

**Expand Animation** (para tarjetas expandibles):
```typescript
const expandVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1 }
};
```

---

## 8. ESTRUCTURA DE NAVEGACIÓN

### 8.1 Mapa de Slides

```
1. Bienvenida y Agenda
   ├─ Título de la charla
   ├─ Nombre del presentador
   └─ Agenda visual (8 puntos)

2. ¿Qué es VS Code?
   ├─ Definición simple
   ├─ Características clave
   └─ Screenshot de VS Code

3. GitHub Copilot
   ├─ ¿Qué es?
   ├─ Agentes/Capacidades (6 tarjetas expandibles)
   │   ├─ Copilot Chat
   │   ├─ Sugerencias en Tiempo Real
   │   ├─ Explicación de Código
   │   ├─ Refactorización
   │   ├─ Generación de Pruebas
   │   └─ [Otros]
   └─ Ejemplo visual

4. Modelos: Razonador vs Ejecutor
   ├─ Comparación lado a lado
   ├─ Diagrama de flujo
   └─ Casos de uso

5. Ingeniería de Prompts Avanzada
   ├─ Tabs para cada técnica:
   │   ├─ Meta-Prompting
   │   ├─ Q&A Prompting
   │   ├─ Spec-Driven Design
   │   ├─ Vibes Coding
   │   ├─ Chain-of-Thought
   │   └─ Pros & Contras
   └─ Cada tab con ejemplo copiable

6. El Prompt Maestro
   ├─ Estructura del template
   ├─ Ejemplo completo (App de Gastos)
   ├─ Dónde construirlo y usarlo
   └─ Botón "Copiar Template"

7. Demo en Vivo
   ├─ Video/iframe de la demo
   ├─ Checklist de pasos
   └─ Resumen de lo demostrado

8. Actividad Práctica
   ├─ Instrucciones paso a paso (8 pasos)
   ├─ Botones de descarga
   ├─ Recursos adicionales
   └─ Información de soporte
```

---

### 8.2 Sistema de Progreso

#### **Indicadores Visuales**
- **Progress Dots**: Fila de dots en la parte superior
  - Dot actual: más grande y color primario
  - Dots visitados: color secundario
  - Dots no visitados: color atenuado

- **Progress Bar**: Barra delgada en la parte superior
  - Se llena progresivamente
  - Color: gradiente azul

- **Contador de Slides**: "3 / 8"
  - Esquina superior derecha
  - Fuente pequeña, color atenuado

---

## 9. PLAN DE IMPLEMENTACIÓN TÉCNICA

### 9.1 Fases de Desarrollo

#### **FASE 1: Setup y Estructura Base** (Prioridad: Alta)
```
□ Inicializar proyecto con Vite + React + TypeScript
□ Configurar Tailwind CSS + Shadcn-UI
□ Instalar dependencias:
  - framer-motion
  - lucide-react
  - react-syntax-highlighter
  - react-markdown (si aplica)
□ Crear estructura de carpetas
□ Configurar routing/navegación base
□ Implementar AppLayout y Navigation
```

#### **FASE 2: Sistema de Slides** (Prioridad: Alta)
```
□ Crear SlideContainer con animaciones
□ Implementar navegación por teclado
□ Implementar navegación por clic
□ Crear sistema de progreso (dots, bar, counter)
□ Implementar PresentationContext
□ Guardar progreso en LocalStorage
```

#### **FASE 3: Componentes UI Reutilizables** (Prioridad: Alta)
```
□ Card component (con variantes)
□ Button component (con variantes)
□ CodeBlock component (con syntax highlighting y copy)
□ ExpandableCard component
□ ComparisonTable component
□ FlowDiagram component (SVG animado)
□ Modal component
□ Tabs component
```

#### **FASE 4: Slides Individuales** (Prioridad: Alta)
```
□ Slide 1: Bienvenida
□ Slide 2: ¿Qué es VS Code?
□ Slide 3: GitHub Copilot (con tarjetas expandibles)
□ Slide 4: Modelos (con diagrama animado)
□ Slide 5: Ingeniería de Prompts (con tabs)
□ Slide 6: Prompt Maestro (con template copiable)
□ Slide 7: Demo en Vivo (con video/iframe)
□ Slide 8: Actividad (con instrucciones paso a paso)
```

#### **FASE 5: Contenido y Data** (Prioridad: Media)
```
□ Crear slides-content.json con todo el contenido
□ Crear promptTemplates.ts con templates copiables
□ Crear presenterNotes.ts con notas para cada slide
□ Agregar imágenes y assets
□ Crear video backup de la demo
```

#### **FASE 6: Modo Presentador** (Prioridad: Media)
```
□ Implementar PresenterModeContext
□ Crear panel de PresenterNotes
□ Implementar timer de presentación
□ Agregar vista previa del siguiente slide
□ Implementar toggle con tecla "P"
```

#### **FASE 7: Responsive y Mobile** (Prioridad: Media)
```
□ Ajustar layouts para tablet
□ Ajustar layouts para móvil
□ Implementar gestos táctiles (swipe)
□ Optimizar tamaños de fuente
□ Probar en diferentes dispositivos
```

#### **FASE 8: Optimización y Pulido** (Prioridad: Baja)
```
□ Optimizar performance (lazy loading, code splitting)
□ Agregar loading states
□ Implementar error boundaries
□ Mejorar accesibilidad (ARIA labels, focus management)
□ Agregar meta tags para SEO
□ Crear favicon y assets de PWA (opcional)
```

#### **FASE 9: Documentación** (Prioridad: Media)
```
□ Crear README.md completo
□ Crear PRESENTER_GUIDE.md
□ Crear PROMPT_MASTER_TEMPLATE.md
□ Crear ACTIVITY_INSTRUCTIONS.md
□ Documentar cómo editar slides-content.json
```

#### **FASE 10: Testing y Deploy** (Prioridad: Alta)
```
□ Probar navegación completa
□ Probar en diferentes navegadores
□ Probar en diferentes dispositivos
□ Optimizar build de producción
□ Deploy a Vercel/Netlify
□ Configurar dominio (si aplica)
```

---

### 9.2 Tecnologías y Librerías

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0",
    "react-syntax-highlighter": "^15.5.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

### 9.3 Scripts de Desarrollo

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
  }
}
```

---

## 10. MODELO DE DATOS

### 10.1 Estructura de Datos de Slides

```typescript
// src/data/slidesData.ts

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  type: 'hero' | 'content' | 'feature-grid' | 'comparison' | 'technique' | 'template' | 'demo' | 'activity';
  content: SlideContent;
  presenterNotes: string;
}

export interface SlideContent {
  // Contenido varía según el tipo de slide
  [key: string]: any;
}

// Ejemplo: Slide de Bienvenida
export const slide01: Slide = {
  id: 1,
  title: "Visual Studio Code + GitHub Copilot",
  subtitle: "Desarrollo para No Desarrolladores",
  type: "hero",
  content: {
    presenter: "Tu Nombre",
    agenda: [
      "¿Qué es VS Code?",
      "GitHub Copilot: Tu Co-Piloto",
      "Modelos: Razonador vs Ejecutor",
      "Ingeniería de Prompts Avanzada",
      "El Prompt Maestro",
      "Demo en Vivo",
      "Actividad Práctica"
    ]
  },
  presenterNotes: "Bienvenida cálida. Establecer expectativas. Mencionar que la app misma fue creada con IA."
};

// Ejemplo: Slide de GitHub Copilot
export const slide03: Slide = {
  id: 3,
  title: "GitHub Copilot: Tu Co-Piloto de IA",
  type: "feature-grid",
  content: {
    intro: "Un asistente de IA que vive dentro de VS Code",
    features: [
      {
        id: "chat",
        icon: "MessageSquare",
        title: "Copilot Chat",
        description: "Conversar con la IA para resolver dudas",
        whenToUse: "Cuando no sabes cómo empezar",
        example: "¿Cómo creo una página web simple?"
      },
      {
        id: "suggestions",
        icon: "Sparkles",
        title: "Sugerencias en Tiempo Real",
        description: "Completa automáticamente lo que escribes",
        whenToUse: "Mientras escribes código o comentarios",
        example: "Escribes '// crear función para...' y Copilot completa"
      },
      // ... más features
    ]
  },
  presenterNotes: "Demostrar cada capacidad con ejemplos visuales. Enfatizar que no necesitan ser programadores."
};
```

---

### 10.2 Estructura de Prompt Templates

```typescript
// src/data/promptTemplates.ts

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  template: string;
  example?: string;
}

export const masterPromptTemplate: PromptTemplate = {
  id: "master-prompt",
  name: "Prompt Maestro",
  description: "Template completo para crear aplicaciones con IA",
  template: `# PROMPT MAESTRO: [Nombre de tu aplicación]

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
- [Vibe 1]
- [Vibe 2]
- [Vibe 3]

## 7. RESTRICCIONES
- Tecnología: [stack específico]
- Complejidad: MVP funcional
- Tiempo: [si aplica]

## 8. ENTREGABLES
Al final, proporciona:
- Código completo y funcional
- Instrucciones para ejecutar
- Documentación básica`,
  example: `# PROMPT MAESTRO: App de Registro de Gastos Personales

## 1. ROL
Eres un desarrollador full-stack experto en crear aplicaciones web
simples y funcionales para usuarios no técnicos.

## 2. OBJETIVO GENERAL
Crear una aplicación web para registrar y visualizar gastos personales
diarios, con categorías y gráficos simples.

## 3. Q&A PROMPTING
Antes de comenzar, hazme preguntas sobre:
- Categorías de gastos que quiero usar
- Si necesito múltiples usuarios o es solo para mí
- Tipo de gráficos o reportes que quiero ver
- Si necesito exportar datos
- Preferencias de diseño

Espera mis respuestas antes de continuar.

## 4. SPEC-DRIVEN DESIGN
[... resto del ejemplo ...]`
};
```

---

### 10.3 Estructura de Notas del Presentador

```typescript
// src/data/presenterNotes.ts

export interface PresenterNote {
  slideId: number;
  notes: string;
  keyPoints: string[];
  timing: string;
  tips: string[];
}

export const presenterNotes: PresenterNote[] = [
  {
    slideId: 1,
    notes: "Bienvenida cálida. Establecer el tono: accesible, práctico, inspirador.",
    keyPoints: [
      "Esta charla es para NO desarrolladores",
      "Van a aprender a crear software real",
      "La propia app es prueba de concepto"
    ],
    timing: "3 minutos",
    tips: [
      "Sonreír y hacer contacto visual",
      "Preguntar: ¿Quién ha programado antes? (esperar respuesta)",
      "Mencionar que al final habrá actividad práctica"
    ]
  },
  {
    slideId: 3,
    notes: "Explicar cada capacidad de Copilot con ejemplos concretos.",
    keyPoints: [
      "Copilot no es magia, es un asistente entrenado",
      "Cada capacidad tiene un caso de uso específico",
      "No necesitan memorizarlo, solo entender cuándo usar qué"
    ],
    timing: "8 minutos",
    tips: [
      "Hacer clic en 2-3 tarjetas para mostrar interactividad",
      "Leer en voz alta los ejemplos",
      "Preguntar: ¿Qué les parece más útil?"
    ]
  }
  // ... más notas
];
```

---

## 11. NOTAS DEL PRESENTADOR

### 11.1 Guía General de Presentación

#### **Antes de la Charla**
- [ ] Llegar 15 minutos antes
- [ ] Probar proyector y resolución
- [ ] Verificar conexión a internet
- [ ] Abrir la app en el navegador
- [ ] Tener VS Code abierto en otra ventana (para la demo)
- [ ] Tener ChatGPT/Claude abierto en otra pestaña
- [ ] Probar audio (si hay video en la demo)
- [ ] Tener agua a mano

#### **Durante la Charla**
- **Ritmo**: Mantener energía alta pero no apresurarse
- **Interacción**: Hacer preguntas a la audiencia cada 10-15 minutos
- **Pausas**: Dar tiempo para que procesen información compleja
- **Ejemplos**: Usar analogías del mundo real
- **Humor**: Mantener tono ligero, hacer chistes suaves

#### **Manejo del Tiempo**
- Slide 1: 3 min
- Slide 2: 5 min
- Slide 3: 8 min (puede extenderse si hay preguntas)
- Slide 4: 5 min
- Slide 5: 15 min (la más densa, no apresurarse)
- Slide 6: 10 min
- Slide 7: 8 min (puede acortarse si el tiempo apremia)
- Slide 8: 6 min + tiempo de preguntas

**Total**: ~60 minutos

---

### 11.2 Frases Clave por Slide

#### **Slide 1: Bienvenida**
> "Hoy van a aprender algo que cambiará su forma de ver la tecnología: cualquier persona, con las herramientas adecuadas, puede crear software."

#### **Slide 2: VS Code**
> "Visual Studio Code es como Word, pero para código. Y con Copilot, ni siquiera necesitan saber escribir el código."

#### **Slide 3: Copilot**
> "Copilot es como tener un programador experto sentado a tu lado, disponible 24/7, que nunca se cansa de responder preguntas."

#### **Slide 4: Modelos**
> "Piensa en el razonador como el arquitecto que diseña la casa, y el ejecutor como el constructor que la levanta ladrillo por ladrillo."

#### **Slide 5: Ingeniería de Prompts**
> "Un buen prompt es la diferencia entre obtener código genérico y obtener exactamente lo que necesitas."

#### **Slide 6: Prompt Maestro**
> "Este Prompt Maestro es tu plantilla reutilizable. Una vez que lo tienes, puedes adaptarlo para cualquier proyecto."

#### **Slide 7: Demo**
> "Lo que acaban de ver es el proceso real. No es magia, es metodología. Y ustedes pueden hacerlo exactamente igual."

#### **Slide 8: Actividad**
> "No esperen a llegar a casa. Si tienen laptop, pueden empezar ahora mismo. Yo estaré disponible para ayudarles."

---

### 11.3 Preguntas Frecuentes Anticipadas

**P: ¿Necesito saber programar para usar Copilot?**
R: "No. Copilot entiende lenguaje natural. Le describes lo que quieres en español (o inglés) y él genera el código."

**P: ¿Es gratis GitHub Copilot?**
R: "Tiene una prueba gratuita de 30 días. Después cuesta ~$10/mes. Para estudiantes y profesores es gratis."

**P: ¿Qué pasa si Copilot genera código con errores?**
R: "Le preguntas: '¿Por qué no funciona esto?' y él mismo te ayuda a arreglarlo. Es un ciclo iterativo."

**P: ¿Puedo crear apps móviles con esto?**
R: "Sí, pero es más complejo. Para empezar, recomiendo apps web que funcionan en cualquier dispositivo."

**P: ¿Cuánto tiempo toma aprender esto?**
R: "Puedes crear tu primera app funcional en 1-2 horas. Dominar el proceso toma práctica, pero la curva de aprendizaje es mucho más suave que aprender a programar tradicionalmente."

---

## 12. CRITERIOS DE ÉXITO

### 12.1 Criterios Técnicos

- ✅ La aplicación carga en menos de 3 segundos
- ✅ Navegación fluida sin lag (60 FPS)
- ✅ Funciona en Chrome, Firefox, Safari, Edge
- ✅ Responsive en móvil, tablet, desktop
- ✅ Animaciones suaves y profesionales
- ✅ Código copiable funciona correctamente
- ✅ Modo presentador funciona sin errores
- ✅ LocalStorage guarda progreso correctamente

---

### 12.2 Criterios de Contenido

- ✅ Todo el contenido está en español (excepto código)
- ✅ Lenguaje simple y accesible para no desarrolladores
- ✅ Ejemplos concretos y relevantes
- ✅ Prompt Maestro completo y funcional
- ✅ Instrucciones de actividad claras y paso a paso
- ✅ Notas del presentador útiles y detalladas

---

### 12.3 Criterios de Experiencia

- ✅ La audiencia entiende los conceptos principales
- ✅ La audiencia se siente inspirada y capaz
- ✅ La audiencia tiene recursos para practicar después
- ✅ El presentador puede navegar sin distracciones
- ✅ La presentación se siente moderna y profesional
- ✅ El mensaje central queda claro: "Cualquiera puede crear software con IA"

---

### 12.4 Métricas de Éxito Post-Charla

**Cuantitativas**:
- Al menos 70% de los asistentes descargan el Prompt Maestro
- Al menos 50% intentan la actividad práctica
- Al menos 30% completan su primer MVP

**Cualitativas**:
- Feedback positivo sobre la claridad de la presentación
- Comentarios sobre la utilidad del Prompt Maestro
- Preguntas de seguimiento (indica interés genuino)
- Solicitudes para compartir la app o los recursos

---

## 13. PRÓXIMOS PASOS

### Para el Presentador (Tú)

1. **Revisar esta SPEC completa**
   - Confirmar que todo el contenido es correcto
   - Agregar o modificar secciones según necesites
   - Aprobar para proceder a la implementación

2. **Proporcionar Assets**
   - Logo personal (si aplica)
   - Screenshot de VS Code (o usar uno genérico)
   - Video de la demo (o usar video de backup)

3. **Personalizar Contenido**
   - Agregar tu nombre y contacto
   - Ajustar ejemplos según tu audiencia específica
   - Definir el proyecto de la demo en vivo

### Para el Desarrollo (Yo)

1. **Inicializar proyecto** según el plan técnico
2. **Implementar fase por fase** siguiendo las prioridades
3. **Crear contenido editable** en JSON
4. **Documentar todo** para que puedas editar fácilmente
5. **Deploy y entrega** con instrucciones completas

---

## 14. CONCLUSIÓN

Esta especificación define una aplicación web de presentación interactiva completa, profesional y funcional que:

- **Reemplaza PowerPoint** con una experiencia moderna y dinámica
- **Enseña conceptos complejos** de forma simple y visual
- **Inspira a no desarrolladores** a crear software con IA
- **Proporciona herramientas prácticas** (Prompt Maestro) reutilizables
- **Demuestra su propio mensaje**: fue creada con IA

La app será:
- ✅ Técnicamente sólida
- ✅ Visualmente impactante
- ✅ Educativamente efectiva
- ✅ Prácticamente útil

---

**¿Apruebas esta especificación para proceder a la implementación?**

Si hay algo que quieras modificar, agregar o aclarar, por favor indícalo antes de que comience a escribir código.