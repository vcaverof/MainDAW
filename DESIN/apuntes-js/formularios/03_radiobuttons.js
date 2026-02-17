// =====================================================
// RADIOBUTTONS
// =====================================================

// Todos los radios con el mismo name forman un grupo
const fo = document.querySelector("#cliente");

fo.addEventListener("submit", e => {
    e.preventDefault();

    const grupo = fo["pregunta"]; // colección de radios
    console.log("Valor seleccionado:", grupo.value);

    // Acceso individual
    console.log(grupo[0].value, grupo[0].checked);
    console.log(grupo[1].value, grupo[1].checked);
});
