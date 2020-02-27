<template>
  <div class="general">
    <slider texto="Bienvenido al curso de Vue de Selvin Medina" :showBtn="true" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Ultimos articulos</h2>
        <div v-if="!articles">Cargando...</div>
        <div id="articles" v-if="articles.length > 0">
          <Article
            class="article-item"
            id="article-template"
            v-for="(article) of articles"
            :article="article"
            :key="article._id"
          />
        </div>
        <div v-else>No hay Articulos para mostrar</div>
      </section>
      <sidebar />
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import Global from "../Global";
import Article from "./Article.vue";

export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Article
  },
  data() {
    return {
      articles: [],
      url: Global.url
    };
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles/last").then(res => {
        if (res.data.status == "success") this.articles = res.data.articles;
      });
    }
  },
  mounted() {
    this.getArticles();
  }
};
</script>