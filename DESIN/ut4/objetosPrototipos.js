const person = { name: 'Paco', age: 30};
const student = {course: 'A'};

//El prototipo de lo dos objetos es el mismo:
console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(student)); //true
console.log("");


//"stuednt" no tiene la propiedad "name"
console.log(student.name); //undefined
console.log("");


//Asigna a "student" el prototipo "Person"
Object.setPrototypeOf(student, person);

console.log(">>>>>>>> for in:");
for (const k in student) {
    console.log(`${k}: ${student[k]}`);
}
console.log("");

console.log(">>>>>>>> for of:");


for (const k of Object.keys(student)) {
    console.log(`${k}: ${student[k]}`);
}
console.log("");


console.log(">>>>>> forEach");
Object.entries(student).forEach(e => console.log(`${e[0]}: ${e[1]}`));
console.log("");



//Ahora "student" tiene la propiedad "name" (en el producto)
console.log(student.name); //Paco
console.log("");


//Creamos una nueva propiedad "name" en "student"
student.name = 'Pepe';
console.log(student.name); //Pepe
console.log(person.name); //Paco





