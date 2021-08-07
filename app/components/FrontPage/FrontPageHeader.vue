<template>
  <div class="mx-auto text-center grid grid-cols-1">
    <site-icon class="text-white mx-auto w-20 h-20 mb-4"/>
    <h2 class="text-white text-3xl">{{ myName }}</h2>
    <p class="text-base text-s2grey mb-6">{{ city }}, {{ statePostalCode }}</p>
    <div class="inline-flex gap-x-2 mx-auto mb-2 text-2xl text-s2grey">
      <a :href="twitterUrl"><twitter-icon class="w-8 h-8"/></a>
      <a :href="linkedInUrl"><linkedin-icon class="w-8 h-8"/></a>
      <a :href="gitHubUrl"><github-icon class="w-8 h-8"/></a>
    </div>
    <a class="w-28 h-24 mt-2 mx-auto" :href="currentJobUrl">
      <vvs-icon class="fill-current text-white"/>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TwitterIcon from "~/components/IconComponents/TwitterIcon.vue";
import LinkedinIcon from "~/components/IconComponents/LinkedinIcon.vue";
import GithubIcon from "~/components/IconComponents/GitHubIcon.vue";
import VvsIcon from "~/components/IconComponents/VvsIcon.vue";
import SiteIcon from "~/components/IconComponents/SiteIcon.vue";

export default Vue.extend({
  name: "FrontPageHeader",
  components: {
    SiteIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    VvsIcon
  },
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
    currentJobUrl: {
      type: String,
      default: "DEFAULT_CURRENT_JOB"
    }
  }
})
</script>
