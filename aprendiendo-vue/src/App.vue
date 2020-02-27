<template>
  <div id="app">
    <Header />

    <router-view />

    <div class="clearfix"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
