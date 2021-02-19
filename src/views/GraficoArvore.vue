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
          @click="teste(node)"
        >
           {{node.name}}
          <span style="padding: 4px 0; font-weight: bold;"
            >{{ node.value }}</span
          >
        </div>
      </template>
    </vue-tree>
  </div>
</template>

<script>
export default {
  name: 'treemap',
  data() {
    return {
      richMediaData: {
        name: 'James',
        value: 800,
        avatar:
          'https://gravatar.com/avatar/db51fdaf64d942180b5200ca37d155a4?s=400&d=robohash&r=x',
        children: []
      },
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 }
    }
  },


  methods:{
      teste(node){
          console.log("teste",node);

          let children = {
               name: 'Teste',
               value: 666,
               _children:[],
               _key:666,
               _collapsed:true,

          }

          node.children.push(children)
           node._children.push(children)
      }
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