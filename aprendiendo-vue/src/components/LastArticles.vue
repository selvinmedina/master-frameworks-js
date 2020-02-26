<template>
  <section id="content">
    <h2 class="subheader">Ultimos articulos</h2>
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img src="assets/images/2.jpg" alt="Paisaje" />
        </div>

        <h2>Articulo de prueba</h2>
        <span class="date">Hace 5 minutos</span>
        <a href="#">Leer mas</a>
        <div class="clearfix"></div>
      </article>
      <!-- Añadir articulos via js -->
    </div>
  </section>
</template>

<script>
export default {
  name: "LastArticles"
};
</script>