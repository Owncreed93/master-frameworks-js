import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// * COMPONENTS
import Home from './components/Home.js';
import Header from './components/Header.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';
import MiComponente from './components/MiComponente.js';
import Formulario from './components/Formulario.js';
import Search from './components/Search.js';
import Peliculas from './components/Peliculas.js';
import Error from './components/Error.js';




class Router extends Component {

    render(){

        return(
            
            <BrowserRouter>
                <Header />

                {/* ROUTES AND PAGES CONFIGURATION */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog/articulo/:id" render={ () => (

                            <h1> P&aacute;gina individual del Art&iacute;culo </h1>

                        )
                        }/>
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/formulario" component={Formulario} />
                        <Route exact path="/peliculas" component={Peliculas} />

                        <Route exact path="/pagina-1" render= { () => (
                            <React.Fragment>
                                <h1>Hellow world from a route without a component!</h1>
                                <MiComponente saludo="Hellow from MiComponente!"/>
                            </React.Fragment>
                            )
                        } /> 

                        <Route exact path="/pruebas/:nombre/:apellidos?" render={ (props) => {

                            // * EXTRACT PARAMS FROM THE URL
                            let name = props.match.params.nombre
                            let surname = props.match.params.apellidos

                            return (
                                <div id="content">
                                    <h1>P&aacute;gina de pruebas</h1>
                                    <h2>
                                        {name && !surname &&
                                            <span>{name}</span>
                                        }
                                        {name && surname &&
                                            <span>Hello, I am {name} {surname}</span>
                                        }
                                    </h2>
                                </div>
                            )}
                        }/>
                        <Route component={Error}/>
                    </Switch>


                    {/* CLEAN FLOATS */}
                    <div className="clearfix"></div>

                    <Footer />

            </BrowserRouter>
        );
    }

}

export default Router;