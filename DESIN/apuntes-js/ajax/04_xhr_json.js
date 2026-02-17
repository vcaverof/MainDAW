// =====================================================
// LEER JSON (dos formas)
// =====================================================

// Forma 1: recibir texto y parsear
const xhr1 = new XMLHttpRequest();
xhr1.open("GET", "http://localhost:5500/assets/datos.json");
xhr1.addEventListener("load", function () {
    if (xhr1.status === 200) {
        const datos = JSON.parse(xhr1.response);
        console.log(datos);
    }
});
xhr1.send();

// Forma 2: recibir JSON directamente
const xhr2 = new XMLHttpRequest();
xhr2.open("GET", "http://localhost:5500/assets/datos.json");
xhr2.responseType = "json";
xhr2.addEventListener("load", function () {
    if (xhr2.status === 200) {
        console.log(xhr2.response);
    }
});
xhr2.send();
