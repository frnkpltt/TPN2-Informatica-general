// rizoma.js — Etapa 1, paso 3: recorrido, líneas y guardado

const RADIO = 250;
const CANT_ANONIMOS = 500;

let ficha;
let fichaAbierta = false;

const RADIO_CLIC = 25;

let anonimos = [];
let fotos = [];
let fotosPorId = {};      // NUEVO: diccionario id → foto
let recorrido = [];       // NUEVO: ids en el orden en que se visitan

let camara;
let inicioX = 0;
let inicioY = 0;

let c1, c2, c3 = 255;

let vista = 'esfera';    // 'esfera' o 'lista'
let tarjetas = {};       // id → botón de la lista

async function setup() {
  const contenedor = document.querySelector('#rizoma');
  const lienzo = createCanvas(contenedor.clientWidth, contenedor.clientHeight, WEBGL);
  lienzo.parent(contenedor);
  camara = createCamera();

  const piezas = await cargarArchivo();   // NUEVO

  // Semilla propia de cada visitante
  let semilla = localStorage.getItem('rizoma-semilla');
  if (semilla === null) {
    semilla = floor(random(1000000));
    localStorage.setItem('rizoma-semilla', semilla);
  }
  randomSeed(Number(semilla));

  // Primero los recuerdos (ahora desde el JSON)
  for (let i = 0; i < piezas.length; i++) {
    const foto = {
      id: piezas[i].id,
      datos: piezas[i],               // NUEVO: todo lo que necesita la ficha
      pos: puntoEnEsfera(RADIO)
    };
    fotos.push(foto);
    fotosPorId[foto.id] = foto;
  }

  // Después la multitud
  for (let i = 0; i < CANT_ANONIMOS; i++) {
    anonimos.push(puntoEnEsfera(RADIO));
  }

  cargarRecorrido();  // NUEVO

  // NUEVO
  document.querySelector('#reiniciar').addEventListener('click', reiniciarRecorrido);
    prepararFicha();

} construirLista();
  actualizarLista();
  document.querySelector('#cambiarVista').addEventListener('click', cambiarVista);

  if (localStorage.getItem('rizoma-vista') === 'lista') {
    cambiarVista();
  }


async function cargarArchivo() {
  try {
    const respuesta = await fetch('js/archivo.json');
    if (!respuesta.ok) {
      throw new Error('Error HTTP ' + respuesta.status);
    }
    const datos = await respuesta.json();
    return datos.piezas;
  } catch (error) {
    console.error('No se pudo cargar el archivo:', error);
    return [];
  }
}


function puntoEnEsfera(radio) {
  const v = createVector(randomGaussian(), randomGaussian(), randomGaussian());
  v.normalize();
  v.mult(radio);
  return v;
}

function draw() {
  background(0);

  if (!fichaAbierta) {
    orbitControl();
  }
  // Dónde cae cada recuerdo en la pantalla, con la cámara de este cuadro
  for (let i = 0; i < fotos.length; i++) {
    fotos[i].pantalla = worldToScreen(fotos[i].pos);
  }

  dibujarMultitud();
  dibujarRecorrido();   // NUEVO
  dibujarRecuerdos();
}

// ---------- Dibujo ----------

function dibujarMultitud() {
  stroke(255, 120);
  strokeWeight(2);
  beginShape(POINTS);
  for (let i = 0; i < anonimos.length; i++) {
    vertex(anonimos[i].x, anonimos[i].y, anonimos[i].z);
  }
  endShape();
}

// NUEVO: el Line Loop del recorrido
function dibujarRecorrido() {
  if (recorrido.length < 2) return;

  noFill();
  stroke(c1, c2, c3);
  strokeWeight(1.5);
  beginShape();
  for (let i = 0; i < recorrido.length; i++) {
    const f = fotosPorId[recorrido[i]];
    if (f !== undefined) {
      vertex(f.pos.x, f.pos.y, f.pos.z);
    }
  }
  endShape(CLOSE);
}

// NUEVO: tres estados (sin visitar, visitada, actual)
function dibujarRecuerdos() {
  const actual = recorrido[recorrido.length - 1];  // undefined si está vacío

  for (let i = 0; i < fotos.length; i++) {
    const f = fotos[i];

    if (f.id === actual) {
      stroke(255);
      strokeWeight(14);
    } else if (recorrido.includes(f.id)) {
      stroke(255);
      strokeWeight(8);
    } else {
      stroke(220, 0, 0);
      strokeWeight(8);
    }
    point(f.pos.x, f.pos.y, f.pos.z);
  }
}

// ---------- Clic ----------

function mousePressed() {
  inicioX = mouseX;
  inicioY = mouseY;
}

function mouseReleased() {
    if (vista === 'lista') return;
   if (fichaAbierta) return;   // NUEVO: con la ficha abierta, la esfera no escucha

    if (dist(mouseX, mouseY, inicioX, inicioY) > 5) return;
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;

    const foto = buscarFotoCercana(mouseX, mouseY);
    if (foto !== null) {
      abrirPieza(foto);
  }
}

function buscarFotoCercana(x, y) {
  let elegida = null;
  let menorDistCamara = Infinity;

  for (let i = 0; i < fotos.length; i++) {
    const f = fotos[i];
    const distPantalla = dist(x, y, f.pantalla.x, f.pantalla.y);

    if (distPantalla < RADIO_CLIC) {
      const distCamara = dist(camara.eyeX, camara.eyeY, camara.eyeZ,
                              f.pos.x, f.pos.y, f.pos.z);
      if (distCamara < menorDistCamara) {
        menorDistCamara = distCamara;
        elegida = f;
      }
    }
  }
  return elegida;
}

// ---------- Recorrido (NUEVO) ----------

function agregarAlRecorrido(foto) {

  const ultimo = recorrido[recorrido.length - 1];
  if (foto.id === ultimo) return;   // la misma dos veces seguidas: nada

  recorrido.push(foto.id);
  guardarRecorrido();
    actualizarLista();  
  console.log('Recorrido:', recorrido);
}

function guardarRecorrido() {
  localStorage.setItem('rizoma-recorrido', JSON.stringify(recorrido));
}

function cargarRecorrido() {
  const guardado = localStorage.getItem('rizoma-recorrido');
  if (guardado !== null) {
    recorrido = JSON.parse(guardado);
  }
}

function reiniciarRecorrido() {
  recorrido = [];
  localStorage.removeItem('rizoma-recorrido');
    actualizarLista();
}

// ---------- Ventana ----------

function windowResized() {
    if (vista === 'lista') return;
  const contenedor = document.querySelector('#rizoma');
  resizeCanvas(contenedor.clientWidth, contenedor.clientHeight);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    c1 = random(0, 255);
    c2 = random(0, 255);
    c3 = random(0, 255);
  }
}

// ---------- Ficha ----------

let momentoApertura = 0;   // cuándo empezó a abrirse la ficha (arriba, con las otras variables)

function prepararFicha() {
  const elemento = document.querySelector('#ficha');
  ficha = new bootstrap.Offcanvas(elemento);

  // Empieza a abrirse: la esfera deja de escuchar y anotamos la hora
  elemento.addEventListener('show.bs.offcanvas', function () {
    fichaAbierta = true;
    momentoApertura = Date.now();
  });

  // Algo intenta cerrarla: si fu.e casi al instante, era un toque fantasma
  elemento.addEventListener('hide.bs.offcanvas', function (evento) {
    const pasado = Date.now() - momentoApertura;
    console.log('Intento de cierre a los', pasado, 'ms');   // temporal, para diagnosticar
    if (pasado < 500) {
      evento.preventDefault();
    }
  });

  // Terminó de cerrarse: la esfera vuelve a escuchar y se corta el video
  elemento.addEventListener('hidden.bs.offcanvas', function () {
    fichaAbierta = false;
    document.querySelector('#fichaMedio').replaceChildren();
  });
}

function mostrarFicha(foto) {
  const d = foto.datos;

  document.querySelector('#fichaTitulo').innerText = d.titulo;
  document.querySelector('#fichaDatos').innerText = textoFecha(d) + ' · ' + d.lugar;
  document.querySelector('#fichaDescripcion').innerText = d.descripcion;

  // Imagen o video
  const medio = document.querySelector('#fichaMedio');
  if (d.medio === 'video') {
    const marco = document.createElement('div');
    marco.classList.add('ratio', 'ratio-16x9');

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + d.src;
    iframe.title = d.alt;
    iframe.allowFullscreen = true;

    marco.append(iframe);
    medio.replaceChildren(marco);
  } else {
    const img = document.createElement('img');
    img.src = d.src;
    img.alt = d.alt;
    img.classList.add('img-fluid');
    medio.replaceChildren(img);
  }

  // Fuente
  const fuente = document.querySelector('#fichaFuente');
  fuente.innerText = d.fuente.autor;
  fuente.href = d.fuente.url;

  // Copia archivada: solo si existe
  const archivo = document.querySelector('#fichaArchivo');
  if (d.fuente.archivo) {
    archivo.href = d.fuente.archivo;
    archivo.hidden = false;
  } else {
    archivo.hidden = true;
  }

  ficha.show();
}

function textoFecha(d) {
  if (d.anio === null) return 's/f';
  if (d.anioAprox) return 'c. ' + d.anio;
  return String(d.anio);
}

// ---------- Vista de lista ----------

function imagenDe(d) {
  if (d.miniatura) return d.miniatura;     // si algún día hay miniaturas, se usan
  if (d.medio === 'video') return 'https://img.youtube.com/vi/' + d.src + '/hqdefault.jpg';
  return d.src;
}

function construirLista() {
  const contenedor = document.querySelector('#listaPiezas');

  for (let i = 0; i < fotos.length; i++) {
    const foto = fotos[i];
    const d = foto.datos;

    const columna = document.createElement('div');
    columna.classList.add('col');

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.classList.add('pieza');

    const img = document.createElement('img');
    img.src = imagenDe(d);
    img.alt = d.alt;
    img.loading = 'lazy';                  // carga las imágenes a medida que aparecen

    const titulo = document.createElement('span');
    titulo.classList.add('pieza-titulo');
    titulo.innerText = d.titulo;

    const fecha = document.createElement('span');
    fecha.classList.add('pieza-fecha');
    fecha.innerText = textoFecha(d);

    // Texto solo para lectores de pantalla ("visitado")
    const estado = document.createElement('span');
    estado.classList.add('estado', 'visually-hidden');

    boton.append(img);
    if (d.medio === 'video') {
      const marca = document.createElement('span');
      marca.classList.add('pieza-video');
      marca.innerText = '▶ Video';
      boton.append(marca);
    }
    boton.append(titulo, fecha, estado);

    boton.addEventListener('click', function () {
      abrirPieza(foto);
    });

    columna.append(boton);
    contenedor.append(columna);
    tarjetas[foto.id] = boton;
  }
}

function actualizarLista() {
  for (let i = 0; i < fotos.length; i++) {
    const id = fotos[i].id;
    const visitada = recorrido.includes(id);
    // toggle con segundo parámetro: true agrega la clase, false la quita
    tarjetas[id].classList.toggle('visitada', visitada);
    tarjetas[id].querySelector('.estado').innerText = visitada ? ' (visitado)' : '';
  }
}

function abrirPieza(foto) {
  agregarAlRecorrido(foto);
  mostrarFicha(foto);
}

function cambiarVista() {
  const esfera = document.querySelector('#rizoma');
  const lista = document.querySelector('#lista');
  const boton = document.querySelector('#cambiarVista');

  if (vista === 'esfera') {
    vista = 'lista';
    noLoop();                              // la esfera deja de dibujar
    esfera.hidden = true;
    lista.hidden = false;
    boton.innerText = 'Ver como esfera';
  } else {
    vista = 'esfera';
    lista.hidden = true;
    esfera.hidden = false;
    resizeCanvas(esfera.clientWidth, esfera.clientHeight);  // estaba oculto, medía 0
    loop();
    boton.innerText = 'Ver como lista';
  }
  localStorage.setItem('rizoma-vista', vista);
}