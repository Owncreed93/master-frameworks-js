<template>

    <div id="mi-componente">
        <h1>Este es MI COMPONENTE</h1>
        <h2>{{ subtitulo }}</h2>
    </div>
    
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