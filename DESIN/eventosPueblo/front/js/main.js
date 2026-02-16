async function cargarNavbar() {
    const contenedor = document.getElementById("navbar");
    const res = await fetch("navbar.html");
    const html = await res.text();
    contenedor.innerHTML = html;

    // Después de cargar la barra, aplicamos la lógica del usuario
    mostrarBotonAdmin();
}


function mostrarBotonAdmin() {
    const user = JSON.parse(localStorage.getItem("user"));
    const adminBtn = document.getElementById("adminBtn");

    if (!adminBtn) return;

    if (!user || user.rol_id !== 1) {
        adminBtn.classList.add("hidden");
    }
}
