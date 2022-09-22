<template>
  <div class="v-nav-carousel">
    <button><router-link class="rl" to="/">домашняя</router-link></button>
    <button><router-link class="rl" to="/v-wooden-house">деревянный дом</router-link></button>
    <button><router-link class="rl" to="/v-on-the-island">на острове</router-link> </button>
    <button>бассейны</button>
    <button>пляж</button>
    <button>лес</button>
    <button>у озера</button>
    <button>тропинки</button>
    <button>пещеры</button>
    <button>замки</button>
    <button>кемпинги</button>
    <button>горы</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.v-nav-carousel {
  margin: 25px 0;
  text-align: center;
}
.rl {
  text-decoration:none;
  color: black;
}
</style>