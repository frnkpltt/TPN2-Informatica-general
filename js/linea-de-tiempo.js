const hitos = [
    { anio: '1949', titulo: 'Título del hito', descripcion: 'Descripción...' },
    { anio: '19XX', titulo: 'Otro hito', descripcion: 'Descripción...' }
    // ... el resto, con datos que vos verifiques
];

const lineaTiempo = document.querySelector('#lineaTiempo');

function escribirHito(i) {
    // Corte: si ya no quedan hitos, termina
    if (i >= hitos.length) {
        return;
    }

    let hito = hitos[i];

    // Creo la tarjeta vacía y la sumo a la página
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('hito');
    lineaTiempo.append(tarjeta);

    // La máquina de escribir escribe adentro de la tarjeta
    let maquina = new Typewriter(tarjeta, {
        delay: 30,
        cursor: ''
    });

    maquina
        .typeString('<h3>' + hito.anio + ' · ' + hito.titulo + '</h3>')
        .typeString('<p>' + hito.descripcion + '</p>')
        .pauseFor(800)
        .callFunction(function () {
            escribirHito(i + 1);   // pasa al siguiente
        })
        .start();
}

// Arranca con el primer hito
escribirHito(0);