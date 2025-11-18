//SINTAXIS BÁSICA
// Función tradicional
function suma(a, b) {
  return a + b;
}

// Función flecha equivalente
const suma = (a, b) => a + b;

//TIPOS DE FUNCIONES FLECHA
//Un solo parámetro
const cuadrado = x => x * x;
console.log(cuadrado(5)); // 25

//Dos o más parámetros
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12

//Sin parámetros
const saludar = () => "Hola!";
console.log(saludar()); // "Hola!"

//Con cuerpo y varias líneas
const calcular = (a, b) => {
  const suma = a + b;
  const producto = a * b;
  return { suma, producto };
};
console.log(calcular(3, 4)); // { suma: 7, producto: 12 }

//RETORNO IMPLÍCIO DE OBJETO
const crearUsuario = (nombre, edad) => ({ nombre, edad });
console.log(crearUsuario("Victor", 30)); // { nombre: "Victor", edad: 30 }


//USOS COMUNES
//Con arrays
const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(n => n * 2); // [2,4,6,8,10]
const pares = numeros.filter(n => n % 2 === 0); // [2,4]
const suma = numeros.reduce((acc, n) => acc + n, 0); // 15

//Con callbacks
setTimeout(() => console.log("Ejecutado después de 1s"), 1000);

//En funciones de orden superior
const aplicarOperacion = (a, b, operacion) => operacion(a, b);
console.log(aplicarOperacion(5, 3, (x, y) => x - y)); // 2
