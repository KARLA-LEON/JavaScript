/*
Los operadores aritméticos nos sirven para:
    + Sumar o concatenar
    - Para restar números
    * Para multiplicar
    / Para dividir dos números
    % Para obtener el residuo de una división

*/
const numero1 = parseInt(prompt("Ingresa el número 1"));
const numero2 = parseInt(prompt("Ingresa el número 2"));
/*Todo lo que venga del prompt es una cadena de texto,
es por eso que con signo de suma lo toma como una
concatenación, aunque sean números
Con el parseo o conversión de datos, se hace la transformación 
de string a cualquier otro tipo de dato, en este caso un 
entero INT
*/
console.log("Número 1: " + numero1);

console.log("Número 2: " + numero2);

const suma = numero1 + numero2;
console.log("Suma: " + suma);

const resta = numero1 - numero2;
console.log("Resta: " + resta);

const multiplicación = numero1 * numero2;
console.log("Multiplicación: " + multiplicación);

const división = numero1 / numero2;
console.log("División: " + división);

console.log(5%3);


