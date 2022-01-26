//Las clases son un molde que permiten crear objetos, cuando se usan clases, siempre debe llevar la primera mayúscula
//Lleva un constructor, que es la función a ejecutar
class Animal{
    constructor(nombre, especie){
        //this hace referencia al contexto en el que se utiliza

        this.nombre=nombre;//Lo de la derecha es lo que está desntro del parámetro del constructor
        this.especie=especie;
    }

    //getters y setters, sólo leen o modifican el atributo
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }
    
    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie=especie;
    }


    //métodos=función
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre}.<br>`)
    }

    cambiarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}. <br>`
        return mensaje;
    }
     //Métodos estáticos, no necesitan tener un objeto creado para ejecutarse
     //Pertenece sólo a la clase y no se hereda a los objetos
    static saludar(){
        return console.log('Hola, soy un método estático');
}

}

//Heredan los atributos y la función de la clase
const Animal1=new Animal('Scooby', 'Perro');//Animal1 es un objeto
console.log(Animal1);

const Animal2 = new Animal('Pecas', 'Gato');
console.log(Animal2);

Animal1.presentarse();
Animal2.presentarse();

document.write(Animal1.cambiarNombre('Jake'));

//Getters y setters
//get= obtener el valor de un atributo
//set= fijar o cambiar el valor de un atributo
//Se utilizan como si fueran atributos
console.log(Animal1.getNombre);
Animal1.setNombre='Puppy';
console.log(Animal1.getNombre);

