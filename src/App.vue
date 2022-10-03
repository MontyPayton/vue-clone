<template>
  <div id="app">
    
<v-header />
<v-nav-carousel />

<router-view />

   
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
title:"Проект изменен!"
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
