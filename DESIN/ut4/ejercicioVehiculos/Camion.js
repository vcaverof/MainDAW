class Camion extends Vehiculo {
    constructor(pasajeros, tara) {
        super(pasajeros);
        this._tara = tara;
    }

    set tara(value) {
        this._tara = value;
    }

    get tara() {
        return this._tara;
    }
}