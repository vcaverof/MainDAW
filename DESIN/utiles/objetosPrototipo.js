//CREAR OBJETOS Y FUNCIONES CONSTRUCTORAS
// Función constructora
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Instanciar objetos
const p1 = new Persona("Victor", 30);
const p2 = new Persona("Ana", 25);

console.log(p1.nombre); // "Victor"

//PROTOTIPOS
Persona.prototype.saludar = function() {
  return "Hola, soy " + this.nombre;
};

console.log(p1.saludar()); // "Hola, soy Victor"
console.log(p2.saludar()); // "Hola, soy Ana"

//HERENCIA DE PROTOTIPOS
function Estudiante(nombre, edad, carrera) {
  Persona.call(this, nombre, edad); // heredar propiedades
  this.carrera = carrera;
}

// Heredar métodos
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

// Añadir métodos propios
Estudiante.prototype.estudiar = function() {
  return this.nombre + " está estudiando " + this.carrera;
};

const e1 = new Estudiante("Luis", 22, "Informática");
console.log(e1.saludar());   // "Hola, soy Luis"
console.log(e1.estudiar());  // "Luis está estudiando Informática"

//MÉTODOS ÚTILES
//Object.create(proto) -- Crea un objeto con un prototipo específico.
const animal = { tipo: "mamífero" };
const perro = Object.create(animal);
perro.raza = "Labrador";
console.log(perro.tipo); // "mamífero"

//Object.getPrototypeOf(obj) -- Obtiene el prototipo de un objeto.
console.log(Object.getPrototypeOf(perro) === animal); // true

//hasOwnProperty -- Verifica si una propiedad pertenece directamente al objeto (no al prototipo).
console.log(perro.hasOwnProperty("raza")); // true
console.log(perro.hasOwnProperty("tipo")); // false

//INICIALIZAR LOS OBJETOS DE DIFERENTES FORMAS
//Literal
const obj = { nombre: "Victor", edad: 30 };


//Constructor genérico
const obj = new Object();
obj.nombre = "Victor";

//Función constructora + new
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}
const l1 = new Libro("Quijote", "Cervantes");

//Objec.create
const prototipoLibro = { leer() { return "Leyendo..."; } };
const l2 = Object.create(prototipoLibro);
l2.titulo = "1984";


