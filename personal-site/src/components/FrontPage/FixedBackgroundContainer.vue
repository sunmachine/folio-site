<script setup lang="ts"></script>

<template>
  <div>
    <!-- OverlayedGradient -->
    <div
      class="w-full h-full -z-10 absolute bg-gradient-to-r from-slate-700 via-transparent to-transparent"
    />
    <!-- BG Image -->
    <div
      class="w-full h-full -z-20 absolute bg-scroll bg-cover bg-center bg-no-repeat bg-[url('/src/assets/background-scroller.jpg')] bg-slate-800"
    />
  </div>
</template>
