// ===============================================
// PROPIEDADES DE LOS NODOS
// ===============================================

// Acceder al nombre de la etiqueta
const p = document.querySelector("p");
console.log(p.tagName); // "P"

// Acceder al texto interior (nodo Text)
console.log(p.firstChild.nodeValue);

// innerHTML: leer o modificar contenido HTML
console.log(p.innerHTML);
p.innerHTML = "<b>Texto modificado</b>";

// textContent: solo texto, sin interpretar HTML
console.log(p.textContent);

// Atributos: getAttribute() y setAttribute()
const enlace = document.querySelector("a");
console.log(enlace.getAttribute("href"));
enlace.setAttribute("href", "https://bing.com");

// Propiedades equivalentes
enlace.href = "https://google.es";

// Diferencia atributo vs propiedad
console.log(enlace.getAttribute("href")); // valor literal del HTML
console.log(enlace.href);                 // valor absoluto (resuelto)

// ===============================================
// EJEMPLOS TÍPICOS DE EXAMEN
// ===============================================

// Cambiar estilos desde JS
p.style.background = "yellow";
p.style.fontSize = "20px";

// Leer atributos de un <img>
const img = document.querySelector("img");
console.log(img.src);
console.log(img.alt);

// Recorrer atributos de un nodo
for (const attr of img.attributes) {
    console.log(attr.name, attr.value);
}
