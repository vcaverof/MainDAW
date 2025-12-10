
let colorSeleccionado = "color1"; //Colos seleccionado por defecto
let pincelActivo = false;

function activarPincel(event) {
    pincelActivo = !pincelActivo;
    document.getElementById("pincel").textContent = pincelActivo ? "PINCEL ACTIVO" : "PINCEL DESACTIVADO";

    if (pincelActivo) {
        event.target.className = colorSeleccionado;
    }
}

function pintar(event) {
    if (pincelActivo) {
        event.target.className = colorSeleccionado;
    }
}

//Dibujar tablero y añadirlo al div "zonadibujo"
const tabla = document.createElement("table");
tabla.className = "tablerodibujo";

for (let i = 0; i < 30; i++) {
    const fila = document.createElement("tr");
    for (let j = 0; j < 30; j++) {
        const td = document.createElement("td");
        td.style.border = "solid 1px black";
        
        //Eventos
        td.addEventListener('click', activarPincel);
        td.addEventListener('mouseover', pintar);

        fila.appendChild(td);
    }
    tabla.appendChild(fila);
}
document.getElementById("zonadibujo").appendChild(tabla);

//Seleccionar color
document.getElementById("paleta").addEventListener('click', seleccionarColor);

function seleccionarColor(event) {
    if (event.target.tagName === "TD") {
        const colores = document.querySelectorAll("#paleta td");
        colores.forEach(color => color.classList.remove("seleccionado"));

        event.target.classList.add("seleccionado");
        colorSeleccionado = event.target.classList[0];
    }
}



