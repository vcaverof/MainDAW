// =====================================================
// FETCH + JSON
// =====================================================

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        if (!res.ok) throw new Error("Error en la petición");
        return res.json(); // convierte automáticamente a objeto JS
    })
    .then(usuarios => {
        usuarios.forEach(u => console.log(u.name, u.email));
    })
    .catch(err => console.error(err));
