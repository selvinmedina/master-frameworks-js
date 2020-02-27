<template>
  <div id="slider" :class="{
    'slider-small': !showBtn
  }">
    <h1>{{texto}}</h1>
    <router-link to="/blog" v-if="showBtn" class="btn-white">Ir al blog</router-link>
  </div>
</template>
<script>
export default {
  name: "Slider",
  props: ["texto", "showBtn"]
};
</script>