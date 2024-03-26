<script setup lang="ts">
import HeaderContainer from "./components/FrontPage/HeaderContainer.vue";
import FixedBackgroundContainer from "./components/FrontPage/FixedBackgroundContainer.vue";

document.title = "dan peavey";
</script>

<template>
  <link rel="icon" href="favicon.svg" />
  <div>
    <!-- Left-side -->
    <div
      class="left-0 w-2/5 h-screen bg-top fixed bg-slate-800 border-l-8 border-t-8 border-b-8 border-slate-900"
    >
      <div class="md:flex h-screen grid grid-cols-1">
        <div class="md:flex-initial mt-12 mx-auto py-6">
          <HeaderContainer />
        </div>
      </div>
    </div>

    <!-- Right-side -->
    <div
      class="right-0 p-2/5 w-3/5 h-screen absolute border-r-8 border-t-8 border-b-8 border-slate-900 bg-clear"
    >
      <FixedBackgroundContainer />
      <!-- <div class="md:flex-initial w-max md:w-3/5 md:pt-16 pt-4 pl-6"> -->
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Nunito", sans-serif;
}
</style>
