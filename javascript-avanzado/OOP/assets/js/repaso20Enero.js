class Animalitos{
    constructor(nombre, edad, especie, revisado){
        this.nombre=nombre;
        this.edad=edad;
        this.especie=especie;
        this.enfermo=false;
        this.revisado=revisado;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}.`)
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes=0;
        this.pacientesRevisados=0;
        this.listaPacientes=[];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes +=1;
        let mensaje=`Paciente agregado <br>`;
        return document.write(mensaje);
    }

    modificarPacRev(){
        this.pacientesRevisados++
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado=true;
            this.modificarPacRev();//llamando a otro método de la misma clase
            //this.pacientesRevisados++
            document.write('El paciente ha sido revisado')
        }else{
            document.write('Este paciente ya ha sido revisado');
        }
    }
    mostrarLista(){
        for(let i=0; i<this.listaPacientes.length; i++){
            document.write("" + this.listaPacientes[i].nombre);
        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados}.<br>`)
    }
}

const vetLomitos = new Veterinario();

const Animalitos1 = new Animalitos('velvett', 9, 'gato', false);
const Animalitos2 = new Animalitos('manchas', 5, 'perro', true);
console.log(Animalitos1);

vetLomitos.agregarPaciente(Animalitos1);
vetLomitos.agregarPaciente(Animalitos2);

vetLomitos.mostrarLista();
vetLomitos.revisarPaciente(Animalitos1);
vetLomitos.mostrarLista();

vetLomitos.revisarPaciente(Animalitos2);

//Operador de corto circuito
let variable = 0;
console.log()