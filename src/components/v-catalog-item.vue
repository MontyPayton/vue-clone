<template>
  <div class="v-catalog-item" >
  <v-popap-vue 
  v-if="isInfoPopup"
 :popapTatle="produkt_data.name"
  @closePopup = "closeIPopup"
  >
  <img @click="openIPopup" class="img-item" :src="require('../assets/imadg/'+ produkt_data.image)" alt="img">
  <div>
    <p class="v-catalog-item-country">{{produkt_data.country}}</p>
    <p class="v-catalog-item-name">{{produkt_data.name}}</p>
    <p class="v-catalog-item-date">{{produkt_data.date}}</p>
    <p class="v-catalog-item-price">{{produkt_data.price}} руб./сутки</p>
  <p class="v-catalog-item-category">Категория: {{produkt_data.category}}, {{produkt_data.category2}}</p>
  <button>Забронировать</button>
  </div>
    
   </v-popap-vue>
    <img @click="openIPopup" class="img-item" :src="require('../assets/imadg/'+ produkt_data.image)" alt="img">
    <p class="v-catalog-item-country">Страна: {{produkt_data.country}}</p>
    <p class="v-catalog-item-name">Город: {{produkt_data.name}}</p>
    <p class="v-catalog-item-date">дата поездки: {{produkt_data.date}}</p>
    <p class="v-catalog-item-category">стоимость за ночь: {{produkt_data.price}} руб.</p> 
  </div>
</template>

<script>
  
import vPopapVue from './popap/v-popap.vue'; 

export default {
  components: {
  
  vPopapVue
  },

props:{
  produkt_data:{
type: Object,
default(){
  return{}
}
  }
},
data() {
  return {
    isInfoPopup: false
  }
},
methods: {
  openIPopup(){
    this.isInfoPopup= true;
    
  },
  closeIPopup(){

    this.isInfoPopup= false;
    
  }
},
}
</script>

<style>
.v-catalog-item{
  flex-basis: 25%;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 0 8px;
  cursor: pointer;
}
p{
   font-weight: bold;
}

  .v-catalog-item-country{
    font-size: medium;
   
  }
  .img-item{
    width: 250px;
    height: 250px;
  }

</style>