<template>
    <header id="header">

        <div class="center">
            <!-- LOGO -->
            <div id="logo">
                <img src="../assets/logo.png" alt="logotipo" class="app-logo">
                <span id="brand"><strong>Curso</strong>React</span>
            </div>

            <!-- MENU -->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/home">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/blog">Blog</router-link>
                    </li>
                    <li>
                        <router-link to="/formulario">Formulario</router-link>
                    </li>
                    <li>
                        <router-link to="/pagina">P&aacute;gina 1</router-link>
                    </li>
                    <li>
                        <router-link to="/mi-componente">P&aacute;gina 2</router-link>
                    </li>
                </ul>
            </nav>

            <!-- LIMPIAR FLOTADOS -->
            <div class="clearfix"></div>
        </div>
        
    </header>
</template>

<script>
export default {
    name:'HeaderComponent'
}
</script>