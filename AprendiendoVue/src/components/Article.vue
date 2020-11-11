<template>
    <div class="general">

        <div class="center">

            <section id="content">

                <div id="articles" >

                    <article class="article-item article-detail" v-if="article">
                        <div class="image-wrap">
                            <img 
                                :src=" url+'get-image/'+article.image "
                                :alt="article.title"
                                v-if="article.image"
                            />
                            <img 
                                src="../assets/image/user.png"
                                :alt="article.title"
                                v-if="!article.image"
                            />
                        </div>

                        <h1 class="subheader">{{article.title}}</h1>

                        <span class="date">
                            {{ article.date | moment( 'from', 'now', true ) }}
                        </span>

                        <p>
                            {{ article.content }}
                        </p>
                        <div class="clearfix"></div>

                        <router-link :to="'/editar-articulo/' +article._id" class="btn btn-warning">Editar</router-link>
                        <a class="btn btn-danger" @click="deleteArticle(article._id)">Borrar</a>
                    </article>

                </div>

            </section>

            <Sidebar></Sidebar>
            <div class="clearfix"></div>

        </div>

    </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import { Global } from '../Global';

import Sidebar from './Sidebar.vue';

export default {
    name: 'Article',
    components: {
        Sidebar
    },
    data() {
        return {
            url: Global.url,
            article: null
        }
    },
    mounted(){
        let articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    methods: {
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

        deleteArticle(articleId){

            swal({
                title: "Estás seguro de eliminar?",
                text: "!Una vez eliminado, no podrás recuperar el registro!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        axios.delete(this.url +'article/' +articleId)
                        .then(res => {

                            if( res.data.status == 'success' ){

                                swal( 'Artículo eliminado', 'El artículo se ha eliminado correctamente', 'success' ),
                                this.$router.push('/blog');

                            }

                        })
                        .catch(error => {
                            swal( 'Error al eliminar', 'El artículo no se ha eliminado', 'error' );
                            console.error(error)
                        })

                    } else {
                        swal("¡Tu registro ha sido conservado!");
                    }
            });

        }
    }
}
</script>