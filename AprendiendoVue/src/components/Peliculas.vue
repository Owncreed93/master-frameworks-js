<template>
    <div class="general">

        <div class="center">
            <section id="content">

                <h2 class="subheader">Pel&iacute;culas</h2>

                    <!-- Listado artículos -->
                    <div id="articles">

                        <!-- -->
                        <div v-for="pelicula in peliculas" v-bind:key="pelicula.title" >
                            <Pelicula :pelicula="pelicula"></Pelicula>
                        </div>
                        

                        <!-- AÑADIR ARTICULOS VIA JS -->
                    </div>

                    {{ peliculas[0].title }}

            </section>

            <Sidebar></Sidebar>
            <div class="clearfix"></div>

        </div>

    </div>

</template>
<script>
import Sidebar from './Sidebar.vue';
import Pelicula from './Pelicula.vue';

export default {
    name: 'Peliculas',
    components: {
        Pelicula,
        Sidebar
    },
    data(){
        return {
            peliculas: [
                {title: 'Batman vs Superman', year: '2017', image:'https://images-na.ssl-images-amazon.com/images/I/91h0TD3Na6L._SL1500_.jpg' },
                {title: 'Gran Torino', year: '2008', image:'https://2.bp.blogspot.com/_2Syv7WWYErE/S_FRPIb2QyI/AAAAAAAABP0/DBBINTiZCzs/s1600/Clint+Eastwood+-+Gran+Torino+(2).jpg' },
                {title: 'El señor de los anillos', year:'2003', image:'https://as01.epimg.net/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal.jpg' }
            ]
        }
    }
}
</script>