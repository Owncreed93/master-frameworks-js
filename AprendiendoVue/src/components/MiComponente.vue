<template>

    <section id="content">
        <h2 class="subheader">{{ msg }}</h2>
        <h3>Este es MI COMPONENTE</h3>
        <h3>{{ subtitulo }}</h3>
    </section>
    
</template>

<script>
    export default {
        name: 'Mi Componente',
        data() {
            return{
                subtitulo: 'Soy el subtítulo de mi componente'
            }
        }
    }
</script>