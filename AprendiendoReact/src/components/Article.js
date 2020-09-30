import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';

import Global from '../Global';
import Sidebar from './Sidebar';
import Articles from './Articles';
import ImageDefault from '../assets/images/image-not-found.jpg';

class Article extends Component {

    url = Global.url;

    state = {

        article: false,
        status: null

    }

    componentDidMount() {
        this.getArticle();
    }

    getArticle = () => { 

        let id = this.props.match.params.id;
        axios.get(`${this.url}article/${id}`)
            .then( res => 
                this.setState({ 

                    article: res.data.article,
                    status: 'success'

                 })
            )
            .catch( err => {

                this.setState({

                    articles: [],
                    status: 'success'
    
                });
                console.log(err)

            })

    }

    render() {

        let article = this.state.article

        return( 
            <div className="center">
                <section id="content">

                    { article && 
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                            { article.image !== null ?
                                <img src={`${this.url}get-image/${article.image}`}/>
                                : 
                                (<img src={ImageDefault} alt={article.title} />)
                            }
                            </div>

                            <h1 className="subheader">{article.title}</h1>

                            <span className="date">
                                <Moment locale='es' fromNow>{article.date}</Moment>
                            </span>

                            <p>
                                {article.content}
                            </p>

                            <a href="#" className="btn btn-danger">Eiminar</a>
                            <a href="#" className="btn btn-warning">Editar</a>

                            <div className="clearfix"></div>
                        </article>
                    }

                    {!article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El art&iacute;culo no existe</h2>
                            <p> Intentalo m&aacute;s tarde </p>
                        </div>

                    }

                    {this.state.status === null &&
                        <div id="article">
                            <h2 className="subheader">Cargando ...</h2>
                            <p> Espere unos segundos </p>
                        </div>

                    }

                    

                </section>

                <Sidebar/>
        
                {/* LIMPIAR FLOTADOS */}
                <div className="clearfix"></div>

            </div>
        );

    }

}

export default Article;