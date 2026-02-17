// =====================================================
// FORMDATA
// =====================================================

// Crear FormData desde un formulario
const fd1 = new FormData(document.forms[0]);

// Crear FormData manualmente
const fd2 = new FormData();
fd2.append("nombre", "Pepe");
fd2.append("edad", 34);

// Métodos:
// append(), delete(), get(), set()
