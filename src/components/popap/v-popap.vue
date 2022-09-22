<template>
  <div class="v-popap">
    <div class="v-popap-header">
        <span>name popap</span>
        <span>
            <i class="material-icons">close</i>
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

}
</script>

<style>
.v-popap{
  position: fixed;
}
</style>