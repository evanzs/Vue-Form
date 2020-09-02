import Vue from 'vue'
import VueRouter from 'vue-router'



import cadastro from '../views/cadastro.vue'
import contact from '../views/contact.vue'
import about from '../views/about.vue'


// components routers


// fazendo uso da router
Vue.use(VueRouter)


//criando rotas
const routes =
[

    
   {name:'cadastro',path:'/',component:cadastro},
   {name:'about',path:'/sobre',component:about},
   {name:'contact',path:'/contato',component:contact}
  
]


const router = new VueRouter({routes})

//exportanto o objeto
export default router