// ===============================================
// DOCUMENTFRAGMENT
// ===============================================

// Permite crear nodos sin insertarlos aún en el DOM
// Mejora el rendimiento (evita repintados sucesivos)

const fragment = new DocumentFragment();
const datos = ["A", "B", "C"];

datos.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    fragment.appendChild(li);
});

// Insertar todo de golpe
document.querySelector("#lista").appendChild(fragment);
