import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// * PACKAGES
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/es';

// * INNER IMPORTS
import Global from './Global';

import ImageDefault from '../assets/images/image-not-found.jpg';



class Articles extends Component {

    url = Global.url

    state = {

        articles: [],
        status: null

    }

    componentWillMount() {

        let home =  this.props.home;
        let search = this.props.search;

        if ( home === 'true' ) {

            this.getLastArticles();

        } else if (search && search !== null && search !== undefined ) {

            this.getArticlesBySearch(search);

        } else {

            this.getArticles();

        }

        

    }

    getArticlesBySearch = (searched) => {
       
        axios.get( `${this.url}search/${searched}` )
            .then( res => {

                this.setState({

                    articles: res.data.articles,
                    status: 'success'
    
                });

            })
            .catch( err => {

                this.setState({

                    articles: [],
                    status: 'success'
    
                });
                console.log(err)

            })

    }

    getLastArticles = () => {
       
        axios.get( `${this.url}articles/last` )
            .then( res => {

                this.setState({

                    articles: res.data.articles,
                    status: ''

                });


            })
            .catch( err => {

                console.log(err);

            })

    }

    getArticles = () => {
       
        axios.get( `${this.url}articles/` )
            .then( res => {

                this.setState({

                    articles: res.data.articles,
                    status: ''

                });

                console.log( this.state );

            })
            .catch( err => {

                console.log(err);

            })

    }

    render () {

        if ( this.state.articles.length >= 1 ){

            let listArticles = this.state.articles.map( (article) =>  {

                return (
                    <article className="article-item article-detail" key={article._id}>
                        <div className="image-wrap">
                            { article.image !== null ?
                                (<img src={this.url+'get-image/'+article.image} alt={article.title} />)
                                : 
                                (<img src={ImageDefault} alt={article.title} />)
                            }
                        </div>

                        <h1 className="subheader"> {article.title} </h1>

                        <span className="date">
                            <Moment fromNow date={ article.date } />
                        </span>
                        <Link to={'/blog/articulo/'+article._id}>Leer m&aacute;s</Link>

                        <div className="clearfix"></div>
                    </article>
                );


            });



            return (
                <div id="articles">
                    {listArticles}
                </div>
            )

        } else if ( this.state.articles.length === 0 && this.state.status === 'success') {

            return (
                <div id="articles">
                    <h2 className="subheader" > No hay articulos para mostrar </h2>
                    <p> Todavía no hay contenido en esta sección. </p>
                </div>
            )

        } else {
            return (
                <div id="articles">
                    <h2 className="subheader" > Cargando... </h2>
                    <p> Espere un segundo ... </p>
                </div>
            )
        }

        
    }
}

export default Articles;