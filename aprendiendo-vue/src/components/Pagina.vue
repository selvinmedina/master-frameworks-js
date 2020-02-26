<template>
  <section id="content">
    <h2 class="subheader">Pagina de pruebas</h2>
    <h3>{{id_desde_url}}</h3>
    <h4>{{nombre}}</h4>
    <button @click="actualizarNombre()">Actualizar nombre</button>
  </section>
</template>
<script>
export default {
  name: "Pagina",
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
    }
  }
};
</script>