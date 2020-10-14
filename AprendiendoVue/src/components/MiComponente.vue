<template>

    <section id="content">
        <h3>Este es MI COMPONENTE</h3>
        <h4>{{ subtitulo }}</h4>
    </section>
    
</template>

<script>
    export default {
        name: 'MiComponente',
        data() {
            return{
                subtitulo: 'Soy el subtítulo de mi componente'
            }
        }
    }
</script>