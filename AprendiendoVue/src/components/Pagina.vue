<template>

    <div class="general">

        <Slider texto="Pagina de Pruebas"></Slider>

        <div class="center">


            <section id="content">
                <h2 class="subheader">P&aacute;gina de pruebas</h2>
                <h3>{{ id_desde_url }}</h3>
                <button @click="actualizarNombre()">Actualizar el nombre</button>
                <button @click="redirigirAlBlog()">Redirigir al blog</button>
                <h4>{{ nombre }}</h4>
            </section>

            <Sidebar></Sidebar>
            <div class="clearfix"></div>

        </div>

    </div>
    
    
</template>


<script>
import Slider from './Slider';
import Sidebar from './Sidebar.vue';

export default {
    name: 'Pagina',
    components: {
        Slider,
        Sidebar
    },
    created(){
        console.log('Componente created!!');
    },
    mounted(){
        this.id_desde_url = this.$route.params.id;
        console.log('Componente mounted');
    },
    updated(){
        console.log('Component updated');
    },
    destroyed(){
        console.log('Component destroyed')
    },
    data(){
        return {
            id_desde_url: null,
            nombre: 'John Doe'
        }
    },
    methods: {
        actualizarNombre(){
            this.nombre = 'Christian Tarifeño';
            console.log(this.nombre);
        },
        redirigirAlBlog(){
            // this.$router.push('/blog');
            this.$router.push({name:'pagina', params: { id: 'Redireccion' }});
        }
    }

}
</script>