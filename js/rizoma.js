// rizoma.js — Etapa 1, paso 1: esfera de puntos

const RADIO = 250;
const CANT_ANONIMOS = 500;
const CANT_FOTOS = 33; // después vendrá de archivo.json
const RADIO_CLIC = 25;   // tolerancia en px (pensada para el dedo)

let camara;
let inicioX = 0;
let inicioY = 0;
let seleccionada = null;

let anonimos = [];
let fotos = [];

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

  // La multitud
  for (let i = 0; i < CANT_ANONIMOS; i++) {
    anonimos.push(puntoEnEsfera(RADIO));
  }

  // Los recuerdos
  for (let i = 0; i < CANT_FOTOS; i++) {
    fotos.push({ id: 'p' + i, pos: puntoEnEsfera(RADIO) });
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
  orbitControl();
  // Dónde cae cada recuerdo en la pantalla, con la cámara de este cuadro
  for (let i = 0; i < fotos.length; i++) {
    fotos[i].pantalla = worldToScreen(fotos[i].pos);
  }
  // Multitud: puntos chicos y tenues
  stroke(255, 120);
  strokeWeight(2);
  beginShape(POINTS);
  for (let i = 0; i < anonimos.length; i++) {
    vertex(anonimos[i].x, anonimos[i].y, anonimos[i].z);
  }
  endShape();

  // Recuerdos: puntos grandes en rojo
  stroke(220, 0, 0);
  strokeWeight(8);
  beginShape(POINTS);
  for (let i = 0; i < fotos.length; i++) {
    vertex(fotos[i].pos.x, fotos[i].pos.y, fotos[i].pos.z);
  }
  endShape();
  // Recuerdo seleccionado
  if (seleccionada !== null) {
    stroke(255);
    strokeWeight(14);
    beginShape(POINTS);
    vertex(seleccionada.pos.x, seleccionada.pos.y, seleccionada.pos.z);
    endShape();
  }
}

function windowResized() {
  const contenedor = document.querySelector('#rizoma');
  resizeCanvas(contenedor.clientWidth, contenedor.clientHeight);
}

function mousePressed() {
  inicioX = mouseX;
  inicioY = mouseY;
}

function mouseReleased() {
  // ¿Fue un arrastre? Entonces no es clic
  if (dist(mouseX, mouseY, inicioX, inicioY) > 5) return;

  // ¿Fue fuera del canvas?
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;

  const foto = buscarFotoCercana(mouseX, mouseY);
  if (foto !== null) {
    seleccionada = foto;
    console.log('Clic en', foto.id);
  }
}

function buscarFotoCercana(x, y) {
  let elegida = null;
  let menorDistCamara = Infinity;

  for (let i = 0; i < fotos.length; i++) {
    const f = fotos[i];
    const distPantalla = dist(x, y, f.pantalla.x, f.pantalla.y);

    if (distPantalla < RADIO_CLIC) {
      // Entre las candidatas, la más cercana a la cámara (la de adelante)
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