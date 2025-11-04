class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static comparar(personaA, personaB) {
        return personaA.nombre.localeCompare(personaB.nombre);
    }

    static crearPersona(nombre) {
        return new this(nombre);
    }
}

const a = [new Persona('Pepe'), new Persona('Paco'), new Persona('Alejandro')];
for (let i = 1; i < a.length; i++) {
    console.log(`${a[i - 1].nombre} - ${a[i].nombre} = ${Persona.comparar(a[i - 1], a[i])}`);
}

//Funcionamiento del localeCompare
//Si la primera cadena empieza alfabeticamente antes = -1
//Si ambas cadenas son iguales = 0
//Si la segunda cadena empieza alfabeticamente antes = 1

a.sort((personaA, personaB) => personaA.nombre.localeCompare(personaB.nombre));
console.log(a.map(e => e.nombre).join(','));
console.log(Persona.comparar(a[0], a[1]));
const persona = Persona.crearPersona('Luis');
console.log(persona.nombre);



