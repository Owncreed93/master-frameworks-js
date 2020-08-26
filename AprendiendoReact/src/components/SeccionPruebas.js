import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component{
    HolaMundo(nombre, edad=27){
        let presentacion = <div>Hola soy {nombre} <h3>Tengo {edad} años</h3></div>;
        return presentacion;
    }

    render(){

        let nombre = 'Christian Tarifeño';
        let edad = 27;

        return(

            <section id="content">

                <h2 className="subheader">&Uacute;ltimos art&iacute;culos</h2>

                <p>
                    {this.HolaMundo(nombre, edad)}
                </p>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <section className="componentes">
                    <MiComponente />
                    <Peliculas />
                </section>

            </section>

        )
    }

}

export default SeccionPruebas;