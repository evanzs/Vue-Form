
<template>
  
  
  <div id="app">
    <Header/>
   <div>
    <img src="@/assets/logo.png" alt="" loading ="lazy" class=" img-logo ">
   </div>
  
       
  <div class="menu">
     <router-link to ="/"> <span> .cadastro</span></router-link>
      <router-link to ="/sobre"><span> .sobre</span></router-link>
     <router-link to ="/contato"> <span> .contato</span></router-link>
      <router-link to ="/arvore"> <span> .arvore</span></router-link>
   </div>
  
   
  
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
// importando componentes
  import Footer from '../src/components/footer.vue'
  import Header from '../src/components/header.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components:
  {
    Footer,
    Header
  }
 
}
</script>

<style>
#app 
{
  
  text-align: center;
}

.img-logo
{
  margin: 0 auto;
  width: 100px ;
 
}

.menu
{
   text-align: right;
   margin: 1rem;
}

</style>
