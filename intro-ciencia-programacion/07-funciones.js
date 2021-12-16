/*
Las funciones nos sirven para escribir bloques de código
reutilizables

Palabra reservada function:


function sumar () {
    let numero1 = 10;
    let numero2 =20;
    let suma = numero1 + numero2;
    document.write('<h1>' + suma + '</h1>');

}

sumar();

_________________________
let numero3 = 23;
let numero4 = 2132;
let suma2 = numero3 + numero4;
document.write(suma2);
*/
function sumar (numero1, numero2) { // estos son parámetros
    
    let suma = numero1 + numero2;
    document.write('<h1>' + suma + '</h1>');

}

sumar(12, 12);//estos también son parámetros
sumar(50, 8);
sumar(33, 12);