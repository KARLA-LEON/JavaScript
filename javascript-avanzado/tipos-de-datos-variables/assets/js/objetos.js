/*let miObjeto = {
    // pares de clave-valor
    //clave: 'valor'
    nombre: 'Karla'
}
*/

let nombre ='Karla León';
let edad =27;
let direccion ='CDMX';
let numero =123456;

console.log('nombre');

let persona ={
    nombre: {
        apellPater: 'León', 
        apellMater: 'Resendiz',
        nombre: 'Karla'
    },
    edad: 27,
    direccion: {
        calle: 'Avicultura',
        colonia: '20 de noviembre',
        alcaldia: 'Venustiano Carranza'
    },
        
    numero: [
        123456,
        987654
    ]
};
//corchetes [] para arreglos y llaves {} para objetos
/*
['valor1', 'valor2', 'valor3']
arreglo[1];


*/
console.log(persona);
console.log(persona.nombre);


let vestido ={

    talla: [
        5, 7, 9, 11, 13, 15, 17, 19
    ],

    estampado: {
        pattern1: 'floral',
        pattern2: 'color-sólido',
        pattern3: 'geométrico',
        pattern4: 'animal-print'
    },

    estiloManga:{
        style1: 'manga-larga',
        style2: 'manga-corta',
        style3: 'sin mangas',
        style4: 'strapless'
    },

    color:[
        'red', 'black', 'blue', 'white', 'golden-rose'
    ],

    largo: {
        long1: 'mini',
        long2: 'midi',
        long3: 'maxi'
        
    }
    

};

console.log(vestido.talla[5].estampado.pattern2.estiloManga.style1.color[1].largo.long1);
