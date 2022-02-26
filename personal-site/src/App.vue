<script setup lang="ts">
import BackgroundContainer from "./components/FrontPage/BackgroundContainer.vue";
import HeaderContainer from "./components/FrontPage/HeaderContainer.vue";

</script>

<template>
  <div>
    <!-- TODO: I broke this parallaxing somehow. -->
    <BackgroundContainer />
    <div class="md:flex h-screen grid grid-cols-1 p-2">
      <div class="md:flex-initial mt-12 mx-auto py-6">
        <HeaderContainer />
      </div>
      <div class="md:flex-initial md:w-3/5 md:pt-16 w-screen pt-4 pl-6">
        <p class="text-slate-300">New site updates coming soon. I'm serious.</p>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Nunito", sans-serif;
}
</style>