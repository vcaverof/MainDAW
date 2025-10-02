//Ejercicio_58 - Alternar palabras en mayúsculas con palabras en minúsculas
console.log("Ejercicio_58 - Alternar palabras en mayúsculas con palabras en minúsculas");

var texto = "Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String.";

nuevoTexto = texto.split(" "); //Convertimos el string en un array dividido por palabras

for (i = 1; i < nuevoTexto.length; i++) {
    if (i % 2 == 0) {
       nuevoTexto[i] = nuevoTexto[i].toLowerCase();
    } else {
       nuevoTexto[i] = nuevoTexto[i].toUpperCase();
    }
}

nuevoTexto = nuevoTexto.join(" "); //Convertimos el array de nuevo a string, añadiendo espacios entre palabras
console.log(nuevoTexto);
console.log("---------------------------------------------------------------------------------------");

//Ejercicio_59 - Escribir el texto sin tildes
console.log("Ejercicio 59 - Escribir el texto sin tildes");
nuevoTexto2 = "";

for (i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == 'á') {
        nuevoTexto2 += texto.charAt(i).replace('á', 'a');
    } else if (texto.charAt(i) == 'é') {
        nuevoTexto2 += texto.charAt(i).replace('é', 'e');
    } else if (texto.charAt(i) == 'í') {
        nuevoTexto2 += texto.charAt(i).replace('í', 'i');
    } else if (texto.charAt(i) == 'ó') {
        nuevoTexto += texto.charAt(i).replace('ó', 'o');
    } else if (texto.charAt(i) == 'ú') {
        nuevoTexto2 += texto.charAt(i).replace('ú', 'u');
    } else {
        nuevoTexto2 += texto.charAt(i);
    }
}

console.log(nuevoTexto2);
console.log("---------------------------------------------------------------------------------------");

//Ejercicio_61 - Escribir el texto al revés a nivel de palabras y letras.
console.log("Ejercicio_61 - Escribir el texto al revés a nivel de palabras y letras.");
nuevoTexto3 = "";

for (let i = texto.length - 1; i >= 0; i--) {
    nuevoTexto3 += texto[i];
}

console.log(nuevoTexto3);
