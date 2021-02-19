template>
    <b-container fluid class="arvore-page overflow-auto">
        <b-row>
            <Breadcrumb titulo="ÁRVORE DE DECISÕES" :items="item"/>
        </b-row>  

        <b-row style="background-color:white">
            <botao-tabs :botoes="botoes"/>              
        </b-row>

        <b-row class="tabs-corpo">            
            <b-col cols="4" class="drag-zone" >
                <b-row class="tabs-corpo-select">
                  <b-form-select 
                    :model="selected"
                    :options="options"
                    class="arvore-select"                    
                    size="sm"
                  /> 
                </b-row>
                
                    <div class="drag-zone-titulo">
                      <b-row>
                        Configure as repostas em cada pergunta e visualize a árvre completa ao lado.
                      </b-row>                                   
                    </div> 
                    
                     <b-row >
                        <b-overlay class="mx-2 w-100 mb-2" :show="!perguntasload" >
                          <drag-zone-pergunta :perguntas="perguntas" @abreModalPergunta="abreModalNovaPergunta($event)" />
                        </b-overlay>     
                    </b-row>

                    <b-row>                      
                      <botao-padrao 
                        class="estilo-botao"
                         @click="abreModalNovaPergunta"
                        > 
                        + Nova pergunta
                        </botao-padrao>                      
                    </b-row>
                    <b-row>
                        <b-button 
                          variant="outline-secondary" 
                          class="estilo-botao mb-0"
                          squared
                          @click="abreModalRespostaAutomatica"
                          >  
                          Respostas Automáticas
                        </b-button>
                    </b-row>
               
                <modal-nova-pergunta  ref="modalNovaPergunta"/>
                <modal-respostas-automaticas ref="modalRespostasAutomatica"/>           
            </b-col>
            
            <b-col class="drop-zone ">
             
                 <p class="drop-zone-titulo"> Visualização da àrvore </p>
                 <div class="overflow-auto teste" >
                    <visualizar-arvore  /> 
                </div> 
                     
                 
              
             
            </b-col>
        </b-row> 

    </b-container>      
</template>

<script>
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import BotaoTabs from '../../components/botoes/BotaoTabs.vue'
import DragZonePergunta from '../../components/DragZonePergunta.vue'
import ModalRespostasAutomaticas from '../../components/arvores/modals/ModalRespostasAutomaticas.vue'
import ModalNovaPergunta from '../../components/arvores/modals/ModalNovaPergunta.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import BotaoPadrao from '../../components/botoes/BotaoPadrao.vue'
import VisualizarArvore from '../../components/arvores/VisualizarArvore.vue'
export default {
    name: 'ArvoresPage',
    components: {
        Breadcrumb,       
        ModalNovaPergunta,
        BotaoTabs,
        DragZonePergunta,             
        ModalRespostasAutomaticas,
        BotaoPadrao,
        VisualizarArvore            
    },       
       
    data: function() {        
        return {
         // perguntasload:false,
          botoes:[
            { titulo: 'Chatbot',estado:true},
          
            { titulo: '+ Nova árvore'},           
          ],         
          perguntaSelecionada:[],
          options:{},
          selected:{},
          cartaoAtendimento:[
            {codigo:1,titulo:"Passar para atendente humano",icone:"fas fa-headset"},
            {codigo:2,titulo:"Finalizar atendimento",icone:"fas fa-flag"},
          ], 
          item:[
            {id:'2', classe:'fas fa-project-diagram', texto:'Árvore De desisões', link:'/'}
          ]
        }
    },
    
    methods:{      
      ...mapActions({
         buscaListaPerguntas:'arvore/buscaListaPerguntas'
         
      }),
      ...mapMutations('arvore',['SET_PERGUNTA','POP_PERGUNTA']),
      
      //abre o modal de respostas automaticas
      abreModalRespostaAutomatica(){
        this.$refs.modalRespostasAutomatica.show();
      },   
      //abre o modal de nova/editar pergunta
      abreModalNovaPergunta($event){   
        console.log($event);    
        this.SET_PERGUNTA($event)       
                  
        return this.$refs.modalNovaPergunta.show();      
      },     
    },  
    computed:{
        ...mapGetters({
           perguntas:'arvore/listaPergunta',
           perguntasload:'arvore/listaPerguntaLoading'
        })
    },
   created(){
          this.buscaListaPerguntas();
   },
}
</script>
<style scoped>
.arvore-page{
  background-color: #E8E8E8;
  margin-bottom: 1%;
}
.teste{
  border: 2px solid;
  width: 80%;
}
.tabs-corpo{  
  padding: 1% 1% 1% 1%;  
}
.drag-zone{
  background-color: white;
  padding:0% 1% 1% 1%; 
  margin-bottom: 2px;
}
.drop-zone{
  background-color: white;
  margin-left:2%;
  padding:0%;  
  border: 2px solid;
  margin-bottom: 0%;
}
.tabs-corpo-select{
   background-color: #E8E8E8;
   padding-bottom: 2%;  
}
.estilo-botao{
  margin:1%;
  height: 100%;
  width: 100%;
  font-size:16px;
 
}
.drop-zone-titulo{
  font-size: 16px;
  color:#7D7D7D;
  text-align: center;
  font-weight: 600;
  background-color:#E8E8E8;
}
.drag-zone-titulo{
  font-size:13px;
  margin-top:2%;
  margin-left: 2%;
  font-weight: 600;
  color:#7D7D7D;
}
/* joga o circulo de overlay para o centro */
</style>