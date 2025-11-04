class Vehiculo {
    constructor(pasajeros) {
        this._pasajeros = pasajeros;
    }

    set pasajeros(value) {
        this._pasajeros = value;
    }

    get pasajeros() {
        return this._pasajeros;
    }
}