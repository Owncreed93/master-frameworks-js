<template src="./CreateArticle.html"> </template>
<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';

import { Global } from '../Global';
import Article from '../models/Article';

import Sidebar from './Sidebar.vue';

export default{
    name: 'EditArticle',
    components: {
        Sidebar,
    },
    data() {
        return{

            url: Global.url,
            file: '',
            article: new Article('', '', null, ''),
            submitted: false,
            isEdit: true

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
        let articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    methods: {

        fileChange() {

            this.file = this.$refs.file.files[0];

            console.log(this.file)

        },

        getArticle(articleId) {
            axios.get(this.url +'article/' +articleId)
            .then( res => {

                if( res.data.status == 'success' ){

                    this.article = res.data.article;
                    console.log(this.article);

                }

            })
            .catch( error => {
                console.error(error)
            })
        },

        save(){

            this.submitted = true;

            let articleId = this.$route.params.id;

            this.$v.$touch();

            if( this.$v.$invalid ){

                return false;

            } else {

                

                axios.put(this.url +'article/' +articleId, this.article)
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

                                    swal( 'Articulo editado', 'El articulo se ha modificado correctamente', 'success' );

                                    this.article = response.data.article;

                                    this.$router.push('/articulo/' +this.article._id);

                                } else {

                                    // SHOW ERROR MESSAGE
                                    swal( 'Edición fallida', 'El articulo no se ha modificado', 'error' );

                                }
                            })
                            .catch( error => {
                                console.error( error );
                            });

                        } else {

                            swal( 'Articulo editado', 'El articulo fue modificado correctamente', 'success' );

                            this.article = response.data.article;

                            this.$router.push('/articulo/' +this.article._id);

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