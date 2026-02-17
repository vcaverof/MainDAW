// =====================================================
// CARGAR UN FICHERO HTML Y RENDERIZARLO
// =====================================================

const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:5500/assets/datos.html");

xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        document.querySelector(".container").innerHTML = xhr.response;
    }
});

xhr.send();
