let title = document.getElementById('title');
function getName (){
    let nombre = prompt('¿Cómo te llamas?');
    title.textContent = 'Hola , '+ nombre;
}