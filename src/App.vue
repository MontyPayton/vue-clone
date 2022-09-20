<template>
  <div id="app">
    <h1>{{title}}</h1>
<v-header />
<v-nav-carousel />
<v-catalog />

   
  </div>
</template>
<script>
  import vHeader  from './components/v-header.vue'
  import vNavCarousel from './components/v-nav-carousel.vue'
  import vCatalog from './components/v-catalog.vue'

  

  export default{
    name:"app",
    components:{
      vHeader,
      vNavCarousel,
      vCatalog,
     
    },
    props:{

    },
    data(){
      return{
title:"Жопа большая!"
      }
    },
    computed:{

    },
    methods:{

    },
  }
</script>
<style >
#app{
  max-width: 900px;
  margin: 0 auto;
}

</style>
