# Backend API

Este es un proyecto de API backend creado con Node.js, Express, TypeScript y MongoDB para la gestión de datos de una aplicación. Incluye funcionalidades de CRUD y filtros avanzados para consultas.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Scripts Disponibles](#scripts-disponibles)
- [Uso](#uso)



## Requisitos Previos

- Node.js versión 20.0.0 o superior
- MongoDB en ejecución (localmente o mediante un servicio en la nube)
- Un archivo `.env` configurado con tus variables de entorno

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/selwysm/backend-api.git
   cd backend-api

2. Instalacion de dependencias:
    ```bash
   npm install
   
## Configuración
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:


PORT=3000            # Puerto en el que se ejecutará el servidor
MONGO_URI=<TU_URI_MONGO> # URI de conexión a MongoDB


## Scripts Disponibles
En el archivo package.json se incluyen los siguientes scripts:

npm run start: Compila el proyecto y ejecuta el servidor en producción (archivo dist/server.js).
npm run dev: Ejecuta el proyecto en modo de desarrollo con nodemon para recargar automáticamente.
npm run build: Compila el código TypeScript en JavaScript y genera la carpeta dist.


## Ejecución en Modo de Desarrollo
```bash
npm run dev
