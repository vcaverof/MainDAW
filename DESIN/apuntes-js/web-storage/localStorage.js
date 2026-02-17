// ============================================================ 
// LOCAL STORAGE
// ============================================================

//----------------- GUARDAR UN DATO -----------------------
localStorage.setItem("clave", "valor");
sessionStorage.setItem("clave", "valor");


//----------------- LEER UN DATO -----------------------
localStorage.getItem("clave");
sessionStorage.getItem("clave");


//----------------- BORRAR UN DATO -----------------------
localStorage.removeItem("clave");
sessionStorage.removeItem("clave");


//----------------- BORRAR TODO -----------------------
localStorage.clear();
sessionStorage.clear();


//----------------- GUARDAR OBJETOS -----------------------
const usuario = { nombre: "Víctor", edad: 22 };
localStorage.setItem("usuario", JSON.stringify(usuario));


//----------------- LEER OBJETOS -----------------------
const datos = JSON.parse(localStorage.getItem("usuario"));
console.log(datos.nombre);

// ============================================================ 
// EJEMPLOS PRÁCTICOS
// ============================================================

//----------------- CONTADOR DE VISITAS (PERSISTENTE) -----------------------
let visitas1 = localStorage.getItem("visitas") || 0;
visitas1++;
localStorage.setItem("visitas", visitas1);
console.log("Has visitado esta página " + visitas1 + " veces");

//----------------- CONTADOR DE VISITAS (SOLO PESTAÑA ACTUAL) -----------------------
let visitas2 = sessionStorage.getItem("visitas") || 0;
visitas2++;
sessionStorage.setItem("visitas", visitas2);
console.log("Visitas en esta pestaña: " + visitas2);


//----------------- GUARDAR LISTA DE TAREAS -----------------------
localStorage.setItem("tareas", JSON.stringify(listaDeTareas));

//----------------- RECUPERAR LISTA DE TAREAS -----------------------
const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];


//----------------- COMPROBAR SI EL NAVEGADOR SOPORTA WEB STORAGE -----------------------
if (typeof(Storage) !== "undefined") {
    console.log("Web Storage disponible");
} else {
    console.log("Web Storage NO soportado");
}

//----------------- GUARDAR Y CARGAR NOTAS -----------------------
function guardarNotas() {
    const notas = [...document.querySelectorAll('.card')].map(card => ({
        titulo: card.querySelector('h3').textContent,
        descripcion: card.querySelector('p').textContent,
        categoria: card.querySelector('span').textContent
    }));

    localStorage.setItem("notas", JSON.stringify(notas));
}



