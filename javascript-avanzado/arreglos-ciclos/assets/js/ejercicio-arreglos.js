let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let sumArreglo = 0;

for (let i = 0; i < num.length; i++) {
    sumArreglo += num[i];
}

let promedio = sumArreglo/num.length;

document.write(`Los elementos de tu arreglo son: ${num}.${'<br>'}La suma de estos elementos es: ${sumArreglo}.${'<br>'}Y el promedio es: ${promedio}.`);