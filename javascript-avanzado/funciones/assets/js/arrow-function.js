/* Arrow function
Función de flecha, es una manera distinta de declarar 
funciones. Es muy utilizado en frameworks, es la manera más moderna de declarar funciones.
A diferencia de usar function, las funciones de flecha deben estar declaradas antes de llamarlas, si no, no sirven.

*/

const sumar = (num1, num2) => {
    return num1 + num2;
}

let num1 = parseInt(prompt('Número 1'));
let  num2 = parseInt(prompt('Número 2'));
let suma = sumar(num1, num2);

document.write(`La suma de ${num1} y ${num2} es ${suma} <br>`);