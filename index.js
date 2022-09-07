const persona = {
    nombre: "Martin",
    edad: 22,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola")
    }
}
console.log(persona)
persona.saludo()

const otraPersona = {
    nombre: "Miguel",
    edad: 22,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola")
    }
}
console.log(otraPersona)
otraPersona.saludo()





//Esto es una Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,    //Esto es igual a nombre: nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hola")
        }
    }
}

const nuevaPersona = creaPersona("Martin", 22, true)
console.log(nuevaPersona)
