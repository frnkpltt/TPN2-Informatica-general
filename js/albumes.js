/* ===========================================
   albumes.js
   Galería de álbumes: filtro por banda y detalle
   =========================================== */

/* ---------- Datos: un objeto por álbum ---------- */

const albumes = [
  {
    titulo: "Gulp!",
    anio: 1985,
    banda: "redondos",
    imagen: "img/gulp.jpeg",
    descripcion: "El primer disco de la banda. Se grabó en diciembre de 1984 en los estudios MIA, con Lito Vitale como operador y músico invitado, y fue una producción independiente: la plata salió de un fondo común armado con un porcentaje de las ganancias de cada show."
  },
  {
    titulo: "Oktubre",
    anio: 1986,
    banda: "redondos",
    imagen: "img/oktubre.jpeg",
    descripcion: "El segundo disco de estudio y el que los lanzó a la masividad. Incluye \"Ji Ji Ji\", \"Ya nadie va a escuchar tu remera\" y \"Fuegos de octubre\", y es el de mayores ventas certificadas de la banda (más de 120 mil)."
  },
  {
    titulo: "Un baión para el ojo idiota",
    anio: 1988,
    banda: "redondos",
    imagen: "img/baión.jpeg",
    descripcion: "El tercer disco de estudio de la banda. Contiene \"Todo un palo\" y \"Vencedores vencidos\"."
  },
  {
    titulo: "La mosca y la sopa",
    anio: 1991,
    banda: "redondos",
    imagen: "img/mosca.jpeg",
    descripcion: "El quinto disco de la banda y uno de sus grandes éxitos comerciales, con canciones como \"Toxi-Taxi\", \"Mi perro dinamita\" y \"Un poco de amor francés\". Es el tercero que cuenta con Lito Vitale en teclados."
  },
  {
    titulo: "Lobo suelto / Cordero atado",
    anio: 1993,
    banda: "redondos",
    imagen: "img/album-lobo-cordero.jpg",
    descripcion: "Un disco doble de 25 temas, editado en 1993 en dos volúmenes. En Cordero atado está \"Ladrón de mi cerebro\", la canción que da nombre a este sitio."
  },
  {
    titulo: "Último bondi a Finisterre",
    anio: 1998,
    banda: "redondos",
    imagen: "img/album-finisterre.jpg",
    descripcion: "El noveno disco de la banda, con un sonido más particular: usa samplers y efectos en buena parte de las grabaciones y tiene temas más oscuros. Se presentó a fines de 1998 en el estadio de Racing."
  },
  {
    titulo: "El tesoro de los inocentes (Bingo Fuel)",
    anio: 2004,
    banda: "fundamentalistas",
    imagen: "img/album-tesoro.jpg",
    descripcion: "El primer disco del Indio después de la separación de Los Redondos, junto a su nueva banda, Los Fundamentalistas del Aire Acondicionado. Se grabó en Parque Leloir en 2004 y se presentó en noviembre de 2005 con dos shows en el Estadio Ciudad de La Plata."
  },
  {
    titulo: "Porco rex",
    anio: 2007,
    banda: "fundamentalistas",
    imagen: "img/album-porco-rex.jpg",
    descripcion: "El segundo disco de estudio de Indio Solari y Los Fundamentalistas del Aire Acondicionado."
  },
  {
    titulo: "El perfume de la tempestad",
    anio: 2010,
    banda: "fundamentalistas",
    imagen: "img/album-perfume.jpg",
    descripcion: "El tercer disco de estudio con Los Fundamentalistas del Aire Acondicionado."
  },
  {
    titulo: "Pajaritos, bravos muchachitos",
    anio: 2013,
    banda: "fundamentalistas",
    imagen: "img/album-pajaritos.jpg",
    descripcion: "El cuarto disco con Los Fundamentalistas. Uno de los recitales de este ciclo fue el del Hipódromo de Tandil, el 12 de marzo de 2016, con unas 200 mil personas."
  },
  {
    titulo: "El ruiseñor, el amor y la muerte",
    anio: 2018,
    banda: "fundamentalistas",
    imagen: "img/album-ruisenor.jpg",
    descripcion: "El último de los cinco discos de estudio que el Indio grabó con Los Fundamentalistas del Aire Acondicionado."
  }
];

/* ---------- Referencias al DOM ---------- */

const listaAlbumes = document.querySelector("#lista-albumes");
const detalleAlbum = document.querySelector("#detalle-album");

const filtroTodos = document.querySelector("#filtro-todos");
const filtroRedondos = document.querySelector("#filtro-redondos");
const filtroFundamentalistas = document.querySelector("#filtro-fundamentalistas");
const botonesFiltro = document.querySelectorAll(".filtro-banda");

// Posiciones (dentro del array albumes) de los álbumes que se ven ahora.
// Sirve para saber qué álbum es cada tarjeta cuando hay un filtro activo.
let albumesVisibles = [];

/* ---------- Texto de la banda a partir de su clave ---------- */

function nombreBanda(banda) {
  if (banda === "redondos") {
    return "Patricio Rey y sus Redonditos de Ricota";
  } else {
    return "Indio Solari y Los Fundamentalistas del Aire Acondicionado";
  }
}

/* ---------- Dibuja las tarjetas según el filtro elegido ---------- */

function mostrarAlbumes(filtro) {
  let html = "";
  albumesVisibles = [];

  for (let i = 0; i < albumes.length; i++) {
    const album = albumes[i];

    if (filtro === "todos" || album.banda === filtro) {
      albumesVisibles.push(i);

      html += `
        <div class="col-6 col-md-4 col-lg-3">
          <button type="button" class="album card h-100 w-100 text-start bg-dark text-white border-secondary">
            <img src="${album.imagen}" class="card-img-top" alt="Tapa de ${album.titulo}">
            <div class="card-body">
              <h3 class="h6 card-title">${album.titulo}</h3>
              <p class="card-text small mb-0">${album.anio}</p>
            </div>
          </button>
        </div>
      `;
    }
  }

  listaAlbumes.innerHTML = html;

  // Cada tarjeta nueva necesita su propio evento de clic.
  // Como j se declara con let, cada clic "recuerda" el j de su tarjeta.
  const tarjetas = document.querySelectorAll(".album");
  for (let j = 0; j < tarjetas.length; j++) {
    tarjetas[j].addEventListener("click", function () {
      mostrarDetalle(albumesVisibles[j]);
    });
  }
}

/* ---------- Muestra el detalle del álbum elegido ---------- */

function mostrarDetalle(posicion) {
  const album = albumes[posicion];

  detalleAlbum.innerHTML = `
    <div class="row g-3 align-items-center">
      <div class="col-12 col-md-4">
        <img src="${album.imagen}" class="img-fluid rounded" alt="Tapa de ${album.titulo}">
      </div>
      <div class="col-12 col-md-8">
        <h2 class="h4">${album.titulo} <span class="text-secondary">(${album.anio})</span></h2>
        <p class="mb-2">${nombreBanda(album.banda)}</p>
        <p class="mb-0">${album.descripcion}</p>
      </div>
    </div>
  `;
  detalleAlbum.hidden = false;
}

/* ---------- Marca cuál filtro está activo ---------- */

function marcarFiltro(botonElegido) {
  for (let i = 0; i < botonesFiltro.length; i++) {
    botonesFiltro[i].classList.remove("active");
  }
  botonElegido.classList.add("active");
}

/* ---------- Eventos de los filtros ---------- */

filtroTodos.addEventListener("click", function () {
  marcarFiltro(filtroTodos);
  detalleAlbum.hidden = true;
  mostrarAlbumes("todos");
});

filtroRedondos.addEventListener("click", function () {
  marcarFiltro(filtroRedondos);
  detalleAlbum.hidden = true;
  mostrarAlbumes("redondos");
});

filtroFundamentalistas.addEventListener("click", function () {
  marcarFiltro(filtroFundamentalistas);
  detalleAlbum.hidden = true;
  mostrarAlbumes("fundamentalistas");
});

/* ---------- Al cargar la página se muestran todos ---------- */

mostrarAlbumes("todos");