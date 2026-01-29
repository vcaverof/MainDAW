
import { Edificio } from "./Edificio.js";

const inquilinosImportar = [
    { piso: 3, puerta: 0, nombre: "Gustavo Ramírez", genero: "hombre", miembros: 5, },
    { piso: 2, puerta: 1, nombre: "María Pérez", genero: "mujer", miembros: 1 },
    { piso: 2, puerta: 2, nombre: "Manuel González", genero: "hombre", miembros: 1, },
    { piso: 2, puerta: 3, nombre: "Pepa Fernández", genero: "mujer", miembros: 3, },
    { piso: 1, puerta: 1, nombre: "Asterio Gómez", genero: "hombre", miembros: 2, },
    { piso: 3, puerta: 1, nombre: "Eleuterio Gómez", genero: "hombre", miembros: 6, },
];


//Creación del edificio
let miEdificio = new Edificio("Uría", 2, "33012");
miEdificio.agregarPlantasYPuertas(1, 0);
miEdificio.agregarPlantasYPuertas(1, 2);
miEdificio.agregarPlantasYPuertas(1, 4);
miEdificio.agregarPlantasYPuertas(1, 1);

window.addEventListener("load", cargaPagina);

/* ============================================================
   FUNCIONES AUXILIARES
============================================================ */

function obtenerImagen(puerta) {
    if (puerta === "Vacio") return "img/vacio.jpg";

    const miembros = puerta.miembros;
    const genero = puerta.genero.toLowerCase();

    if (miembros === 1) {
        return genero === "hombre" ? "img/hombre.jpg" : "img/mujer.jpg";
    }
    if (miembros === 2) return "img/pareja.jpg";
    if (miembros === 3) return "img/familia-1.jpg";
    return "img/familia-2.jpg";
}

/* ============================================================
   MOSTRAR FORMULARIO (MODAL)
============================================================ */

function mostrarFormulario(planta, puerta, modo = "add") {

    document.getElementById("plantaForm").value = planta;
    document.getElementById("puertaForm").value = puerta;

    if (modo === "add") {
        document.getElementById("btnAdd").disabled = false;
        document.getElementById("btnMod").disabled = true;
    } else {
        document.getElementById("btnAdd").disabled = true;
        document.getElementById("btnMod").disabled = false;

        // Precargar datos del propietario
        const propietario = miEdificio.plantas[planta][puerta];
        document.getElementById("nombre").value = propietario.nombre.split(" ")[0];
        document.getElementById("apellidos").value = propietario.nombre.split(" ").slice(1).join(" ");
        document.getElementById("miembros").value = propietario.miembros;
        document.getElementById("genero").value = propietario.genero;
    }

    document.getElementById("modalFormulario").style.display = "block";
}

/* ============================================================
   CERRAR FORMULARIO
============================================================ */

document.getElementById("btnCerrar").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modalFormulario").style.display = "none";
});

/* ============================================================
   BOTÓN AÑADIR
============================================================ */

document.getElementById("btnAdd").addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const miembros = parseInt(document.getElementById("miembros").value);
    const genero = document.getElementById("genero").value;

    if (!nombre || !apellidos || !miembros) {
        alert("Todos los campos son obligatorios");
        return;
    }

    const planta = parseInt(document.getElementById("plantaForm").value);
    const puerta = parseInt(document.getElementById("puertaForm").value);

    const propietario = {
        nombre: `${nombre} ${apellidos}`,
        genero,
        miembros
    };

    miEdificio.agregarPropietario(propietario, planta, puerta);

    document.getElementById("modalFormulario").style.display = "none";
    recargar();
});

/* ============================================================
   BOTÓN MODIFICAR
============================================================ */

document.getElementById("btnMod").addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const miembros = parseInt(document.getElementById("miembros").value);
    const genero = document.getElementById("genero").value;

    if (!nombre || !apellidos || !miembros) {
        alert("Todos los campos son obligatorios");
        return;
    }

    const planta = parseInt(document.getElementById("plantaForm").value);
    const puerta = parseInt(document.getElementById("puertaForm").value);

    miEdificio.plantas[planta][puerta] = {
        nombre: `${nombre} ${apellidos}`,
        genero,
        miembros
    };

    document.getElementById("modalFormulario").style.display = "none";
    recargar();
});

/* ============================================================
   RENDERIZAR EDIFICIO
============================================================ */

function creaEdificio(edificio) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    const divEdificio = document.createElement("div");
    divEdificio.classList.add("edificio");

    const h1 = document.createElement("h1");
    h1.textContent = `C/ ${edificio.calle} Nº ${edificio.numero}. ${edificio.cpostal}`;
    divEdificio.appendChild(h1);

    const divPisos = document.createElement("div");
    divPisos.classList.add("pisos");

    const plantas = edificio.plantas;

    plantas
        .map((planta, i) => ({ planta, numero: i }))
        .reverse()
        .forEach(({ planta, numero }) => {

            const divPlanta = document.createElement("div");
            divPlanta.classList.add("planta");

            let colClass = "";
            switch (planta.length) {
                case 1: colClass = "col-4"; break;
                case 2: colClass = "col-2"; break;
                case 4: colClass = "col-1"; break;
                default: colClass = "col-1";
            }

            [...planta].reverse().forEach((puerta, puertaIndexReversed) => {

                const puertaReal = planta.length - 1 - puertaIndexReversed;

                const divPropietario = document.createElement("div");
                divPropietario.classList.add("propietario", colClass);

                // Nombre + imagen
                if (puerta === "Vacio") {
                    const p = document.createElement("p");
                    p.textContent = "Libre";
                    divPropietario.appendChild(p);

                    const img = document.createElement("img");
                    img.src = obtenerImagen(puerta);
                    divPropietario.appendChild(img);
                } else {
                    const p = document.createElement("p");
                    p.textContent = puerta.nombre;
                    divPropietario.appendChild(p);

                    const img = document.createElement("img");
                    img.src = obtenerImagen(puerta);
                    divPropietario.appendChild(img);
                }

                // Botones
                const divBotones = document.createElement("div");
                divBotones.classList.add("botones");

                // BORRAR
                const btnBorrar = document.createElement("button");
                btnBorrar.classList.add("borrar");
                btnBorrar.textContent = "Borrar";
                btnBorrar.addEventListener("click", () => {
                    edificio.plantas[numero][puertaReal] = "Vacio";
                    recargar();
                });

                // AÑADIR / MODIFICAR
                if (puerta === "Vacio") {
                    const btnAdd = document.createElement("button");
                    btnAdd.classList.add("aniadir");
                    btnAdd.textContent = "Añadir";

                    btnAdd.addEventListener("click", () => {
                        mostrarFormulario(numero, puertaReal, "add");
                    });

                    divBotones.appendChild(btnAdd);
                } else {
                    const btnModificar = document.createElement("button");
                    btnModificar.classList.add("modificar");
                    btnModificar.textContent = "Modificar";

                    btnModificar.addEventListener("click", () => {
                        mostrarFormulario(numero, puertaReal, "mod");
                    });

                    divBotones.appendChild(btnModificar);
                    divBotones.appendChild(btnBorrar);
                }

                divPropietario.appendChild(divBotones);
                divPlanta.appendChild(divPropietario);
            });

            divPisos.appendChild(divPlanta);
        });

    divEdificio.appendChild(divPisos);
    contenedor.appendChild(divEdificio);
}

/* ============================================================
   IMPORTAR INQUILINOS
============================================================ */

function cargaInquilinos(edificio, lista) {
    lista.forEach(inq => {
        edificio.agregarPropietario(
            {
                nombre: inq.nombre,
                genero: inq.genero,
                miembros: inq.miembros
            },
            inq.piso,
            inq.puerta
        );
    });
}

function cargaPagina() {
    cargaInquilinos(miEdificio, inquilinosImportar);
    creaEdificio(miEdificio);
}

function recargar() {
    creaEdificio(miEdificio);
}
