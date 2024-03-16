// Coger cada campo que me interese con document.getElementById y asignarlo a una variable.

var entradaContraseña = document.getElementById('contraseña')
var entradaMayus = document.getElementById('mayus')
var entradaMinus = document.getElementById('minus')
var entradaNumeros = document.getElementById('numeros')
var entradaSimbolos = document.getElementById('simbolo')
var entradaTamaño = document.getElementById('tamaño')
var botonContraseña = document.getElementById('botonContraseña')
var leyenda = document.getElementById('leyenda')

var botonPass = document.getElementById('botonContraseña')

var tarjeta = document.getElementById("tarjeta").value;
var regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
var regexMasterCard = /^5[1-5][0-9]{14}$/;


// Onfocus = al hacer click en el campo, onblur al perder el focus. 

entradaContraseña.onfocus = function() {
    leyenda.style.display = "block";
}
entradaContraseña.onblur = function() {
    leyenda.style.display = "none";
}


// Empieza la validación aquí y cambia la clase según si está bien o mal la validación. El botón de enviar el formulario queda disabled hasta que se cumplan todas las condiciones.



    entradaContraseña.onkeyup = function() {
        var minusculas = /[a-z]/g;
        var mayusculas = /[A-Z]/g;
        var numeros = /[0-9]/g;
        var simbolos = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    
        // Verificar minúsculas
        if (minusculas.test(entradaContraseña.value)) {
            entradaMinus.classList.remove('mal');
            entradaMinus.classList.add('bien');
        } else {
            entradaMinus.classList.remove('bien');
            entradaMinus.classList.add('mal');
        }
    
        // Verificar mayúsculas
        if (mayusculas.test(entradaContraseña.value)) {
            entradaMayus.classList.remove('mal');
            entradaMayus.classList.add('bien');
        } else {
            entradaMayus.classList.remove('bien');
            entradaMayus.classList.add('mal');
        }
    
        // Verificar números
        if (numeros.test(entradaContraseña.value)) {
            entradaNumeros.classList.remove('mal');
            entradaNumeros.classList.add('bien');
        } else {
            entradaNumeros.classList.remove('bien');
            entradaNumeros.classList.add('mal');
        }
    
        // Verificar símbolos
        if (simbolos.test(entradaContraseña.value)) {
            entradaSimbolos.classList.remove('mal');
            entradaSimbolos.classList.add('bien');
        } else {
            entradaSimbolos.classList.remove('bien');
            entradaSimbolos.classList.add('mal');
        }
    
        // Verificar tamaño
        if (entradaContraseña.value.length >=8) {
            entradaTamaño.classList.remove('mal');
            entradaTamaño.classList.add('bien');
        } else {
            entradaTamaño.classList.remove('bien');
            entradaTamaño.classList.add('mal');
        }
    }


    // Función que valida el formulario de contraseña como tal. Contiene la validación y la manipulación de las clases para ver que te falta por introducir a medida que vas escribiendo.

    function validarContraseña() {
        var tarjeta = document.getElementById('tarjeta').value;
        var iconoTarjeta = document.getElementById('icono-tarjeta');
        var regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        var regexMasterCard = /^5[1-5][0-9]{14}$/;
    
        if (entradaMinus.classList.contains('bien') &&
            entradaMayus.classList.contains('bien') &&
            entradaNumeros.classList.contains('bien') &&
            entradaSimbolos.classList.contains('bien') &&
            entradaTamaño.classList.contains('bien')) {
            if (regexVisa.test(tarjeta)) {
                iconoTarjeta.innerHTML = '<i class="fa-brands fa-cc-visa"></i>';
                alert('Formulario enviado. Tu tarjeta introducida es: Visa');
                return true;
            } else if (regexMasterCard.test(tarjeta)) {
                iconoTarjeta.innerHTML = '<i class="fa-brands fa-cc-mastercard"></i>';
                alert('Formulario enviado. Tu tarjeta introducida es: MasterCard');
                return true;
            }
        } else {
            iconoTarjeta.innerHTML = '';
            alert('Formulario no enviado, revisa el formato de los campos.');
            return false;
        }
    }
    