/*
Variable tipo var se utilizaba anteriormente,
son variables globales, var es una variable local, 
es decir, con var siempre es la misma variable, así esté
al principio del código, en medio, o al final.
*/
var numero = 40;
console.log(numero);//el valor de la variable es 40

if(true) {
    var numero = 50;
    console.log(numero);//el valor de la variable es 50
}

console.log(numero);//el valor de la variable es 50

var texto = "Bootcamp Java";
console.log(texto);
/*
let es una variable contexto, es decir, el contexto aquí
es la condicional if. Su función sólo existe entre los
corchetes. Se utiliza let para que las variables estén
acotadas y sólo funcionen en una parte específica del
código
*/
if(true) {
    let texto = "Cohorte 8";
    console.log(texto);
    let numeroFavorito = 76;
}
/*
Es por eso que salta un error al querer imprimir la
variable numeroFavorito fuera de las llaves. 
*/
console.log(numeroFavorito);
console.log(texto);