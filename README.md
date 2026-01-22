# Aplicativo Climático

Aplicación web desarrollada en **JavaScript Vanilla** que permite consultar el clima actual de una ciudad utilizando una API de clima externa.

## Características

- Consulta del clima por nombre de ciudad y país.
- Muestra temperatura actual, máxima y mínima.
- Interfaz simple y ligera.
- Sin frameworks (solo HTML, Tailwind CSS y JavaScript puro)

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

```bash
git clone https://github.com/JorgeCG26/js-api-clima.git
cd js-api-clima
pnpm install
pnpx build/styles
```

> El comando anterior ejecuta Tailwind en modo --watch, por lo que recompila los estilos automáticamente al hacer cambios.

## Configurar API_KEY

Para que la aplicación funcione, necesitas una **API Key** de OpenWeatherMap:

1. Crea una cuenta gratuita en [OpenWeatherMap](https://openweathermap.org/api)
2. Ve a tu perfil y copia tu API Key
3. Abre el archivo `assets/js/app.js`
4. Reemplaza el valor de `apiKey` con tu key:

```js
const apiKey = "TU_API_KEY_AQUI";
```

## Ejecutar aplicación

Una vez que Tailwind CSS esté compilando los estilos:

- Abre el archivo `index.html` directamente en tu navegador o usa una extensión como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code para una mejor experiencia.
