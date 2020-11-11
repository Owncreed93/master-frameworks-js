<template>

    <div class="general">

        <div class="center">

            <section id="content">
                <h1 class="subheader"> Crear art&iacute;culo </h1>

                <!-- FORM -->
                <form class="mid-form" v-on:submit.prevent="save()" >

                    <div class="form-group">
                        <label for="title">T&iacute;tulo : </label>
                        <input 
                            type="text"
                            name="title"
                            id="title"
                            required
                            v-model="article.title">
                        <div v-if="submitted && !$v.article.title.required">
                            El t&iacute;tulo debe tener contenido.
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="content">Contenido : </label>
                        <textarea 
                            name="content"
                            id="content"
                            required
                            v-model="article.content"></textarea>
                        <div v-if="submitted && !$v.article.content.required">
                            El contenido debe tener valores.
                        </div>
                    </div>
                    <div class="clearfix"></div>

                    <div class="form-group">
                        <label for="image">Imagen : </label>
                        <input type="file" name="image" id="image" >
                    </div>

                    <div class="clearfix"></div>
                
                    <input type="submit" value="Guardar" class="btn btn-success">

                </form>

            </section>

            <Sidebar></Sidebar>
            <div class="clearfix"></div>

        </div>

    </div>

</template>
<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';

import { Global } from '../Global';
import Article from '../models/Article';

import Sidebar from './Sidebar.vue';

export default{
    name: 'CreateArticle',
    components: {
        Sidebar,
    },
    data() {
        return{

            url: Global.url,
            article: new Article('', '', null, ''),
            submitted: false

        }
    },
    validations: {
        article: {

            title: {
                required
            },
            content: {
                required
            }

        }
        
    },
    mounted() {
        console.log(this.article);
    },
    methods: {

        save(){

            this.submitted = true;

            this.$v.$touch();

            if( this.$v.$invalid ){

                return false;

            } else {

                axios.post(this.url +'save', this.article)
                .then( response => {

                    if ( response.data.status === 'success' ){

                        this.$router.push('/blog');

                    }

                })
                .catch( error => {
                    console.error( error );
                })

            }

            

        }

    }
}
</script>