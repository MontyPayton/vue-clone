<template>
  <div class="v-catalog">
    
    <v-catalog-item 
    v-for="produkt in count"
    :key="produkt.id"
    :produkt_data="produkt"
    
    />
  </div>
</template>

<script>
  import VCatalogItem from './v-catalog-item'
  import vCatalogItem from './v-catalog-item.vue'
  import { mapActions } from 'vuex'
export default {
  components: { VCatalogItem },
comments:{
  vCatalogItem
},
data(){
  return{}
},

computed:{
  count () {
      return this.$store.state.products
    }
  },

methods: {
  ...mapActions([
"GET_API"
  ]),
 
},
mounted(){
  this.GET_API()
}
}
</script>

<style>
.v-catalog{
  display: flex;
  flex-wrap: wrap;
}
</style>