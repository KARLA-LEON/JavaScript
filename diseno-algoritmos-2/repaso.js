/*
condicionales
if(condición){
    bloque
} else if (){

} else(){

}

_____________

Una función es un bloque de código reutilizable, en esa parte de código en la
que se encuentra activa, es un proceso en el cual se reciben parámetros,
se lleva a cabo la operación y finalemnte nos devuelve un resultado. Se puede
mandar a llamar la función en bloques posteriores de código.

//Máquina que hace jugo:

function procesaFrutas (manzanas, naranjas){
    let jugo="Jugo de " + manzanas + " manzanas y " + naranjas + " naranjas";
    return jugo;
}

let jugoDeManzana = procesaFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesaFrutas(0,10);
console.log(jugoDeNaranja);
*/
