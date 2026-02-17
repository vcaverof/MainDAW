// =====================================================
// INPUTS Y TEXTAREA
// =====================================================

// value: texto escrito por el usuario
const form = document.querySelector("#cliente");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = form["nombre"].value;
    const edad = form["edad"].value;
    const texto = form["txt"].value;

    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Texto: ${texto}`);
});

// Propiedades útiles
// input.type
// input.name
// input.value
// textarea.value
