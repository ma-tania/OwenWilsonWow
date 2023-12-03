Bienvenidas a la evaluación final sobre React de Tania Moreno Aguayo.
Esta evaluación consiste en crear web utilizando React en la que permita a los usuarios ver información sobre las veces que Owen Wilson dice "wow" en las películas en las que participa.

## Instalación

Abre mi proyecto desde esta dirección http://beta.adalab.es/modulo-3-evaluacion-final-taniama91/

## Objetivos:

#### 1. Listado de escenas:
- Poner una cabecera con el título **Owen Wilson's "wow"**
- Pintar el listado de 50 escenas con los datos de la siguiente API  hhttps://owen-wilson-wow-api.onrender.com/wows/random?results=50
- Generar tarjetas con los datos extraidos de la API.
- Los datos a mostras son los siguientes:
    - Poster
    - Título de la película 
    - Frase completa
    - Año

#### 2. Filtrar por película:
En el punto anterior hemmos obtenido un listado por escenas, y ahora vamos a filtrar por película.
- Añadimmos un input para poder buscar por nombre y que solo queden las escenas cuya película contiene las letras escritas.

#### 3. Filtrar por año:
En este punto vamos a filtrar por año.
- Añadimos un select, de forma que al seleccionar un año queden solo las escenas que coincidan con el año seleccionado.

#### 4. Componentes de la aplicación:
La aplicación debe tener los siguientes componentes como mínimo:

- Componente para los filtros.
- Componente para el listado (MovieList).
- Componente para la tarjeta de cada escena del listado (MovieItem).
- Componente para el detalle de cada escena del listado (MovieDetail).

A parte de los componentes mínimos he añadido los siguientes:
-Header.

#### 5. Detalle de cada escena:
Al hacer click sobre cada tarjeta, se debe mostrar su información a pantalla completa.
He usado las rutas y React Router DOM.
La información deetallada es:
- Nombre de la película
- Frase completa 
- Director
- Un enlace con el audio de a escena.

#### 6. Detallitos de calidad:
- El campo de texto debe estar recubierto por una etiqueta <form />.
- Si estando en el campo de filtrado pulsamos intro se debbe impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "ZZZ" y no hay ninguna escena de película que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ninguna nombre de película que coincida con la palabra ZZZ".
- El filtro debe filtrar el texto tanto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un escena y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

#### 7. BONUS. Mejoras visuales:
- Poner bonita la página agregando estilos.
- Añadir iconos a la información que se muestra en el detalle de escenas.
- Usar algún sistema de grid para pintar el listado.
- Que funcione bien el responsive en dispositivos pequeños.

#### 8. BONUS. URL comppatible:
- La URL del detalle de cada escena debe ser compatible, si visitamos esa URL directamente en el navegador se vea el detalle de la escena de una película.
- en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje
del tipo "La escena que buscas no existe".

#### BONUS. Ordenación:
- Ordenar el listado de escenas alfabéticamente por el nombre de la pelícla.

## Entrega
El límite de entrega es el Martes 24 de octubre a las 14.00.

## Autora

- [@taniama91](https://www.github.com/taniama91)