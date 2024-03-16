{/* <div class="contenedor">


<div class="caja" id="dado">

    <p id="tirada"></p>

  <audio src="./dice.mp3" id="audio"></audio>

</div>

<button onclick="tirarDado()">Tirar dado</button>

<p id="resultado"></p> */}
    // Crear el contenedor
    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor';
  
    // Crear la caja del dado
    const caja = document.createElement('div');
    caja.className = 'caja';
    caja.id = 'dado';
  
    // Crear el párrafo para la tirada
    const tirada = document.createElement('p');
    tirada.id = 'tirada';
  
    // Crear el elemento de audio
    const audio = document.getElementById('audio');
    const audio2 = document.getElementById('audio2');
    // Añadir el párrafo y el audio a la caja
    caja.appendChild(tirada);
  
    // Añadir todo al contenedor
    contenedor.appendChild(caja);

  


    let dado = document.getElementById('dado')
    var rotacion = 0;
    audio.playbackRate=4.25
    audio2.playbackRate=1
    let resultado1 = "*";
    let resultado2 = "*\n*";
    let resultado3 = "*\n*\n*";
    let resultado4 = "**\n\**\n";
    let resultado5 = "**\n -*- \n**\n";
    let resultado6 = "**\n**\n**\n";
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    var arrayElecciones = [resultado1, resultado2, resultado3, resultado4, resultado5, resultado6]


    function tirarDado() {
        ventanaEmergente.style.display = 'block';
        audio.play()
        ventanaEmergente.firstElementChild.appendChild(caja)
        let aleatorio = Math.floor(Math.random() * 6 + 1);
        let dado = document.getElementById('dado');
        dado.classList.add("click");
        for (let i = 0; i < 60; i++) {  
            setTimeout(function() {
                dado.style.transform = "rotate(" + (i * aleatorio * 3) + "deg)";
            }, i * 10); 
        }
        var aleatorio2 = Math.floor(Math.random() * 5 + 1);
        tirada.innerText = arrayElecciones[aleatorio2]
        
        setTimeout(function () { 
            ventanaEmergente.firstElementChild.removeChild(caja) // Borrar dado
            var tirando = document.getElementById('tirando');
            tirando.innerHTML = "Tienes un " + (aleatorio2 + 1) + "% de descuento";
            audio2.play()
            
            var img = document.createElement('img');
            img.style.width = '90px'
            img.style.height = 'auto'
            img.src = 'https://play-lh.googleusercontent.com/z9eFRur_sNJ9wpWypApEY7-Jsr-qOugKnIPg2cXBevzwJykVZuPZDgVljTkvRn1VLdo';
            tirando.appendChild(img);
    
            setTimeout(function () { 
                ventanaEmergente.style.display = 'none'; // Cierra la ventana emergente
                tirando.innerHTML = "Tirando dado"; // Restablece el mensaje original cuando se cierra la ventana
            }, 2000)
        }, 2000)

        
        var Precios = document.getElementsByClassName("precio");
        for (let index = 0; index < Precios.length; index++) {
            const Precio = Precios[index];
            var Precio_float=parseFloat(Precio.innerHTML)
            Precio.innerHTML = Math.trunc(Precio_float - Precio_float * (((aleatorio2+1)) / 10)) + "€"
        }

    }
    

    