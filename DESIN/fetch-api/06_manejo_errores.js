// =====================================================
// MANEJO DE ERRORES EN FETCH
// =====================================================

// OJO: fetch SOLO lanza error si no hay conexión
// Para errores HTTP (404, 500...) hay que comprobar res.ok

async function leerDatos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/404");

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
        }

        const datos = await res.json();
        console.log(datos);

    } catch (err) {
        console.error("Error capturado:", err.message);
    }
} S