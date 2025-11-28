# Presentación VS Code Copilot

Proyecto de presentación interactiva sobre VS Code y GitHub Copilot, desarrollado con React + Vite + TypeScript + Tailwind CSS.

## 🌐 Deploy en Azure

Esta aplicación está desplegada en Azure Static Web Apps:
- **URL**: https://victorious-ocean-0d05c8b10.3.azurestaticapps.net

## 📁 Estructura del Proyecto

```
workspace/
└── presentation/          # Aplicación React/Vite
    ├── src/
    │   ├── pages/         # Páginas de la presentación
    │   ├── components/    # Componentes reutilizables
    │   ├── hooks/         # Custom hooks
    │   └── lib/           # Utilidades y configuración
    └── public/            # Recursos estáticos
```

## 🚀 Desarrollo Local

### Prerequisitos
- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
cd workspace/presentation
pnpm install
```

### Ejecución

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

### Build

```bash
pnpm build
```

Los archivos compilados se generarán en el directorio `dist/`

## 🔄 CI/CD

El proyecto utiliza GitHub Actions para desplegar automáticamente a Azure Static Web Apps cuando se hace push a la rama `main`.

## 🛠️ Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool y dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/ui** - Componentes UI
- **Zustand** - State management
- **Azure Static Web Apps** - Hosting

## 📝 Configuración de Azure

- **Resource Group**: rg-presentacion-vscode-copilot
- **Location**: Central US
- **SKU**: Free
- **App Location**: /workspace/presentation
- **Output Location**: dist

## 📄 Licencia

Este proyecto es parte de una presentación educativa.
