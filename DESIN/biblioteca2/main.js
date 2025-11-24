import { Publicacion } from "./Publicacion.js"
import { Libro } from "./Libro.js"
import { Seccion } from "./Seccion.js";

//IMPORTANTE, FUNCION PARA VISUALIZAR EN HTML
const output = document.getElementById("output");

function mostrar(obj) {
    const output = document.getElementById("output");
    const p = document.createElement("p");

    // Si es un objeto, construimos un string con sus propiedades
    if (typeof obj === "object") {
        p.textContent = Object.entries(obj)
            .map(([clave, valor]) => `${clave}: ${valor}`)
            .join(" | ");
    } else {
        p.textContent = obj;
    }

    output.appendChild(p);
}

let libro1 = new Libro("Javascript Moderno", "978-8441544439", 10);
let libro2 = new Libro("El Quijote", "785-0421540431", 700);
let libro3 = new Libro("El Lazarillo de Tórmes", "435-8421544435", 500);

let publicacion1 = new Publicacion("Revista cientifica 2024");
let publicacion2 = new Publicacion("Definiciones clave JS");
let publicacion3 = new Publicacion("Revista de moda 2025");

const listaIDsDuplicados = [
    libro1.idPublicacion,
    publicacion1.idPublicacion,
    "PUB-ABC-2024",
    "PUB-DEF-2024",
    libro1.idPublicacion // Duplicado
]

const { titulo: nombreItem, numCopias: cantidadTotal } = libro1;
mostrar(nombreItem + " --- " + cantidadTotal);

const costos = [15.50, 4.00, 2.75];

const calcularCostos = (titulo, ...costosExtra) => {
    const total = costosExtra.reduce((acc, costo) => acc + costo, 0);
    return `${titulo}: ${total}€`;
}
mostrar(calcularCostos(libro1.titulo, ...costos));

const configurarBusqueda = ({ criterio = "Titulo", maxResultados = 20 }) => {
    return { criterio, maxResultados };
};

const cfg1 = configurarBusqueda({ criterio: "ISBN", maxResultados: 50 });
mostrar(cfg1);

const cfg2 = configurarBusqueda({}); // Criterio: "Titulo", Max: 20
mostrar(cfg2);

const cfg3 = configurarBusqueda({ criterio: "Autor" }); // Criterio: "Autor", Max: 20
mostrar(cfg3);

const libros = [libro1, libro2, libro3, libro1];

const seccion1 = new Seccion(); //Crear seccion vacia

seccion1.registrarInventario(libros);
mostrar(seccion1.listarInventario());

const filtrarIDs = new Set(listaIDsDuplicados);
for (let id of filtrarIDs) {
    mostrar(id);
}


const mapaIDs = new Map();

mapaIDs.set(libro1.isbn, libro1);
mapaIDs.set(libro2.isbn, libro2);
mapaIDs.set(libro3.isbn, libro3);
for (let id of mapaIDs) {
    mostrar(id);
}


const inventario = [
    new Libro("Libro1", "435-3758493029", 5),
    new Libro("Libro2", "029-3829384939", 12),
    new Libro("Libro3", "283-12893829392", 5)
];

const map = inventario.map(e => { return `${e.titulo} - ${e.isbn}` }).join(" | ");
const filter = inventario.filter(e => e.numCopias < 10).map(e => e.titulo).join(", ");
const reduce = inventario.reduce((acc, libro) => acc + libro.numCopias, 0);
mostrar(map);
mostrar(filter);
mostrar("Numero total de copias: " + reduce);