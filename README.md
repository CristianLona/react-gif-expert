# GifExpertApp

Este es un proyecto desarrollado durante el curso de React de Fernando Herrera. La aplicación permite buscar y mostrar gifs animados utilizando la API de Giphy.

## Características
- Búsqueda de gifs en tiempo real.
- Interfaz sencilla y responsiva.
- Uso de React Hooks como `useState` y `useEffect`.
- Consumo de la API de Giphy.
- Manejo de estados locales.

## Tecnologías utilizadas
- React
- Vite
- CSS puro
- Fetch API para peticiones HTTP

## Instalación y ejecución
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/gif-expert-app.git
   ```
2. Entra en el directorio del proyecto:
   ```bash
   cd gif-expert-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

## Uso
1. Escribe una categoría en la barra de búsqueda.
2. Presiona `Enter` y la aplicación mostrará los gifs relacionados.
3. Puedes agregar varias categorías y ver sus resultados simultáneamente.

## API Key de Giphy
Para ejecutar la aplicación, necesitas una API Key de Giphy. Puedes obtenerla en [Giphy Developers](https://developers.giphy.com/). Luego, crea un archivo `.env` en la raíz del proyecto y agrega tu clave:
```env
VITE_GIPHY_API_KEY=tu_api_key
```

## Despliegue
Para generar una versión lista para producción:
```bash
npm run build
```
Esto creará una carpeta `dist` lista para ser desplegada en cualquier hosting estático.

## Autor
Desarrollado por [Cristian Josue Lona Avalos](https://github.com/tu-usuario).

