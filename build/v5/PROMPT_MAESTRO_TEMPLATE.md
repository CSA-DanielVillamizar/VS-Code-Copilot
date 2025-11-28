# PROMPT MAESTRO: [Nombre de tu aplicación]

## 1. ROL
Eres un [tipo de experto] especializado en [área].

Ejemplo:
- "Eres un desarrollador full-stack experto en crear aplicaciones web simples y funcionales para usuarios no técnicos."

---

## 2. OBJETIVO GENERAL
Crear una [tipo de aplicación] que permita [funcionalidad principal].

Ejemplo:
- "Crear una aplicación web para registrar y visualizar gastos personales diarios, con categorías y gráficos simples."

---

## 3. Q&A PROMPTING
Antes de comenzar, hazme todas las preguntas necesarias sobre:
- [Aspecto 1]
- [Aspecto 2]
- [Aspecto 3]

Espera mis respuestas.

Ejemplo:
```
Antes de comenzar, hazme preguntas sobre:
- Categorías de gastos que quiero usar (ej: comida, transporte, etc.)
- Si necesito múltiples usuarios o es solo para mí
- Tipo de gráficos o reportes que quiero ver
- Si necesito exportar datos (PDF, Excel, etc.)
- Preferencias de diseño (colores, estilo)

Espera mis respuestas antes de continuar.
```

---

## 4. SPEC-DRIVEN DESIGN
Después de mis respuestas, crea una especificación completa que incluya:
- Objetivo detallado
- Funcionalidades (lista numerada)
- Diseño de interfaz (descripción visual)
- Flujo de usuario (desde que abre la app hasta que completa una acción)
- Estructura de datos
- Tecnologías a usar

---

## 5. PLAN DE IMPLEMENTACIÓN
Crea un plan de implementación paso a paso:
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]
...

Ejemplo:
```
1. Configuración inicial del proyecto
2. Estructura HTML base
3. Estilos CSS
4. Funcionalidad JavaScript
5. Persistencia de datos
6. Gráficos y reportes
7. Pruebas y ajustes
```

---

## 6. VIBES
Define el estilo de trabajo de la IA:
- [Vibe 1: ej. Lenguaje simple, sin jerga]
- [Vibe 2: ej. Código bien comentado en español]
- [Vibe 3: ej. Explicaciones paso a paso]
- [Vibe 4: ej. Ejemplos de uso incluidos]
- [Vibe 5: ej. Tono motivador y paciente]

---

## 7. RESTRICCIONES
Define límites claros para el proyecto:

- **Tecnología**: [stack específico o "el más simple posible"]
  - Ejemplo: "HTML, CSS, JavaScript vanilla (sin frameworks)"
  
- **Almacenamiento**: [tipo de persistencia]
  - Ejemplo: "LocalStorage (sin backend)"
  
- **Complejidad**: MVP funcional, no perfección
  
- **Compatibilidad**: [navegadores o dispositivos objetivo]
  - Ejemplo: "Navegadores modernos (Chrome, Firefox, Safari)"

---

## 8. ENTREGABLES
Al final del proceso, proporciona:
- Código completo en archivos separados (HTML, CSS, JS)
- Instrucciones claras para abrir y usar la app
- README con explicación de cómo funciona
- Lista de posibles mejoras futuras

---

## EJEMPLO COMPLETO: App de Registro de Gastos Personales

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

---

## CÓMO USAR ESTE PROMPT MAESTRO

### Paso 1: Personaliza el Template
1. Copia este template completo
2. Reemplaza los placeholders [entre corchetes] con tu información específica
3. Ajusta los ejemplos según tu proyecto

### Paso 2: Usa un Modelo Razonador
1. Pega tu Prompt Maestro personalizado en:
   - ChatGPT-4 o superior
   - Claude Opus o Sonnet
   - Gemini Advanced
   - MGX.dev

2. Responde las preguntas que te haga la IA

3. Revisa y aprueba la especificación generada

### Paso 3: Implementa con Copilot
1. Abre VS Code
2. Crea los archivos según el plan
3. Usa Copilot Chat para generar cada sección
4. Escribe comentarios guía para que Copilot genere el código:
   ```javascript
   // Función para agregar un nuevo gasto
   // Debe validar que el monto sea positivo
   // Debe asignar un ID único
   // Debe guardar en localStorage
   ```

### Paso 4: Itera y Mejora
1. Prueba la aplicación
2. Si algo no funciona, pregunta a Copilot Chat
3. Refina y ajusta según necesites

---

## CONSEJOS IMPORTANTES

✅ **SÍ hacer:**
- Ser específico en el objetivo
- Pedir preguntas antes de empezar (Q&A)
- Definir restricciones claras
- Mantener la complejidad simple (MVP)
- Guardar el prompt para reutilizarlo

❌ **NO hacer:**
- Ser vago o ambiguo
- Pedir todo a la vez sin planificación
- Omitir las restricciones
- Intentar hacer algo demasiado complejo de inicio
- Olvidar revisar la especificación antes de codificar

---

## PROYECTOS SUGERIDOS PARA PRINCIPIANTES

1. **App de Tareas** - Lista de tareas con agregar, completar, eliminar
2. **App de Notas** - Crear, editar, eliminar notas rápidas
3. **App de Gastos** - Registrar gastos con categorías
4. **App de Hábitos** - Seguimiento diario de hábitos
5. **App de Contactos** - Agenda simple de contactos
6. **Calculadora** - Calculadora con operaciones básicas
7. **Conversor de Unidades** - Temperatura, longitud, peso, etc.
8. **Temporizador Pomodoro** - Timer para técnica Pomodoro
9. **Generador de Contraseñas** - Crear contraseñas seguras
10. **App de Citas** - Guardar y mostrar citas inspiradoras

---

## RECURSOS ADICIONALES

- **Documentación de GitHub Copilot**: https://docs.github.com/copilot
- **VS Code Tutorials**: https://code.visualstudio.com/docs
- **Prompt Engineering Guide**: https://www.promptingguide.ai/

---

**Creado para la charla: "Visual Studio Code + GitHub Copilot: Desarrollo para No Desarrolladores"**

¡Buena suerte con tu primer proyecto! 🚀