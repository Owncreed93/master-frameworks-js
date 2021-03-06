import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

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
import Article from './components/Article.js';
import CreateArticle from './components/CreateArticle.js';
import EditArticle from './components/EditArticle.js';

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
                        <Route exact path="/blog/articulo/:id" component={Article} />
                        <Route exact path="/blog/crear" component={CreateArticle} />
                        <Route exact path="/blog/editar/:id" component={EditArticle} />
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/redirect/:search" render={ 
                            (props) => {

                                let search = props.match.params.search;

                                return (<Redirect to={`/blog/busqueda/${search}`}/>);

                            }
                         
                        }/>
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