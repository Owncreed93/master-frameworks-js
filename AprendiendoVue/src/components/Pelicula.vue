<template>
    <article class="article-item" id="article-template">

        <div class="image-wrap">
            <img :src="pelicula.image" :alt="pelicula.title">
        </div>
        
        <h2>{{ pelicula.title}}</h2>
        <span class="date" :class="{
            yeargreen: pelicula.year >= 2015,
            yearred: pelicula.year < 2015
        }">
            {{ pelicula.year }}
        </span>
        <a href="#">Leer m&aacute;s</a>

        <div class="clearfix"></div>

    </article>
</template>
<script>
export default {

    name: 'Pelicula',
    props: [ 'pelicula' ],
    mounted(){
        console.log(this.pelicula)
    }
    
}
</script>