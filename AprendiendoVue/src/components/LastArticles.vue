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

                        <article class="article-item" id="article-template">

                            <div class="image-wrap">
                                <img src="assets/images/daniela.jpg" alt="danielita">
                            </div>
            
                            <h2>Art&iacute;culo de prueba</h2>
                            <span class="date">
                                Hace 5 min
                            </span>
                            <a href="#">Leer m&aacute;s</a>

                            <div class="clearfix"></div>

                        </article>

                        <!-- AÑADIR ARTICULOS VIA JS -->
                    </div>

            </section>

            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>

    </div>
</template>

<script>
import Slider from './Slider';
import Sidebar from './Sidebar';

export default {
    name: 'LastArticles',
    components: {
        Slider,
        Sidebar
    }
}
</script>