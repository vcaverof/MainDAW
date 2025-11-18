//DEFINICIÓN BÁSICA DE UNA CLASE
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

// Crear instancias
const p1 = new Persona("Victor", 30);
console.log(p1.saludar()); // "Hola, soy Victor"

//MÉTODOS ESTÁTICOS -- pertenecen a la clase, no a las instancias.
class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Matematica.sumar(5, 3)); // 8

//GETTERS Y SETTERS -- Permiten acceder y modificar propiedades como si fueran atributos.
class Libro {
  constructor(titulo) {
    this._titulo = titulo;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }
}

const l1 = new Libro("Quijote");
console.log(l1.titulo); // "Quijote"
l1.titulo = "1984";
console.log(l1.titulo); // "1984"

//HERENCIA CON EXTENDS
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, carrera) {
    super(nombre); // llama al constructor de Persona
    this.carrera = carrera;
  }

  estudiar() {
    return `${this.nombre} estudia ${this.carrera}`;
  }
}

const e1 = new Estudiante("Ana", "Informática");
console.log(e1.saludar());   // "Hola, soy Ana"
console.log(e1.estudiar());  // "Ana estudia Informática"

//CLASESS CON CAMPOS PRIVADOS
class Cuenta {
  #saldo = 0; // propiedad privada

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const c1 = new Cuenta();
c1.depositar(100);
console.log(c1.verSaldo()); // 100
// console.log(c1.#saldo); ❌ Error: propiedad privada

//CLASES ANÓNIMAS Y EXPRESIONES DE CLASE
const MiClase = class {
  constructor(valor) {
    this.valor = valor;
  }
  mostrar() {
    return this.valor;
  }
};

const obj = new MiClase("Hola");
console.log(obj.mostrar()); // "Hola"

//MÉTODOS ÚTILES RELACIONADOS
console.log(p1 instanceof Persona); // true

