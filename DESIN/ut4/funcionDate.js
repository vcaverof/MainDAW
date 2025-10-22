let anio;
const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];


let calcularSiglo = (anio) => {
    const siglo = Math.ceil(anio/100);
    return romanos[siglo-1];
} 


for (let i = 0; i < 3; i++) {
    anio = Math.round(Math.random() * 2023);
    console.log("Año: " + anio);
    console.log("Siglo: " + calcularSiglo(anio));
    console.log("---------------");
}

