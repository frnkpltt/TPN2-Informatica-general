const hitos = [
    {
        anio: '1949',
        titulo: 'Nacimiento del Indio Solari',
        descripcion: 'El 17 de enero nace Carlos Alberto Solari, en Paraná, Entre Ríos.',
        imagen: 'img/linea-de-tiempo/1949.jpg'
    },
    {
        anio: '1960s',
        titulo: 'Infancia en La Plata',
        descripcion: 'El Indio y su familia se mudan a la ciudad de La Plata, en Buenos Aires. Allí es donde conoce a Isa Portugheis, quien terminó siendo baterista de Los Redondos.',
        imagen: 'img/linea-de-tiempo/1960.jpg'
    },
    {
        anio: '1970s',
        titulo: 'Juventud en La Plata',
        descripcion: 'El Indio se queda con la casa de su familia en la ciudad, luego de que ellos se mudaran a Valeria del Mar. En esas épocas de juventud comenzó a formar sus círculos de músicos amigos y a fundar el núcleo fundacional de la mítica banda de Los Redondos.',
        imagen: 'img/linea-de-tiempo/1970.jpg'
    },
    {
        anio: '1973',
        titulo: 'Casamiento',
        descripcion: 'En este año el Indio se casa con su novia Andrea, a partir de quien conoce a otros futuros integrantes de la banda, como Skay y la Negra Poli.',
        imagen: 'img/linea-de-tiempo/1973.jpg'
    },
    {
        anio: '1978',
        titulo: 'Show debut de Los Redondos',
        descripcion: 'Se presentan como banda por primera vez el 7 de enero en el bar El Polaco en la provincia de Salta. El contexto sociopolítico del país era complejo, al encontrarse en plena dictadura. La banda existió como resistencia ante la violencia institucional.',
        imagen: 'img/linea-de-tiempo/1978.jpg'
    },
    {
        anio: '1980s',
        titulo: 'Desarrollo de la banda',
        descripcion: 'La banda hace shows en vivo a lo largo de los años, moviéndose en un circuito underground.',
        imagen: 'img/linea-de-tiempo/1980.jfif'
    },
    {
        anio: '1985',
        titulo: 'Primer disco',
        descripcion: 'La banda edita su primer disco Gulp!, y la discografía siguió creciendo a partir de allí, sacando discos de gran reconocimiento como Oktubre.',
        imagen: 'img/linea-de-tiempo/1985.jfif'
    },
    {
        anio: '1989',
        titulo: 'Segundo casamiento',
        descripcion: 'Luego de separarse con Andrea, el Indio contrae matrimonio con Virginia Mones Ruiz, “Viru”, quien lo acompañó hasta su muerte.',
        imagen: 'img/linea-de-tiempo/1989.jfif'
    },
    {
        anio: '1990s',
        titulo: 'Popularización de la banda',
        descripcion: 'La música de Los Redondos comienza a sonar cada vez más y el público argentino acude a recitales masivos para escucharlos. Generan una fuerte identificación con sus seguidores y encuentran un estilo único.',
        imagen: 'img/linea-de-tiempo/1990.jpg'
    },
    {
        anio: '2000',
        titulo: 'Nacimiento de su hijo',
        descripcion: 'Bruno, el único hijo del Indio, nace en los 2000s luego de que el matrimonio se mude a su residencia en Parque Leloir, Buenos Aires.',
        imagen: 'img/linea-de-tiempo/2000.jpg'
    },
    {
        anio: '2001',
        titulo: 'Quiebre de la banda',
        descripcion: 'Los Redondos se separan en su mayor auge, sin dar demasiadas explicaciones y dejando a miles de fanáticos con el corazón partido.',
        imagen: 'img/linea-de-tiempo/2001.jpg'
    },
    {
        anio: '2004',
        titulo: 'Nueva etapa',
        descripcion: 'El Indio da inicio a una nueva etapa en su carrera junto a la banda Los Fundamentalistas del Aire Acondicionado y sacando álbumes solistas como El Tesoro de los Inocentes. Su último disco solista fue El Ruiseñor, el Amor y la Muerte en 2018.',
        imagen: 'img/linea-de-tiempo/2004.jpg'
    },
    {
        anio: '2016',
        titulo: 'Parkinson',
        descripcion: 'El Indio confirma públicamente que sufre de esta enfermedad, a la que apodó “Mister Parkinson”.',
        imagen: 'img/linea-de-tiempo/2016.jfif'
    },
    {
        anio: '2017',
        titulo: 'Show en Olavarría',
        descripcion: 'Los Fundamentalistas se presentaron junto al Indio por última vez el 11 de marzo de ese año, con un show gigante de aproximadamente 250.000 personas. Dos personas perdieron la vida debido a la difícil capacidad de control ante la masividad. El Indio ya se veía claramente afectado por el parkinson y este episodio aceleró el deterioro.',
        imagen: 'img/linea-de-tiempo/2017.jpg'
    },
    {
        anio: '2021-2023',
        titulo: 'Últimos proyectos',
        descripcion: 'El Indio continuó creando proyectos musicales, como El Mister y los Marsupiales Extintos, sin sacar ningún álbum nuevo, solo sencillos. En 2023 confirma su retiro oficial de los escenarios, debido al profundo avance de su enfermedad.',
        imagen: 'img/linea-de-tiempo/2023.jfif'
    },
    {
        anio: '2026',
        titulo: 'Título de Honoris Causa',
        descripcion: 'En mayo recibe el Doctorado Honoris Causa por parte de la Universidad de Buenos Aires, en reconocimiento a su amplia carrera e influencia social.',
        imagen: 'img/linea-de-tiempo/2026.jpg'
    },
    {
        anio: '2026',
        titulo: 'Fallecimiento',
        descripcion: 'El 5 de junio el Indio fallece a causa de un ACV provocado por el parkinson, en su casa en Parque Leloir. La noticia conmovió a millones de personas, que se movilizaron en un sentido funeral el 7 de junio en Parque Domínico en Avellaneda, Buenos Aires. Duró 18 horas y se ocuparon unas 60 cuadras de fila para poder dar el último adiós a un gran músico, figura y referente de la historia argentina.',
        imagen: 'img/linea-de-tiempo/2026-2.jpg'
    },
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
        delay: 40,
        cursor: '', // Sin cursor parpadeante (las comillas vacías lo ocultan)

        // Esta función se ejecuta cada vez que la máquina escribe una letra
        // "letra" es el carácter que está por escribir y "nodo" es ese carácter
        // ya preparado para mostrarse en la página
        onCreateTextNode: function (letra, nodo) {
            // Baja la página hasta que se vea el borde inferior de la tarjeta,
            // así siempre queda a la vista lo último que se escribió
            tarjeta.scrollIntoView({ block: 'end' });
            // Le devuelvo la letra a la librería para que la muestre.
            // Sin esta línea el texto no aparece en la página

            return nodo;
        }
    });

    maquina
        .pasteString('<img src="' + hito.imagen + '" alt="' + hito.titulo + '" class="img-hito">')
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