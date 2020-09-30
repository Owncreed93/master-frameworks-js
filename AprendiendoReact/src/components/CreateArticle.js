import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import Global from '../Global';
import Sidebar from './Sidebar';

// * FORM VALIDATION AND ALERTS

class CreateArticle extends Component {

    url = Global.url;

    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {

        article: {},
        status: null

    };

    changeState = () => {

        this.setState({
            article: { 
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });

        console.log(this.state);

    }


    saveArticle = (e) => {

        e.preventDefault();

        // FILL STATE IN THE FORM
        this.changeState();


        // MAKE A HTTP REQUEST VIA POST TO SAVE ARTICLE
        axios.post( `${this.url}save`, this.state.article )
            .then( res => {
                if( res.data.article ) {

                    this.setState({

                        article: res.data.article,
                        status: 'success'

                    })

                    console.log(this.state)

                } else {

                    this.setState({
                        status: 'failed'
                    })

                    console.log(res)

                }

            })
            .catch( err => {

                this.setState({

                    article: {},
                    status: 'failed'
    
                });
                console.log(err)

            })

    }

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

                        </div>

                        <div className="form-group">

                            <label htmlFor="content">Contenido : </label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>

                        </div>

                        <div className="form-group" >

                            <label htmlFor="file0">Imagen : </label>
                            <input  type="file" name="file0" />

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