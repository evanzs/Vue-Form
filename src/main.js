import Vue from 'vue'
import App from './App.vue'
import VueTree from '@ssthouse/vue-tree-chart'

//imports de componentes criados
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//importanto as rotas
import router from './router'






Vue.component('vue-tree', VueTree)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App)
   
}).$mount('#app')
