// =====================================================
// ENVIAR FICHEROS CON FORM Y AJAX
// =====================================================

// Formulario convencional
// <form method="post" enctype="multipart/form-data">

// Enviar fichero con AJAX
const xhr = new XMLHttpRequest();

document.forms[0].addEventListener("submit", e => {
    e.preventDefault();

    xhr.open("POST", "http://localhost:8080/fichero.php");
    xhr.send(new FormData(document.forms[0])); // detecta multipart/form-data automáticamente
});

// Crear FormData solo con el fichero
const fd = new FormData();
fd.append("mifichero", document.querySelector("#mifichero").files[0]);
xhr.send(fd);
