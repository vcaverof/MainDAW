//Math.PI
console.log("Math.Pi");
console.log(Math.PI);  //3.1415....
console.log("----------------------------")

//Math.E
console.log("Math.E");
console.log(Math.E);  //2.7182.....
console.log("----------------------------")

//Math.abs()  Devuelve el valor absoluto de un número
console.log("Math.abs");
console.log(Math.abs(-7)); //7
console.log("----------------------------")

//Math.sin(), Math.cos(), Math.tan()
console.log("Math.sin, Math.cos y Math.tan");
let seno = Math.sin(50);
let coseno = Math.cos(50);
let tangente = Math.tan(50);
console.log("Numero = 50 - Seno: " + seno + " Coseno: " + coseno + " Tangente: " + tangente); 
//Numero = 50 - Seno: -0.26237485370392877 Coseno: 0.9649660284921133 Tangente: -0.27190061199763077
console.log("----------------------------")

//Math.exp() devuelve e elevado a la potencia de un número, es decir, x = e**x
console.log("Math.exp");
console.log(Math.exp(0)); // 0 
console.log("----------------------------")

//Math.log() devuelve el logaritmo en base e de un número
console.log("Math.log");
console.log(Math.log(10)); // 2.302585092994046
console.log("----------------------------")

//Math.ceil() redonde un número decimal a su valor más alto, sin importar a que extremo esté más cerca
console.log("Math.ceil");
console.log(Math.ceil(8.2)); // 9
console.log("----------------------------")

//Math.floor() hace lo mismo que el anterior pero al valor más bajo
console.log("Math.floor");
console.log(Math.floor(8.2)); // 8
console.log("----------------------------")

//Math.round() redondea un número decimal a su parte entera más próxima (hacia arriba o hacia abajo)
console.log("Math.round");
console.log(Math.round(8.2)); // 8
console.log("----------------------------")

//Math.pow(b,e) eleva un número b al exponente e
console.log("Math.pow");
console.log(Math.pow(5,2));  // 25
console.log("----------------------------")

//Math.min() devuelve el menor de los argumentos introducidos
console.log("Math.min");
console.log(Math.min(6,19)); //6
console.log("----------------------------")

//Math.max() devuelve el mayor de los argumentos introducidos
console.log("Math.max");
console.log(Math.max(6,19)); //19
console.log("----------------------------")

//Math.sqrt() realiza la raíz cuadrada del argumento
console.log("Math.sqrt");
console.log(Math.sqrt(25)); //5
console.log("----------------------------")

//Math.random() genera un número aleatorio entre 0 y 1
console.log("Math.random");
console.log(Math.random()); //Un número aleatorio 0 y 1, con decimales
console.log("----------------------------")
