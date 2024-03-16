// Carga dinámica de contenido:

// Mostrar/ocultar informaciones que inicialmente estaban ocultas/visibles.

// Función para expandir y contraer las tarjetas
function expandirContraerTarjetas() {
    // Obtener todas las tarjetas
    var tarjetas = document.getElementsByClassName("tarjeta");
    // Recorrer cada tarjeta
    for (var i = 0; i < tarjetas.length; i++) {
      // Obtener el elemento tarjeta_cuerpo
      var cuerpo = tarjetas[i].getElementsByClassName("tarjeta_cuerpo")[0];
      cuerpo.style.display = "none";
      // Crear un elemento botón
      var boton = document.createElement("button");
      boton.className = "boton_expandir";
      // Crear un elemento span para el icono
      var icono = document.createElement("span");
      icono.className = "fa";
      icono.classList.add("fa-angle-down");
      // Añadir el span al botón
      boton.appendChild(icono);
      // Añadir un evento de clic al botón
      boton.addEventListener("click", function() {
        // Obtener el elemento tarjeta_cuerpo asociado al botón
        var cuerpo = this.parentNode.getElementsByClassName("tarjeta_cuerpo")[0];
        // Alternar entre mostrar y ocultar el elemento tarjeta_cuerpo
        if (cuerpo.style.display === "none") {
          cuerpo.style.display = "flex";
          // Cambiar la clase del icono a fa-angle-up para mostrar una flecha hacia arriba
          this.firstChild.classList.replace("fa-angle-down", "fa-angle-up");
        } else {
          cuerpo.style.display = "none";
          // Cambiar la clase del icono a fa-angle-down para mostrar una flecha hacia abajo
          this.firstChild.classList.replace("fa-angle-up", "fa-angle-down");
        }
      });
      // Añadir el botón al elemento tarjeta_inicio
      // var inicio = tarjetas[i].getElementsByClassName("tarjeta_inicio")[0];
      tarjetas[i].appendChild(boton);
    }
}

// Función para mostrar y ocultar el pop up con los términos y condiciones
function mostrarOcultarPopup() {
    // Crear un elemento div para el pop up
    var popup = document.createElement("div");
    // Añadir la clase popup al div
    popup.className = "popup";
    // Crear un elemento div para el contenido del pop up
    var popupContent = document.createElement("div");
    // Añadir la clase popup-content al div
    popupContent.className = "popup-content";
    // Añadir el contenido del pop up al div
    popupContent.id = "popupContent-tos"
    popupContent.innerHTML = `
    <h4>Términos y condiciones</h4>
    <p>Al usar esta página web, usted acepta los siguientes términos y condiciones:</p>
    <ul>
      <li>Esta página web es solo para fines educativos y recreativos.</li>
      <li>No nos hacemos responsables de ningún daño o perjuicio que pueda sufrir por el uso de esta página web.</li>
      <li>No garantizamos la exactitud, veracidad, actualidad o calidad de la información o el contenido de esta página web.</li>
      <li>Esta página web puede contener enlaces a otras páginas web que no están bajo nuestro control ni supervisión.</li>
      <li>Usted es el único responsable de cumplir con las leyes y normas aplicables al usar esta página web.</li>
    </ul>
    <div class="buttons">
    <button id="aceptar">Aceptar</button>
    <button id="cancelar">Cancelar</button>
    </div>
    `;
    // Añadir el div del contenido al div del pop up
    popup.appendChild(popupContent);
    // Añadir el div del pop up al cuerpo de la página
    document.body.appendChild(popup);
    // Obtener el botón de aceptar
    var aceptar = document.getElementById("aceptar");
    // Añadir un evento de clic al botón de aceptar
    aceptar.addEventListener("click", function() {
      // Ocultar el pop up
      popup.style.display = "none";
      // Guardar la aceptación del usuario en el almacenamiento local
      localStorage.setItem("aceptado", "true");
    });
    // Obtener el botón de cancelar
    var cancelar = document.getElementById("cancelar");
    // Añadir un evento de clic al botón de cancelar
    cancelar.addEventListener("click", function() {

      window.location.href = "https://www.google.com/";
    });
    // Comprobar si el usuario ya ha aceptado los términos y condiciones
    var aceptado = localStorage.getItem("aceptado") === "true";
    // Si el usuario ya ha aceptado, ocultar el pop up
    if (aceptado) {
      popup.style.display = "none";
    }
}   

// Llamar a las funciones cuando se cargue la página
expandirContraerTarjetas()
mostrarOcultarPopup()