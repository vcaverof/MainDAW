// =====================================================
// FETCH POST (INSERTAR DATOS)
// =====================================================

const nuevoPost = {
    userId: 1,
    title: "Prueba",
    body: "Contenido de prueba"
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoPost)
})
    .then(res => {
        if (!res.ok) throw new Error("Error en POST");
        return res.json();
    })
    .then(data => console.log("Insertado:", data))
    .catch(err => console.error(err));
