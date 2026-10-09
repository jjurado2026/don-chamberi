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

## Caducidad
La propuesta se ve 10 días desde su envío, el 7 de septiembre de 2026 (el día de envío cuenta): hasta el **16 de septiembre de 2026 a las 23:59** (hora de Madrid). Desde el 17, `index.html` lleva a `caducada.html`: «No puedes ver esta página porque han pasado más de 10 días desde su envío. Si sigues con interés, escríbeme a jjuradogarciadelrio@gmail.com.» y la home entera en miniatura (`assets/img/home-miniatura.webp`). La fecha está en el primer `<script>` de `index.html` (`Date.UTC(2026, 8, 16, 22, 0)`). Solo caduca en `github.io`: en local se sigue viendo; `?caducada` simula el aviso.

---
Diseño y desarrollo: **Juan Jurado** · [jjuradogarciadelrio.com](https://jjuradogarciadelrio.com)
