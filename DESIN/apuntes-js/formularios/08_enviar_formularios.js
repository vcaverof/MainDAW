// =====================================================
// ENVÍO DE FORMULARIOS
// =====================================================

// Enviar formulario manualmente
const f = document.forms[0];

f.addEventListener("submit", e => {
    e.preventDefault();

    // Validaciones...
    alert("Enviando formulario...");

    e.target.submit(); // envía realmente
});

// Crear formulario dinámicamente
const form2 = document.createElement("form");
form2.action = "https://google.com/search";
form2.method = "GET";
form2.innerHTML = '<input name="q" value="javascript">';
document.body.append(form2);
form2.submit();
