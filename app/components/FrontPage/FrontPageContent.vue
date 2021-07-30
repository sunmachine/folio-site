<template>
  <div class="text-blue-50 m-10">
    <h2 class="text-3xl">
      {{ header }}
    </h2>
    <p v-for="lineItem in content" :key='lineItem' class="text-base m-2">
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
