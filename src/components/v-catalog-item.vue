<template>
  <div class="v-catalog-item" @click="openPopap">
  <v-popap-vue />
    <img class="img-item" :src="require('../assets/imadg/'+ produkt_data.image)" alt="img">
    <p class="v-catalog-item-country">{{produkt_data.country}}</p>
    <p class="v-catalog-item-name">{{produkt_data.name}}</p>
    <p class="v-catalog-item-date">{{produkt_data.date}}</p>
    <p class="v-catalog-item-price">{{produkt_data.price}} руб.</p>
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
methods: {
  openPopap(){
    console.log('kkk');
    this.$emit(  'article',this.produkt_data.article)
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


  .v-catalog-item-country{
    font-size: medium;
  }
  .img-item{
    width: 250px;
    height: 250px;
  }

</style>