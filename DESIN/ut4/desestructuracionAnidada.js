// const persona = {
//     nombre: 'Sarah',
//     lugar: {
//         pais: 'Nigeria',
//         ciudad: 'Lagos'
//     },
//     amigas: ['Annie', 'Becky']
// };

// //Devuelve el primer valor del array amigas
// const {lugar: {pais: country, ciudad: city}, amigas: [amiga1]} = persona; 
// console.log(amiga1);
// console.log(country + " - " + city);


const persona2 = {
    nombre: "Pepe",
    apellidos: ["Garcia", "Perez"],
    edad: 23
};

const { nombre: ej1, edad: ej2 } = persona2;
console.log(ej1 + " --- " + ej2);

const arr = ["lunes", "martes", "miercoles", "jueves", "viernes"];
const [lu, , mi] = arr;
console.log(lu, mi);

const { apellidos: [apellido1, apellido2] } = persona2;
console.log(apellido1, apellido2);

function verDatos(obj) {
    const { nombre: name = "Luis", edad: age = 20 } = obj;
    console.log(name, age);
}

verDatos(persona2);

const persona3 = {
    ciudad: "Madrid"
}
verDatos(persona3);

