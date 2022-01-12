/*
Funciones

Bloque de código reutilizable, puede tener o no parámetros de entrada, puede o no devolver un valor

*/

function sumar (numero1, numero2){
    //Operaciones o código a ejecutar
    return numero1+ numero2;
}

function restar (numero1, numero2){
    
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1-numero2} <br>`);

}

let numero1 = parseInt(prompt('Número 1'));
let  numero2 = parseInt(prompt('Número 2'));
let suma = sumar(numero1, numero2);

//esta cadena de abajo se llama template string
// se utiliza exclusivamente con comillas invertidas
document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);
restar(numero1,numero2);
document.write('La suma de ' + numero1+ ' y ' +numero2 + ' es '+suma);