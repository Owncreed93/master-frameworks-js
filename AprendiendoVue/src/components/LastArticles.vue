<template>
    <div class="general">

        <Slider 
            texto="Bienvenido al curso de Vue con Víctor Robles de victorroblesweb.es"
            home="true"
            ></Slider>

        <div class="center">

            <section id="content">

                <h2 class="subheader">&Uacute;ltimos Art&iacute;culos</h2>

                    <!-- Listado artículos -->
                    <div id="articles">

                        <Articles v-bind:articles="articles"></Articles>

                    </div>

            </section>

            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>

    </div>
</template>

<script>

import axios from 'axios';

// **************************************************************************** //

import { Global } from '../Global';

import Articles from './Articles.vue';
import Slider from './Slider';
import Sidebar from './Sidebar';

// **************************************************************************** //


export default {
    name: 'LastArticles',
    components: {
        Articles,
        Slider,
        Sidebar
    },
    mounted() {
        this.getLastArticles()
    },
    data() {
        return {
            url: Global.url,
            articles: null
        }
    },
    methods: {

        getLastArticles(){
            axios.get(Global.url+'articles/true')
            .then( 
                res => {

                    if ( res.data.status == 'success' ) {

                        this.articles = res.data.articles;

                        console.log(this.articles);

                    }
                }
            )
            .catch(
                error => {
                    console.error(error)
                }
            )
        }

    }
}
</script>