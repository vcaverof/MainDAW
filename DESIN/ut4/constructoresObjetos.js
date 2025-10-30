//Funcion constructora

function Persona(nombre = "A", edad = 10) {
    this.nombre = nombre;
    this.edad = edad;
    Persona.prototype.visualizar = function() {
        console.log(this.nombre);
        
    };
}

const persona = new Persona("Pepe", 23);
persona.visualizar();
console.log(persona);
