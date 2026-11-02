// rizoma.js — Etapa 1, paso 3: recorrido, líneas y guardado

const RADIO = 250;
const CANT_ANONIMOS = 500;
const CANT_FOTOS = 33;    // después vendrá de archivo.json
const RADIO_CLIC = 25;

let anonimos = [];
let fotos = [];
let fotosPorId = {};      // NUEVO: diccionario id → foto
let recorrido = [];       // NUEVO: ids en el orden en que se visitan

let camara;
let inicioX = 0;
let inicioY = 0;

let c1, c2, c3 = 255;

function setup() {
  const contenedor = document.querySelector('#rizoma');
  const lienzo = createCanvas(contenedor.clientWidth, contenedor.clientHeight, WEBGL);
  lienzo.parent(contenedor);
  camara = createCamera();

  // Semilla propia de cada visitante
  let semilla = localStorage.getItem('rizoma-semilla');
  if (semilla === null) {
    semilla = floor(random(1000000));
    localStorage.setItem('rizoma-semilla', semilla);
  }
  randomSeed(Number(semilla));

  // NUEVO: primero los recuerdos, para que cambiar la multitud no los mueva
  for (let i = 0; i < CANT_FOTOS; i++) {
    const foto = { id: 'p' + i, pos: puntoEnEsfera(RADIO) };
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
}

function puntoEnEsfera(radio) {
  const v = createVector(randomGaussian(), randomGaussian(), randomGaussian());
  v.normalize();
  v.mult(radio);
  return v;
}

function draw() {
  background(0);
  orbitControl();

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
  if (dist(mouseX, mouseY, inicioX, inicioY) > 5) return;
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;

  const foto = buscarFotoCercana(mouseX, mouseY);
  if (foto !== null) {
    agregarAlRecorrido(foto);   // NUEVO (antes: seleccionada = foto)
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
}

// ---------- Ventana ----------

function windowResized() {
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