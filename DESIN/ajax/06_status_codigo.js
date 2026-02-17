// =====================================================
// STATUS Y STATUSTEXT
// =====================================================

// Método antiguo: comprobar readyState + status
const xhr1 = new XMLHttpRequest();
xhr1.open("GET", "http://localhost:5500/assets/datos.json");
xhr1.addEventListener("readystatechange", function () {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
        console.log(xhr1.statusText); // "OK"
    }
});
xhr1.send();

// Método moderno: evento load
const xhr2 = new XMLHttpRequest();
xhr2.open("GET", "http://localhost:5500/assets/datos1.json"); // NO existe
xhr2.addEventListener("load", function () {
    if (xhr2.status === 200) {
        console.log("Correcto");
    } else {
        console.log("Error:", xhr2.status, xhr2.statusText);
    }
});
xhr2.send();

// Códigos típicos:
// 200 OK
// 201 Created
// 204 No Content
// 400 Bad Request
// 404 Not Found
