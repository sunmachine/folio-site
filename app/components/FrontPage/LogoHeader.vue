<template>
  <div>
    <i class="fas fa-code fa-5x white" />
    <h2>{{ myName }}</h2>
    <p>{{ city }}, {{ statePostalCode }}</p>
    <a :href="twitterUrl"><i class="fab fa-twitter" /></a>
    <a :href="linkedInUrl"><i class="fab fa-linkedin" /></a>
    <a :href="gitHubUrl"><i class="fab fa-github" /></a>
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
</style>
