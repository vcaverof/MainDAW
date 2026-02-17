// =====================================================
// CONSULTAR UN ELEMENTO Y RELLENAR FORMULARIO
// =====================================================

const xhr = new XMLHttpRequest();
xhr.responseType = "json";

xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        const usuario = xhr.response;

        document.forms.usuario.name.value = usuario.name;
        document.forms.usuario.email.value = usuario.email;
        document.forms.usuario.city.value = usuario.address.city;
    }
});

document.querySelector("#btn-leer").addEventListener("click", () => {
    xhr.open("GET", "http://localhost:3000/users/1");
    xhr.send();
});
