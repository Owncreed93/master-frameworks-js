import Vue from 'vue'
import App from './App.vue'

// * INTERNAL PACAKGES
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';

// * EXTERNAL PACKAGES
import VueRouter from 'vue-router';

Vue.config.productionTip = false

// * USING THE ROUTES 
Vue.use(VueRouter)


//  * SET UP ROUTES

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: MiComponente},
  {path: '/hola-mundo', component: HelloWorld},
  {path: '/', component: LastArticles}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
