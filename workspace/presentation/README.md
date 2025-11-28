# VS Code + GitHub Copilot: Desarrollo para No Desarrolladores

Presentación interactiva sobre cómo usar Visual Studio Code y GitHub Copilot para crear software sin ser programador.

## 🎯 Descripción

Esta es una aplicación web de presentación moderna construida con React, TypeScript y Tailwind CSS. Reemplaza a PowerPoint con una experiencia interactiva y dinámica, diseñada específicamente para enseñar a no desarrolladores cómo crear software usando IA.

## ✨ Características

- **9 Slides Interactivos**: Navegación fluida con animaciones suaves
- **Diseño Responsive**: Funciona en proyección, desktop, tablet y móvil
- **Modo Presentador**: Presiona `P` para ver notas privadas
- **Navegación Múltiple**: 
  - Teclado: `←` `→` para navegar, `Home` `End` para saltar
  - Clic: Botones anterior/siguiente
  - Táctil: Swipe en dispositivos móviles
- **Contenido Educativo**: 
  - Explicación de VS Code y GitHub Copilot
  - 6 técnicas avanzadas de ingeniería de prompts
  - Prompt Maestro completo y reutilizable
  - Actividad práctica paso a paso

## 📋 Contenido de la Presentación

1. **Bienvenida y Agenda** - Introducción y overview
2. **¿Qué es VS Code?** - Editor de código para principiantes
3. **GitHub Copilot** - Tu co-piloto de IA (6 capacidades)
4. **Modelos: Razonador vs Ejecutor** - Cuándo usar cada tipo
5. **Ingeniería de Prompts (Parte 1)** - Meta-prompting, Q&A, Spec-Driven
6. **Ingeniería de Prompts (Parte 2)** - Vibes, Chain-of-Thought, Pros & Contras
7. **El Prompt Maestro** - Template completo reutilizable
8. **Demo en Vivo** - Proceso completo en 8 minutos
9. **Actividad Práctica** - Guía paso a paso para crear tu primera app

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone [tu-repo-url]
cd presentation

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Comandos Disponibles

```bash
pnpm run dev      # Iniciar servidor de desarrollo
pnpm run build    # Construir para producción
pnpm run preview  # Previsualizar build de producción
pnpm run lint     # Ejecutar linter
```

## 🎮 Controles de Navegación

### Teclado
- `→` o `Space`: Siguiente slide
- `←`: Slide anterior
- `Home`: Primer slide
- `End`: Último slide
- `P`: Toggle modo presentador
- `F`: Toggle fullscreen
- `Esc`: Salir de fullscreen

### Mouse/Touch
- Clic en botones "Anterior" / "Siguiente"
- Clic en dots de progreso para saltar a slide específico
- Swipe izquierda/derecha en móviles

## 📁 Estructura del Proyecto

```
presentation/
├── public/
│   ├── assets/              # Imágenes generadas con IA
│   └── PROMPT_MAESTRO_TEMPLATE.md  # Template descargable
├── src/
│   ├── components/
│   │   ├── core/           # Componentes del sistema de slides
│   │   └── ui/             # Componentes UI de Shadcn
│   ├── pages/
│   │   └── slides/         # 9 slides de la presentación
│   ├── hooks/              # Custom hooks para animaciones
│   ├── decorators/         # RegisterSlide decorator
│   └── types/              # TypeScript types
├── index.html
├── package.json
└── README.md
```

## 🎨 Tecnologías Utilizadas

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Componentes UI
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📚 Recursos Incluidos

### Prompt Maestro Template
Ubicación: `/public/PROMPT_MAESTRO_TEMPLATE.md`

Template completo y reutilizable que incluye:
- 8 secciones estructuradas
- Ejemplo completo (App de Gastos)
- Guía de uso paso a paso
- 10 proyectos sugeridos para principiantes
- Consejos y mejores prácticas

### Imágenes Generadas con IA
Todas las imágenes en `/public/assets/` fueron generadas usando IA:
- hero-coding-workspace.jpg
- vscode-interface.jpg
- ai-copilot-assistant.jpg
- ai-models-comparison.jpg
- prompt-engineering.jpg
- master-prompt-document.jpg
- live-coding-demo.jpg
- workshop-activity.jpg

## 🎓 Uso Educativo

Esta presentación está diseñada para:
- Talleres y charlas sobre IA en desarrollo
- Cursos introductorios de programación con IA
- Demostraciones de GitHub Copilot
- Eventos de divulgación tecnológica

### Para Presentadores

1. **Preparación**: 
   - Revisa las notas del presentador (presiona `P`)
   - Ten VS Code y ChatGPT abiertos para la demo
   - Prepara el proyecto de ejemplo

2. **Durante la Presentación**:
   - Usa las animaciones para mantener el interés
   - Haz clic en las tarjetas interactivas del Slide 3
   - Cambia entre tabs en los Slides 5 y 6
   - Copia el Prompt Maestro en el Slide 7

3. **Actividad Práctica**:
   - Guía a los asistentes en el Slide 9
   - Comparte el link al Prompt Maestro Template
   - Ofrece ayuda durante la implementación

## 🔧 Personalización

### Modificar Contenido

Los slides están en `/src/pages/slides/`. Cada archivo es un componente React independiente:

```typescript
// Ejemplo: Slide01Welcome.tsx
import { RegisterSlide } from "@/decorators/RegisterSlide";

const Slide01Welcome: React.FC = () => {
  // Tu contenido aquí
  return <section className="h-full">...</section>;
};

RegisterSlide({
  title: "Bienvenida",
  order: 0,
})(Slide01Welcome);
```

### Cambiar Colores

Edita `/src/index.css` para cambiar el tema:

```css
:root {
  --primary: #3b82f6;    /* Azul principal */
  --secondary: #8b5cf6;  /* Violeta secundario */
  /* ... más colores */
}
```

### Agregar Nuevos Slides

1. Crea un nuevo archivo en `/src/pages/slides/`
2. Usa `RegisterSlide` con un `order` único
3. El sistema lo importará automáticamente

## 📄 Licencia

Este proyecto está disponible para uso educativo y de divulgación.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📧 Contacto

Para preguntas sobre la presentación o el contenido:
- Email: [tu-email@ejemplo.com]
- GitHub: [tu-usuario]

---

**Creado con ❤️ usando las mismas herramientas que enseña: VS Code + GitHub Copilot + IA**

Esta presentación es un ejemplo viviente de que cualquier persona puede crear software profesional usando las herramientas adecuadas. 🚀