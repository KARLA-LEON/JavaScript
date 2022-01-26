/*
Código síncrono
 */

let variableSincrona;
variableSincrona=10*3;
console.log(variableSincrona);

/*
Código asíncrono
*/
let variableAsincrona;
//Tiene dos parámetros, una función anónima y el tiempo que va a tardar en ejecutarse, este tiempo está en milisegundos
setTimeout(()=>{
    variableAsincrona=10*3;
    console.log(variableAsincrona);
}, 2000);
