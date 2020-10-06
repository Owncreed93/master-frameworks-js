<template>
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
    </div>
</template>   
<script>
export default {
    name: 'LastArticles'
}
</script>