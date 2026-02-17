// =====================================================
// FETCH CON async / await
// =====================================================

async function cargarUsuarios() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("Error en la petición");

        const datos = await res.json();
        console.log(datos);
    } catch (err) {
        console.error("Error:", err);
    }
}

cargarUsuarios();
