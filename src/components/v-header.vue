<template>
    <div>
  <div class="v-head">
 <v-logo-vue />
 <v-nav-vue />
 <v-profile-vue />

    </div>
     <hr>
    </div>
</template>

<script>
   import vLogoVue from './v-logo.vue'
   import vNavVue from './v-nav.vue'
   import vProfileVue from './v-profile.vue'
export default {
   
components:{
    vLogoVue,
    vNavVue,
    vProfileVue
}
}
</script>

<style>
.v-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
   
}
</style>