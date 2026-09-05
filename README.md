# Inmobiliaria Don Chamberí — Propuesta de remaquetación de la home

Prototipo navegable de la homepage de **Inmobiliaria Don Chamberí** (agencia boutique en Chamberí, Madrid).

Es una **remaquetación literal** de su home actual: las mismas secciones, el mismo copy y los mismos doce inmuebles en el mismo orden, con un diseño nuevo: verde y blanco, tipografía Newsreader + Albert Sans, y una secuencia de carga en la que las fotos se abren como contraventanas.

- Tema alternativo con la paleta actual del cliente (marrón): añadir `?tema=marron` a la URL.
- Capturas sin animaciones (para revisión): añadir `?ss`.

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
