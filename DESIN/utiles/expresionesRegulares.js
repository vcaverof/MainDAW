//CREAR UNA EXPRESIÓN REGULAR
// Literal
const regex1 = /abc/;

// Con constructor
const regex2 = new RegExp("abc");

//MÉTODOS PRINCIPALES
const texto = "Hola mundo 123";

// test → ¿coincide?
/\d+/.test(texto); // true (hay números)

// exec → devuelve la coincidencia
/\d+/.exec(texto); // ["123"]

// match → todas las coincidencias
texto.match(/\w+/g); // ["Hola", "mundo", "123"]

// replace → sustituir coincidencias
texto.replace(/\d+/, "###"); // "Hola mundo ###"

// split → dividir por coincidencias
texto.split(/\s/); // ["Hola", "mundo", "123"]

//EJEMPLOS PRÁCTICOS
// Validar email
const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
emailRegex.test("usuario@mail.com"); // true

// Validar número de teléfono (simple)
const telRegex = /^\d{9}$/;
telRegex.test("612345678"); // true

// Extraer números de un texto
"Precio: 45€".match(/\d+/g); // ["45"]

// Reemplazar múltiples espacios por uno
"Hola    mundo".replace(/\s+/g, " "); // "Hola mundo"
