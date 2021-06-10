<template>
  <div id="app">
    <FrontPage name="Dan Peavey"
               city="Bellevue"
               statePostalCode="WA"
               twitter="https://twitter.com/danpeavey"
               linked-in="https://www.linkedin.com/in/danpeaveydev/"
               git-hub="https://github.com/sunmachine"
               email="danpeavey@gmail.com"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import FrontPage from "@/components/FrontPage.vue";

@Component({
  components: {
    FrontPage,
  },
})

export default class App extends Vue {
}
</script>

<style>
@import url(https://use.fontawesome.com/releases/v5.4.1/css/all.css);
@import url(style.css);

#app {
  /* Anything exclusive to the #app selector. */
}
</style>
