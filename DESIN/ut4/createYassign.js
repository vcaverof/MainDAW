person = { name: "Pepe", age: 23 };
student = Object.create(person);

student.course = 'A';
const customer = Object.create(person);
customer.sales = 1230;

console.log(person);
console.log(student);
console.log(customer);
console.log('');



console.log('Propiedades de student');
for (const k in student) {
   console.log(`${k}: ${student[k]}`);
}
console.log('');
console.log('Propiedades de customer');
for (const k in customer) {
   console.log(`${k}: ${customer[k]}`);
}


const person2 = { name: "Pepe", age: 23 };
const data = {altura: 160};
const student2 = Object.assign({}, person, data);
console.log(person2);
console.log(student2);



