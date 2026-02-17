// =====================================================
// CHECKBOXES
// =====================================================

const fo = document.querySelector("#formulario");

fo.addEventListener("submit", e => {
    e.preventDefault();

    const cb = fo["color"]; // colección de checkboxes

    for (const c of cb) {
        console.log(c.value, "->", c.checked);
    }
});
