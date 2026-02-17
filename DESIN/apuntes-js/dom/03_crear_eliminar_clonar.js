// ===============================================
// CREAR NODOS
// ===============================================

// Crear un elemento
const div = document.createElement("div");

// Crear un nodo de texto
const texto = document.createTextNode("Hola mundo");

// Añadir texto al div
div.append(texto);

// Insertar en el documento
document.body.append(div);

// ===============================================
// INSERTAR EN DIFERENTES POSICIONES
// ===============================================

const cont = document.querySelector("#contenedor");

cont.append("Al final");
cont.prepend("Al principio");
cont.before("Antes del contenedor");
cont.after("Después del contenedor");

// appendChild(): solo acepta nodos (no strings)
const li = document.createElement("li");
li.textContent = "Elemento";
cont.appendChild(li);

// ===============================================
// CLONAR NODOS
// ===============================================

const copiaProfunda = cont.cloneNode(true);  // copia hijos
const copiaSuperficial = cont.cloneNode(false); // solo el nodo

document.body.append(copiaProfunda, copiaSuperficial);

// ===============================================
// ELIMINAR NODOS
// ===============================================

cont.remove();

// ===============================================
// EJEMPLO TÍPICO DE EXAMEN: crear lista desde array
// ===============================================

const colores = ["Verde", "Azul", "Rojo"];
const fragment = new DocumentFragment();

colores.forEach((color, i) => {
    const li = document.createElement("li");
    li.value = (i + 1) * 10;
    li.textContent = color;
    fragment.appendChild(li);
});

document.querySelector("#listaColores").appendChild(fragment);
