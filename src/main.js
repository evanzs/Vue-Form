import Vue from 'vue'
import App from './App.vue'
import VueTree from '@ssthouse/vue-tree-chart'
import vuex from 'vuex'
//imports de componentes criados
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//importanto as rotas
import router from './router'
import store from './store'





Vue.component('vue-tree', VueTree)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(vuex)

Vue.config.productionTip = false

new Vue({
  router, 
  store,
  render: h => h(App)
   
}).$mount('#app')
