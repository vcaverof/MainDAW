//Dibujar tablero y añadirlo al div "zonadibujo"
const tabla = document.createElement("table");
tabla.className = "tablerodibujo";

for (let i = 0; i < 30; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < 30; j++) {
        const td = document.createElement("td");
        fila.appendChild(td);
    }
    tabla.appendChild(fila);
}
document.getElementById("zonadibujo").appendChild(tabla);

//Seleccionar color y pincel
document.getElementById("paleta").addEventListener('click', seleccionarColor);

function seleccionarColor(event) {
    const evento = document.getElementById(event.target.id);

    //Cambiar la clase al color seleccionado
    if (evento.classList.length < 2) {
        evento.className = evento.className + " seleccionado";
    }
}
