<template>
  <div id="app">
    <FrontPage/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FrontPage from "@/components/FrontPage.vue";


@Options({
  components: {
    FrontPage,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url(https://use.fontawesome.com/releases/v5.4.1/css/all.css);
@import url(style.css);

#app {
  /* Anything exclusive to the #app selector. */
}
</style>
