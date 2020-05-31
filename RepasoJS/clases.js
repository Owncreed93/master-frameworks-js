'use strict'

class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo
        this.velocidad = Number(velocidad)
        this.antiguedad = antiguedad

    }

    aumentarVelocidad(){
        this.velocidad += 1
    }

    disminuirVelocidad(){
        this.velocidad -= 1
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad, altura){
        super(modelo, velocidad, antiguedad)
        this.altura = altura
    }

    mostrarAltura(){
        return `La altura del bus es : ${this.altura}`
    }
}

let autobus1 = new Autobus('PEGASUS', 200, 2017, 10)
let coche1 = new Coche('BMW', 200, 2017)
let coche2 = new Coche('Audi', '100', '2018')
let coche3 = new Coche('Mercedes', '200', '2017')
let coche4 = new Coche('Renault', '200', '2017')

console.log(autobus1)
console.log(autobus1.mostrarAltura())
console.log(coche1)
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
console.log(coche1)