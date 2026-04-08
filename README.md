# Árbol de Decisión (React + Vite)

Aplicación web para visualizar flujos de proceso como árbol de decisión interactivo.
Está orientada a integrarse en entornos corporativos (por ejemplo, SharePoint) y permite
seleccionar distintos procesos desde un listado.

## Tecnologías

- React 19
- Vite 8
- React Router 7
- ESLint 9

## Requisitos

- Node.js 20+
- npm 10+

## Instalación

1. Instalar dependencias:

	 npm install

2. Levantar entorno de desarrollo:

	 npm run dev

3. Abrir la URL local que muestra Vite (normalmente http://localhost:5173).

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo.
- `npm run build`: genera build de producción en `dist/`.
- `npm run preview`: sirve el build generado localmente.
- `npm run lint`: ejecuta ESLint.

## Rutas de la aplicación

- `/`: portada.
- `/flujo`: visualización del árbol de decisión.
- `*`: página de no encontrado.

## Estructura principal

- `src/pages`: vistas de la app (`HomePage`, `DecisionTreePage`, `NotFoundPage`).
- `src/components`: componentes reutilizables del árbol:
	- `ProcessSelector`: selector de proceso.
	- `DecisionTree`: controlador de expansión/selección.
	- `DecisionNode`: render recursivo de nodos.
- `src/data/decisionTrees.json`: fuente de datos de los procesos y sus nodos.

## Cómo agregar o editar procesos

Toda la configuración vive en `src/data/decisionTrees.json`.

### 1) Registrar el nombre del proceso

En `processNames` agrega una clave y etiqueta:

{
	"processNames": {
		"miProceso": "Mi Proceso"
	}
}

### 2) Agregar el árbol del proceso

En `processTemplates` usa la misma clave y define un nodo raíz:

{
	"processTemplates": {
		"miProceso": {
			"id": "m1",
			"label": "Inicio",
			"detail": "Descripción del paso",
			"children": []
		}
	}
}

### Esquema de nodo

Cada nodo soporta:

- `id` (string único)
- `label` (título corto)
- `detail` (descripción)
- `children` (arreglo de nodos hijos)

## Notas

- El árbol se renderiza de forma recursiva.
- Los nodos con hijos se expanden/colapsan con clic.
- El nodo seleccionado se resalta visualmente.

## Registro de autoría

Completa esta sección para dejar constancia explícita en el repositorio.

- Autor: TU_NOMBRE
- Fecha: 2026-04-08
- Aporte: Creación inicial de `.gitignore` y documentación del proyecto en `README.md`.

> Recomendación: además de este registro, realiza commits con tu usuario de Git
> configurado para que el historial también refleje la autoría.
