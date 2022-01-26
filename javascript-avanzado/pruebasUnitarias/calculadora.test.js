const {sumar,restar,multiplicar,dividir} = require('./calculadora');
describe('Pruebas en el componente calculadora', ()=>{
    test('Prueba en la función sumar',()=>{
  
        expect(sumar(3,5)).toBe(8);
    });
});

    test('Prueba en la función restar',()=>{
        expect(restar(10,5)).toBe(5);
    });

    test('Prueba en la función multiplicar',()=>{
        expect(multiplicar(10,5)).toBe(50);
    });

    test('Prueba en la función dividir',()=>{
        expect(dividir(10,5)).toBe(2);
    });
