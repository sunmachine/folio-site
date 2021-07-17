<template>
  <div @mousemove="onMove">
    <div class="parallax"/>
    <div class="bottom-vignette"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options
export default class Background extends Vue {
  onMove(evt: MouseEvent): void {
    const amplitude: number = 25;
    let element = this.$el.querySelector('.parallax') as HTMLElement;

    let width = amplitude / window.innerWidth;
    let height = amplitude / window.innerHeight;
    let pageX = evt.pageX - window.innerWidth / 2;
    let pageY = evt.pageY - window.innerHeight / 2;
    let newX = width * pageX * -1 - 25;
    let newY = height * pageY * -1 - 50;

    element.style.backgroundPositionX = newX + "px";
    element.style.backgroundPositionY = newY + -200 + "px";
  }
}
</script>

<style scoped>

.bottom-vignette {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  background: linear-gradient(to bottom, #FFFFFF00 55vh, #25374fCC 90vh);

  z-index: -1;
}

.parallax {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  /* https://www.growthbunker.dev/vuedarkmode/ */
  /* <img src="" height="1280" width="687" /> */

  opacity: 0.4;
  background-image: url('../assets/background-scroller.png');
  --x: 0;
  --y: -40vh;
  background-position: var(--x) var(--y);
  background-repeat: no-repeat;
  background-size: calc(100% + 50px);

  filter: blur(6px);
  -webkit-filter: blur(6px);

  z-index: -2;
}
</style>
