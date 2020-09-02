import Vue from 'vue'
import App from './App.vue'

//imports de componentes criados

//importanto as rotas
import router from './router'



// imports de Bootsrap
import 'bootstrap/dist/css/bootstrap.min.css'



Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App)
   
}).$mount('#app')
