# Sistema de Gestión de Productos - Angular

## Descripción

Aplicación web desarrollada con Angular y TypeScript para gestionar un inventario de productos. Permite visualizar, registrar y eliminar productos mediante una interfaz sencilla e interactiva.

## Tecnologías utilizadas

- Angular 20
- TypeScript
- HTML y CSS
- RxJS
- Angular Router
- Node.js y npm

## Funcionalidades

- Visualización del inventario de productos.
- Registro de nuevos productos mediante formularios.
- Eliminación de productos.
- Visualización de precios, categorías y disponibilidad.
- Consulta de estadísticas del inventario.
- Navegación entre componentes sin recargar la página.

## Estructura del proyecto

- `src/app/models/`: Interfaces de datos.
- `src/app/services/`: Servicios para gestionar productos.
- `src/app/components/producto-lista/`: Listado del inventario.
- `src/app/components/producto-form/`: Formulario de registro.
- `src/app/app-routing.module.ts`: Configuración de rutas.

## Instalación y ejecución

**1.** Abrir la carpeta del proyecto en Visual Studio Code.

**2.** Abrir una terminal e instalar las dependencias:

```bash
npm install
```

**3.** Iniciar el servidor de desarrollo:

```bash
npm start
```

**4.** Abrir el navegador en:

`http://localhost:4200`

## Funcionamiento

La aplicación contiene tres productos registrados inicialmente. Desde el menú principal se puede consultar el inventario o agregar un nuevo producto.

Los datos se administran temporalmente en memoria mediante un servicio Angular y Observables de RxJS. Al actualizar el navegador, el inventario vuelve a su estado inicial.

## Pruebas realizadas

- Visualización de productos registrados.
- Registro de nuevos productos.
- Eliminación de productos.
- Actualización de la tabla.
- Navegación entre componentes.

