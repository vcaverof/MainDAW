// ===============================================
// EVENTOS BÁSICOS
// ===============================================

// Forma moderna: addEventListener
const btn = document.querySelector("#btn");

btn.addEventListener("click", e => {
    console.log("Click en botón");
    console.log("Target:", e.target);
});

// Eventos comunes
window.addEventListener("load", () => console.log("Página cargada"));
document.addEventListener("keydown", e => console.log("Tecla:", e.key));
document.addEventListener("mousemove", e => console.log(e.clientX, e.clientY));
