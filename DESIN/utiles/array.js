const arr = [1, 2, 3, 4, 5];

// Métodos principales
arr.push(6);        // Añadir al final → [1,2,3,4,5,6]
arr.pop();          // Quitar último → [1,2,3,4,5]
arr.shift();        // Quitar primero → [2,3,4,5]
arr.unshift(0);     // Añadir al inicio → [0,2,3,4,5]

arr.map(x => x * 2);  // Transformar → [0,4,6,8,10]
arr.filter(x => x > 3); // Filtrar → [4,5]
arr.reduce((acc, x) => acc + x, 0); // Acumular → 14
arr.find(x => x === 4); // Buscar → 4
arr.includes(3);    // ¿Contiene? → true
arr.indexOf(5);     // Posición → 4
arr.slice(1, 3);     // Subarray → [2,3]
arr.splice(2, 1);    // Quitar/modificar → elimina el 3
