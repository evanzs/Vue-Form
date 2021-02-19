<template>
  <b-container fluid>
      <b-row>
          <b-col class="estilo-esquerdo">
              teste
          </b-col>
          <b-col class="estilo-direito" @click="addPergunta">
              teste
              <div v-for="(pergunta,index) in logs" :key="index" v-html="pergunta" class="box">

              </div>
          </b-col >
    </b-row>
  </b-container>

</template>

<script>
export default {  
  name:'Arvore',

  data(){
    return{
        logs:[],
        perguntas:[{CodigoInerno:123,Descricao:'Oi',Id: 1},
                   {CodigoInerno:124,Descricao:'Oi mamae',Id: 2},
                   {CodigoInerno:125,Descricao:'Oi koe',Id: 3},
                   {CodigoInerno:126,Descricao:'Oi teste',Id: 4},
                   {CodigoInerno:127,Descricao:'Oi ee',Id: 5},
                   {CodigoInerno:128,Descricao:'Oi memds ',Id: 6},
                   {CodigoInerno:129,Descricao:'Oi lll',Id: 7},
                   {CodigoInerno:120,Descricao:'Oi aaaa',Id: 8},
                   {CodigoInerno:111,Descricao:'Oeee i',Id: 10},
                   {CodigoInerno:11,Descricao:'Oi kkkkk',Id: 22},
                   {CodigoInerno:133,Descricao:'Oi kasdas',Id: 3132},

          ]
    }
  },
  methods:{
    
    addPergunta(){
      let template ='';
      for (var cont=0; cont < this.perguntas.length ; cont++){
        let pergunta = this.perguntas[cont];
       template = template + `<div class=""> ${pergunta.Descricao} </div>`
   
      }
          this.logs.push(template)
      console.log("vmao")
    }
  }

  
}
</script>


<style scoped>

.box{
  display: flex;
  flex-direction: column-reverse
}

.estilo-esquerdo{
  background-color:blue;
}
.estilo-direito{
  background-color: blueviolet;
}
</style>