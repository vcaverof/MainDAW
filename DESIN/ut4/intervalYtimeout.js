
//Pinta la palabra 'hola' tras 1 segundo de ejecución
setTimeout(() => console.log('hola'), 1000);

//Pinta numeros random de forma infinita cada 3 segundos
// setInterval(function () {
//     console.log(Math.random() * 10);
// }, 3000);


//Pinta numeros random hasta que el contador llega a 5 cada 3 segundos
let contador = 0;
const id = setInterval(function () {
    console.log(Math.random() * 10);
    if (contador++ == 5) {
        clearInterval(id); //Una vez cumple la condición, elimina el intervalo
    }
}, 1000); 

//Si quieres parar un intervalo es necesario guardar en una variable lo que devuelve