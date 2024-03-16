/* SCRIPT 1 Imagenes: Carrusel */

// Array con todas las imagenes que nos interesan:
var imagenes = document.getElementsByClassName('imagen');
var tamañoArray = imagenes.length;
var imagenActual = 0;

// Función para mover a la imagen siguiente
function imagenSiguiente() {
    imagenActual = (imagenActual + 1) % tamañoArray;
    actualizarImagenes();
}

// Función para mover a la imagen anterior
function imagenAnterior() {
    imagenActual = (imagenActual - 1 + tamañoArray) % tamañoArray;
    actualizarImagenes();
}


// Función para actualizar las imágenes en el carrusel
function actualizarImagenes() {
    for (let elemento = 0; elemento < tamañoArray; elemento++) {
        imagenes[elemento].style.transition = 'transform 0.5s';
        imagenes[elemento].style.transform = `translateX(${(elemento - imagenActual) * 100}%)`;
    }
}

actualizarImagenes()

/* SCRIPT 2 - Imagenes: Galería interactiva de imágenes */

var productos = document.getElementsByTagName('img'); // Devuelve una colección con todas las fotos de la página. Solo me interesan producto 1-3 y novedad 1-3 por lo que primero tendré que averiguar cuales son.

// Esta linea es de debug, no hace nada al script pero me imprime que foto es cual para seleccionarla en el nodelist. Utilizar esta forma de acceder tiene un problema, y es que si se añaden nuevas fotos nos fastidiaría, podría utilizar la ruta relativa para acceder a las fotos pero serían muchas líneas de código extras, y no tenemos pensado añadir más fotos a la práctica. 


for (var i = 0; i < productos.length; i++) {
    console.log(i + productos[i].src);
}

// Me interesan del 7 al 14.

var producto1 = productos[7]
var producto2 = productos[8]
var producto3 = productos[9]
var producto4 = productos[10]
var texto1 = "Super Producto Recién llegado 1"
var texto2 = "Super Producto Recién llegado 2"
var texto3 = "Super Producto Recién llegado 3"
var texto4 = "Super Producto Recién llegado 4"


var novedad1 = productos[11]
var novedad2 = productos[12]
var novedad3 = productos[13]
var novedad4 = productos[14]
var texto5 = "Super Producto Recién llegado 5"
var texto6 = "Super Producto Recién llegado 6"
var texto7 = "Super Producto Recién llegado 7"
var texto8   = "Super Producto Recién llegado 8"



// Una vez seleccionados se utilizan dentro de la función.

function mostrarImagen(imagen, texto) {
    

    // Función auxiliar para "Cerrar" la galería, lo que hace es eliminarlo del dom directamente.
    
    function cerrar() {
        document.body.removeChild(fondoGaleria)
    }
    
    // Añade los elementos al DOM.

    var fondoGaleria = document.createElement('div');
    fondoGaleria.className = 'galeria-fondo';

    var imagenGaleria = document.createElement('img');
    imagenGaleria.src = imagen.src;
    imagenGaleria.className = 'galeria-img';

    var textoGaleria = document.createElement('p');
    textoGaleria.textContent = texto;
    textoGaleria.className = 'galeria-texto';
    textoGaleria.style.fontSize = "3em";

    var cerrarGaleria = document.createElement('button');
    cerrarGaleria.textContent = 'Cerrar';
    cerrarGaleria.className = 'galeria';
    cerrarGaleria.onclick = cerrar

    fondoGaleria.appendChild(imagenGaleria);
    fondoGaleria.appendChild(textoGaleria);
    fondoGaleria.appendChild(cerrarGaleria);
    document.body.appendChild(fondoGaleria);
}
