import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';


import Global from '../Global';
import Sidebar from './Sidebar';

import ImageDefault from '../assets/images/image-not-found.jpg';


// * FORM VALIDATION AND ALERTS
import SimpleReactValidator from 'simple-react-validator';

// GET ARICLE'S ID TO EDIT FROM THE URL
// CREATE A METHOD TO RETRIEVE THE OBJECT FROM THE BACKEND
// FILL THE FORM WITH DATA
// UPDATE THE OBJECT 

class EditArticle extends Component {

    url = Global.url;

    articleId = null;

    titleRef = React.createRef();
    contentRef = React.createRef();
    

    state = {

        article: {},
        status: null,
        selectedFile: null

    };


    // * METHODS
    componentWillMount() {

        this.articleId = this.props.match.params.id;

        this.getArticle(this.articleId);

        this.validator = new SimpleReactValidator({

            messages: {
                required: 'Este campo es requerido'
            }

        });

        

    }

    getArticle = (id) => {

        axios.get(`${this.url}article/${id}`)
            .then( res => {

                this.setState({

                    article: res.data.article

                })

            })

    }

    // ------------------------------------------------------------------------ //
    changeState = () => {

        this.setState({
            article: { 
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });


        this.validator.showMessages();
        this.forceUpdate();

    

        console.log(this.state);

    }

    // ------------------------------------------------------------------------ //

    saveArticle = (e) => {

        e.preventDefault();

        // FILL STATE IN THE FORM
        this.changeState();

        // * VALIDATE FORM
        if( this.validator.allValid() ){
            // MAKE A HTTP REQUEST VIA POST TO SAVE ARTICLE
            axios.put( `${this.url}article/${this.articleId}`, this.state.article )
                .then( res => {
                    if( res.data.article ) {

                        this.setState({

                            article: res.data.article,
                            status: 'waiting'

                        });

                        swal(
                            'Articulo actualizado',
                            'El articulo ha sido actualizado correctamente',
                            'success'
                        )

                        // * UPLOAD IMAGE
                        if(this.state.selectedFile !== null) {

                            // * GET ARTICLES'ID
                            let articleId = this.state.article._id;

                            // * CREATE FORM DATA AND ADD FILE
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            )
                            

                            // * AJAX REQUEST
                            axios.post(`${this.url}/upload-image/${articleId}`, formData)
                                .then(res => {

                                    if( res.data.article ) {

                                        this.setState({

                                            article: res.data.article,
                                            status: 'success'

                                        })

                                    } else {

                                        this.setState({

                                            article: res.data.article,
                                            status: 'false'

                                        })

                                    }

                                })


                        } else {

                            this.setState({

                                status: 'success'

                            })

                        }

                        console.log(this.state)

                    } else {

                        this.setState({
                            status: 'failed'
                        })

                        console.log(res)

                    }

                })
                // .catch( err => {

                //     this.setState({

                //         article: {},
                //         status: 'failed'
        
                //     });
                //     console.log(err)

                // })
        } else {

            this.setState({

                status: 'failed'

            });

            this.validator.showMessages();
            this.forceUpdate();

        }
    }

    // ------------------------------------------------------------------------ //

    fileChange = (event) => {

        this.setState({

            selectedFile: event.target.files[0]

        })

        console.log(this.state)

    }

    // ------------------------------------------------------------------------ //

    render() {

        console.log(this.state.article)

        let article = this.state.article

        if( this.state.status === 'success') {

            return <Redirect to="/blog" /> 

        }

        return (
            <div className="center">

                <section id="content">

                    <h1 className="subheader">Editar Art&iacute;culo</h1>

                    {this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle} >
             
                            <div className="form-group">

                                <label htmlFor="title">T&iacute;tulo : </label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState}/>

                                {/* VALIDATION */}
                                { this.validator.message('title', this.state.article.title, 'required|alpha_num_space') }

                            </div>

                            <div className="form-group">

                                <label htmlFor="content">Contenido : </label>
                                <textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>

                                {/* VALIDATION */}
                                { this.validator.message('content', this.state.article.content, 'required') }

                            </div>

                            <div className="form-group" >

                                <label htmlFor="file0">Imagen : </label>
                                
                                <input  type="file" name="file0" onChange={this.fileChange}/>
                                <div className="image-wrap">
                                    { article.image !== null ?
                                        <img src={`${this.url}get-image/${article.image}`} alt={article.title} className="thumb" />
                                        : 
                                        (<img src={ImageDefault} alt={article.title} className="thumb"/>)
                                    }
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Guardar" className="btn btn-success" />

                        </form>
                        
                    }

                    {!this.state.article.title &&

                        <h1 className="subheader"> Cargando... </h1>

                    }



                </section>

                <Sidebar/>

            </div>


        )

    }

}

export default EditArticle;