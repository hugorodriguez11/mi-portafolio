// ── Navegación por secciones ──────────────────────────────
function mostrarSeccion(id) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(a => a.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) { sec.classList.add('active'); sec.scrollIntoView({behavior:'smooth',block:'start'}); }
  const navItem = document.querySelector(`.nav-item[data-sec="${id}"]`);
  if (navItem) navItem.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

// ── Tabs proyectos ────────────────────────────────────────
document.querySelectorAll('.ptab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ptab-content').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('ptab-' + tab.dataset.ptab).classList.add('active');
  });
});

// ── Formulario de contacto ────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Mensaje enviado';
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent = 'Enviar mensaje →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});

// ── Barra de progreso scroll ──────────────────────────────
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const bar = document.getElementById('nav-progress');
  if (bar) bar.style.width = pct + '%';
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// ── Animación barras de habilidades al entrar ─────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sb-fill').forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--w');
      });
    }
  });
}, {threshold: 0.3});
document.querySelectorAll('.skill-block').forEach(el => obs.observe(el));

// ── Prevenir recarga de página en links de nav ────────────
document.querySelectorAll('.nav-item, .nav-cta').forEach(el => {
  el.addEventListener('click', e => e.preventDefault());
});
// ── Modo nocturno ─────────────────────────────────────────
(function() {
  const guardado = localStorage.getItem('tema-portafolio') || 'light';
  document.documentElement.setAttribute('data-theme', guardado);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = guardado === 'dark' ? '☀️' : '🌙';
})();

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const actual = document.documentElement.getAttribute('data-theme');
  const nuevo = actual === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nuevo);
  localStorage.setItem('tema-portafolio', nuevo);
  document.getElementById('theme-toggle').textContent = nuevo === 'dark' ? '☀️' : '🌙';
});