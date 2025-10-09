let array = [100, 23, 23, 23, 23, 67, 45];
let outputArray = [];

array.sort();
console.log(array);

for (let i = 0; i < array.length; i++) {
    if (array[i] != array[i - 1]) {
        outputArray[i] = array[i];
    }      
}

console.log(outputArray);