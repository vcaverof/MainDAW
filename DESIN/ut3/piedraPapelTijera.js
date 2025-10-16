const opciones = ['piedra', 'papel', 'tijera'];

let jugarSimulacion = () => {
    //Elige una opcion aleatoria
    const p1 = opciones[Math.floor(Math.random() * 3)];
    const p2 = opciones[Math.floor(Math.random() * 3)];

    console.log("--------------------------------");

    console.log(`Jugador 1 eligió: ${p1}`);
    console.log(`Jugador 2 eligió: ${p2}`);

    if (p1 === p2) {
        console.log('Resultado: ¡Empate!');
    } else if (
        (p1 === 'piedra' && p2 === 'tijera') ||
        (p1 === 'papel' && p2 === 'piedra') ||
        (p1 === 'tijera' && p2 === 'papel')
    ) {
        console.log('Resultado: Jugador 1 gana');
    } else {
        console.log('Resultado: Jugador 2 gana');
    }

    console.log("--------------------------------");
}

jugarSimulacion();





