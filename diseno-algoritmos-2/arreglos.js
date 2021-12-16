/*
Colección de elementos
Tienen métodos o funciones que nos permiten ordenar
 o manipular los datos almacenados
 Las pocisiones comienzan a contar desde el 0
 Se recomienda const para declarar un arreglo
 Se utilizan para agrupar cosas
 Se pueden almacenar diferentes tipos de datos en un mismo arreglo
 */

//manera 1 (más utilizada)
 const arreglo1 = [4, "hello", false[8, 12, 16]]
 console.log(arreglo1);
//manera 2 (más nueva)
 const arreglo2 = Array.of(1, "Hola", true);
 console.log(arreglo2);
//manera 3 (más antigua)
 const arreglo3 = new Array (3, true, "adiós");

 const variable1 = 3;
 console.log()

 const frutas = ["manzana", "naranjas", "uvas", "sandías", [1, 2, 3, 4, 5, ["A", "B","C"]]];
 //notación de corchetes
 console.log(frutas[1]);
 console.log(frutas[3]);
 console.log(frutas[4][4]);
 console.log(frutas[4][5][1]);
 console.log(frutas);
 /*     
        Métodos
        -Lenght = Longitud, nos muestra la cantidad de
        elementos en un arreglo
 */
const letras = ["A", "b","c", "d"];
console.log(letras.length);

/* Push
-Añade un elemeto al final del arreglo
*/
letras.push("e");
console.log(letras);

/*
    Pop
-Elimina el último elemto del arreglo, no hay que especificar
el elemento a eliminar, ya que de manera automática
quita el último elemento del arreglo
*/
letras.pop();
console.log(letras);

/*
    Unshift
-Agrega un elemento al incio de nuestro arreglo
*/
letras.unshift(1);
console.log(letras);

/*
    Shift
-Elimina el primer elemento del arreglo de manera automática.
*/
letras.shift();
console.log(letras);

