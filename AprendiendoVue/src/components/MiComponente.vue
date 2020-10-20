<template>

    <section id="content">
        <h2 class="subheader">{{ titulo }}</h2>
        <hr/>
        <h3> Este es MI COMPONENTE </h3>
        <h4>{{ subtitulo }}</h4>

        <h2> Reactividad </h2>
        <input type="text" v-model="nombre"/>

        Mi nombre es : <strong> {{ nombre }} </strong>

        <hr />

        <h2> Directivas Condicionales </h2>
        <input type="number" v-model="edad" min="0"/>
        Mi edad es: <strong> {{ edad }} </strong>

        <p class="alert-success-provisional" v-if="edad && edad >= 18 && edad <65">!Eres mayor de edad!</p>

        <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">!Eres de avanzada edad!</p>

        <p class="alert-danger-provisional" v-else>!Eres menor de edad!</p>

        <hr />

        <h2> Directiva iterativa </h2>

        <ol id="peliculas">

            <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>

        </ol>

    </section>
    
</template>

<script>
    export default {
        name: 'MiComponente',
        data() {
            return{
                titulo: 'Mi Componente',
                subtitulo: 'Soy el subtítulo de mi componente',
                nombre: '',
                edad: 18,
                peliculas: [ 'Batman vs Superman', 'El señor de los anillos', 'spider-man' ]
            }
        }
    }
</script>