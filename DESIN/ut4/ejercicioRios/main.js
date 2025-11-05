document.write("<h3>Creacion de los rios A y B</h3>");
let rioA = new Rio("Duero", "cuenca Atlántica");
let rioB = new Rio("Ebro", "cuenca Mediterránea");

document.write('<br><h3>Datos del rio A</h3>');
rioA.imprimeNombre();
rioA.imprimeCuenca();
rioA.imprimeCaudal();
rioA.imprimePoblaciones();
rioA.modificarCaudalmedio(25);

document.write('<br><h3>Modificar caudal del rio B</h3>');
rioB.modificarCaudalmedio(50);
rioB.imprimeCaudal();


document.write('<br><h3>Añadir poblaciones al rio B</h3>');
rioB.agregarPoblacion("Miranda de Ebro");
rioB.agregarPoblacion("Tortosa");
rioB.agregarPoblacion("Valladolid");
rioB.imprimePoblaciones();

document.write('<br><h3>Quitar la población de Valladolid del rio B</h3>');
rioB.eliminarPoblacion("Valladolid");
rioB.imprimePoblaciones();

document.write('<br><h3>Ordenar los rios por caudal medio</h3>');
ordenarRiosCaudal(rioA, rioB);
