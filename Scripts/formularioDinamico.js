/* Script para mostrar los contenidos del formulario dinámicamente, y enseñar un popup al enviar. */


// Primero, accedemos al formulario usando su ID
var formulario = document.getElementById('formulario1');

// Luego, podemos acceder a los valores de cada campo del formulario y guardarlos en variables
var nombre = formulario.nombre;
var apellidos = formulario.apellidos;
var avatar = formulario.avatar;
var sexoH = formulario.sexoH.checked;
var sexoM = formulario.sexoM.checked;
var sexoO = formulario.sexoO.checked;
var email = formulario.email;
var numero = formulario.numero;
var condiciones = formulario.condiciones.checked;
var mensaje = formulario.mensaje;
var motivo = formulario.motivo;


function añadirComentario() {



    // Crear elementos antes de añadirlos al DOM

    var li = document.createElement('li');
    var imagenAvatar = document.createElement('img');
    var div = document.createElement('div');
    var h3NombreApellidos = document.createElement('h3');
    var pEmail = document.createElement('p');
    var pTelefono = document.createElement('p');
    var pMotivo = document.createElement('p');
    var pMensaje = document.createElement('p');


    // Rellenar los valores

    h3NombreApellidos.textContent = nombre.value + ' ' + apellidos.value;
    pEmail.textContent = 'Email: ' + email.value;
    pTelefono.textContent = 'Número de contacto: ' + numero.value;
    pMotivo.textContent = 'Motivo de contacto: ' + motivo.value;
    pMensaje.textContent = mensaje.value;

    imagenAvatar.src = avatar.value;
    imagenAvatar.width = 50;
    imagenAvatar.height = 50;


    // Añadir los elementos al div del comentario.

    div.appendChild(h3NombreApellidos);
    div.appendChild(pEmail);
    div.appendChild(pTelefono);
    div.appendChild(pMotivo);
    div.appendChild(pMensaje);
    li.appendChild(imagenAvatar);
    li.appendChild(div);

    // Añadir el comentario a la lista de comentarios

    document.getElementById('lista-comentarios').appendChild(li);

}

function validarFormulario() {

    // Expresiones para validar
    var regexUrl = /^https?:\/\/.*\.(jpg|png)$/;
    var regexNombre = /^[a-zA-Z\s]+/;
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var regexNumero = /^[0-9]{9}$/; 

    // Tests para ver si finalmente se validará.

    if (!regexNombre.test(nombre.value)) {
        alert('El nombre solo puede contener letras y espacios.');
        return false;
      }
    
      if (!regexNombre.test(apellidos.value)) {
        alert('Los apellidos solo pueden contener letras y espacios.');
        return false;
      }
    
      if (!regexEmail.test(email.value)) {
        alert('Introduce un email válido.');
        return false;
      }
    
      if (!regexNumero.test(numero.value)) {
        alert('9 Números para el móvil.');
        return false;
      }

      if (!regexUrl.test(avatar.value)) {
        alert('Solo funciona con imagenes acabadas en .jpg o .png,');
        return false;
      }

      else {
        añadirComentario()
      }

}


function lanzarComentario() {
    if (validarFormulario()) {
        añadirComentario()
    }
}



