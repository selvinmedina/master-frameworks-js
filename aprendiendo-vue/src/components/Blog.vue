<template>
  <div class="general">
    <slider texto="Blog" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Ultimos articulos</h2>
        <div id="articles" v-if="articles">
          <Article
            class="article-item"
            id="article-template"
            v-for="(article) of articles"
            :article="article"
            :key="article._id"
          />
          <!-- Añadir articulos via js -->
        </div>
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
import Article from "./Article";

export default {
  name: "Blog",
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
      axios.get(this.url + "articles").then(res => {
        if (res.data.status == "success") this.articles = res.data.articles;
        console.log(this.articles);
      });
    }
  },
  mounted() {
    this.getArticles();
  }
};
</script>