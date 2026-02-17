// =====================================================
// AJAX vs FETCH — RESUMEN
// =====================================================

// ---------------------------
// AJAX (XMLHttpRequest)
// ---------------------------
// - Verboso
// - Necesita eventos (load, error, readystatechange)
// - responseType para JSON, blob, etc.
// - Más antiguo

// ---------------------------
// FETCH
// ---------------------------
// - Basado en Promesas
// - Más limpio y moderno
// - Manejo de JSON integrado
// - async/await funciona perfecto
// - fetch NO lanza error en códigos HTTP (404, 500...)
//   => hay que comprobar res.ok

// Ejemplo equivalente:

// AJAX
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => console.log(xhr.response));
xhr.open("GET", "url");
xhr.send();

// FETCH
fetch("url")
    .then(res => res.text())
    .then(data => console.log(data));
