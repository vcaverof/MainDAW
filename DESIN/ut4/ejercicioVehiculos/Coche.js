class Coche extends Vehiculo {
    constructor(pasajeros, color) {
        super(pasajeros);
        this._color = color;
    }

    set color(value) {
        this._color = value;
    }

    get color() {
        return this._color;
    }
}