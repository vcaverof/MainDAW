class Persona {
    constructor (nombre) {
        this._nombre = nombre;
        //_nombre para que el atributo no se llame igual que la llamada al get y al set
    }

    set nombre (value) {
        this._nombre = value;
    }

    get nombre () {
        return this._nombre;
    }
}

const p = new Persona('Paco');
console.log(p.nombre); //Paco
p.nombre = 'Raúl';
console.log(p.nombre); //Raúl

