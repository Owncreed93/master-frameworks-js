import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import Global from '../Global';
import Sidebar from './Sidebar';


// * FORM VALIDATION AND ALERTS
import SimpleReactValidator from 'simple-react-validator';

class CreateArticle extends Component {

    url = Global.url;

    titleRef = React.createRef();
    contentRef = React.createRef();
    

    state = {

        article: {},
        status: null,
        selectedFile: null

    };


    // * METHODS
    componentWillMount() {

        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido'
            }
        });

    }

    // ------------------------------------------------------------------------ //
    changeState = () => {

        this.setState({
            article: { 
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
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
            axios.post( `${this.url}save`, this.state.article )
                .then( res => {
                    if( res.data.article ) {

                        this.setState({

                            article: res.data.article,
                            status: 'waiting'

                        });

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

        if( this.state.status === 'success') {

            return <Redirect to="/blog" /> 

        }

        return (
            <div className="center">

                <section id="content">

                    <h1 className="subheader">Crear Art&iacute;culo</h1>

                    <form className="mid-form" onSubmit={this.saveArticle} >

                        <div className="form-group">

                            <label htmlFor="title">T&iacute;tulo : </label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}/>

                            {/* VALIDATION */}
                            { this.validator.message('title', this.state.article.title, 'required|alpha_num_space') }

                        </div>

                        <div className="form-group">

                            <label htmlFor="content">Contenido : </label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>

                            {/* VALIDATION */}
                            { this.validator.message('content', this.state.article.content, 'required') }

                        </div>

                        <div className="form-group" >

                            <label htmlFor="file0">Imagen : </label>
                            <input  type="file" name="file0" onChange={this.fileChange}/>

                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success" />

                    </form>

                </section>

                <Sidebar/>

            </div>


        )

    }

}

export default CreateArticle;