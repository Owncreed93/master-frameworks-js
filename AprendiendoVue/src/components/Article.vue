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
        }
    }
}
</script>