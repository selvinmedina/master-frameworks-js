<template>
  <div>
    <article v-if="article">
      <div class="image-wrap">
        <img
          :src="article.image ? url+'get-image/'+article.image: 'https://www.tryngo.ch/img/no-img.jpg'"
          :alt="article.title"
        />
      </div>

      <h2>{{article.title}}</h2>
      <span class="date">{{article.date | moment('from', 'now')}}</span>
      <a href="#">Leer mas</a>
      <div class="clearfix"></div>
    </article>
  </div>
</template>
<script>
import Global from "../Global";

export default {
  name: "Article",
  data() {
    return {
      url: Global.url
    };
  },
  props: ["article"]
};
</script>