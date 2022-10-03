<template>
  <div class="popap-wrapper" ref="popap-wrapper">
  <div class="v-popap">
    <div class="v-popap-header">
        <span>{{popapTatle}}</span>
        <span>
            <i 
            class="material-icons"
            @click='closePopup'
            >
            close
          </i>
        </span>
    </div>
    <div class="v-popap-content">
        <slot>
      
        </slot>
    </div>
  </div></div>
</template>

<script>
export default {

  props:{
  popapTatle:{
  type: String,
  default:"popap name default"
}
},

methods:{
  closePopup(){
    this.$emit('closePopup')

  },
},
 mounted() {
    let vm = this;
    document.addEventListener('click', function(i){
if(i.target === vm.$refs['popap-wrapper']) {
  vm.closePopup()
}
    })
  },
}
</script>

<style>
  .popap-wrapper{
    background: rgba(232, 232, 232, 0.719);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .v-popap-header{
    font-weight: bold;
     display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 25px;
    font-style: italic;

  }
 
.v-popap{
  
  box-shadow: 0 0 17px;
  padding: 16px;
  width: 400px;
  top:50px;
  background-color: white;
  z-index: 10;
 
}
 
</style>