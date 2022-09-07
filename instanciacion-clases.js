class Persona{
    nombre;
    edad;
    isDeveloper;
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nuevaPersona = new Persona("Martin", 22, true)
console.log(nuevaPersona)
nuevaPersona.saludo()

let numero = 60 //Inicializar
console.log(typeof numero)

let persona2 = new Persona("Maria",34,false)  //instanciar
console.log(persona2 instanceof Persona)

//Operador instanceof  -> similar a typeof pero para clases
