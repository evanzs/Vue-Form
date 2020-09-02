<template>
  
  
  <div id="app">
   <div>
    <img src="@/assets/logo.png" alt="" loading ="lazy" class=" img-logo ">
   </div>
  
       
  <div class="menu">
     <router-link to ="/"> <span> .cadastro</span></router-link>
      <router-link to ="/sobre"><span> .sobre</span></router-link>
     <router-link to ="/contato"> <span> .contato</span></router-link>
   </div>
  
   
  
  <router-view/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App'
 
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
