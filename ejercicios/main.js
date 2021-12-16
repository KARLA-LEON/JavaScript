alert ("Hola mundo!");

/*palabras reservadas en javaScript
var, const, let
Pero por convención, poco a poco 
var ya casi no se está usando*/
let miNombre = "Karla León";
console.log(miNombre);

/*
la variable primitiva number permite almacenar
cualquier valor numérico, sea int, float, etc.
*/
let numero1 = 10;
let numero2 = 10.5;
let numero3 = -50;

console.log(numero1, numero2, numero3);
console.log("el valor de número 1 es:" + numero1);
console.log("el valor de número 2 es:" + numero2);
console.log("el valor de número 3 es:" + numero3);

/*
Datos primitivos Boolean
Sólo tiene 2 estados: true, false
*/
let myBoolean1 = true;
let myBoolean2 = false;
console.log("El valor de la variable 1 es:" + myBoolean1);
console.log("El valor de la variable 2 es:" + myBoolean2);

/*
tipos de variable null
La variable está vacía
*/
let variableVacia = null;
console.log(variableVacia);

/*
variables de tipo undefined

Es un tipo de variable que no se encuentra declarada,
es decir, no hay ningún valor asignado a dicha variable
Puede ser a cause de escribir mal el nombre de la variable
No es lo mismo que null, ya que en ese tipo de variables 
sí declaramos específicamente que su valor sea nulo
*/
let variableSinDefinir;
console.log(variableSinDefinir);
variableSinDefinir = "no soy igual que null";
console.log(variableSinDefinir);
