/*
la palabra reservada const se utiliza para
declarar constantes. Al igual que let, sólo funciona
en un bloque específico del código.
El valor asignado, es el valor que se mantiene.
Si se quisiera cambiar en otro bloque de código,
se utilizaría let
*/
const gravedad = 9.81
gravedad = 30; //Aquí el código va a arrojar un error

console.log(gravedad);