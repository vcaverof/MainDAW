//[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1] Resultado: [0,1,11,2,3,4,5,6,7,8]

let array = [4, 0, 3, 4, 7, 3, 5, 8, 11, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1];
let aux = [];

array.sort((a,b) => a- b);
console.log(array);

for (let i = 0; i < array.length; i++) {
    if (!aux.includes(array[i])) {
        aux.push(array[i]);
    }
}

console.log(aux);
