// =====================================================
// CONTROL FINO DE ESTADOS: readystatechange
// =====================================================

const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:5500/assets/datos.json");

xhr.addEventListener("readystatechange", function () {
    switch (xhr.readyState) {
        case XMLHttpRequest.HEADERS_RECEIVED:
            console.log("Cabeceras recibidas");
            console.log(xhr.getAllResponseHeaders());
            break;

        case XMLHttpRequest.DONE:
            console.log("Descarga completada");
            break;
    }
});

xhr.send();

// Estados posibles:
// 0 UNSENT
// 1 OPENED
// 2 HEADERS_RECEIVED
// 3 LOADING
// 4 DONE
