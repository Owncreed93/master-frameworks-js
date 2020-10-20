<template>
    <div class="center">
        <section id="content">

            <h2 class="subheader">Pel&iacute;culas</h2>

                <!-- Listado artículos -->
                <div id="articles">

                    <article class="article-item" id="article-template" v-for="pelicula in peliculas" v-bind:key="pelicula.title">

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

                    <!-- AÑADIR ARTICULOS VIA JS -->
                </div>

                {{ peliculas[0].title }}

        </section>
    </div>
</template>   
<script>
export default {
    name: 'Peliculas',
    data(){
        return {
            peliculas: [
                {title: 'Batman vs Superman', year: '2017', image:'https://pics.filmaffinity.com/batman_v_superman_dawn_of_justice-728293826-mmed.jpg' },
                {title: 'Gran Torino', year: '2008', image:'https://2.bp.blogspot.com/_2Syv7WWYErE/S_FRPIb2QyI/AAAAAAAABP0/DBBINTiZCzs/s1600/Clint+Eastwood+-+Gran+Torino+(2).jpg' },
                {title: 'El señor de los anillos', year:'2003', image:'https://as01.epimg.net/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal.jpg' }
            ]
        }
    }
}
</script>