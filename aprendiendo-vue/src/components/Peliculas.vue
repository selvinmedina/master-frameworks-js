<template>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Peliculas</h2>
      <div class="favorita" v-if="favorita">
        <h2>Favorita: {{favorita.title}}</h2>
      </div>
      <div id="articles">
        <pelicula
          @favorita="haLlegadoLaFavorita"
          v-for="(pelicula, key) in peliculasMayusculas"
          :key="key"
          :pelicula="pelicula"
        />
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
      ],
      favorita: null
    };
  },
  methods: {
    haLlegadoLaFavorita(favorita) {
      this.favorita = favorita;
    }
  },
  computed: {
    peliculasMayusculas() {
      var peliculasMod = this.peliculas;
      for (let i = 0; i < this.peliculas.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    }
  }
};
</script>