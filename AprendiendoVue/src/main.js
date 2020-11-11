import Vue from 'vue'
import App from './App.vue'

// * INTERNAL PACAKGES
import Article from './components/Article.vue';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import CreateArticle from './components/CreateArticle.vue';

// * EXTERNAL PACKAGES
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import moment from 'moment';
import 'moment/locale/es-mx';
import VueMoment from 'vue-moment'; 

Vue.config.productionTip = false

// * USING THE ROUTES 
Vue.use(VueRouter);
Vue.use(Vuelidate);

// const moment = require('moment');
// require('moment/locale/es-mx');
Vue.use(VueMoment, {moment});


//  * SET UP ROUTES
const routes = [
  {path: '/home', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/articulo/:id', name:'article', component: Article},
  {path: '/crear-articulo', name: 'create', component: CreateArticle },
  {path: '/formulario', component: Formulario},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/peliculas', name: 'peliculas', component: Peliculas},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/buscador/:searchString', component: Search },
  {path: '/redirect/:searchString', component: Redirect },
  {path: '/mi-componente', component: MiComponente},
  {path: '/hola-mundo', component: HelloWorld},
  {path: '/', component: LastArticles},
  {path: '*', component: ErrorComponent}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
