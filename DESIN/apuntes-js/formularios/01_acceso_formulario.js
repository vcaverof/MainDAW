// =====================================================
// ACCESO A FORMULARIOS Y CONTROLES
// =====================================================

// Acceder a formularios
const f1 = document.forms[0];              // por índice
const f2 = document.getElementById("login"); // por id
const f3 = document.querySelector("form");   // por selector

// Acceder a controles dentro de un formulario
console.log(f1.elements["email"].value);
console.log(f1["email"].value);
console.log(f1[0].value); // primer control

// Recorrer todos los controles
for (const control of f1) {
    console.log(control.name, control.value);
}
