<template>
  <div>
    <h2>{{ header }}</h2>
    <p v-for="paragraph in paragraphs" :key="paragraph">
      {{ paragraph }}
    </p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Content extends Vue {
  @Prop() header!: string;
  @Prop() paragraphs!: string[];
}
</script>

<style scoped>
</style>
