// Encuestas/Valoraciones Interactivas:

// Agrega encuestas o valoraciones interactivas para recopilar la retroalimentación de los usuarios.
// El resultado de las encuestas/valoraciones, deben mostrarse en la web, integrándolo como nuevos elementos.


function mostrarVentana() {
    document.getElementById('ventanaEmergente').style.display = 'block';
}

function iluminarEstrellas(numero) {
    var estrellas = document.getElementById('estrellas').getElementsByTagName('i');
    for (var i = 0; i < estrellas.length; i++) {
        if (i < numero) {
            estrellas[i].className = 'fas fa-star'; // Estrella llena
        } else {
            estrellas[i].className = 'far fa-star'; // Estrella vacía
        }
    }
}

function enviarValoracion(valoracion) {
    var comentario = document.getElementById('comentario').value;
    window.location.href = 'mailto:acatguarino@cifpfpbmoll.eu?subject=Valoración&body=Valoración: ' + valoracion + ' estrellas. Comentario: ' + comentario;
    document.getElementById('ventanaEmergente').style.display = 'none'; // Cierra la ventana emergente
}
