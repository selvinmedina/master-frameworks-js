<template>
  <div class="general">
    <slider texto="Blog" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
      </section>
      <sidebar />
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar
  }
};
</script>