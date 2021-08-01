<template>
  <div class="text-center">
    <i class="text-white p-3 fas fa-code fa-5x" />
    <h2 class="text-white text-3xl mb-6">{{ myName }}</h2>
    <p class="text-base m-0 text-s2grey">{{ city }}, {{ statePostalCode }}</p>
    <div class="text-2xl text-s2grey">
      <a :href="twitterUrl"><i class="p-2 hover:text-white fab fa-twitter" /></a>
      <a :href="linkedInUrl"><i class="p-2 hover:text-white fab fa-linkedin" /></a>
      <a :href="gitHubUrl"><i class="p-2 hover:text-white fab fa-github" /></a>
    </div>
    <vvs-logo class="fill-current text-white w-24 h-24 mx-auto" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VvsLogo from "~/components/FrontPage/VvsLogo.vue";

export default Vue.extend({
  name: "FrontPageHeader",
  components: { VvsLogo },
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
.mx-0auto {
  margin: 0 auto;
}
</style>
