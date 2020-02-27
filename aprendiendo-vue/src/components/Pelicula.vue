<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" />
    </div>

    <h2>{{pelicula.title}}</h2>
    <span
      class="date"
      :class="{
            yeargreen: pelicula.year >=2016,
            yearred: pelicula.year <2016
        }"
    >{{pelicula.year}}</span>
    <button @click="marcarFavorita(pelicula)">Marcar como Favorita</button>
    <div class="clearfix"></div>
  </article>
</template>
<script>
export default {
  name: "Pelicula",
  props: ["pelicula"],
  methods: {
    marcarFavorita(pelicula) {
      console.log(pelicula.title);
      this.$emit("favorita", pelicula);
    }
  }
};
</script>