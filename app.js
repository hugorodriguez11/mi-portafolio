const proyectos = [
  {
    numero: "01",
    nombre: "Menú Digital — La Terraza",
    desc: "Sitio web para restaurante con menú interactivo filtrable por categorías, galería de platillos, formulario de reservación y envío por WhatsApp. Diseño mobile-first.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://menu-restaurante-hugorodriguez11.vercel.app",
    codigo: "https://github.com/hugorodriguez11/menu-restaurante",
    color: "#2d6a4f",
    emoji: "🍽"
  },
  {
    numero: "02",
    nombre: "Tienda Local — MiTienda",
    desc: "E-commerce para negocios locales con catálogo filtrable, búsqueda en tiempo real, carrito de compras funcional y generación automática de pedidos por WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://tienda-local-sepia.vercel.app",
    codigo: "https://github.com/hugorodriguez11/tienda-local",
    color: "#2563eb",
    emoji: "🛍"
  },
];

const skills = [
  { nombre: "Frontend", techs: ["HTML5", "CSS3", "JavaScript", "React", "Angular"], color: "#dbeafe", texto: "#1d4ed8" },
  { nombre: "Backend", techs: ["Node.js", "Express", "REST APIs"], color: "#dcfce7", texto: "#15803d" },
  { nombre: "Base de datos", techs: ["SQL", "PostgreSQL", "MySQL"], color: "#fef9c3", texto: "#854d0e" },
  { nombre: "Herramientas", techs: ["Git", "GitHub", "Vercel", "VS Code"], color: "#f3e8ff", texto: "#7e22ce" },
];

function renderProyectos() {
  const grid = document.getElementById("proyectos-grid");
  grid.innerHTML = proyectos.map(p => `
    <div class="proyecto-card">
      <div class="proyecto-header" style="background:${p.color}">
        <span class="proyecto-emoji">${p.emoji}</span>
        <span class="proyecto-num">${p.numero}</span>
      </div>
      <div class="proyecto-body">
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
        <div class="proyecto-stack">
          ${p.stack.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="proyecto-btns">
          <a href="${p.demo}" target="_blank" class="btn btn-primary btn-sm">Ver demo →</a>
          <a href="${p.codigo}" target="_blank" class="btn btn-outline btn-sm">Código</a>
        </div>
      </div>
    </div>
  `).join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills.map(s => `
    <div class="skill-card">
      <h3 style="color:${s.texto}">${s.nombre}</h3>
      <div class="skill-tags">
        ${s.techs.map(t => `<span class="skill-tag" style="background:${s.color};color:${s.texto}">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

renderProyectos();
renderSkills();