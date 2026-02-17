// ===============================================
// DIFERENCIA ENTRE ATRIBUTOS Y PROPIEDADES
// ===============================================

const a = document.querySelector("a");

// Propiedad: valor absoluto (resuelve rutas)
a.href = "http://google.es";
console.log(a.href);

// Atributo: valor literal del HTML
console.log(a.getAttribute("href"));

a.setAttribute("href", "www.bing.com");
console.log(a.href);              // file:///C:/.../www.bing.com
console.log(a.getAttribute("href")); // "www.bing.com"

// Regla de examen:
// SIEMPRE usar protocolo en href/src
