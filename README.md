# Backend API

Este es un proyecto de API backend creado con Node.js, Express, TypeScript y MongoDB para la gestión de datos de una aplicación. Incluye funcionalidades de CRUD y filtros avanzados para consultas.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Scripts Disponibles](#scripts-disponibles)
- [Uso](#uso)
- [Dependencias](#dependencias)
- [DevDependencies](#devdependencies)


## Requisitos Previos

- Node.js versión 20.0.0 o superior
- MongoDB en ejecución (localmente o mediante un servicio en la nube)
- Un archivo `.env` configurado con tus variables de entorno

## Instalación

1. Clona este repositorio:
   ```bash
   git clone [<URL_DEL_REPOSITORIO>](https://github.com/selwysm/backend-api.git)
   cd backend-api

2. Instalacion de dependencias:
   npm install
   
***Configuración***
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

Copiar código
PORT=3000            # Puerto en el que se ejecutará el servidor
MONGO_URI=<TU_URI_MONGO> # URI de conexión a MongoDB
Asegúrate de reemplazar <TU_URI_MONGO> con la URI de tu base de datos MongoDB.

***Scripts Disponibles***
En el archivo package.json se incluyen los siguientes scripts:

npm run start: Compila el proyecto y ejecuta el servidor en producción (archivo dist/server.js).
npm run dev: Ejecuta el proyecto en modo de desarrollo con nodemon para recargar automáticamente.
npm run build: Compila el código TypeScript en JavaScript y genera la carpeta dist.

***Uso***
Ejecución en Modo de Desarrollo
Para ejecutar el servidor en modo de desarrollo:
npm run dev

Ejecución en Modo de Producción
Para compilar y ejecutar el servidor en producción:
npm run build
npm run start


***Dependencias***
cors: Permite habilitar CORS para manejar solicitudes entre dominios.
dotenv: Carga variables de entorno desde un archivo .env.
express: Framework web para manejar rutas y solicitudes HTTP.
mongoose: ODM para MongoDB que facilita la manipulación de datos en la base de datos.

***DevDependencies***
@types/cors: Tipos para cors en TypeScript.
@types/express: Tipos para express en TypeScript.
@types/node: Tipos para Node.js en TypeScript.
nodemon: Herramienta para recargar automáticamente el servidor en modo de desarrollo.
ts-node: Permite ejecutar archivos TypeScript directamente en Node.js.
typescript: Compilador TypeScript para convertir TypeScript a JavaScript.
Estructura del Proyecto

