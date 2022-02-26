<script setup lang="ts">
import HeaderContainer from "./components/FrontPage/HeaderContainer.vue";

</script>

<template>
  <div>
    <div
      class="left-0 w-2/5 h-screen bg-top fixed bg-slate-700 border-l-8 border-t-8 border-b-8 border-gray-800"
    >
      <div class="md:flex h-screen grid grid-cols-1">
        <div class="md:flex-initial mt-12 mx-auto py-6">
          <HeaderContainer />
        </div>
      </div>
    </div>
    <div
      class="right-0 p-1/2 w-3/5 h-screen absolute bg-cover bg-top bg-no-repeat bg-[url('/src/assets/background-scroller.jpg')] bg-slate-800 border-r-8 border-t-8 border-b-8 border-slate-800"
    >
      <!-- <div class="md:flex-initial w-max md:w-3/5 md:pt-16 pt-4 pl-6"> -->
      <p class="text-slate-300">New site updates coming soon. I'm serious.</p>
      <div class="text-slate-700 absolute bottom-0 right-0">
        <svg class="fill-current" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0 25, 0 50, 100 50, 100 0" />
        </svg>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Nunito", sans-serif;
}
</style>