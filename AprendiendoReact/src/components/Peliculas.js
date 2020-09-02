import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = { }

    cambiarTitulo = () => {

        let { peliculas } = this.state;

        // let random = Math.floor(Math.random() * 3);

        peliculas[0].titulo = 'Batman Begins'

        this.setState({

            peliculas: peliculas

        })
    }

    favorita = (pelicula, indice) => {

        console.log('Favorita Marcada');
        console.log(pelicula, indice);
        console.log(indice);

        this.setState({

            favorita: pelicula

        })

    }

    componentWillMount() {
        alert('The component will be set');
        this.setState({ 
            peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://vignette.wikia.nocookie.net/dcextendeduniverse/images/b/bd/Batman_v_Superman_Dawn_of_Justice.png/revision/latest/top-crop/width/360/height/450?cb=20160217012051&path-prefix=es' },
            { titulo: 'Gran Torino', image: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg' },
            { titulo: 'Looper', image: 'https://images-na.ssl-images-amazon.com/images/I/719PHksoVaL._SL1500_.jpg' }
             ],

            nombre: 'Christian Tarifeño Ramirez',

            favorita: {}
        })
        
    }

    componentDidMount() {

        alert('The component has been set');

    }

    componentWillUnmount() {

        alert('This component will be dismounted.');

    }

    render () {
        let pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        let favorita;

        if( this.state.favorita.titulo ) {

            favorita = (

                <p className="favorita" style={pStyle} >
                    <strong>La pelicula favorita es : </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>

            );

        } else {

            favorita = (

                <p>No hay pelicula favorita</p>

            )

        }

        return (

            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las pel&iacute;culas de {this.state.nombre}</p>
                <p><button onClick={this.cambiarTitulo}>Cambiar t&iacute;tulo</button></p>

                {/* {this.state.favorita.titulo ? (  

                        <p className="favorita" style={pStyle} >
                        <strong>La pelicula favorita es : </strong>
                        <span>{this.state.favorita.titulo}</span>
                        </p>

                    ) : ( 
                        <p>No hay pelicula favorita</p>
                    )
                    
                } */}

                {favorita}
                

                {/** CREATE PELICULA COMPONENT */}

                <div className="articles" className="peliculas">
                    {this.state.peliculas.map( (pelicula, i) => {

                        return(
                            <Pelicula key={i} 
                                      pelicula={pelicula}
                                      indice={i}
                                      marcarFavorita= {this.favorita}
                            />
                        )

                    })}
                </div>
            </div>
            
        )
    }

}

export default Peliculas;