let numeros= [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];
/*función anónima=callbackfn. Es una función desechable
for each nos da la posibilidad de devolver los elementos de un arreglo
la función de for each puede contener 3 partes
1. cada elemeto del arreglo
2. la posición del elemnto en el arreglo
3. el arreglo completo

numeros.forEach(function(elemento, indice){
    document.write(elemento + '-' + indice + '<br>');
});
*/
numeros.forEach((elemento)=>{
    document.write(elemento + '<br>');
});


/*
El método map, nos permite crear un nuevo arreglo a partir de otro 
*/
let num2 = numeros.map(function(elemento){
    return elemento * 2;
});

document.write('<br>'+ num2 + '<br>');


/*
let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>');

frutas2.push('pera');
document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>');
*/

//con map
/*
let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>');

frutas2.push('pera');
document.write('<br>'+frutas+'<br>');
document.write('<br>'+frutas2+'<br>');
*/


/*
método includes, sólo devuelve un true o un false, dependiendo de si el elemento existe o no

*/
document.write('<br>' + numeros.includes(328)+ '<br>');
document.write('<br>' + numeros.includes(111)+ '<br>');

/*
método filter
crea un nuevo arreglo que siga las condiciones establecidas en la función
*/
let numerosPares = numeros.filter((elemento)=>{

/*    if(elemento %2 == 0){
    return true;
} else{
    return false
}


   return elemento % 2 == 0

*/
        if(elemento>10){
            return true;
            }
});

document.write('<br>' + numerosPares + '<br>');

let frutas = ['Mango', 'uva', 'piña', 'mandarina','manzana', 'aguacate', 'sandía'];
let frutasFiltro = frutas.filter((fruta)=> {
    /*if (fruta.includes('i')){
        return true;
    }
    */
   return fruta.toLowerCase().includes('m');
});

document.write('<br>'+ frutasFiltro+'<br>')


/*
Método sort, ordena los elementos de un arreglo y los muta
No usar
*/
let otrosNumeros = [9,2,3,5,1,4,8,6,7]
document.write('<br>'+ otrosNumeros.sort()+'<br>');

/*
Método Reverse, invierte el orden de los elementos de un arreglo.
*/
document.write('<br>'+ numeros.reverse()+'<br>');

/*
Método find, no devuelve un arreglo. Devuelve el primer elemento que cumpla con la condición
*/
let frutaEncontrada = frutas.find((elemento)=>{
    return elemento.toLowerCase().includes('ma');
});
document.write('<br>'+ frutaEncontrada+'<br>')

