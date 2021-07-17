<template>
  <div>
    <i class="fas fa-code fa-5x white"></i>
    <h2>{{ name }}</h2>
    <p>{{ city }}, {{ statePostalCode }}</p>
    <a :href="twitterUrl"><i class="fab fa-twitter"></i></a>
    <a :href="linkedInUrl"><i class="fab fa-linkedin"></i></a>
    <a :href="gitHubUrl"><i class="fab fa-github"></i></a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Background",
  props: {
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
