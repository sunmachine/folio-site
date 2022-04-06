<script setup lang="ts">
import SiteIcon from "../Icons/SiteIcon.vue";
import TwitterIcon from "../Icons/TwitterIcon.vue";
import LinkedinIcon from "../Icons/LinkedinIcon.vue";
import GithubIcon from "../Icons/GithubIcon.vue";
</script>

<template>
  <div class="mx-auto text-center grid grid-cols-1">
    <SiteIcon class="mx-auto w-20 h-20 mb-4 bg-sky" />
    <h2 class="text-white text-3xl">Dan Peavey</h2>
    <p class="text-base text-slate-300 mb-6">Bellevue, WA</p>
    <div class="inline-flex gap-x-4 mx-auto mb-2 text-2xl text-slate-300">
      <a href="https://twitter.com/danpeavey">
        <TwitterIcon class="w-8 h-8" />
      </a>
      <a href="https://www.linkedin.com/in/danpeaveydev/">
        <LinkedinIcon class="w-8 h-8" />
      </a>
      <a href="https://github.com/sunmachine/">
        <GithubIcon class="w-8 h-8" />
      </a>
    </div>
    <a class="mt-2 mx-auto" href="https://www.classdojo.com/jobs/">
      <img src="../../assets/current-classdojo.png" class="w-16 h-16" />
    </a>
  </div>
</template>
