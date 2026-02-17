// =====================================================
// DESCARGAR IMÁGENES O BINARIOS (BLOB)
// =====================================================

const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:5500/assets/sol.jpg");

xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        const img = document.querySelector("#img");
        img.src = URL.createObjectURL(xhr.response);
    }
});

// Importante: indicar que queremos un blob
xhr.responseType = "blob";

xhr.send();
