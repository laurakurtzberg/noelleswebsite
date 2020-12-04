<template>
<div>
  <router-link class="back-button" tag="button" :to="'/'">
    back
  </router-link>
  <h1>Photobook</h1>
  <div class="bb-custom-wrapper">
    <fw-book :data="pages" :startPageIndex="1" :endPageIndex="pages.length - 2" @next="pageChange" @prev="pageChange" @indexPageChange="indexPageChange" :loop="loop">
      <template v-slot:page="{ page }">
        <div :style="{ backgroundImage: 'url('+page.src+')' }">{{page.text}}</div>
      </template>
    </fw-book>
  </div>
  <p class="note">Pssst... Did you know I love taking pictures with you?</p>
</div>
</template>

<script>
import {
  FwBook
} from "vue-turnjs";

export default {
  name: 'Photobook',
  components: {
    FwBook
  },
  mounted() {
    this.importAll(require.context('../assets/photobook/', true));
  },
  data() {
    return {
      autoNextPage: true,
      loop: false,
      pages: [
        {
          text: "Photos of Us!"
        }
      ]
    };
  },
  methods: {
    pageChange( /* curPage, indexPages, pageDatas */ ) {},
    indexPageChange( /* num */ ) {},
    importAll(r) {
      r.keys().forEach(key => (this.pages.push({ src: r(key), pathShort: key })));
      this.pages.push({text: "Let's take more pictures together... :)"});
    }
  }
}
</script>

<style>
.note {
  font-weight: 100;
  margin-top: 100px;
}
div.fw-book {
  text-align: center;
  margin: auto;
  width: 850px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid rgba(167, 134, 223, 0.6);
  background: rgba(167, 134, 223, 0.6);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  position: relative;
  perspective: 1500px;
}

.fw-book .fw-bookitem i.index {
  background-color: rgba(167, 134, 223, 0.6);
}

.fw-book .fw-bookitem div {
  border-radius: 0px;
  margin: 1px;
  width: 100%;
  height: 100%;
  background-position: left;
  background-size: cover;
  background-color: rgba(167, 134, 223, 0.2);
  line-height: 400px;
  color: #0e172c;
}
</style>
