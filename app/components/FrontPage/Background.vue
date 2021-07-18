<template>
  <div @mousemove="onMove">
    <!-- Gradient -->
    <div class="w-screen h-screen bg-top fixed -z-10 bg-gradient-to-t from-gray-800 to-transparent border-8 border-gray-900" />
    <!-- BG Image -->
    <div class="scoped-parallax w-110 h-110 bg-cover bg-top bg-frontpage-image fixed -z-20 filter blur-sm" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Background",
  methods: {
    onMove(evt: MouseEvent): void {
      const amplitude: number = 25;
      const element = this.$el.querySelector('.scoped-parallax') as HTMLElement;

      const width = amplitude / window.innerWidth;
      const height = amplitude / window.innerHeight;
      const pageX = evt.pageX - window.innerWidth / 2;
      const pageY = evt.pageY - window.innerHeight / 2;
      const newX = width * (pageX * -1) - 25;
      const newY = height * (pageY * -1) - 50;

      element.style.backgroundPositionX = newX + "px";
      element.style.backgroundPositionY = newY + -200 + "px";
    }
  }
})
</script>
