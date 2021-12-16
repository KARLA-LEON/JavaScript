/*
Arreglos
*/

const comidas = ["Pozole", "Quesadillas", "Tacos" ];

/*
Lenght: longitud del arreglo
*/
console.log (comidas.length);

/*
Push: agrega 1 al final
Pop: quita 1 del final
Unshift: agrega 1 al inicio
Shift: quita 1 del inicio
*/

comidas.push("Tostadas");
console.log(comidas);

comidas.unshift("Tortas");
console.log(comidas);

comidas.shift();
console.log(comidas);

comidas.pop();
console.log(comidas);

/*
        forEach

    Lleva a cabo una acción por cada
    elemento de nuestro arreglo de manera automática
    Es útil con arreglos que son muy grandes
*/

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);


comidas.forEach(function(el){
    console.log(el);
})

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function (el){
    let suma = el + 1;
    console.log(suma);
})

/* Ejercicio

*/

const arr = [];
function suma(num){
    let sumNum = num+1;
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);