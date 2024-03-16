// Notificaciones emergentes:

// Crea notificaciones emergentes para proporcionar retroalimentación al usuario.

// Crea un contenedor para las notificaciones
let notifContainer = document.createElement("div");
notifContainer.id = "notif-container";
notifContainer.style.position = "fixed";
notifContainer.style.bottom = "50px";
notifContainer.style.right = "20px";
notifContainer.style.zIndex = "9999";
notifContainer.style.padding = "10px";
notifContainer.style.display = "none"; // Oculta el contenedor por defecto
notifContainer.style.overflowY = "auto"; // Permite el desplazamiento vertical
notifContainer.style.maxHeight = "300px"; // Limita la altura máxima del contenedor
document.body.appendChild(notifContainer);

// Crea un botón con un icono de campana
let bellButton = document.createElement("button");
bellButton.id = "bell-button";
bellButton.style.position = "fixed";
bellButton.style.bottom = "10px";
bellButton.style.right = "10px";
bellButton.style.zIndex = "9999";
bellButton.style.backgroundColor = "transparent";
bellButton.style.border = "none";
bellButton.style.cursor = "pointer";
bellButton.innerHTML = "<i class='fa fa-bell' style='font-size: 36px'></i>";
document.body.appendChild(bellButton);

// Crea un contador para el botón
let notifCount = document.createElement("span");
notifCount.id = "notif-count";
notifCount.style.position = "absolute";
notifCount.style.top = "-10px";
notifCount.style.right = "-10px";
notifCount.style.backgroundColor = "#fa3e3e";
notifCount.style.color = "white";
notifCount.style.borderRadius = "50%";
notifCount.style.padding = "5px";
notifCount.style.fontFamily = "Arial, sans-serif";
notifCount.style.fontSize = "12px";
notifCount.style.fontWeight = "bold";
notifCount.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
notifCount.innerText = "0"; // Inicializa el contador a 0
bellButton.appendChild(notifCount);

// Crea una función para generar una notificación
function createNotif(message, type) {
    // Crea un elemento div para la notificación
    let notif = document.createElement("div");
    notif.className = "notif";
    notif.style.backgroundColor = type === "success" ? "#4CAF50" : "#F44336";
    notif.style.color = "white";
    notif.style.borderRadius = "5px";
    notif.style.margin = "5px";
    notif.style.padding = "10px";
    notif.style.maxWidth = "300px";
    notif.style.fontFamily = "Arial, sans-serif";
    notif.style.fontSize = "14px";
    notif.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";

    // Crea un elemento span para el mensaje
    let notifMessage = document.createElement("span");
    notifMessage.innerText = message;
    notif.appendChild(notifMessage);

    // Crea un elemento span para el botón de cerrar
    let notifClose = document.createElement("span");
    notifClose.innerText = "  ×";
    notifClose.style.float = "right";
    notifClose.style.cursor = "pointer";
    notifClose.addEventListener("click", function () {
        // Elimina la notificación del contenedor
        notifContainer.removeChild(notif);
        // Actualiza el contador
        let count = parseInt(notifCount.innerText);
        count--;
        notifCount.innerText = count;
        // Si no hay más notificaciones, oculta el contenedor
        if (count === 0) {
            notifContainer.style.display = "none";
        }
    });
    notif.appendChild(notifClose);

    // Añade la notificación al contenedor
    notifContainer.appendChild(notif);

    // Actualiza el contador
    let count = parseInt(notifCount.innerText);
    count++;
    notifCount.innerText = count;

    // Muestra el contenedor solo en la primera notificación
    if (count == 1) {
        notifContainer.style.display = "block";
    }
}

// Crea un array de mensajes de ejemplo relacionados con una tienda de airsoft
let success_messages = [
    "Bienvenido a Airsoft Mallorca, tu tienda de airsoft online",
    "Aprovecha nuestras ofertas en equipamiento táctico y accesorios",
    "Has recibido un cupón de descuento del 10% en tu próxima compra",
    "Has completado tu pedido con éxito"
];

let error_messages = [
    "Ha ocurrido un error al procesar tu pago",
    "Error al confirmar el pedido",
    "Error al consultar el estado del envío",
    "Error al añadir el producto al carrito"
];

// Crea un array de tipos de ejemplo
let types = ["success", "error"];

// Crea una función para generar notificaciones aleatorias
function generateRandomNotif() {
    // Elige un tipo y un mensaje al azar
    let type = types[Math.floor(Math.random() * types.length)];
    let message = type === "success" ? success_messages[Math.floor(Math.random() * success_messages.length)] : error_messages[Math.floor(Math.random() * error_messages.length)];

    // Crea la notificación con el mensaje y el tipo elegidos
    createNotif(message, type);
}

// Intervalo para repetir la función de generar notificaciones
setInterval(generateRandomNotif, 30000);

// Añade un evento al botón para mostrar u ocultar las notificaciones
bellButton.addEventListener("click", function () {
    // Si el contenedor está visible, lo oculta
    if (notifContainer.style.display === "block") {
        notifContainer.style.display = "none";
    }
    // Si el contenedor está oculto, lo muestra
    else {
        notifContainer.style.display = "block";
    }
});



function mostrarNotificacionCookies() {
    if (!localStorage.getItem('cookieBannerDisplayed')) {
      // Crear elementos
      var banner = document.createElement('div');
      var paragraph = document.createElement('p');
      var button = document.createElement('button');
      var link = document.createElement('a');
      banner.id = "cookieBanner"
      // Establecer contenido y atributos
      link.href = '#politica-de-cookies'; // Enlace a la política de cookies
      link.innerText = 'política de cookies';
      link.style.color = '#0044cc'; // Establece el color del enlace para que sea visible
      link.style.textDecoration = 'underline'; // Subraya el enlace
      paragraph.innerText = 'Al usar nuestro sitio web, aceptas nuestra ';
      paragraph.appendChild(link);
      button.innerHTML = '×';
      button.onclick = function() {
        banner.style.display = 'none';
        localStorage.setItem('cookieBannerDisplayed', 'true');
      };
  
      // Estilos CSS
      banner.style.position = 'fixed';
      banner.style.bottom = '20px'; 
      banner.style.left = '3%';
      banner.style.right = '10%';
      banner.style.width = '90%'; 
      banner.style.padding = '20px'; 
      banner.style.display = 'flex';
      banner.style.alignItems = 'center';
      banner.style.justifyContent = 'space-between';
      banner.style.backgroundColor = '#f8f9fa';
      banner.style.fontSize = "20px"
      banner.style.borderRadius = '10px'; // Esquinas más redondeadas
      banner.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      banner.style.zIndex = '1000'; // Asegura que el banner esté sobre otros elementos
      banner.style.border = '1px solid black'
      button.style.marginLeft = '20px'; // Añade espacio antes del botón
      button.style.height = '30px'; // Aumenta el tamaño del botón
      button.style.width = '30px'; // Aumenta el tamaño del botón
      button.style.backgroundColor = '#dc3545'; // Cambia el color del botón
      button.style.borderRadius = '15px';
      button.style.color = 'white';
      button.style.fontSize = '20px'; // Aumenta el tamaño del texto del botón
      button.style.lineHeight = '30px'; // Alinea verticalmente el texto del botón
      button.style.textAlign = 'center'; // Alinea horizontalmente el texto del botón
      button.style.cursor = 'pointer';
  
      // Añadir al DOM
      banner.appendChild(paragraph);
      banner.appendChild(button);
      document.body.appendChild(banner);
    }
  }
  

mostrarNotificacionCookies()