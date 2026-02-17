// ===============================================
// DRAG & DROP BÁSICO
// ===============================================

// Elemento arrastrable
const caja1 = document.querySelector(".caja1");
const caja2 = document.querySelector(".caja2");

// Permitir drop
caja1.addEventListener("dragover", e => e.preventDefault());
caja2.addEventListener("dragover", e => e.preventDefault());

// Mover contenido
caja1.addEventListener("drop", () => {
    if (!caja1.childElementCount) caja1.append(caja2.children[0]);
});

caja2.addEventListener("drop", () => {
    if (!caja2.childElementCount) caja2.append(caja1.children[0]);
});

// Transferir datos
caja1.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", "Mensaje enviado");
});

caja2.addEventListener("drop", e => {
    console.log(e.dataTransfer.getData("text"));
});
