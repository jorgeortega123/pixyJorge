# 🍌 Nano Banana Editor de Imágenes con IA
Versión de Lanzamiento: (v1.0)

**Creado y desarrollado por Jorge Ortega**

### **⏬ ¡Obtén tu copia de instalación con 1 clic!**
Únete a la [Comunidad Vibe Coding is Life Skool](https://www.skool.com/vibe-coding-is-life/about?ref=456537abaf37491cbcc6976f3c26af41) y obtén una **instalación clon de 1 clic ⚡Bolt.new** de esta aplicación, además de acceso a sesiones de construcción en vivo, descargas exclusivas de proyectos, prompts de IA, masterclasses y la mejor comunidad de vibe coding en la web.

---

**Plataforma Profesional de Generación de Imágenes con IA y Edición Conversacional**

Una aplicación React + TypeScript lista para producción para la generación de imágenes encantadoras y revisiones conversacionales con conciencia de región utilizando el modelo Gemini 2.5 Flash Image de Google. Construida con tecnologías web modernas y diseñada tanto para creadores como desarrolladores.

[![Nano Banana Image Editor](https://getsmartgpt.com/nano-banana-editor.jpg)](https://nanobananaeditor.dev)

🍌 [Prueba la DEMO en VIVO](https://nanobananaeditor.dev)

## ✨ Características Principales

### 🎨 **Creación Impulsada por IA**
- **Generación de Texto a Imagen** - Crea imágenes impresionantes a partir de prompts descriptivos
- **Consejos de Calidad en Tiempo Real** - Retroalimentación en tiempo real para mejorar tus prompts
- **Soporte para Imágenes de Referencia** - Usa hasta 2 imágenes de referencia para guiar la generación
- **Controles Avanzados** - Ajusta niveles de creatividad y usa semillas personalizadas

### ✏️ **Edición Inteligente**
- **Edición Conversacional** - Modifica imágenes usando instrucciones en lenguaje natural
- **Selección con Conciencia de Región** - Pinta máscaras para apuntar a áreas específicas para editar
- **Imágenes de Referencia de Estilo** - Sube imágenes de referencia para guiar el estilo de edición
- **Flujo de Trabajo No Destructivo** - Todas las ediciones preservan la imagen original

### 🖼️ **Lienzo Profesional**
- **Lienzo Interactivo** - Haz zoom, desplázate y navega imágenes grandes suavemente
- **Herramientas de Pincel** - Tamaños de pincel variables para pintar máscaras con precisión
- **Optimizado para Móvil** - Diseño responsivo que funciona hermosamente en todos los dispositivos
- **Atajos de Teclado** - Flujo de trabajo eficiente con teclas de acceso rápido

### 📚 **Gestión de Proyectos**
- **Historial de Generación** - Rastrea todas tus creaciones y ediciones
- **Comparación de Variantes** - Genera y compara múltiples versiones lado a lado
- **Deshacer/Rehacer Completo** - Árbol de generación completo con historial de ramificación
- **Gestión de Activos** - Almacenamiento organizado de todo el contenido generado

### 🔒 **Características Empresariales**
- **Marca de Agua SynthID** - Procedencia de IA incorporada con marcas de agua invisibles
- **Almacenamiento en Caché Sin Conexión** - Almacenamiento IndexedDB para acceso a activos sin conexión
- **Seguridad de Tipos** - Implementación completa de TypeScript con tipado estricto
- **Optimizado para Rendimiento** - React Query para gestión eficiente del estado

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js 18+** - [Descargar aquí](https://nodejs.org/)
- **Git** - [Descargar aquí](https://git-scm.com/)
- **Clave API de Google AI Studio** - [Obtener aquí](https://aistudio.google.com/)

### Guía de Instalación Paso a Paso

#### 1. **Clona el repositorio**
```bash
git clone https://github.com/markfulton/NanoBananaEditor.git
cd NanoBananaEditor
```

#### 2. **Instala las dependencias**
```bash
npm install
```

#### 3. **Configura las variables de entorno**
```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita el archivo .env y agrega tu clave API:
# VITE_GEMINI_API_KEY=tu_clave_api_de_gemini_aqui
```

#### 4. **Inicia la aplicación**
```bash
# Modo desarrollo
npm run dev

# La aplicación estará disponible en: http://localhost:5173
```

#### 5. **Construcción para producción (opcional)**
```bash
# Construir para producción
npm run build

# Previsualizar construcción de producción
npm run preview
```

### 🔑 Obtener tu Clave API de Gemini

1. Ve a [Google AI Studio](https://aistudio.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Get API Key" o "Obtener clave de API"
4. Crea un nuevo proyecto si es necesario
5. Copia la clave API generada
6. Pégala en tu archivo `.env` como `VITE_GEMINI_API_KEY=tu_clave_aqui`

### ⚠️ Solución de Problemas

Si encuentras errores durante la instalación:

- **Error de Node.js**: Asegúrate de tener Node.js 18 o superior
- **Error de permisos**: Ejecuta `npm install` con permisos de administrador si es necesario
- **Error de API**: Verifica que tu clave de Gemini esté correctamente configurada en el archivo `.env`
- **Puerto ocupado**: Si el puerto 5173 está ocupado, Vite automáticamente usará el siguiente disponible

### 💡 Inicio Rápido para Desarrollo
```bash
# Comando todo-en-uno para desarrolladores
git clone https://github.com/markfulton/NanoBananaEditor.git && cd NanoBananaEditor && npm install && npm run dev
```

## 🎯 Guía de Uso

### Creando Imágenes
1. Selecciona el modo **Generar**
2. Escribe un prompt detallado describiendo tu imagen deseada
3. Opcionalmente sube imágenes de referencia (máx. 2)
4. Ajusta la configuración de creatividad si es necesario
5. Haz clic en **Generar** o presiona `Cmd/Ctrl + Enter`

### Editando Imágenes
1. Cambia al modo **Editar**
2. Sube una imagen o usa una previamente generada
3. Opcionalmente pinta una máscara para apuntar a áreas específicas
4. Describe tus cambios deseados en lenguaje natural
5. Haz clic en **Aplicar Edición** para ver los resultados

### Flujos de Trabajo Avanzados
- Usa el modo **Seleccionar** para pintar máscaras precisas para ediciones dirigidas
- Compara variantes en el panel de Historial
- Descarga salidas PNG de alta calidad
- Usa atajos de teclado para navegación eficiente

## ⌨️ Atajos de Teclado

| Atajo | Acción |
|----------|--------|
| `Cmd/Ctrl + Enter` | Generar/Aplicar Edición |
| `Shift + R` | Re-rodar variantes |
| `E` | Cambiar al modo Editar |
| `G` | Cambiar al modo Generar |
| `M` | Cambiar al modo Seleccionar |
| `H` | Alternar panel de historial |
| `P` | Alternar panel de prompts |

## 🏗️ Arquitectura

### Stack Tecnológico
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Gestión de Estado**: Zustand para estado de aplicación, React Query para estado de servidor  
- **Lienzo**: Konva.js para visualización interactiva de imágenes y superposiciones de máscaras
- **Integración con IA**: Google Generative AI SDK (Gemini 2.5 Flash Image)
- **Almacenamiento**: IndexedDB para almacenamiento en caché de activos sin conexión
- **Herramienta de Construcción**: Vite para desarrollo rápido y builds optimizados

### Estructura del Proyecto
```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI reutilizables (Button, Input, etc.)
│   ├── PromptComposer.tsx  # Entrada de prompt y selección de herramientas
│   ├── ImageCanvas.tsx     # Lienzo interactivo con Konva
│   ├── HistoryPanel.tsx    # Historial de generación y variantes
│   ├── Header.tsx          # Encabezado de aplicación y navegación
│   └── InfoModal.tsx       # Modal de información con enlaces
├── services/           # Integraciones de servicios externos
│   ├── geminiService.ts    # Cliente API de Gemini
│   ├── cacheService.ts     # Capa de almacenamiento en caché IndexedDB
│   └── imageProcessing.ts  # Utilidades de manipulación de imágenes
├── store/              # Gestión de estado con Zustand
│   └── useAppStore.ts      # Estado global de la aplicación
├── hooks/              # Hooks personalizados de React
│   ├── useImageGeneration.ts  # Lógica de generación y edición
│   └── useKeyboardShortcuts.ts # Navegación por teclado
├── utils/              # Funciones de utilidad
│   ├── cn.ts              # Utilidad de nombres de clase
│   └── imageUtils.ts      # Ayudantes de procesamiento de imágenes
└── types/              # Definiciones de tipos TypeScript
    └── index.ts           # Definiciones de tipos principales
```

## 🔧 Configuración

### Variables de Entorno
```bash
VITE_GEMINI_API_KEY=tu_clave_api_de_gemini_aqui
```

### Configuración del Modelo
- **Modelo**: `gemini-2.5-flash-image-preview`
- **Formato de Salida**: PNG 1024×1024 con marcas de agua SynthID
- **Formatos de Entrada**: PNG, JPEG, WebP
- **Rango de Temperatura**: 0-1 (0 = determinista, 1 = creativo)

## 🚀 Despliegue

### Desarrollo
```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Previsualiza build de producción
npm run lint     # Ejecuta ESLint
```

### Consideraciones de Producción
- **Seguridad de API**: Implementa proxy backend para llamadas API en producción
- **Límite de Tasa**: Agrega límites de tasa adecuados y cuotas de uso
- **Autenticación**: Considera autenticación de usuario para despliegues multi-usuario
- **Almacenamiento**: Configura almacenamiento en la nube para activos generados
- **Monitoreo**: Agrega seguimiento de errores y analíticas

## 📄 Licencia y Copyright

**Copyright © 2025 Jorge Ortega**

*Basado en el trabajo original de [Mark Fulton](https://markfulton.com)*

Este proyecto está licenciado bajo la **GNU Affero General Public License v3.0** (AGPL-3.0).

### Lo que esto significa:
- ✅ **Libre de usar** para proyectos personales y comerciales
- ✅ **Modificar y distribuir** con atribución adecuada
- ⚠️ **Compartir modificaciones** - Cualquier cambio debe compartirse bajo la misma licencia
- ⚠️ **Uso en red** - Si ejecutas esto como un servicio web, debes proporcionar el código fuente

Consulta el archivo [LICENSE](LICENSE) para detalles completos.

## 🤝 Contribuciones

¡Damos la bienvenida a las contribuciones! Por favor:

1. **Sigue los patrones establecidos** - Mantén los componentes bajo 200 líneas
2. **Mantén la seguridad de tipos** - Usa TypeScript estrictamente con definiciones adecuadas
3. **Prueba exhaustivamente** - Asegura la navegación por teclado y accesibilidad
4. **Documenta los cambios** - Actualiza README y agrega comentarios en línea
5. **Respeta la licencia** - Todas las contribuciones estarán bajo AGPL-3.0

## 🔗 Enlaces y Recursos

- **Creador y Desarrollador**: Jorge Ortega
- **Trabajo Original**: [Mark Fulton](https://markfulton.com)
- **Programa de Entrenamiento de IA**: [Reinventing.AI](https://www.reinventing.ai/)
- **Comunidad**: [Vibe Coding is Life Skool](https://www.skool.com/vibe-coding-is-life/about?ref=456537abaf37491cbcc6976f3c26af41)
- **Google AI Studio**: [Obtén tu clave API](https://aistudio.google.com/)
- **Documentación de API de Gemini**: [Documentación Oficial](https://ai.google.dev/gemini-api/docs)

## 🐛 Problemas Conocidos y Limitaciones

- **Llamadas API del lado del cliente** - Actualmente usa llamadas API directas (implementa proxy backend para producción)
- **Compatibilidad del navegador** - Requiere navegadores modernos con soporte para Canvas y WebGL
- **Límites de tasa** - Sujeto a límites de tasa de Google AI Studio
- **Tamaño de imagen** - Optimizado para salidas 1024×1024 (las dimensiones de salida del modelo Gemini pueden variar)

## 🎯 Actualizaciones Sugeridas

- [ ] Implementación de proxy API backend
- [ ] Autenticación de usuario y compartición de proyectos
- [ ] Herramientas de pincel avanzadas y métodos de selección
- [ ] Sistema de plugins para filtros personalizados
- [ ] Integración con proveedores de almacenamiento en la nube

---

**Desarrollado por Jorge Ortega** | **Basado en el trabajo de [Mark Fulton](https://markfulton.com)** | **Impulsado por Gemini 2.5 Flash Image** | **Creado con pasión y dedicación**
