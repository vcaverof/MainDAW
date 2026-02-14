
let colorSeleccionado = "color1"; //Colos seleccionado por defecto
let pincelActivo = false; //Controla si el pincel está activo o no

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

///Generar tablero de 30px por 30px, con celdas de 10px por 10px y añadirlo al div "zonadibujo"
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

    //IMPORTANTE - tagName siempre devuelve el nombre en mayúsculas
    if (event.target.tagName === 'TD') {
        const colores = document.querySelectorAll('#paleta td');

        //Reiniciar el estado de seleccionado en todos los colores
        colores.forEach(color => color.classList.remove('seleccionado'));

        //Marcar como seleccionado el color que recibee el evento
        event.target.classList.add('seleccionado');

        //classList en 0, sería la clase que indica el color de cada td
        //En este caso, el color del td que recibe el evento (event.target)
        colorSeleccionado = event.target.classList[0];

    }
}



