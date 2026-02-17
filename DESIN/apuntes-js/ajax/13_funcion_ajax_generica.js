// =====================================================
// FUNCIÓN AJAX GENÉRICA (MUY TÍPICA DE EXAMEN)
// =====================================================

function ajax(options) {
    const { url, method, success, error, data } = options;

    const xhr = new XMLHttpRequest();
    
    xhr.open(method || "GET", url);

    xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            success(JSON.parse(xhr.response));
        } else {
            error(`Error: ${xhr.status} ${xhr.statusText}`);
        }
    });

    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

// Ejemplo GET
ajax({
    url: "http://localhost:3000/posts",
    success: posts => posts.forEach(p => console.log(p)),
    error: msg => console.log(msg)
});

// Ejemplo POST
ajax({
    url: "http://localhost:3000/posts",
    method: "POST",
    data: { userId: 10, title: "Prueba" },
    success: res => console.log("Creado:", res),
    error: msg => console.log(msg)
});
