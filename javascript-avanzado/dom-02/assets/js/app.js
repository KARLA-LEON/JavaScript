
/*cuando haya un simbolo de $ significa que es una variable del DOM
let $tittle = document.getElementById('title');
tittle.textContent = 'Título escrito desde JS';
*/


//query selector funciona como css, si queremos hacer referencia a una clase, se escribe .nombreclase o si hacemos referencia a un id entonces se utiliza #, o directamente usando una etiqueta
let $tittle = document.querySelector('#title');
$tittle.textContent='Título escrito desde js';

let $paragraph = document.querySelector('p');
console.log($paragraph.textContent);

let $paragraphsAll = document.querySelectorAll('p');
console.log($paragraphsAll[1].textContent);

//crea el elemento en memoria primero, para customizarlo antes de agregarlo al html
let subtitle = document.createElement('h3');
subtitle.textContent='Subtítulo desde js createElement';
//aquí se agrega al html por medio del append, pero lo va a agregar al final del body
$tittle.insertAdjacentElement('afterend', subtitle);

let $content = document.querySelector('#content');
//text.content devuelve sólo texto, inner html devuelve todo
//con text.content no podemos modificar y agregar etiquetas, pero con innner html sí

/*
console.log($content.textContent = 'Hola <br> qué tal');
console.log($content.innerHTML='Hola <br> qué tal');
//outer html modifica a los elementos padres con todo y sus hijos
console.log($content.outerHTML='Hola');
*/

let paragContent = document.createElement('p');
paragContent.textContent='Contenido del nuevo párrafo'
//appendchild coloco lo que necesito como hijo del elemento al que hago referencia
$content.appendChild(paragContent);

$tittle.remove();