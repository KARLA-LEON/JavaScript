class Pokemon{
    constructor(nombre, tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    //Métodos
    atacar(){
        return console.log(`${this.nombre} está atacando`)
    }
}

class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo);
        this.edad=edad;
    }
    //Métodos
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando.`)
    }
}

class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad)
        this.color=color
    }
}

const Electrico1= new Electrico('Panchito', 'Electrico', 4, 'gris');
console.log(Electrico1)
const Pikachu1 = new Pikachu('Juan', 'Eléctrico', 3);
console.log(Pikachu1);

Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon('Charmander', 'Fuego');
Pokemon1.atacar();
