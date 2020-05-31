alert('Hola Mundo JS')

let nombre = 'Christian Tarifeño'
let altura = 172

let concatenacion = nombre +" " +altura 
document.write(`<p>Hola mi nombre es ${nombre} y mido ${altura} cm.</p>`)

let datos = document.getElementById('datos')

datos.innerHTML = concatenacion

let coche = {
    modelo : 'Mercedes Clase A',
    maxima : 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad)
    }
}

datos.innerHTML = coche.modelo

coche.mostrarDatos()


let saludar = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let saludo = "Hola muy buenas a todos chabales"
        // saludo = false
        if(saludo) {
            resolve(saludo)
        } else {
            reject('No hay saludo disponible')
        }
    }, 2000)
})

saludar.then( resultado => {
    alert(resultado);
})
.catch(error => {
    alert(error)
})