/*
        CICLOS/BUCLES/LOOPS

        while: mientras se cumpla una condición
        se ejecuta una acción
        
        let condicion = 1;
        while(condicion){
            bloque de codigo
            modificacion al valor inicial
        }


//Imprimir todos los numeros del 1 al 10
let condicion = 1;

while(condicion <= 10){
    console.log(condicion);
    //condicion = condicion + 1
    condicion++;
}


let numero = 1;
numero++;
numero++;
numero++;
numero++;
numero--;
numero--;
console.log(numero);
*/

/*
        do while
    Al parecer es lo mismo que while. Solo que aquí 
    primero se especifica la acción a realizar y después se establece
    la condición y al menos se va a ejecutar una vez. Mientras que en while 
    primero se establece la condición y 
    a continuación la acción a realizar.



let numero = 1;

do {
    console.log(numero);
    numero++;
} while (numero <= 10);

*/

/*

        For
    
    Utiliza un contador para rrealizar los loops,
    el nombre de la variable generalmente es i



for(let control = 1; control <= 10; control++){
    console.log(control);
}


const comidas = ["pozole", "tacos", "tamales", "tortas"];

for(let i = 0; i < comidas.length; i++){
    console.log(comidas[i]);
//aqui imprime el arreglo 5 veces ya que el cero tambien cuenta 
//como 1 posición
}

*/



const arreglo1 = [1,4,7, 9, 19, 15, 46, 27, 40, 123];
const resultado = [];

for ( let i = 0; i< arreglo1.length; i++){
    let multiplicar = arreglo1[i] * 2
    resultado.push(multiplicar);
    document.write(resultado[i])
}
document.write(resultado);
