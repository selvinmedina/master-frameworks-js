<template>
  <div id="app">
    <Header />
    <slider />
    <div class="center">
      <section class="content">
        <router-view/>
      </section>
    </div>
    <div class="clearfix"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Slider from "./components/Slider.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Slider,
    Footer
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
