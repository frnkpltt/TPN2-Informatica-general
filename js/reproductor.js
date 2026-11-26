// ============================================
// Reproductor aleatorio con televisión - reproductor.js
// ============================================

// ---------- 1. Capturar elementos del DOM ----------
const botonInicio = document.querySelector('#botonInicio');
const pantallaTV = document.querySelector('#pantallaTV');
const contenedorTV = document.querySelector('.contenedor-tv');
const zonaCancion = document.querySelector('#zonaCancion');

// Botón "Elegir otra canción": se crea una sola vez y se coloca debajo de la tele
// cuando el usuario inicia el reproductor (ver sección 6)
const botonOtra = document.createElement('button');
botonOtra.type = 'button';
botonOtra.id = 'botonOtra';
botonOtra.innerText = 'Elegir otra canción';
botonOtra.classList.add('btn', 'btn-primary', 'd-block', 'mx-auto', 'my-3');

// ---------- 2. Datos: array de objetos con las canciones ----------
const canciones = [
    {
        titulo: 'Me matan limón',
        album: 'Luzbelito',
        id: 'AfBn_agAI5k'
    },
    {
        titulo: 'El infierno está encantador esta noche',
        album: 'Gulp!',
        id: 'JsBWG18EGn4'
    },
    {
        titulo: 'Mi genio amor',
        album: 'Gulp!',
        id: '8GiO7XfnaGI'
    },
    {
        titulo: 'Tarea fina',
        album: 'La mosca y la sopa',
        id: '1LwbDpc00jw'
    },
    {
        titulo: 'La bestia pop',
        album: 'Gulp!',
        id: 'jyVCCrOAYeA'
    },
    {
        titulo: 'Toxi taxi',
        album: 'La mosca y la sopa',
        id: 'dpV2swgNgmc'
    },
    {
        titulo: 'Todo un palo',
        album: 'Un bajón para el ojo idiota',
        id: 't_wKM5hLQU8'
    },
    {
        titulo: 'Motor Psico',
        album: 'Oktubre',
        id: 'x63QROiEAxc'
    },
    {
        titulo: 'Salando las heridas',
        album: 'La mosca y la sopa',
        id: 'iII6w13F19w'
    },
    {
        titulo: 'Mi perro dinamita',
        album: 'La mosca y la sopa',
        id: 'EWoIvbqPtTQ'
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
    let titulo = document.createElement('h3');
    titulo.innerText = cancion.titulo;

    // Álbum
    let album = document.createElement('p');
    album.innerText = 'Álbum: ' + cancion.album;

    // El video se "transmite" en la pantalla de la tele (el iframe ya está en el HTML)
    pantallaTV.src = 'https://www.youtube.com/embed/' + cancion.id + '?autoplay=1';
    pantallaTV.title = cancion.titulo;

    // Plan B: enlace directo a YouTube
    let enlace = document.createElement('a');
    enlace.href = 'https://www.youtube.com/watch?v=' + cancion.id;
    enlace.target = '_blank';
    enlace.innerText = 'Si no se reproduce, escuchala en YouTube';
    enlace.classList.add('d-block', 'my-3');

    // Reemplazo todo lo anterior por lo nuevo
    zonaCancion.replaceChildren(titulo, album, enlace);
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
    // Elijo la primera canción
    elegirYMostrar();

    // Coloco el botón "Elegir otra canción" justo debajo de la tele
    contenedorTV.after(botonOtra);

    // Oculto el botón de inicio: de ahora en más se usa "Elegir otra canción"
    botonInicio.style.display = 'none';
});