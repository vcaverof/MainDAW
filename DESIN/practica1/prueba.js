
//Variables
coleccionUsuarios = new Set();

console.log("Selecciona una de las siguientes opciones");
console.log("1. Añadir usuario ");
console.log("2. Modificar usuario");
console.log("3. Eliminar usuario");
console.log("4. Mostrar colección de usuarios");
console.log("-------------------------");
let opcion = 1;


switch (opcion) {
    case 1: {
        console.log("Has seleccionado la opción 1");
        console.log("Introduce tu nombre: ");
        let nombre = "Victor Cavero Fernandez";
        let comprobarEsta = true;


        if (!coleccionUsuarios.has(nombre)) {
            coleccionUsuarios.add(nombre);
            comprobarEsta = false;
        } else {
            console.log("Ya existe un usuario con esos datos");
        }


        console.log("Longitud de tu nombre: " + nombre.trim(" ").length);
        console.log("Cadena en minúsculas: " + nombre.toLowerCase());
        console.log("Cadena en mayúsculas: " + nombre.toUpperCase());

        let nombrePartido = nombre.split(" ");

        console.log("Nombre: " + nombrePartido[0]);
        console.log("Apellido1: " + nombrePartido[1]);
        console.log("Apellido2: " + nombrePartido[2]);

        console.log("Selecciona una de las siguientes opciones para tu contraseña");
        console.log("1. Nombre completo + iniciales apellidos ");
        console.log("2. Dos iniciales de nombre y de los dos apellidos");
        console.log("3. Letra de nombre + posición");

        let opcion2 = 2;

        switch (opcion) {
            case 1: {

            }

            case 2: {

            }

            case 3: {


            }
        }

    }

    case 2: {
        console.log("Has seleccionado la opción 2");
        console.log("Introduce el usuario: ");
        let nombreLogin = "Victor Cavero Fernandez";

        console.log("Introduce la contraseña:  ");
        let passLogin = "victorCV";


    }

    case 3: {

    }

    case 4: {
        console.log("Has seleccionado la opción 4");
        console.log(coleccionUsuarios.values());
    }
}

