<template>
  <div class="container">
    <vue-tree
      style="width: 1000px; height: 600px; border: 1px solid gray;"
      :dataset="richMediaData"
      :config="treeConfig"
    >
      <template v-slot:node="{ node, collapsed }">
        <div
          class="rich-media-node"
          :style="{ border: collapsed ? '2px solid grey' : '' }"
          
        >
           {{node.name}}
          
        </div>
      </template>
    </vue-tree>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'treemap',
  data() {
    return {
      richMediaData: {
       
      },

      folha:null,
      data:[],
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 }
    }
  },


  methods:{
      


      buscaResposta(Id){
          let respostas = this.respostas.filter( resposta => resposta.perguntaId == Id)
          return respostas
      },

      selecionaNo(no){
        no.children = []
          let pergunta = this.perguntas.find(pergunta => pergunta.Id == no._key)
          //opcao
          if (typeof pergunta === 'undefined'){
              // 3 opcoes

              // é uma opcao
              let opcao = this.respostas.find( resposta => resposta.Id == no._key)

              if(opcao.ProximaPerguntaId != ''){
                
                 let proximaPergunta =  this.perguntas.find( pergunta => pergunta.Id == opcao.ProximaPerguntaId)
                 this.folha = proximaPergunta
                 console.log("proximaPergunta",proximaPergunta)
                return this.selecionaPergunta(no);
              }

              if(opcao.RedirecionamentoId != ''){
                 console.log("tem redirecionamento")
              }
              console.log("nenhum dos dois")
               this.richMediaData = this.data;
              
              console.log("media",this.richMediaData);
              console.log("data",this.data)

              return
          }
          
          // é uma pergunta com opção
          if( pergunta.Entrada == 2){
             
               let resposta = this.buscaResposta(no._key)
               this.folha = resposta;
               this.selecionaOpcao(no);

          }



      },

      selecionaPergunta(no){
       
        let pergunta = this.folha 
        let kid = {
              name:pergunta.Descricao,
              _key:pergunta.Id,
              children:[]
            }
            no.children = kid
            this.selecionaNo(kid);

      },

      selecionaOpcao(no){    
          no.children = []
        let opcoes = this.folha;

        for (var cont = 0; cont < opcoes.length;cont++){
            let kid = {
              name:opcoes[cont].Descricao,
              _key:opcoes[cont].Id,
              value:1,              
              children:null,
              
            }
            no.children.push(kid)
            this.selecionaNo(kid);
        }


          
         

      },

      setPadrao(){
        let pergunta = this.perguntas.find(pergunta => pergunta.Padrao == 1)

        let no ={
          name:pergunta.Descricao,
          _key:pergunta.Id,
          children:[],
          
        }
        this.data =no;

        this.selecionaNo(no);
      }
  },
  computed:{
    ...mapGetters({perguntas:'arvore/listaPerguntas',respostas:'arvore/listaRespostas'})
  },

  created(){
    this.setPadrao();
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rich-media-node {
  width: 80px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  background-color: #f7c616;
  border-radius: 4px;
}
</style>