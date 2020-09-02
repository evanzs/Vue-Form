
<template>
    
<div class ="container">

<img src="@/assets/logo.png" alt="" class="img-fluid img-logo ">
 <H1> .First Vue-Form</H1>

   <form action="">
     <div class="container">
         <div class="form-row">
           <div class="form-group col-md-6">          
               <label for="">Nome</label>
               <input type="text" class="form-control" placeholder="Primeiro Nome">
           </div>
             <div class="form-group col-md-6">          
               <label for="">Sobrenome</label>
               <input type="text" class="form-control" placeholder="Segundo Nome">
             </div>
         </div> 
         <div class="form-row">
           <div class="form-group col-md-8">
             <label for="">Email</label>
             <input type="email" class="form-control" placeholder="usuario@example.com" >
           </div>
           <div class="form-group col-md-4">
             <label for="">Password</label>
             <input type="password" class="form-control">
         </div>
         </div>
       <!--- Form group de endereços-->
         Endereço
         <div class="form-row">
           <div class="form-group col-md-6">
             <label for="">Rua</label>
             <input type="text" class="form-control" placeholder="Avenida Café" >
           </div>
           <div class="form-group col-md-4">
             <label for="i">Complemento</label>
             <input type="text" class="form-control" placeholder="Residencial Villa Verde">
         </div>
           <div class="form-group col-md-2">
             <label for="">Numero</label>
             <input type="text" class="form-control" placeholder="88">
         </div>
         </div>
       <button type="submit" class="btn btn-primary">Enviar</button>  
     </div> 
   </form>

</div>    
</template>

<script>
export default 
{
   name:'cadastro'

}
</script>


