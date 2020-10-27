<template>
    <div class="general">

        <div class="center">
            <section id="content">

                <h2 class="subheader">Pel&iacute;culas</h2>

                    <div class="mis-datos" v-if="misDatos">
                        <p v-html="misDatos" >{{ misDatos }}</p>
                        <br/>
                        {{ web | mayusculas | concatenaYear('este es un año dificil') }}
                    </div>

                    <div class="favorita" v-if="favorita">
                        La pelicula marcada es :
                        <h3> {{ favorita.title }} </h3>
                    </div>

                    <!-- Listado artículos -->
                    <div id="articles">

                        <!-- -->
                        <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title" >
                            <Pelicula 
                                :pelicula="pelicula"
                                @favorita="haLLegadoLaPeliculaFavorita"
                                ></Pelicula>
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
    methods: {
        haLLegadoLaPeliculaFavorita(favorita){
            this.favorita = favorita;

        }
    },
    filters: {
        mayusculas( value ) {

            return value.toUpperCase();

        },
        concatenaYear( value, message ){

            let date = new Date();

            return `${value} ${date.getFullYear()} - ${message} `;


        }
    },
    computed: {
        peliculasMayuscula() {

            let peliculasMod = this.peliculas;

            for (let i = 0; i < peliculasMod.length; i++) {

                peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
                
            }

            return peliculasMod;
        },
        misDatos() {

            return `${this.nombre} ${this.apellido}  <br /> <strong>Sitio Web : </strong> ${this.web}`;

        }
    },
    data(){
        return {
            nombre: 'Christian',
            apellido: 'Tarifeño',
            web: 'gaaaa',
            favorita: null,
            peliculas: [
                {title: 'Batman vs Superman', year: '2017', image:'https://images-na.ssl-images-amazon.com/images/I/91h0TD3Na6L._SL1500_.jpg' },
                {title: 'Gran Torino', year: '2008', image:'https://2.bp.blogspot.com/_2Syv7WWYErE/S_FRPIb2QyI/AAAAAAAABP0/DBBINTiZCzs/s1600/Clint+Eastwood+-+Gran+Torino+(2).jpg' },
                {title: 'El señor de los anillos', year:'2003', image:'https://as01.epimg.net/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal.jpg' }
            ]
        }
    }
}
</script>