// ============================================
// Foro de fans - foro.js
// Los mensajes se guardan en localStorage, o sea
// que cada navegador/computadora ve solo los suyos.
// ============================================

// ---------- 1. Capturar elementos del DOM ----------
const formulario = document.querySelector('#formularioForo');
const inputNombre = document.querySelector('#nombre');
const inputMensaje = document.querySelector('#textoMensaje');
const inputFoto = document.querySelector('#foto');
const listaMensajes = document.querySelector('#listaMensajes');

// ---------- 2. Variables globales ----------
// Tamaño máximo de la foto: 500 KB (localStorage tiene un límite de ~5 MB en total)
const TAMANO_MAXIMO = 500 * 1024;

// Array de objetos: cada objeto es un mensaje { nombre, texto, foto }
let mensajes = [];

// ---------- 3. Funciones de storage ----------

// Lee los mensajes guardados (si hay) y los carga en el array
function cargarMensajes() {
    let guardados = localStorage.getItem('mensajesForo');
    if (guardados !== null) {
        mensajes = JSON.parse(guardados);
    }
}

// Guarda el array completo convertido a JSON.
// Devuelve true si se pudo guardar y false si no (por ejemplo, si el storage está lleno)
function guardarMensajes() {
    try {
        localStorage.setItem('mensajesForo', JSON.stringify(mensajes));
        return true;
    } catch (error) {
        return false;
    }
}

// ---------- 4. Mostrar los mensajes en la página ----------
function mostrarMensajes() {
    // Vacío la lista antes de volver a dibujarla
    listaMensajes.innerHTML = '';

    // Si no hay mensajes, aviso
    if (mensajes.length === 0) {
        let vacio = document.createElement('p');
        vacio.innerText = 'Todavía no hay mensajes. ¡Queremos leerte!';
        listaMensajes.append(vacio);
        return;
    }

    // Recorro el array desde el último al primero para que el más nuevo aparezca arriba
    for (let i = mensajes.length - 1; i >= 0; i--) {
        let mensaje = mensajes[i];

        // Tarjeta
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'mb-3');

        let cuerpo = document.createElement('div');
        cuerpo.classList.add('card-body');

        // Nombre (uso innerText y no innerHTML para que nadie pueda meter código HTML en el foro)
        let titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.innerText = mensaje.nombre;

        // Texto del mensaje
        let texto = document.createElement('p');
        texto.classList.add('card-text');
        texto.innerText = mensaje.texto;

        cuerpo.append(titulo);
        cuerpo.append(texto);

        // Foto (solo si el usuario subió una)
        if (mensaje.foto !== '') {
            let imagen = document.createElement('img');
            imagen.src = mensaje.foto;
            imagen.alt = 'Foto enviada por ' + mensaje.nombre;
            imagen.classList.add('img-fluid', 'rounded');
            cuerpo.append(imagen);
        }

        tarjeta.append(cuerpo);
        listaMensajes.append(tarjeta);
    }
}

// ---------- 5. Publicar un mensaje nuevo ----------
function publicarMensaje(nombre, texto, foto) {
    let nuevoMensaje = {
        nombre: nombre,
        texto: texto,
        foto: foto
    };

    mensajes.push(nuevoMensaje);

    if (guardarMensajes()) {
        mostrarMensajes();
        formulario.reset();
    } else {
        // No entró en el storage: lo saco del array para que no quede a medias
        mensajes.pop();
        alert('No se pudo guardar el mensaje. Probá con una foto más chica o sin foto.');
    }
}

// ---------- 6. Evento del formulario ----------
formulario.addEventListener('submit', function (e) {
    // Evita que el formulario recargue la página
    e.preventDefault();

    let nombre = inputNombre.value.trim();
    let texto = inputMensaje.value.trim();

    // Validación: que no sean solo espacios
    if (nombre === '' || texto === '') {
        alert('Completá tu nombre y tu mensaje.');
        return;
    }

    let archivo = inputFoto.files[0];

    if (archivo === undefined) {
        // Sin foto
        publicarMensaje(nombre, texto, '');
    } else {
        // Con foto: valido tamaño
        if (archivo.size > TAMANO_MAXIMO) {
            alert('La foto es muy pesada. El máximo es 500 KB.');
            return;
        }

        // Convierto la imagen a texto (data URL) para poder guardarla en localStorage
        let lector = new FileReader();
        lector.addEventListener('load', function () {
            publicarMensaje(nombre, texto, lector.result);
        });
        lector.readAsDataURL(archivo);
    }
});

// ---------- 7. Al cargar la página ----------
cargarMensajes();
mostrarMensajes();