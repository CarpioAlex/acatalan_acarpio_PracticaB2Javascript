
// Función para cambiar la clase de modoOscuro a normal a los elementos necesarios.
temaOscuro = function() {
    var bodyWeb = document.body;
    bodyWeb.classList.toggle("modoOscuro")
    document.getElementById("popupContent-tos")?.classList.toggle("modoOscuro")
    document.getElementById("cookieBanner")?.classList.toggle("modoOscuro")
}

// Función para cambiar de manera específica elementos que no son tan comunes o colores que tienen mal contraste.

temaOscuroContraste = function() {
    document.getElementById("popupContent-tos")?.classList.toggle("modoOscuro")
    document.getElementById("cookieBanner")?.classList.toggle("modoOscuro")
    var bodyWeb = document.body;
    bodyWeb.classList.toggle("modoOscuro")
    
    var parrafoEspecial = document.getElementById('parrafoEspecial')
    
    if (parrafoEspecial.style.color === "red") {

        parrafoEspecial.style.color = "";
    } else {
        parrafoEspecial.style.color = "red";
    }
}

var temaOscuroActivado = false;


// Función específica para cambiar a modo oscuro la página de contacto, porque tiene muchos elementos diferentes que no son comunes a los demás, labels, textareas, botones...

temaOscuroContacto = function() {
    document.getElementById("popupContent-tos")?.classList.toggle("modoOscuro")
    document.getElementById("cookieBanner")?.classList.toggle("modoOscuro")
    var body = document.body;
    var forms = document.getElementsByTagName("form");
    var inputs = document.getElementsByTagName("input");
    var labels = document.getElementsByTagName("label");
    var buttons = document.querySelectorAll("input[type='button'], input[type='submit']");
    var seccionComentarios = document.getElementById("seccion-comentarios");
    var comentarios = document.getElementsByClassName("comentario");

    if (!temaOscuroActivado) {
        temaOscuroActivado = true;
        body.style.backgroundColor = "#333"; // un gris oscuro pero no tan negro
        body.style.color = "white";
        for (var i = 0; i < forms.length; i++) {
            forms[i].style.backgroundColor = "#6699CC"; // gris azulado
        }
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type === "text" || inputs[i].type === "password" || inputs[i].type === "email") {
                inputs[i].style.backgroundColor = "#aaa"; // un gris más claro
                inputs[i].style.color = "black";
            }
        }
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = "white";
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#000080"; // azul oscuro
            buttons[i].style.color = "white";
        }
        seccionComentarios.style.backgroundColor = "#6699CC"; // gris azulado
        for (var i = 0; i < comentarios.length; i++) {
            comentarios[i].style.backgroundColor = "#aaa"; // un gris más claro
            comentarios[i].style.color = "black";
        }
    } else {
        body.style.backgroundColor = "#f0f0f0";
        body.style.color = "black";
        for (var i = 0; i < forms.length; i++) {
            forms[i].style.backgroundColor = "#fff";
        }
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type === "text" || inputs[i].type === "password" || inputs[i].type === "email") {
                inputs[i].style.backgroundColor = "white";
                inputs[i].style.color = "black";
            }
        }
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = "black";
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#009688"; // color original
            buttons[i].style.color = "white";
        }
        seccionComentarios.style.backgroundColor = "#fff"; // blanco
        for (var i = 0; i < comentarios.length; i++) {
            comentarios[i].style.backgroundColor = "white"; // blanco
            comentarios[i].style.color = "black";
        }
         temaOscuroActivado = false;

    }


};
