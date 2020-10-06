<template>
  <section id="content">
    <h2 class="subheader">{{ msg }}</h2>

    <h3>{{texto}}</h3>
    

  </section>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String
  },
  data() {
    return {
      texto: 'Hola mundo desde componente'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
