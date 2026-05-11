export default class Bailarin {
  #nombre;
  #dni;
  #fechaAlta;
  #estilo;
  #sexo;

  constructor(nombre, dni, estilo, sexo, fechaAlta) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#estilo = estilo;
    this.#sexo = sexo;
    this.#fechaAlta = fechaAlta;
  }

  get nombre() {
    return this.#nombre;
  }

  get dni() {
    return this.#dni;
  }

  get estilo() {
    return this.#estilo;
  }

  set estilo(nuevoEstilo) {
    this.#estilo = nuevoEstilo;
  }

  get sexo() {
    return this.#sexo;
  }

  get fechaAlta() {
    return this.#fechaAlta;
  }

  toJSON() {
    return {
      nombre: this.#nombre,
      dni: this.#dni,
      estilo: this.#estilo,
      sexo: this.#sexo,
      fechaAlta: this.#fechaAlta,
    };
  }

  calcularCoste() {
    const hoy = new Date();
    const alta = new Date(this.#fechaAlta);
    const meses =
      (hoy.getFullYear() - alta.getFullYear()) * 12 +
      (hoy.getMonth() - alta.getMonth());
    return meses * 50;
  }
}
