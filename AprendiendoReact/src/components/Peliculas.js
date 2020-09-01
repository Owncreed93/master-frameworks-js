import React, { Component } from 'react';

class Peliculas extends Component {

    state = {

        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://pics.filmaffinity.com/Batman_v_Superman_El_amanecer_de_la_Justicia-113098552-large.jpg' },
            { titulo: 'Gran Torino', image: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg' },
            { titulo: 'Looper', image: 'https://images-na.ssl-images-amazon.com/images/I/719PHksoVaL._SL1500_.jpg' }
        ],

        nombre: 'Christian Tarifeño Ramirez'

    }

    render () {
        return (

            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las pel&iacute;culas de {this.state.nombre}</p>

                {/** CREATE PELICULA COMPONENT */}

                <div className="articles" className="peliculas">
                    {this.state.peliculas.map( (pelicula, i) => {

                        return(
                            <article className="article-item" id="article-template" key={i}>
                                <div className="image-wrap">
                                    <img src={pelicula.image} alt={pelicula.titulo} />
                                </div>
                
                                <h2>{pelicula.titulo}</h2>
                                <span className="date">
                                    Hace 5 min
                                </span>
                                <a href="#">Leer m&aacute;s</a>

                                <div className="clearfix"></div>
                            </article>
                        )

                    })}
                </div>
            </div>
            
        )
    }

}

export default Peliculas;