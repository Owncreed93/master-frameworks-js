<template src="./CreateArticle.html"> </template>
<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

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
            file: '',
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
    },
    methods: {

        fileChange() {

            this.file = this.$refs.file.files[0];

            console.log(this.file)

        },

        save(){

            this.submitted = true;

            this.$v.$touch();

            if( this.$v.$invalid ){

                return false;

            } else {

                

                axios.post(this.url +'save', this.article)
                .then( response => {

                    if ( response.data.status === 'success' ){


                        if( this.file != null && this.file != undefined && this.file != '' ){

                             // UPLOAD FILE
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.file,
                                this.file.name
                            )

                            let articleId = response.data.article._id

                            axios.post(this.url +'upload-image/' +articleId, formData)
                            .then( response => {
                                if( response.data.article ) {

                                    swal( 'Articulo creado', 'El articulo se ha creado correctamente', 'success' );

                                    this.article = response.data.article;

                                    this.$router.push('/blog');

                                } else {

                                    // SHOW ERROR MESSAGE
                                    swal( 'Creación fallida', 'El articulo no se ha creado', 'error' );

                                }
                            })
                            .catch( error => {
                                console.error( error );
                            });

                        } else {

                            swal( 'Articulo creado', 'El articulo se ha creado correctamente', 'success' );

                            this.article = response.data.article;

                            this.$router.push('/blog');

                        }
                       
                        
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