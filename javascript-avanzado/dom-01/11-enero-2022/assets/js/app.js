let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito desde Javascript'

let paragraph = document.getElementsByTagName('p');
console.log(paragraph);


/*paragraph[0].textContent = 'Párrafos escritos desde JavaScript'

for(let i=0; i<paragraph.length; i++) {
    paragraph[i].textContent = 'Párrafo' + i + 'escrito desde JavaScript'
}
*/

let email =document.getElementById('email');

let password =document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}