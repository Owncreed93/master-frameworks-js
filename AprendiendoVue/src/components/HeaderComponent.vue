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
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="formulario.html">Formulario</a></li>
                    <li><a href="#">P&aacute;gina 1</a></li>
                    <li><a href="#">P&aacute;gina 2</a></li>
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