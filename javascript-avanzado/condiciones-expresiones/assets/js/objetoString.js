let cadena1 = 'Hola';
console.log(cadena1)

let cadena2 = new String('adiós');
console.log(cadena2);

console.log(cadena2.toLowerCase().includes('a'));
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

/*
Cohersión y conversión

Cohersión: convierte autoáticamente un dato en otro

*/
console.log(cadena1.toLowerCase());


let palabra = 'Hola Mundo'
let array1= palabra.split('');
console.log(array1);
console.log(array1.reverse().join(''));

function invertirPalabra(cadena){
    let array1 = cadena.split('');
    array1.reverse();
    let cadenaInvertida=array1.join('');
    return console.log(cadenaInvertida);
}


let palindromo = 'Amo la pacífica paloma'
let pal= palindromo.split('');
console.log(pal);
console.log(pal.reverse().join(''));

function reves(cadena){
    let array1 = cadena.split('');
    array1.reverse();
    let cadenaInvertida=array1.join('');
    return console.log(cadenaInvertida);
}