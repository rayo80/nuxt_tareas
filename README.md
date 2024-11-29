
## Setup for Nuxt App

npm install

## Environment Variables
generate 

## Development Server

La aplicacion sera lanzada `http://localhost:3000` y usara por defecto
Nitro de NUXT

npm run dev

## Local Server

Para probar la aplicación en entorno local puedes crear un archivo .env.local
o usar el example por defecto.

npx nuxi dev --dotenv .env.local

en la seccion local.env puedes apuntar a tu api en local
Prueba con esta Api realizada en ExpressJS/TypeOrm y Postgress

https://github.com/rayo80/task_node

(necesitaras tener una instalacion de postgress o en su defecto seguir las indicaciones)


## Production Server
npm run build

npx nuxi dev --dotenv .env.production

## ToDo 
1) Generar Docker Compose
2) Montar la Aplicación en netlify
