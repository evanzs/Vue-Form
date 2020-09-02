// Templete de sobre
<template>
 <div class="container-fluid">
     <div class="row titulo">
         <span id = "sobre"> Sobre </span>
         <span id = "vue"> Vue </span>  
     </div>
    
    <div class="row">
        <div class="col-4">
          <div class ="img">
              <img src="../assets/transferir.png" alt="">
          </div>
    
        </div>
        <div class="col-8">
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ex ex. Morbi sit amet arcu tincidunt, sollicitudin orci nec, porta orci. Aliquam erat volutpat. Duis faucibus metus at hendrerit pharetra. Pellentesque libero metus, tincidunt non libero eu, sagittis pretium leo. Mauris eu nisi in nibh egestas blandit ut sed ligula. Sed vehicula ultricies elit, ac
                  pretium purus vulputate ultricies. Praesent 
                  ullamcorper aliquet massa sed dapibus.
            </p>

        </div>
    </div>

  

 </div>
</template>
    
<style  scoped>


/* Estilo do Titulo */
.titulo
 {  font-size: 2em; }
 #sobre
 { color:seagreen; }
#vue
 { color:#4A708B; }


.row
{
  padding: 1em;
    
}
.col-8
{
    
    
    padding:1em;
  
}
.col-4
{
    
    padding:1em;
   
}
p{
   text-align: justify;
 
   color:green;
   margin-top:1em;
}

</style>
