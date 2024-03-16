
# Índice

1. [Introducción](#introducción)
2. [División del trabajo](#división-del-trabajo)
3. [La página web](#la-página-web)
   1. [Inicio](#inicio)
   2. [Tienda](#tienda)
   3. [Nosotros](#nosotros)
   4. [Responsividad](#responsividad)
4. [Tecnologías utilizadas](#tecnologías-utilizadas)
5. [Comentarios adicionales](#comentarios-adicionales)

## Introducción

**Práctica  B2 - Interactividad en la Web Responsive**

Alejandro Carpio Moratalla
Antonio David

Asignatura: Lenguaje de Marcas 1º DAM presencial
Fecha: Febrero - Marzo 2024

La hemos probado en distintos dispositivos y se adapta bien a distintas resoluciones basadas en el ancho en píxeles. Por poner tres ejemplos al azar del emulador de dispositivos de inspeccionar elementos:

 1. Móvil: Iphone XR
 2. Tablet: Ipad Mini
 3. Portatil/Monitor : El de nuestro propio portátil.
 
 Aun así como se puede ver en las fotos y videos soporta bastante bien los cambios de anchura:


**Videos:**

Video general de la página:

![450_1000](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/b70d92ca-cff6-474c-b588-cb0579e87b32)


https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/be56989d-5250-4765-85b1-70474e1cf9a9

Video resoluciones móviles:



https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/0c05ac5a-def9-4a3a-8218-4cf9b268dd3d

Video tablets + horizontal:


https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/7009a399-f2e4-442c-a7a9-eb06aa5c79bc



https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/67f12b5a-b3da-478e-8970-9826c3a6e730


**Imagenes: (Más imágenes en la carpeta Documentación)**

Empezamos como siempre haciendo el esqueleto general de la página:

![Captura web_2-12-2023_215816_](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/aee012cb-6328-4601-86bf-6bc0ead85fb0)

Imagenes con detalle de la página: (El espacio en blanco de la derecha en la **no** aparece en la web real, es de la barra de scroll de la extensión responsive viewer)

Pantallas grandes:

![Laptop-1-1440x900](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/2d0aaaae-13ad-4165-a39c-9ad3595313c7)

![Laptop-1-1440x900_Tienda](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/9d5548ae-5dc7-4ebe-a9a5-bcb9686694c2)



Movil: 

![iPhone-XR-414x896](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/f92335d0-d53e-4776-8c7e-66bf50e16967)

![iPhone-XR-XS-Max-414x1025](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/fe27f8f2-1ce3-4eb0-b47e-404cf745fb50)

![1](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/a4bd8472-082a-43b2-8729-50e41b6ef5e9)


Tablet:

![iPad-Pro-(12 9-inch)-960x1366](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/584e3959-db5a-43d4-bc1a-751a8a8c683c)

![2](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/8002455d-e9aa-4529-a94d-0a03fa58a338)



## División del trabajo
Hemos decidido dividir el trabajo a realizar de la siguiente forma:

| inicio.html | tienda.html | nosotros.html | Documentacion |
|-------------|-------------|---------------|---------------|
|  Antonio           | Alex            | Conjunto              | Alex 50% Antonio 50%|


| Nav + responsividad del nav | Footer | 
|-------------|-------------|
|  Alex| Conjunto


**Detalle y registro de trabajo:**



| Nombre   | Pagina        | Tarea                                                                                                               | Tiempo   | Dia     |
|----------|---------------|---------------------------------------------------------------------------------------------------------------------|----------|---------|
| Antonio  | Indice        | Creación del esqueleto HTML y estructurar las etiquetas semanticas                                                 | 40 Mins  | 21/11   |
| Antonio  | Indice        | Agregados enlaces de estilos y metaetiquetas                                                                       | 20 Min   | 21/11   |
| Antonio  | Indice        | Crear el CSS y empezar con la creación de la clase .indice__lideres                                                | 30 min   | 21/11   |
| Alex     | Tienda        | Empezar esqueleto de tienda.html. Añadidos primera mitad de elementos semanticos grandes, + merge rama alex con rama main. | 50 mins  | 21/11   |
| Alex     | Tienda        | Añadido zona de productos.                                                                                         | 40 mins  | 22/11   |
| Antonio  | Indice        | Estilización del fondo, tamaño y posición de la imagen y configuración de estilos para el texto h1                  | 20 min   | 22/11   |
| Antonio  | Indice        | Estilización de section y sus elementos                                                                            | 25 mins  | 22/11   |
| Conjunto | Organizacion  | Tiempo de clase. Organización en sucio de los contenidos en general de la web y puesta en común de ideas.           | 50 mins  | 22/11   |
| Alex     | Organizacion  | Movido CSS de la web tienda a un CSS aislado, y reorganizado la estructura de carpetas.                             | 10 mins  | 23/11   |
| Alex     | Tienda        | Añadido sección de productos y banner, empezada la media query de tablet.                                          | 50 mins  | 23/11   |
| Antonio  | Indice        | Estilización de article y sus imágenes                                                                             | 25 mins  | 23/11   |
| Antonio  | Indice        | Creación de reglas para el hover de imágenes y divs                                                                | 30 mins  | 23/11   |
| Antonio  | Indice        | Creación de animaciones para elementos article pares e impares                                                     | 50 mins  | 24/11   |
| Conjunto | Diseño general| Tiempo libre de clase. (No LLM) Decidida paleta de colores general para la web.                                     | 20 mins  | 24/11   |
| Antonio  | Indice        | Estilos responsivos para pantallas de hasta 768 píxeles                                                            | 50 min   | 26/11   |
| Alex     | Tienda        | Terminado el layout general. To-do: Ajustarlo todo a los breakpoints de cada media query para terminar de hacerla responsive. | 30 mins  | 26/11   |
| Alex     | Prototipo footer | Empezado el prototipo de footer                                                                                   | 60 mins  | 26/11   |
| Alex     | Media query 500px | Ajustadas algunas cosas raras que pasaban cuando había menos de 500px de ancho.                                  | 70 mins  | 26/11   |
| Conjunto | Tienda        | Arreglada entre los dos imagen que desbordaba de su contenedor en una media query.- (Tiempo de clase)              | 15 mins  | 27/11   |
| Alex     | Nosotros      | Empezado la página "Nosotros" añadido bloques grandes de elementos y empezado el estilizado básico en su hoja CSS. (Hora de clase LLM) (Por hacer: Ahora mismo es 0 responsive.) | 45       | 27/11   |
| Alex     | Tienda + nav  | Arreglado aun más las media queries y añadido segundo tipo de menu lateral para que se vea en Ipad.               | 90 mins  | 27/11 - 28/11 |
| Alex     | Tienda, nosotros, nav, footer | Añadido y buscado contenido multimedia y ajustado posiciones y media queries, añadidas tarjetas                 | 120 mins | 03/12   |
| Alex     | General       | Añadido todo el contenido que faltaba, imagenes, texto, añadidos retoques a media queries, añadido media query a tienda.html que agrega unos marcos. | 190 mins | 06/12   |
| Antonio  | Errores de sintaxis de html, CSS y logicos. | "Validado y arreglado el css de errores dificiles de encontrar como: un error en la propiedad transition. La línea original era: transition: clip-path: .2s; Se corrigió eliminando los dos menos_contenido después de clip-path: transition: clip-path .2s; Tambien he añadido z-index: 100; a la media query de 600 px para que no salgan cosas no deseadas al mostrar el menu" | 240 min  | 7/12    |
| Antonio  | Nosotros      | Modificar los nombres de variables relacionadas con mensajes de imágenes que tienen la transicion de mostrar el mensaje al hacer zoom para hacerlos más específicos. Por ejemplo, se cambié el nombre de la variable de --transition a --mensaje-transition. | 30 min   | 8/12    |
| Alex     | Documentacion y toques finales | Terminada la documentación, añadiendo toques finales a las paginas.                                               | 240 mins | 7/12    |






Nota: 
A pesar de que hemos ido registrando más o menos lo que ha hecho cada uno, el reparto de las páginas de la tabla de arriba es bastante arbitrario y orientativo, pero lo hemos puesto para facilitar la corrección, realmente el trabajo ha sido conjunto y hemos ido trabajando de manera incremental.

## La página web

Hemos elegido como temática hacer un 'mock-up' de una página web que se dedique a la venta y organización de equipamiento para partidas de airsoft. (Un deporte de simulación militar) Todas las armas que se ven en la página son réplicas de mentira que disparan bolitas de plástico.

 - Organización y estructura de los ficheros:
	 - 
	Hemos decidido usar la siguiente estructura para nuestra página:	 

![Captura de pantalla 2023-12-07 130214](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/451a5e7c-8fa1-42ae-bcc4-a0a48bde2547)

	
	Es una estructura común, solo que hemos decidido separar las hojas de estilo en una por cada página para los estilos específicos y un estilos.css para los elementos comunes a cada página como podría ser el nav o el footer.
	Si bien es cierto que según he leído con cada .css extra la página tiene que hacer más requests, tampoco es tan grande y no debería afectar al rendimiento, y así de paso evitamos conflictos en el control de versiones en git, evitando escribir el máximo tiempo posible los dos en la misma hoja a la vez, para no tener que resolver luego los conflictos de versiones.


```
│   contacto.html
│   indice.html
│   nosotros.html
│   README.md
│   tienda.html
│
├───Documentacion
│   │   Captura web_2-12-2023_215816_.jpeg
│   │   video1_readme.mp4
│   │   video2_readme_moviles.mp4
│   │   video3_readme_horizontal.mp4
│   │   video4_readme_tablets.mp4
│   │   videonav_readme.mp4
│   │   video_banner_Readme.mp4
│   │   video_tarjetas_readme.mp4
│   │
│   └───Capturas_PaginaCompleta
│       ├───Movil
│       │   │   -screenshots.zip
│       │   │
│       │   └───-screenshots
│       │           Galaxy-S5-360x640.png
│       │           Galaxy-S9-S9+-360x740.png
│       │           iPhone-XR-414x896.png
│       │           iPhone-XR-XS-Max-414x1025.png
│       │           Pixel-3-3-XL-393x786.png
│       │
│       ├───Pantallas_grandes
│       │       Laptop-1-1440x900.png
│       │       Laptop-1-1440x900_Tienda.png
│       │
│       └───Tablet
│           ├───-screenshots
│           │       iPad-Mini-768x1024.png
│           │       iPad-Pro-(12.9-inch)-960x1366.png
│           │       Nexus-7-600x960.png
│           │
│           └───-screenshots (1)
│                   iPad-Mini-768x1024.png
│                   iPad-Pro-(12.9-inch)-960x1366.png
│
├───Estilos
│       estilos.css
│       indice_estilos.css
│       nosotros_estilos.css
│       tienda_estilos.css
│
└───Recursos
    ├───Imagenes
    │   │   logo.png
    │   │   logo_grande_nobg.png
    │   │   logo_grande_nobg2.png
    │   │   logo_pequeño_nobg.png
    │   │   menu_movil_abrir.svg
    │   │   menu_movil_cerrar.svg
    │   │   placeholder.jpg
    │   │
    │   ├───Imagenes_Indice
    │   │       armamento.jpg
    │   │       armamento2.png
    │   │       armamento3.jpg
    │   │       blindaje.png
    │   │       blindaje2.jpg
    │   │       blindaje3.jpg
    │   │       lideres.jpg
    │   │       youtube_airsoft_guia.jpg
    │   │       youtube_canal.jpg
    │   │       youtube_que_es_airsoft.jpg
    │   │
    │   ├───Imagenes_Nosotros
    │   │       conocenos3.jpeg
    │   │       nosotros1.webp
    │   │       nosotros2.jpg
    │   │       tarjera3.jpg
    │   │       tarjeta1.jpg
    │   │       tarjeta2.jpg
    │   │
    │   └───Imagenes_Tienda
    │           banner_final.png
    │           categoria1.jpg
    │           categoria2.jpg
    │           categoria3.jpg
    │           novedad1.jpg
    │           novedad2.jpeg
    │           novedad3.jpg
    │           novedad4.jpg
    │           producto1.jpg
    │           producto2.jpg
    │           producto3.jpg
    │           producto4.jpg
    │
    └───Videos
            video_nosotros1.mp4
            video_nosotros2.mp4
            video_nosotros3.mp4
```
----


 - Barra de navegación y footer
	 - 
	 Tres barras de navegación para tres pantallas diferentes:

	Para poder hacer la web más responsive, una de las cosas que mas me ha costado ha sido adaptar el nav a las tres resoluciones, y que quede de una manera más o menos conjunta y sin utilizar javascript.

	Inspirado en una versión simplificada de: [http://deepubalan.com/blog/2011/06/17/free-pure-css-dropdown-menu-using-target-pseudo-class/](http://deepubalan.com/blog/2011/06/17/free-pure-css-dropdown-menu-using-target-pseudo-class/)

	Como funciona en móvil: Los enlaces de abrir y cerrar menu son < a > que enlazan a la misma página que se encuentran pero con #menu y el de cerrar tiene href # que resetea el target. Cuando se clickea en el botón del menu, se activa .mav__menu:target lo que hace que se modifique la opacidad y el poder clickear.

	Es decir, el menú en moviles siempre está ahí, lo que está con opacidad 0 y pointer events 0, cuando se clickea el botón del menú que tiene un enlace a si mismo, se activa el pseudoelemento :target lo que transforma la opacidad a 1 y los pointer events a 1 y hace que aparezca el menú, realmente es una ilusión que parece que funciona como botón.

	La idea para pantallas de tablet es la misma, solo que solo se modifica el nav en si, que se comporta como un slider.

![Captura de pantalla 2023-12-07 141621](https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/f56cf875-d3dc-4e2a-8598-e54aa073cd59)

 

https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/4b99e514-d8bb-4f75-93c0-313f77acb086





### Inicio

Esta página sirve como punto de entrada principal, ofreciendo una presentación destacada de Airsoft Mallorca como la empresa líder de Airsoft. 
La sección principal, "Airsoft Mallorca, la empresa líder de Airsoft", utiliza una imagen de fondo y texto centrado para captar la atención del usuario.

La estructura del código HTML incluye secciones que describen qué ofrece la empresa, destacando aspectos como armamento, blindaje y un canal de YouTube oficial. Cada artículo presenta imágenes relacionadas y breves descripciones.

En cuanto al CSS, se utilizan reglas específicas para dar estilo a diferentes secciones, artículos e imágenes. Los efectos de transición y animaciones hacen que la página sea visualmente atractiva. 
Se han aplicado media queries para asegurar una experiencia de usuario adecuada en pantallas más pequeñas.

### Tienda

Esta es la página que contiene los productos que se venderían en la web, con sus categorías y productos más vendidos, junto a un precio y un número de estrellas que determinarían la puntuación de cada producto.

Al estar esta pagina llena de fotos, y distintos contenedores flex para cada foto, fue cuando decidimos partir las hojas de estilos en una para cada página específica.

Además, para facilitar el trabajo conjunto y la posterior revisión del código, he utilizado la notación: BEM al nombrar las clases en el CSS. Es decir: Bloque, Elemento, Modificador.

Ejemplo: .bloque {} ---> .bloque__elemento ---> .bloque__elemento--modificador Ejemplo2: .nav --> .boton__nav --> .boton__nav--negrita

En las demás páginas no ha hecho falta ya que no tenía tantas fotos con diferentes contenedores.

Esta página a priori sencilla, ha sido un reto al tener que colocar contenedores dentro de contenedores con sus items para que se pueda visualizar bien en todos los dispositivos, no solo que se coloquen si no que se pueda tener una experiencia más o menos funcional a la hora de ver cada producto en una pantalla pequeña, por ejemplo de móvil.



### Nosotros

Esta página corresponde al típico "Acerca de" que tienen muchas webs. He aprovechado para incluir los elementos multimedia que me faltaban, como los videos que representan las partidas, o el iframe que contiene un mapa de google maps, que sería el que se utilizaría para ubicar el negocio.

Tiene como banner tres fotos con una animación al pasar por encima el ratón o hacer "click" con el dedo si estás en móvil que despliega las fotos junto a un texto. En pantallas grandes funciona como un banner animado, mientras que en pantallas pequeñas mantiene la funcionalidad de la animación pero reducida, para hacerlo como una imagen en conjunto y mantener la responsividad.

Como parte destacable a partir del contenido diría que hay como he dicho el banner animado y las tarjetas adaptables:




https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/4fea9483-3785-44e7-a2b7-a56c6922099b





https://github.com/CarpioAlex/acatalan_acarpio_b2responsive/assets/147094237/38498083-6afd-4e69-aecc-83dbd9cf1921




### Responsividad

Siendo este el objetivo principal de la práctica es donde más hemos hecho hincapie.

Empezamos basándonos en esta sota caballo rey de breakpoints:

  

 Breakpoints más utilizados para los media queries

  

Movil 600 px @media (min-width: 600px)

  

Tablet 768 px @media Por encima de (min-width: 601px)

  

Laptop 992 px @media (min-width: 768px)

  

PC hasta infinito 1200 px @media (min-width: 992px)

  

@media (min-width: 1200px) */

  
  
Aunque al final hemos terminado por utilizar:

 - [x] 500
 - [x] 600
 - [x] 601 a 768
 - [x] 769
 - [x] 1000
Y alguna media query auxiliar para arreglar pequeños errores de última hora.

## Tecnologías utilizadas
**Git y github**: Control de versiones para trabajar en ramas diferentes de forma simultánea.

**Discord**: Para hablar online y compartir pantalla juntos para ir avanzando.

**Gimp**: Para redimensionar las fotos. (Por ejemplo la de los productos a 800 x 800)

**Bing AI**: Inteligencia Artificial para generar textos que sustituyan al lorem ipsum, y para crear el logo de la web. (Logo hecho por Antonio)

**Responsive viewer**: Extensión de navegador para probar a la vez distintas resoluciones.

**Google sheets**: Para llevar en sucio ideas y un registro del trabajo.

**Unsplashed**: Para descargar imágenes en buena resolución con derechos de autor libres.

**Font Awesome** : Página que junto a su script de JS permite importar los iconos como los de las marcas, el carrito, el favorito etc. (Permiso para usarlo pedido por mail)

**Google fonts**: Para importar las tres fuentes que hemos utilizado.

**Extensión prettier de VSCode**:Para formatear los documentos HTML de acuerdo a las normas de buenas prácticas.


## Comentarios adicionales

- La página contacto no cuenta para ser evaluada, está puesta para tener el espacio que teniamos que dejar para hacer en un futuro formularios.
- ¿Porqué tenemos puesto en el html 62,5% de tamaño general de fuente? Como ibamos a trabajar con medidas adaptativas, si ponemos la fuente a 62,5% pixeles, 1 EM == 10 pixeles, ya que 10 * 100 / 16 = 62,5%, inicialmente 1 em son 16 pixeles. Al tenerlo en base 10 nos ha faciltado el calcular los EM's o Rems.. ¿Quieres ems equivalentes a 24,5 pixeles? Pues usa 2,45 ems.
