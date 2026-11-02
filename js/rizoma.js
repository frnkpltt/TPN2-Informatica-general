// rizoma.js — Etapa 1, paso 1: esfera de puntos

const RADIO = 250;
const CANT_ANONIMOS = 500;
const CANT_FOTOS = 33; // después vendrá de archivo.json

let anonimos = [];
let fotos = [];

function setup() {
  const contenedor = document.querySelector('#rizoma');
  const lienzo = createCanvas(contenedor.clientWidth, contenedor.clientHeight, WEBGL);
  lienzo.parent(contenedor);

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
}

function windowResized() {
  const contenedor = document.querySelector('#rizoma');
  resizeCanvas(contenedor.clientWidth, contenedor.clientHeight);
}