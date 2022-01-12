/* El flujo es el orden en el que se ejecutan las instrucciones del programa
Por lo generaal se ejecutan de arriba hacia abajo
Siempre lo recomendable es que primero se declare la variable y después se mande a llamar.
*/

//let miVariable = 10;
//console.log(miVariable);

/* Estructuras de control de flujo
Permiten manipular el orden en el que se ejecutan las instrucciones del programa
*/

/*let edad = 17;
let tienesINE = true;

if(edad>=18 || tienesINE == true){
    console.log('Puedes entrar')
} else{
    console.log('No puedes entrar')
}
*/

/* Operador ternario
Forma simplificada de un if else
Se compone de 3 partes
(Condición a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;



//manera 1 de usarlo
let age = 17;

(age >=18) 
    ? console.log("Mayor de edad") 
    : console.log("Menor de edad");

//manera 2 de usarlo
let pregunta = (age >=18)
    ? "Mayor de edad"
    : "Menor de edad";
    console.log(pregunta)


//manera 3 de usarlo
let edad1 = 19
let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? "Mayor" : "Menor"} de edad`;

console.log(preguntaEdad);



let dia;

if (dia === 0){
    console.log("Domingo");
}else if (dia === 1){
    console.log("Lunes");
}else if (dia === 2){
    console.log("Martes");
}else if (dia === 3){
    console.log("Miércoles");
}else if (dia === 4){
    console.log("Jueves");
}else if (dia === 5){
    console.log("Viernes");
}else if (dia === 1){
    console.log("Sábado");
}else{
    console.log("Ese no es un día");
}

*/

/*
Switch


switch(variable a evaluar){
    case valor:
        -código a ejecutar -
    break;
    case valor:
        -código a ejecutar -
    break;
    default:
        - código a ejecutar si sale de las opciones -
    break;
}
*/
let dia = 5

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("No es un día válido");
        break;
   
}


let cupon = "Oro";
let descuento;

switch(cupon){
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "Oro":
        descuento = 15;
        break;
    default:
        console.log("Cupón no válido")
        break;
}

console.log(descuento);

/*
Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un
 cupón equivocado
*/