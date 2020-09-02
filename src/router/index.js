import Vue from 'vue'
import VueRouter from 'vue-router'

import cadastro from '../views/cadastro.vue'
import contact from '../views/contact.vue'

// fazendo uso da router
Vue.use(VueRouter)


//criando rotas
const routes =
[

    
   {name:'cadastro',path:'/',component:cadastro},
   {name:'contact',path:'/sobre',component:contact}
]


const router = new VueRouter({routes})

//exportanto o objeto
export default router