<template>
  <div class="text-blue-50 text-center">
    <i class="p-3 fas fa-code fa-5x" />
    <h2 class="text-3xl mb-10">{{ myName }}</h2>
    <p>{{ city }}, {{ statePostalCode }}</p>
    <div class="text-2xl">
      <a :href="twitterUrl"><i class="p-2 hover:text-white fab fa-twitter" /></a>
      <a :href="linkedInUrl"><i class="p-2 hover:text-white fab fa-linkedin" /></a>
      <a :href="gitHubUrl"><i class="p-2 hover:text-white fab fa-github" /></a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Background",
  props: {
    myName: {
      type: String,
      default: "DEFAULT_NAME"
    },
    city: {
      type: String,
      default: "DEFAULT_CITY"
    },
    statePostalCode: {
      type: String,
      default: "DEFAULT_POSTAL_CODE"
    },
    twitterUrl: {
      type: String,
      default: "DEFAULT_TWITTER"
    },
    linkedInUrl: {
      type: String,
      default: "DEFAULT_LINKEDIN"
    },
    gitHubUrl: {
      type: String,
      default: "DEFAULT_GITHUB"
    },
  }
})
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.4.1/css/all.css);
</style>
