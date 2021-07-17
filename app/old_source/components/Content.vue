<template>
  <div>
    <h2>{{ header }}</h2>
    <p v-for="paragraph in paragraphs" :key="paragraph">
      {{ paragraph }}
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options
export default class Content extends Vue {
  props: {
    header,
    paragraphs
  }
}
</script>

<style scoped>
</style>
