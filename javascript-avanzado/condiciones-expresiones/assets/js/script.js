/*
Operadores aritméticos
+ - / * % ()

*/

let operacion = 3* 5 + (10-5);
console.log(operacion);

let operacion2 = 3-5/2*4

/*
Operadores relacionales

< > <= >= == === != !==
boolean true false
*/

console.log(7<7); //no estamos especificando que hay que comparalo con otro número
console.log(7<=7);

console.log(7=='7');//compara el valor
console.log(7==='7');//compara el tipo de dato

console.log(7!='7');
console.log(7!=='7');

/*
Incremento y decremento

+= -= *= /=
*/
let incremento = 5;
incremento += 5;//incremento= incremento + 5
console.log(incremento);

incremento-=5;
console.log(incremento)

incremento*=5;
console.log(incremento);

incremento/=5;
console.log(incremento);

/*
Operador unario

++ --
*/
let sumar =0;

console.log(sumar);
sumar++;
console.log(sumar + 'linea 53');
sumar++;
console.log(sumar + 'linea 55');
sumar--;
sumar--;
sumar--;
console.log(sumar + 'linea 59');

/**

 */
for (let i=0; i<10; i++){

};

let num =5;
console.log(++num);
console.log(num);

for (let i=0; i<5; i++){
    //hace su primera iteración y se detiene
    console.log('ciclo padre')
    for (let j=0; j<5; j++){
        //hace su repetición propia
        console.log('ciclo hijo');
    }
};