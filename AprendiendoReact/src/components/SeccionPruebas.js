import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component{

    contador = 0;

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contador: 0
    //     };


    // }

    state = {
        contador: 0
    };


    HolaMundo(nombre, edad=27){
        let presentacion = <div>Hola soy {nombre} <h3>Tengo {edad} años</h3></div>;
        return presentacion;
    }

    sumar = (e) => {
        this.contador = this.contador + 1;
        this.setState({
            contador: (this.state.contador+1)
        });
    }

    restar = (e) => {
        this.contador = this.contador -1;
        this.setState({
            contador: (this.state.contador-1)
        });
    }

    render(){

        let nombre = 'Christian Tarifeño';
        let edad = 27;

        return(

            <section id="content">

                <h2 className="subheader">&Uacute;ltimos art&iacute;culos</h2>

                <p>Hola bienvenido al curso de react de V&iacute;ctor Robles web!</p>


                <h2 className="subheader">Funciones y JSX b&aacute;sico</h2>
                <p>
                    {this.HolaMundo(nombre, edad)}
                </p>


                <section className="componentes">
                    <MiComponente />
                </section>

                <h2 className="subheader">Estado</h2>

                <p>{this.state.contador}</p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)} />
                    <input type="button" value="Restar" onClick={this.restar.bind(this)} />
                </p>

            </section>

        )
    }

}

export default SeccionPruebas;