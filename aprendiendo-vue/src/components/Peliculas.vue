<template>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Peliculas</h2>
      <div id="articles">
        <pelicula v-for="(pelicula, key) in peliculas" :key="key" :pelicula="pelicula" />
      </div>
    </section>
    <sidebar />
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  data() {
    return {
      peliculas: [
        {
          title: "Batman vs superman",
          year: 2017,
          image:
            "https://www.bing.com/th?id=OIP.n61eKfekaXD9rwr2OMBTzgHaE8&pid=Api&rs=1"
        },
        {
          title: "Gran torino",
          year: 2016,
          image:
            "http://carswithmuscles.com/wp-content/uploads/2016/04/1972-ford-gran-torino-front-e1459838572164.jpg"
        },
        {
          title: "El señor de los anillos",
          year: 2015,
          image:
            "https://vignette.wikia.nocookie.net/eldragonverde/images/d/d4/LegendsMiddleEarth.jpg/revision/latest?cb=20141124111925&path-prefix=es"
        }
      ]
    };
  }
};
</script>