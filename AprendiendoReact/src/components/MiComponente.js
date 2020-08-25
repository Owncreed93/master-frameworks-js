import React, { Component } from 'react';

class MiComponente extends Component{

    render() {

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón cocido'],
            calorias: '400'
        }

        // * IT ONLY RETURNS 1 TAG, BUT IT COULD HAVE MORE TAGS WRAPPED IN
        return (

            // <React.Fragment> --> TAG TO AVOID REACT HTML SINGLE TAG RETRICTION
            //     <h1>Hola, soy el componente llamado: Mi componente</h1>
            //     <h2>Estoy probando el componente</h2>
            //     <hr/>
            // </React.Fragment>

            <div className="mi-componente">
                <h1>Receta: {receta.nombre}</h1>
                <h2>Calorías: {receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente)
                            return (
                                <li key={i}>{ingrediente}</li>
                            )
                        })
                    }
                </ol>
                <hr/>
                

            </div>
            
        );
    }

}

export default MiComponente;