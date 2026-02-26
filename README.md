# Reto-react-frontend-
# Coffee Collection - React + Vite

Una aplicación de listado de café construida con **React 19** y **Vite** que cumple con todos los requisitos técnicos de aprendizaje de React.

## Objetivos de Aprendizaje 

-  **Configuración de entornos modernos con Vite** - Proyecto configurado con Vite (NO Create React App)
- **Creación de Componentes Funcionales** - Componentes reutilizables que reciben datos vía props
- **Renderizado Condicional y manejo de Listas** - Uso de `.map()` con keys y renderizado condicional
- **useEffect y useState** - Gestión de efectos secundarios y estado del componente

## Requisitos Técnicos 


### Consumo de API
- **Fetch desde API de GitHub** dentro de `useEffect`
- **Fallback con datos locales** si la API falla
- Manejo de errores implementado

### Arquitectura de Componentes
| Componente | Descripción | Props |
|-----------|-------------|-------|
| **CoffeeCard** | Tarjeta individual de café reutilizable | `coffee` (objeto con datos) |
| **CoffeeListing** | Contenedor principal, mapea datos | - |
| **FilterButtons** | Botones de filtro (Todos/Disponibles) | `currentFilter`, `onFilterChange` |
| **Header** | Encabezado con descripción | - |
| **SkeletonCard** | Estado de carga | - |
| **EmptyState** | Sin resultados después del filtro | - |

### Estado y Lógica
- **Lifting State Up** - El estado del filtro está en `CoffeeListing` y se pasa a componentes hijos
-**Botones de estado** - Click en botones cambia el estado del filtro globalmente
- El filtro "Disponibles" afecta correctamente la lista de productos

## Plus - Nuevos Requisitos 

- **Skeleton Loading** - Tarjetas vacías con animación shimmer mientras carga
- **Empty State** - Mensaje amigable con emoji cuando no hay productos filtrados
- **Diseño Responsive** - CSS puro con `@media queries` para móvil y desktop

## Estructura del Proyecto

```
src/
├── components/
│   ├── CoffeeCard.jsx         # Tarjeta individual de café (reutilizable)
│   ├── CoffeeListing.jsx      # Contenedor principal con lógica
│   ├── EmptyState.jsx         # Mensaje sin resultados
│   ├── FilterButtons.jsx      # Botones de filtro
│   ├── Header.jsx             # Encabezado
│   └── SkeletonCard.jsx       # Skeleton loading
├── styles/
│   ├── EmptyState.css         # Estilos del empty state
│   └── SkeletonCard.css       # Estilos del skeleton con shimmer
├── assets/
│   ├── images/                # Imágenes locales (Coffe1-6.jpg)
│   └── svg/                   # Iconos (estrella)
├── App.jsx
├── App.css                    # Estilos principales + responsive
├── main.jsx                   # Punto de entrada
├── index.css                  # Reset y estilos globales
└── index.html                 # HTML base

vite.config.js                 # Configuración de Vite
package.json
```

## Cómo Ejecutar

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar servidor de desarrollo
```bash
npm run dev
```
El proyecto se abrirá automáticamente en `http://localhost:5173/`

### 3. Compilar para producción
```bash
npm run build
```

## 📸 Características Implementadas

- Listado de 6 productos de café
- Tags "Popular" en productos destacados
- Sistema de ratings con votos
- Filtro "Todos los Productos" / "Disponibles Ahora"
- **100% Responsive** - Mobile First
- **Skeleton Loading** con animación shimmer
- **Empty State** con mensaje amigable
- Diseño oscuro moderno
- **Lifting State Up** implementado correctamente

## Integrantes del Proyecto

- TATIANA DIAZ IMBAJOA
- IVAN ARAGON



## Conceptos Aprendidos

1. **Vite vs CRA** - Vite es más rápido y moderno
2. **Componentes Funcionales** - Toda la app usa componentes con Hooks
3. **Props** - Paso de datos de padres a hijos
4. **Estado (useState)** - Gestión de estado local y global
5. **Efectos (useEffect)** - Llamadas a API, efectos secundarios
6. **Renderizado Condicional** - Mostrar diferentes elementos según estado
7. **Listas y Keys** - `.map()` con keys únicas
8. **Lifting State Up** - Elevar estado para compartir entre componentes
9. **CSS Responsive** - Media queries para adaptabilidad
10. **Shimmer Loading** - Animaciones con CSS
<img width="1898" height="770" alt="image" src="https://github.com/user-attachments/assets/8f56a6d0-56fc-4f2d-b640-b8b5abdadee9" />


