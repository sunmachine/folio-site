<template>
  <div>
    <h2>{{ header }}</h2>
    <p v-for="lineItem in content" :key='lineItem'>
      {{ lineItem }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FrontPageContent",
  props: {
    header: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>
