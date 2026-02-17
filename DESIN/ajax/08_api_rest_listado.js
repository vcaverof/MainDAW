// =====================================================
// CONSULTAR VARIOS ELEMENTOS Y MOSTRARLOS EN <ul>
// =====================================================

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/todos");

xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        const lista = document.querySelector("#lista");
        
        xhr.response.forEach(t => {
            const li = document.createElement("li");
            li.innerHTML = `Usuario: ${t.userId} — Título: ${t.title} `;
            li.innerHTML += t.completed ? "<b>Completado</b>" : "<b>No completado</b>";
            lista.appendChild(li);
        });
    }
});

xhr.responseType = "json";
xhr.send();
