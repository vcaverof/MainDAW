// =====================================================
// SELECT Y OPTION
// =====================================================

const fo = document.querySelector("#formulario");

fo.addEventListener("submit", e => {
    e.preventDefault();

    const lista = fo["colores"];

    console.log("Índice seleccionado:", lista.selectedIndex);

    for (const opt of lista) {
        console.log(opt.value, "->", opt.selected);
    }
});
