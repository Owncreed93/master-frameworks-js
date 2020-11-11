<template>
    <div>

        <div id="articles-list" v-if="articles && articles.length >= 1">

            <article class="article-item" v-for="article in articles" :key="article._id">

                <div class="image-wrap">
                    <img 
                        :src=" url+'get-image/'+article.image "
                        :alt="article.title"
                        v-if="article.image"
                    >
                    <img 
                        src="../assets/image/user.png"
                        :alt="article.title"
                        v-if="!article.image"
                    >
                </div>
                    
                <h2>
                    <router-link :to="{ name:'article', params: {id: article._id} }">
                        {{ article.title }}
                    </router-link>
                </h2>
                <span class="date">
                    {{ article.date | moment("from", "now", true) }}
                </span>
                <a href="#">Leer m&aacute;s</a>

                <div class="clearfix"></div>
        

            </article>

        </div>
        <div v-else-if="articles && articles.length < 1">
            No hay articulos para mostrar
        </div>
        <div v-else>
            No hay articulos para mostrar
        </div>

    </div>

</template>
<script>
import { Global } from '../Global';

export default {
    name: 'Articles',
    props: ['articles'],
    data() {
        return {
            url: Global.url
        }
    }
}
</script>