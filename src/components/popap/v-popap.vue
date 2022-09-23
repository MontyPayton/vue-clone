<template>
  <div class="v-popap">
    <div class="v-popap-header">
        <span>name popap</span>
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
  </div>
</template>

<script>
export default {
methods:{
  closePopup(){
this.$emit('closePopup')

  }
}
}
</script>

<style>
.v-popap{
  position: fixed;
  box-shadow: 0 0 17px;
  padding: 16px;
  width: 400px;
  top:50px;
  background-color: white;
}
</style>