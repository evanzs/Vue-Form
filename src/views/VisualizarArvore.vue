<template>
   <div class="caixa" >      
              <div @click="teste">
                  Primeira Pergunta 
              </div>
              
             <div class="row">
                <div  v-for="(event,index) in log" :key="index" v-html="event" @click="testee($event)" class="box" >              
                </div>     
             </div>      
        
   </div> 
   
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
export default {
  name:'VisualizarArvore',
  component:{    
  },
  data(){
    return{
      colunas:2,
      linhas:1,
      log:[],
      perguntas:[{CodigoInterno:123,Descricao:'Oi',Id: 1},
                   {CodigoInterno:124,Descricao:'Oi mamae',Id: 2},
                   {CodigoInterno:125,Descricao:'Oi koe',Id: 3},
                   {CodigoInterno:126,Descricao:'Oi teste',Id: 4},
                   {CodigoInterno:127,Descricao:'Oi ee',Id: 5},
                   {CodigoInterno:128,Descricao:'Oi memds ',Id: 6},
                   {CodigoInterno:129,Descricao:'Oi lll',Id: 7},
                   {CodigoInterno:120,Descricao:'Oi aaaa',Id: 8},
                   {CodigoInterno:111,Descricao:'Oeee i',Id: 10},
                   {CodigoInterno:11,Descricao:'Oi kkkkk',Id: 22},
                   {CodigoInterno:133,Descricao:'Oi kasdas',Id: 3132},

    ]
    
     
    }
  },
  methods:{ 
   // ...mapActions('arvore',['addPergunta','removePergunta','buscaListaRespostas','atualizaPerguntaSelciona','addPerguntaOpcao',"buscaListaPerguntas"]),  
    teste(){
        let teste = '';
      for ( var cont = 0; cont < this.perguntas.length; cont++)
      {
       let pergunta = this.perguntas[cont].Descricao.replace(/(<([^>]+)>)/gi, "");
        console.log(pergunta)
        teste =  teste+ `<div id="/*${this.perguntas[cont].Id}"   class="estilo-borda"> 
                                 <div > ${this.perguntas[cont].CodigoInterno}</div>                          
                                  
                                   
                         </div>`
      }
         this.log.push(teste);
    
     
     
    },
    testee($event){
      console.log("chamou",$event.target.id);
    }
       
  
  },
  computed:{
    //    ...mapGetters({pergunta:'arvore/perguntaSelecionada',
    //                  respostas:'arvore/respostaSelecionada',
    //                  respostasLoad:'arvore/respostaSelecionadaLoad',
    //                  perguntas:'arvore/listaPergunta'                   
    //                 }),
  },
  created(){
    // this.buscaListaPerguntas();
    // console.log(this.perguntas)
  }
  
}
</script>

<style>
.estilo-borda{
  background-color: #E8E8E8;
  cursor: pointer;
  margin-bottom: 1%;
  padding:1%;
  font-size: 16px;
}
.box{
  display: flex;   
   width: 10%;
   flex-direction: column;
  justify-co.
}
.caixa{
    width: 350px;
    height: 350px;
    border: 2px solid;
    overflow:auto;
}
</style>