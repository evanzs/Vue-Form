import Vue from 'vue'
import VueRouter from 'vue-router'

import cadastro from '@/views/cadastro.vue'


// fazendo uso da router
Vue.use(VueRouter)


//criando rotas
const routes =
[
 {path:'/',component:cadastro,name:'cadastro'}
 
]


const router = new VueRouter({routes})

//exportanto o objeto
export default router