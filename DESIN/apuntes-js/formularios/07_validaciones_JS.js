// =====================================================
// VALIDACIÓN CON JAVASCRIPT
// =====================================================

const form = document.querySelector("form");

function validaNif(nif) {
    const exp = /^\d{7,8}[A-Z]$/;
    return exp.test(nif);
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const nif = e.target["nif"].value;

    if (!validaNif(nif)) {
        alert("El NIF no es correcto");
        return;
    }

    // Si todo es correcto:
    e.target.submit();
});
