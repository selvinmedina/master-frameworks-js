<template>
  <div class="general">
    <slider />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{id_desde_url}}</h3>
        <h4>{{nombre}}</h4>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirAlBlog()">Redirigir</button>
      </section>
      <sidebar />
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Pagina",
  components: {
    Slider,
    Sidebar
  },
  created() {
    console.log("Created");
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("mounted");
  },
  updated() {
    console.log("actualizar");
  },
  destroyed() {
    console.log("eliminado");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Selvin"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Selvin Medina";
    },
    redirigirAlBlog() {
      console.log(this.$router);

      this.$router.push("/blog");
    }
  }
};
</script>