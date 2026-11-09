// ============================================
// Reproductor aleatorio - reproductor.js
// ============================================

// ---------- 1. Capturar elementos del DOM ----------
const botonInicio = document.querySelector('#botonInicio');
const vinilo = document.querySelector('.vinilo');
const zonaCancion = document.querySelector('#zonaCancion');
zonaCancion.id = 'zonaCancion';
const contenedorVinilo = document.querySelector('.contenedor-vinilo');


// Botón "Elegir otra canción": se crea una sola vez y se coloca debajo del vinilo
// cuando el usuario inicia el reproductor (ver sección 6)
const botonOtra = document.createElement('button');
botonOtra.type = 'button';
botonOtra.id = 'botonOtra';
botonOtra.innerText = 'Elegir otra canción';
botonOtra.classList.add('btn', 'btn-primary', 'd-block', 'mx-auto', 'my-3');

// ---------- 2. Datos: array de objetos con las canciones ----------
const canciones = [
    {
        titulo: 'Mi genio amor',
        album: 'Gulp!',
        id: '6u4BM3xVhJs'
    },
    {
        titulo: 'El infierno está encantador esta noche',
        album: 'Gulp!',
        id: 'E3LCrHVXwVk'
    },
    {
        titulo: 'Me matan limón',
        album: 'Luzbelito',
        id: 'J09Zy4tFQr0'
    }
];

// Guarda la posición de la canción que está sonando (-1 = todavía ninguna)
let indiceActual = -1;

// ---------- 3. Elegir una canción al azar sin repetir la anterior ----------
function elegirIndice() {
    let nuevoIndice;

    do {
        nuevoIndice = Math.floor(Math.random() * canciones.length);
    } while (nuevoIndice === indiceActual);

    return nuevoIndice;
}

// ---------- 4. Mostrar la canción en la página ----------
function mostrarCancion(cancion) {
    // Título
    let titulo = document.createElement('h2');
    titulo.innerText = cancion.titulo;

    // Álbum
    let album = document.createElement('p');
    album.innerText = 'Álbum: ' + cancion.album;

    // Reproductor de YouTube (el contenedor "ratio" de Bootstrap lo hace responsive)
    let contenedorVideo = document.createElement('div');
    contenedorVideo.classList.add('ratio', 'ratio-16x9');

    let reproductor = document.createElement('iframe');
    reproductor.src = 'https://www.youtube.com/embed/' + cancion.id + '?autoplay=1';
    reproductor.title = cancion.titulo;
    reproductor.allow = 'autoplay; encrypted-media';
    reproductor.allowFullscreen = true;

    contenedorVideo.append(reproductor);

    // Plan B: enlace directo a YouTube
    let enlace = document.createElement('a');
    enlace.href = 'https://www.youtube.com/watch?v=' + cancion.id;
    enlace.target = '_blank';
    enlace.innerText = 'Si no se reproduce, escuchala en YouTube';
    enlace.classList.add('d-block', 'my-3');

    // Reemplazo todo lo anterior por lo nuevo
    zonaCancion.replaceChildren(titulo, album, contenedorVideo, enlace);
}

// ---------- 5. Elegir + mostrar ----------
function elegirYMostrar() {
    indiceActual = elegirIndice();
    mostrarCancion(canciones[indiceActual]);
}

// ---------- 6. Botones ----------

// Botón "Elegir otra canción": sortea y muestra una nueva
botonOtra.addEventListener('click', elegirYMostrar);

// Botón de inicio
botonInicio.addEventListener('click', function () {
    // El vinilo empieza a girar y nunca se detiene (no se saca la clase)
    vinilo.classList.add('girando');

    // Elijo la primera canción
    elegirYMostrar();

    // Coloco el botón "Elegir otra canción" justo debajo del vinilo
    contenedorVinilo.after(botonOtra);

    // Oculto el botón de inicio: de ahora en más se usa "Elegir otra canción"
    botonInicio.style.display = 'none';
});