const persona = {
    nombre: 'Sarah',
    lugar: {
        pais: 'Nigeria',
        ciudad: 'Lagos'
    },
    amigas: ['Annie', 'Becky']
};

//Devuelve el primer valor del array amigas
const {lugar: {pais: country, ciudad: city}, amigas: [amiga1]} = persona; 
console.log(amiga1);
console.log(country + " - " + city);



