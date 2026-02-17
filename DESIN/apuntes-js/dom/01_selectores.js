// ===============================================
// SELECTORES DEL DOM
// ===============================================

// --- querySelector(): devuelve el PRIMER elemento que coincide ---
const titulo = document.querySelector("h1");
const porClase = document.querySelector(".item");
const porId = document.querySelector("#principal");

// --- querySelectorAll(): devuelve TODOS los elementos ---
const items = document.querySelectorAll(".item"); // NodeList
items.forEach(el => console.log(el.textContent)); //Iterar Nodos

// --- getElementById(): más rápido, pero solo por id ---
const div1 = document.getElementById("contenedor");

// --- getElementsByTagName(): colección viva (HTMLCollection) ---
const imagenes = document.getElementsByTagName("img");
for (const img of imagenes) console.log(img.src);

// --- getElementsByClassName(): colección viva (HTMLCollection) ---
const cajas = document.getElementsByClassName("caja");

// Convertir HTMLCollection a array:
const cajasArray = [...cajas];

// --- getElementsByName(): útil en formularios ---
const nombre = document.getElementsByName("usuario")[0];

// ===============================================
// PROPIEDADES ÚTILES DE LOS NODOS
// ===============================================

// nodeName: nombre de la etiqueta
console.log(titulo.nodeName); // "H1"

// nodeType: tipo de nodo (1=Element, 3=Text, etc.)
console.log(titulo.nodeType);

// nodeValue: solo útil en nodos de tipo Text
console.log(titulo.firstChild.nodeValue);

// childNodes: lista de nodos hijos (incluye textos, saltos de línea…)
console.log(titulo.childNodes);

// firstChild / lastChild
console.log(titulo.firstChild);

// parentNode
console.log(titulo.parentNode);

// ===============================================
// EJEMPLOS TÍPICOS DE EXAMEN
// ===============================================

// Mostrar el texto de todos los <div> del documento
const divs = document.getElementsByTagName("div");
for (const d of divs) {
    console.log(d.firstChild?.nodeValue);
}

// Mostrar todos los nodos del documento
const todos = document.querySelectorAll("*");
todos.forEach(n => console.log(n.nodeName));

// Seleccionar elementos por atributo
const enlacesGoogle = document.querySelectorAll('a[href="https://google.com"]');

// Seleccionar descendientes
const imgsEnDiv = document.querySelectorAll("div img");

// Seleccionar por clase
const elementosA = document.querySelectorAll(".a");
