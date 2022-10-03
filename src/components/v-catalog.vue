<template>
  <div class="v-catalog">
    
    <v-catalog-item 
    v-for="produkt in PRODUCTS"
    :key="produkt.article"
    :produkt_data="produkt"
    @article="showArticle"
    />
  </div>
</template>

<script>
  import VCatalogItem from './v-catalog-item'
  import vCatalogItem from './v-catalog-item.vue'
  import { mapActions, mapGetters } from 'vuex'
export default {
  components: { VCatalogItem },
comments:{
  vCatalogItem
},
data(){
  return{


  }
},
computed:{
  ...mapGetters([
    "PRODUCTS"
  ])
},
methods: {
  ...mapActions([
"GET_PRODUCTS_API"
  ]),
  showArticle(data){
    console.log(data)
  }
},
mounted(){
  this.GET_PRODUCTS_API()
}
}
</script>

<style>
.v-catalog{
  display: flex;
  flex-wrap: wrap;
}
</style>