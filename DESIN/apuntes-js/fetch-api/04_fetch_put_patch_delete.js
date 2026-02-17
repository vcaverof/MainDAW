// =====================================================
// FETCH PUT / PATCH / DELETE
// =====================================================

// PUT: reemplaza el recurso completo
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        id: 1,
        title: "Título actualizado",
        body: "Contenido actualizado",
        userId: 1
    })
});

// PATCH: modifica solo algunos campos
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        title: "Nuevo título"
    })
});

// DELETE: borrar recurso
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
    .then(res => console.log("Status:", res.status));
