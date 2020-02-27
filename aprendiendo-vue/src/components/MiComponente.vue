<template>
  <div id="miComponente">
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{subtitulo}}</h2>
    <hr />

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    <p>
      Mi nombre es:
      <strong>{{nombre}}</strong>
    </p>
    <pre>
          {{$data}}
      </pre>
    <label>Edad:</label>
    <input type="number" v-model="edad" />
    <p>
      Mi edad es: {{edad == '' ? '-' : edad}} y soy
      <strong
        v-if="edad && edad >= 18 && edad < 60"
      >mayor</strong>
      <strong v-else-if="edad && edad >= 60 && edad < 90">de avanzada</strong>
      <strong v-else-if="edad && edad >= 90">anciano</strong>
      <strong v-else-if="edad && edad < 18">menor</strong>
      <strong v-else>-</strong>
      {{edad>=90 ? '' : 'de edad'}}
    </p>
    <h2>Directiva iterativa</h2>
    <ol>
      <li v-for="(pelicula, key) in peliculas" :key="key">{{pelicula}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 0,
      peliculas: [
        "Batman vs Superman",
        "El señor de los anillos",
        "Spiderman",
        "Annabelle"
      ]
    };
  }
};
</script>