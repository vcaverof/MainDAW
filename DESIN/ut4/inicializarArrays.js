let array = [];
let array2 = [];
array2.length = 50;

for (let i = 0; i < 50; i++) {
    array.push(0);
}

console.log(array);

array2.fill(0, 0, 50);  //(Valor: 0, Inicio: 0, Fin: 50)
console.log(array2);

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

console.log("-------------DELETE-------------");
let diaDelete = delete dias[2]; //Elimina el valor en la posicion indicada, pero el hueco se mantiene
console.log(dias);
console.log(diaDelete); //Devuelve true o false

console.log("-------------POP-------------");
let borrarPop = dias.pop();  //ELimina el ultimo elemento del array
console.log(dias);
console.log(borrarPop); //Devuelve el elemento borrado

console.log("-------------SPLICE-------------");
let borradoSplcie = dias.splice(0,2);
console.log(dias); 
console.log(borradoSplcie); //Devuelve los elementos que elimina