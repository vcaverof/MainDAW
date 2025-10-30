let empleado = {
    nombre: "Ana",
    edad: 20,
    "Trabajador temporal": true,
    domicilio: {
        calle: "Mayor, 2",
        poblacion: "Valladolid",
    },
};

empleado.sexo = "Masculino";
console.log(empleado.sexo);  //Masculino
console.log(empleado.nombre);  //Ana

empleado["Trabajador temporal"] = false;
console.log(empleado["Trabajador temporal"]);  //false

console.log(empleado.domicilio.calle);  //Mayor, 2

delete empleado.edad;
console.log(empleado.edad);  //Undefined porque la propiedad no existe o no tiene valor

console.log(empleado.dni = "111111111H");  //111111111H

//---------------------------------------------------------------
//Propiedades calculadas 1
const propiedad1 = 1; //Para nada recomendado nombrar atributos con numeros
const valor = 20;
const propiedad2 = "trabajador";

let objeto = { nombre: "Pepe", [propiedad1]: valor, [propiedad2]: true };

console.log(objeto); //{1: 20, nombre: 'Pepe', trabajador: true}

//Propiedades calculadas 2
const propiedades = ['nombre', 'edad', 'trabajador'];
const valores = ['Luis', 43, true];
const persona = {};
for (const key in propiedades) {
    persona[propiedades[key]] = valores[key];
}
console.log(persona); //{nombre: 'Luis', edad: 43, trabajador: true}

console.log("---------------------------------------------------------------");

const cliente = { nombre: "Pepe", saldo: 1000, credito: true };
for (const key in cliente) {
    console.log(`Propiedad: ${key} - Valor: ${cliente[key]}`);
}

console.log("nombre" in cliente); //true
console.log("apellido" in cliente);  //false
cliente.antes = "SI";

const copia1 = { ...cliente };
console.log("----------------COPIA1----------------");
console.log(copia1);  //{nombre: 'Pepe', saldo: 1000, credito: true, antes: 'SI'}

cliente.despues = "NO";
console.log("----------------CLIENTE----------------");
console.log(cliente);  //{nombre: 'Pepe', saldo: 1000, credito: true, antes: 'SI', despues: 'NO'}

console.log("----------------COPIA1----------------");
console.log(copia1);  //{nombre: 'Pepe', saldo: 1000, credito: true, antes: 'SI'}

const copia2 = { apellido: "García", ...cliente };
console.log("----------------COPIA2----------------");
console.log(copia2);  //{apellido: 'García', nombre: 'Pepe', saldo: 1000, credito: true, antes: 'SI', despues: 'NO'}

let copia3 = Object.assign(cliente); //Copia la dirección de memoria
console.log("----------------COPIA3----------------");
console.log(copia3);  //{nombre: 'Pepe', saldo: 1000, credito: true, antes: 'SI', despues: 'NO'}

let copia4 = {};
Object.assign(copia4, cliente); //Copia el objeto, no la dirección de memoria
console.log("----------------COPIA4----------------");
console.log(copia4);  //{nombre: 'Pepe', saldo: 1000, credito: true, antes: 'SI', despues: 'NO'}


let u1 = {
    nombre: "Pepe",
    ver: function () {
        console.log(this.nombre);
    },
};
 
u1.ver();

//Objeto padre e hijo, para reducir codigo evitando repetición de funciones
const usuario = {
    visualizar: function () {
        console.log(this);
    }
};

const estudiante = Object.create(usuario);
estudiante.nombre = "Pedro";
estudiante.visualizar();




