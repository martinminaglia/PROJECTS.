class Persona{
    //Private-->  #   Privar los atributos
    //Private--> Solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    //#obtenEdad

    //Protected --> _  Proteger los atributos
    //Protected --> solo se puede acceder desde dentro de la clase y desde las clases descendientes
    _isDeveloper = true
    constructor(nombre,edad){
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
    obtenNombre(){ //Funcion getter -> nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }
    //#obtenEdad(){
      //  return this.#edad
    //}
    getEdad(){
        return this.#edad
    }
    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Martin", 23)
//console.log(persona)
//console.log(persona.nombre)
persona.saludo()

console.log(persona.obtenNombre())
//console.log(persona.#obtenEdad)
console.log(persona._isDeveloper)



///////////////////////////////////


//Getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos.
const edad = persona.getEdad()
console.log(edad)
//Setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos.
//Quiero cambiar la edad de la persona
persona.setEdad(22)
console.log(persona.getEdad())