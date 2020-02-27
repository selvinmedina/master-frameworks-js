import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'
import Blog from './components/Blog.vue'
import Formulario from './components/Formulario.vue'
import Pagina from './components/Pagina.vue'
import Error from './components/Error.vue'
import Peliculas from './components/Peliculas.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path: '/home', component: LastArticles },
  { path: '/ultimos-articulos', component: LastArticles },
  { path: '/mi-componente', component: MiComponente },
  { path: '/hola-mundo', component: HelloWorld },
  { path: '/', component: LastArticles },
  { path: '/blog', component: Blog },
  { path: '/formulario', component: Formulario },
  { path: '/pagina/:id?', name: 'pagina', component: Pagina },
  { path: '/peliculas', name: 'peliculas', component: Peliculas },
  { path: '*', component: Error },
];

const router = new VueRouter({
  routes,
  mode: 'history'

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
