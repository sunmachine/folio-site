<script setup lang="ts"></script>

<template>
  <div>
    <!-- OverlayGradient -->
    <div class="container-sizing -z-10 bg-gradient-to-r from-slate-800 via-transparent to-transparent" />
    <!-- BG Image -->
    <div class="container-sizing bg-image bg-slate-800 -z-20" />
  </div>
</template>

<style scoped>
.container-sizing {
  width: 100%;
  height: 100%;
  position: absolute;
}

.bg-image {
  background-image: url("/src/assets/background-scroller.jpg");
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
