/* ============================================================
   DON CHAMBERÍ — "BALDOSA"
   Todo el contenido es legible sin JavaScript. Esto solo añade.
   ============================================================ */
(() => {
  'use strict';
  const captura = location.search.includes('ss');
  const quieto = captura || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  if (captura) {
    $$('img[loading="lazy"]').forEach(i => i.loading = 'eager');
    document.documentElement.classList.add('captura');
  }
  requestAnimationFrame(() => document.body.classList.add('cargada'));
  const cabecera = $('.cab');
  if (cabecera) {
    const medir = () => document.documentElement.style
      .setProperty('--cab-h', cabecera.offsetHeight + 'px');
    medir(); addEventListener('resize', medir, { passive: true });
  }

  /* ---------- Entrada al viewport ---------- */
  const entradas = $$('.entra');
  if (quieto || !('IntersectionObserver' in window)) {
    entradas.forEach(el => el.classList.add('visible'));
  } else {
    const io = new IntersectionObserver((filas, obs) => {
      filas.forEach(f => {
        if (!f.isIntersecting) return;
        f.target.classList.add('visible');
        obs.unobserve(f.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    entradas.forEach(el => io.observe(el));
  }

  /* ---------- El buscador se fija cuando el hero sale ---------- */
  const busca = $('#buscador');
  const hero  = $('.hero');
  if (busca && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      busca.classList.toggle('fijo', !e.isIntersecting);
    }, { rootMargin: '-60px 0px 0px 0px' }).observe(hero);
  }

  /* ---------- Valoración: formulario por pasos ---------- */
  const form = $('#form-valora');
  if (form) {
    const pasos  = $$('.paso', form);
    const salida = $('#valora-estado');
    const rotulo = $('.versal', form);
    const campo  = $('#dir');
    const preguntas = [
      ['¿Dónde está tu casa?', 'Calle y número', 'street-address'],
      ['¿Cuántos metros tiene?', 'Superficie construida en m²', 'off'],
      ['¿En qué estado está?', 'A reformar, buen estado, reformado…', 'off'],
      ['¿A qué teléfono te llamamos?', 'Tu teléfono', 'tel'],
    ];
    let i = 0;
    form.addEventListener('submit', ev => {
      ev.preventDefault();
      if (i < preguntas.length - 1) {
        i++;
        pasos.forEach((p, n) => n <= i ? p.setAttribute('data-activo', '') : p.removeAttribute('data-activo'));
        const [pregunta, marcador, auto] = preguntas[i];
        $('label[for="dir"]', form).textContent = pregunta;
        campo.placeholder = marcador;
        campo.autocomplete = auto;
        campo.value = '';
        rotulo.textContent = `Paso ${i + 1} de ${preguntas.length}`;
        campo.focus();
      } else {
        salida.textContent = 'Prototipo: el formulario aún no envía. En producción devuelve un rango al momento y avisa al agente.';
      }
    });
  }
})();
