<template>
  <div class="m-6">
    <h2 class="text-3xl text-white">
      {{ header }}
    </h2>
    <p v-for="lineItem in content" :key='lineItem' class="text-base text-s2grey m-2">
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
