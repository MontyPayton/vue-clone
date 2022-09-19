<template>
  <div class="v-catalog">
    
    <v-catalog-item 
    v-for="produkt in produkts"
    :key="produkt.article"
    :produkt_data="produkt"
    />
  </div>
</template>

<script>
  import VCatalogItem from './v-catalog-item'
import vCatalogItem from './v-catalog-item.vue'
export default {
  components: { VCatalogItem },
comments:{
  vCatalogItem
},
data(){
  return{
    title:"Каталог",
    produkts:[
      {image:"1.jpg",country:"Франция", name:"Гомельте",date:"15 октября",price:1100,article:"1"},
      {image:"2.jpg",country:"Германия", name:"Друстфон",date:"16 октября",price:1150,article:"2"},
      {image:"3.jpg",country:"Финляндия", name:"Маускань",date:"14 октября",price:1120,article:"3"},
      {image:"4.jpg",country:"Россия", name:"Грязи",date:"18 октября",price:300,article:"4"},
      {image:"5.jpg",country:"Беларусь", name:"Большие Грязи",date:"11 октября",price:500,article:"5"},
      {image:"6.jpg",country:"Китай", name:"Яньхунь",date:"12 октября",price:700,article:"6"},
    ]
  }
}
}
</script>

<style>
.v-catalog{
  display: flex;
  flex-wrap: wrap;
}
</style>