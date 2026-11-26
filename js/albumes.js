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
    imagen: "img/albumes/gulp.jpeg",
    descripcion: "Editado en 1985 bajo absoluta autogestión, Gulp! es el punto de partida discográfico del universo Solari y el primer testimonio en estudio de Patricio Rey y sus Redonditos de Ricota. Grabado en los estudios de Lito Vitale, el álbum traduce la energía teatral, nocturna e irreverente que el grupo venía gestando en el circuito under porteño y platense de los años ochenta. En esta primera piedra fundacional, el Indio Solari comienza a trazar su propio lenguaje: una voz magnética que combina ironía, humor ácido y poesía críptica para retratar la noche y sus personajes. Acompañado por el pulso nervioso, bailable y experimental de unos Redondos en estado crudo, el disco dio vida a clásicos inmediatos como «La bestia pop», «Barbazul versus el amor letal», «Ñam fri fruli fali fru» y «Criminal mambo», abriendo las puertas de una mitología única en el rock argentino."
    },
  {
    titulo: "Oktubre",
    anio: 1986,
    banda: "redondos",
    imagen: "img/albumes/oktubre.jpeg",
    descripcion: "Publicado en 1986, Oktubre marca el primer gran giro estético y conceptual dentro del universo del Indio Solari, consolidando a Patricio Rey y sus Redonditos de Ricota como una fuerza artística imparable. Inspirado en la simbología de las revoluciones históricas —especialmente la Revolución Rusa de 1917— y potenciado por la icónica portada en rojo, negro y blanco de Rocambole, el disco deja atrás la fiesta subterránea del debut para sumergirse en un clima oscuro, épico y combativo. En este segundo capítulo, la pluma del Indio adquiere un filo político, poético y existencial que se volvería marca registrada, tejiendo imágenes de resistencia, desencanto y crítica al poder. Impulsado por una banda que abraza una sonoridad más densa, sombría y cercana al post-punk, el álbum dio origen a himnos eternos como «Jijiji», «Música para pastillas», «Fuegos de Octubre» y «Preso en mi ciudad», cimentando para siempre la mística ricotera."
  },
  {
    titulo: "Un baión para el ojo idiota",
    anio: 1988,
    banda: "redondos",
    imagen: "img/albumes/baión.jpeg",
    descripcion: "Editado en 1988, Un baión para el ojo idiota marca el salto del universo Solari desde el culto subterráneo hacia la masividad, con Patricio Rey y sus Redonditos de Ricota sonando más potentes, directos y afiatados que nunca. Con una producción más robusta y visceral, el álbum captura el pulso social y el auge de la cultura mediática en la Argentina de fines de los años ochenta. En este tercer capítulo, el Indio Solari afila su mirada irónica sobre la alienación televisiva, el consumo y los márgenes urbanos, alternando crudeza callejera con pasajes de profunda sensibilidad. Respaldado por una banda en estado de gracia que entrega un rock filoso y arrollador, el disco alumbró clásicos infaltables como «Todo un palo», «Masacre en el puticlub», «Vencedores vencidos» y «Aquella solitaria vaca cubana», transformando sus canciones en verdaderos rituales colectivos."
    },
   {
    titulo: "¡Bang! ¡Bang!... Estás liquidado",
    anio: 1989,
    banda: "redondos",
    imagen: "img/albumes/bang.jpeg",
    descripcion: "Publicado en 1989, en plena crisis hiperinflacionaria argentina, ¡Bang! ¡Bang!... Estás liquidado representa el costado más crudo, sombrío y callejero dentro del universo Solari, con Patricio Rey y sus Redonditos de Ricota apostando por un sonido despojado, seco y sin concesiones. Alejado de cualquier brillo artificial, el álbum funciona como una radiografía urgente y nocturna de una época convulsa. En este cuarto capítulo, el Indio Solari adopta un tono existencial, descarnado y empático para retratar los márgenes urbanos, la violencia cotidiana y la fragilidad humana en tiempos difíciles. Acompañado por una banda que suena austera, filosa y visceral —con el aporte decisivo de los vientos que acentúan su clima dramático—, el disco dio vida a piezas fundamentales como «La parabellum del buen psicópata», «Héroe del whisky», «Nuestro amo juega al esclavo» y «Esa estrella era mi lujo», reafirmando la independencia estética del grupo en el umbral de los años noventa."
    },
  {
    titulo: "La mosca y la sopa",
    anio: 1991,
    banda: "redondos",
    imagen: "img/albumes/mosca.jpeg",
    descripcion: "Editado en 1991, La mosca y la sopa representa el momento de consagración popular definitiva dentro del universo Solari, con Patricio Rey y sus Redonditos de Ricota alcanzando una madurez sonora luminosa, rockera y contundente. Con una producción cristalina que potencia tanto el impacto de estadio como los climas nocturnos, el álbum abre una nueva década para la banda en lo más alto de su convocatoria. En esta quinta entrega, el Indio Solari construye una galería entrañable de personajes marginales, historias de amor desencantado y postales urbanas con una lírica más directa y emotiva, sin resignar su agudeza poética. Sosteniendo ese relato con riffs memorables y un pulso rítmico arrollador, el grupo dio vida a verdaderos himnos generacionales como «Mi perro Dinamita», «Un poco de amor francés», «Queso ruso» y «Tarea fina», grabados a fuego en el cancionero popular argentino."
     },
  {
    titulo: "Lobo suelto",
    anio: 1993,
    banda: "redondos",
    imagen: "img/albumes/lobo.jpeg",
    descripcion: "Publicado en 1993 como la primera entrega del ambicioso proyecto doble de Patricio Rey y sus Redonditos de Ricota, Lobo suelto (Volumen 1) encarna la faceta más eléctrica, salvaje y urgente dentro del universo Solari. Grabado entre Buenos Aires y Los Ángeles, el disco marca un salto en la ambición sonora del grupo, sumando potencia y nuevos matices sin perder su esencia visceral. En este primer tramo del díptico, el Indio Solari adopta una mirada afilada, irónica y cargada de tensión para explorar el instinto, la desconfianza y la ferocidad del mundo moderno. Sostenido por una banda que suena arrolladora y eléctrica, el álbum reúne piezas fundamentales como «Yo caníbal», «Rock para el negro Atila», «Un ángel para tu soledad» y «Susanita», consolidando el costado más feroz y directo de aquella obra doble."
    },
  {
    titulo: "Cordero atado",
    anio: 1993,
    banda: "redondos",
    imagen: "img/albumes/cordero.jpeg",
    descripcion: "Editado en 1993 como la segunda parte del díptico iniciado con Lobo suelto, Cordero atado (Volumen 2) muestra el costado más nocturno, experimental y reflexivo dentro del universo de Patricio Rey. Mientras su predecesor apostaba por la urgencia eléctrica, esta entrega abre espacio a climas más densos, texturas envolventes y búsquedas sonoras que amplían los límites habituales del grupo. En este tramo del viaje, el Indio Solari despliega una lírica más introspectiva, melancólica y cargada de símbolos sobre la vulnerabilidad, el paso del tiempo y el desencanto. Sostenido por una banda dispuesta a explorar nuevos matices y atmósferas hipnóticas, el álbum dio vida a gemas como «Espejismo», «La hija del fletero», «Etiqueta negra» y «Caña seca y un membrillo», completando una de las cumbres creativas más ricas de toda su obra."
    },
  {
    titulo: "Luzbelito",
    anio: 1996,
    banda: "redondos",
    imagen: "img/albumes/luzbelito.jpeg",
    descripcion: "Editado en 1996, Luzbelito marca un giro conceptual y sonoro profundo dentro del universo Solari, presentando a Patricio Rey y sus Redonditos de Ricota en una faceta oscura, teológica y casi cinematográfica. Con una producción ambiciosa grabada entre Brasil, Estados Unidos y Buenos Aires —y un recordado arte en formato libro de Rocambole—, el disco adopta la figura del hijo del demonio para explorar la condición humana desde las sombras. En esta obra densa y filosófica, el Indio Solari despliega una lírica cargada de metáforas sobre la fe, la culpa, el poder y los demonios íntimos, sosteniendo una narrativa inquietante de principio a fin. Acompañado por una banda que expande su paleta hacia climas más pesados, sinfónicos y envolventes, el álbum dio vida a piezas monumentales como «Luzbelito y las sirenas», «Juguetes perdidos», «Blues de la artillería» y «Mariposa Pontiac - Rock del país», consolidando uno de los puntos artísticos más altos de su historia."
  },
  {
    titulo: "Último bondi a Finisterre",
    anio: 1998,
    banda: "redondos",
    imagen: "img/albumes/finisterre.jpeg",
    descripcion: "Publicado en 1998, Último bondi a Finisterre representa la ruptura estética más audaz de Patricio Rey y sus Redonditos de Ricota dentro del universo Solari, abrazando de lleno la tecnología, la electrónica y la experimentación digital de fines de siglo. Lejos de acomodarse en su sonido clásico de estadio, la banda se reinventa en estudio con samplers, programaciones y texturas industriales que descolocaron y fascinaron en partes iguales. En este viaje hacia el fin de una era, el Indio Solari construye un relato futurista, desencantado y magnético sobre la soledad moderna, los excesos y el vértigo del nuevo milenio, modulando su voz entre lo crudo y lo procesado. Impulsado por una banda que se anima a deformar su propio ADN sonoro, el disco alumbró piezas hipnóticas como «Gualicho», «Las increíbles andanzas del Capitán Buscapina en Cybersiberia», «Esto es to-to-todo amigos!» y «La pequeña novia del carioca», demostrando una inquebrantable vocación de riesgo artístico."
  },
  {
    titulo: "Momo Sampler",
    anio: 2000,
    banda: "redondos",
    imagen: "img/albumes/momo.jpeg",
    descripcion: "Editado en el año 2000, Momo Sampler funciona como el capítulo final de Patricio Rey y sus Redonditos de Ricota dentro del universo Solari y, al mismo tiempo, como la obra más barroca, nocturna y experimental de esa etapa. Concebido bajo la estética del carnaval, las máscaras y la farsa, el álbum profundiza la exploración electrónica iniciada en su predecesor, combinando bases programadas, samplers, cuerdas y guitarras en una trama densa y hipnótica. En este cierre de ciclo, el Indio Solari despliega una lírica críptica, desencantada y cargada de símbolos sobre el fin de fiesta, la decadencia social y la condición humana tras el disfraz. Sostenido por una banda que lleva su laboratorio sonoro al límite, el disco dio vida a piezas complejas y fascinantes como «Templo de Momo», «Pool, Averna y papusa», «Murga purga» y «Una piba con la remera de Greenpeace», despidiendo la era ricotera en lo más alto de su audacia creativa."
  },
  {
    titulo: "El tesoro de los inocentes (Bingo Fuel)",
    anio: 2004,
    banda: "fundamentalistas",
    imagen: "img/albumes/tesoro.jpeg",
    descripcion: "Editado en 2004, El tesoro de los inocentes (Bingo Fuel) inaugura la etapa solista dentro del universo Solari tras la disolución de Los Redondos y marca el nacimiento de Los Fundamentalistas del Aire Acondicionado. Grabado en su estudio Luzbola, el disco funciona como una declaración de independencia creativa donde el Indio asume el control total de la producción y del rumbo musical, manteniendo intacta su mística y su capacidad de convocatoria. En este nuevo comienzo, el Indio Solari despliega una lírica intensa, emotiva y llena de giros cinematográficos, donde conviven la ternura, la crítica social y la épica rockera. Arropado por una banda nueva, versátil y de enorme potencia sonora que logra tender puentes entre su legado y el presente, el álbum dio vida a clásicos inmediatos como «Nike es la cultura», «El tesoro de los inocentes», «Pabellón séptimo (Relato de Horacio)» y «La piba de blockbuster», demostrando que su universo seguía más vivo que nunca."
  },
  {
    titulo: "Porco rex",
    anio: 2007,
    banda: "fundamentalistas",
    imagen: "img/albumes/porcorex.jpeg",
    descripcion: "Publicado en 2007, Porco Rex consolida la alianza entre el Indio Solari y Los Fundamentalistas del Aire Acondicionado, mostrando al proyecto solista en un momento de plenitud creativa y potencia rockera. Grabado nuevamente en Luzbola y con la participación especial de Andrés Calamaro en «Veneno paciente», el álbum equilibra la crudeza guitarrera con pasajes melódicos de gran sensibilidad. En este segundo capítulo solista, el Indio despliega una poética más directa, visceral y emotiva, donde el paso del tiempo, el desencanto y la resistencia cotidiana toman el centro de la escena. Impulsado por unos Fundamentalistas cada vez más afiatados y contundentes, el disco alumbró canciones fundamentales de su repertorio como «Flight 956», «Porco Rex», «Martinis y tafiroles» y «Y mientras tanto el sol se muere», reafirmando su vigencia absoluta en la cultura popular argentina."
    },
  {
    titulo: "El perfume de la tempestad",
    anio: 2010,
    banda: "fundamentalistas",
    imagen: "img/albumes/perfume.jpeg",
    descripcion: "Editado en 2010, El perfume de la tempestad muestra la faceta más barroca, extensa y compleja de la etapa junto a Los Fundamentalistas del Aire Acondicionado dentro del universo Solari. Con un sonido monumental, cargado de capas guitarreras, vientos, coros y detalles cinematográficos, el álbum apuesta por climas densos y una arquitectura musical ambiciosa que exige una escucha atenta. En esta tercera entrega solista, el Indio Solari afila su mirada filosófica y desencantada sobre la condición humana, el paso del tiempo, el poder y los fantasmas íntimos, sosteniendo una lírica tan críptica como conmovedora. Respaldado por una banda que funciona como una verdadera orquesta eléctrica de precisión, el disco dio vida a piezas notables como «Todos a los botes!», «Black Russian», «Torito es muerto» y «¡Chau! ¡Mohicano!», profundizando la dimensión épica y oscura de su obra."
  },
  {
    titulo: "Pajaritos, bravos muchachitos",
    anio: 2013,
    banda: "fundamentalistas",
    imagen: "img/albumes/pajaritos.jpeg",
    descripcion: "Publicado en 2013, Pajaritos, bravos muchachitos representa uno de los momentos más luminosos, directos y celebrados de la etapa junto a Los Fundamentalistas del Aire Acondicionado dentro del universo Solari. Con un sonido rockero abierto y vibrante —y el histórico reencuentro en estudio con excompañeros ricoteros en «La pajarita pechiblanca»—, el álbum combina contundencia eléctrica con una calidez melódica muy marcada. En este cuarto capítulo solista, el Indio Solari alterna la ironía filosa y el pulso callejero con una mirada profundamente humana, nostálgica y celebratoria sobre la amistad, la memoria y el oficio de vivir. Impulsado por unos Fundamentalistas en plenitud sonora, el disco dio vida a canciones muy queridas por su público como «Había una vez...», «A los pájaros que cantan sobre las selvas de Internet», «Beemedobleve» y «Chau mohicano», sumando nuevos himnos a las ceremonias multitudinarias."
  },
  {
    titulo: "El ruiseñor, el amor y la muerte",
    anio: 2018,
    banda: "fundamentalistas",
    imagen: "img/albumes/ruisenor.jpeg",
    descripcion: "Editado en 2018, El ruiseñor, el amor y la muerte representa el costado más íntimo, testamentario y emotivo dentro del universo Solari, reflejando una etapa de profunda introspección personal y artística. Con una portada protagonizada por sus propios padres y un repertorio que dialoga abiertamente con sus influencias, sus afectos y el paso del tiempo, el álbum respira una sensibilidad única en toda su discografía. En este quinto trabajo solista, el Indio Solari entrega algunas de sus letras más conmovedoras, melancólicas y despojadas, abordando la memoria, la despedida y la belleza frente a la fragilidad humana sin perder su sello poético. Acompañado por unos Fundamentalistas del Aire Acondicionado que sostienen cada clima con elegancia, contundencia y sutileza, el disco dio vida a joyas como «Strangerdanger», «El martillo de las brujas (malleus maleficarum)», «Ostende Hotel» y «La moda no es vanguardia», reafirmando la vigencia de su voz y su universo creativo."
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