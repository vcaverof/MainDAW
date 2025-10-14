
// const fruits = [
//     { name: "apples", quantity: 300 },
//     { name: "bananas", quantity: 500 },
//     { name: "oranges", quantity: 200 },
//     { name: "kiwi", quantity: 150 }
// ];

const fruitsMap = new Map([
    ["apples", 300],
    ["oranges", 200],
    ["kiwi", 150],
    ["bananas", 500],
    ["mangos", 450],
    ["peras", 100],
    ["sandias", 150]
]);

let valores = fruitsMap.values();

function myCallback(valores) {
    let rango = 200;
    let mayorCont = 0, menorCont = 0, igualCont = 0;

    if (valores > rango) {
        mayorCont++;
        return mayorCont;
    } else if (valores == rango) {
        igualCont++;
        return igualCont;
    } else if (valores < rango) {
        menorCont++;
        return igualCont;
    }
}

const result = Object.groupBy(fruitsMap.values(), myCallback);
console.log(typeof(result));

console.log("Hay: " + result.mayorCont + " frutas que están por encima de 200");
console.log("Hay: " + result.igualCont + " frutas que tienen 200 exactos");
console.log("Hay: " + result.menorCont + " frutas que estan por debajo de 200");


