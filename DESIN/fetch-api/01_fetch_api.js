// =====================================================
// FETCH BÁSICO: GET
// =====================================================

// Fetch devuelve una Promesa
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        // res.ok === true si status está entre 200 y 299
        if (!res.ok) throw new Error("Error en la petición");
        return res.text(); // también puede ser res.json()
    })
    .then(data => {
        console.log("Respuesta:", data);
    })
    .catch(err => console.error("Error:", err));
