# Inmobiliaria Don Chamberí — Propuesta de remaquetación de la home

Prototipo navegable de la homepage de **Inmobiliaria Don Chamberí** (agencia boutique en Chamberí, Madrid).

Es una **remaquetación literal** de su home actual: las mismas secciones, el mismo copy y los mismos doce inmuebles en el mismo orden, con un diseño nuevo en sus colores (marrón, dorado y blanco), tipografía Newsreader + Albert Sans y una secuencia de carga en la que las fotos se abren como contraventanas. Se añaden dos bloques con texto de sus propias páginas: valoración ("Le ayudamos a vender su casa en Chamberí") y Chamberí barrio a barrio ("¿Por qué vivir en Chamberí?").

- Capturas sin animaciones (para revisión): añadir `?ss` a la URL.

## Stack
HTML, CSS y JavaScript puro. Cero dependencias, cero build. Fuentes variables autoalojadas. Imágenes WebP en tres tamaños.

## Estructura
```
prototype/          Prototipo navegable (se publica tal cual en GitHub Pages)
  index.html
  assets/css/       global.css · home.css
  assets/js/        main.js
  assets/fonts/     Newsreader · Albert Sans (variables)
  assets/img/       hero/ · props/ · partners/
```

## Ver en local
```bash
cd prototype && python -m http.server 8000
```

---
Diseño y desarrollo: **Juan Jurado** · [jjuradogarciadelrio.com](https://jjuradogarciadelrio.com)
