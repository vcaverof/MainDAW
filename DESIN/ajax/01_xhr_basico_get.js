// =====================================================
// AJAX BÁSICO: GET DE TEXTO
// =====================================================

// 1. Crear el objeto XMLHttpRequest
const xhr = new XMLHttpRequest();

// 2. Configurar la petición
xhr.open("GET", "http://localhost:5500/assets/datos.txt");

// 3. Escuchar el evento 'load' (cuando llega la respuesta)
xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        // 4. Acceder a la respuesta
        document.querySelector(".container").innerHTML = xhr.response;
    } else {
        console.error("Error:", xhr.status, xhr.statusText);
    }
});

// 5. Enviar
xhr.send();
