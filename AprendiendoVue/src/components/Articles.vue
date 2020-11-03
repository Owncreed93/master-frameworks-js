<template>
    <div id="articles-list">

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
                
            <h2>{{ article.title }}</h2>
            <span class="date">
                Hace 5 min
            </span>
            <a href="#">Leer m&aacute;s</a>

            <div class="clearfix"></div>
    

        </article>

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