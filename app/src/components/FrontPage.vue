<template>
  <div class="grid-2" @mousemove="onMove">
    <div class="parallax"/>
    <div class="bottom-vignette"/>
    <div class="section-1">
      <i class="fas fa-code fa-5x white"></i>
      <h2>{{ name }}</h2>
      <p>{{ city }}, {{ statePostalCode }}</p>
      <a :href="twitter"><i class="fab fa-twitter"></i></a>
      <a :href="linkedIn"><i class="fab fa-linkedin"></i></a>
      <a :href="gitHub"><i class="fab fa-github"></i></a>
    </div>
    <div class="section-2">
      <h2>Under Construction</h2>
      <p>Should be worth noting that I tore down my Squarespace.</p>
      <p> Not a fan of it anymore. Updates here "coming soon™".</p>
      <h2>Contact</h2>
      <p>{{ email }}</p>

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class FrontPage extends Vue {
  @Prop() private name!: string;
  @Prop() private city!: string;
  @Prop() private statePostalCode!: string;
  @Prop() private twitter!: string;
  @Prop() private linkedIn!: string;
  @Prop() private gitHub!: string;
  @Prop() private email!: string;

  onMove(evt: MouseEvent): void {
    const movementStrength = 25;
    let parallaxElement = this.$el.querySelector('.parallax') as HTMLElement;

    let width = movementStrength / window.innerWidth;
    let height = movementStrength / window.innerHeight;
    let pageX = evt.pageX - window.innerWidth / 2;
    let pageY = evt.pageY - window.innerHeight / 2;
    let newX = width * pageX * -1 - 25;
    let newY = height * pageY * -1 - 50;
    parallaxElement.style.backgroundPositionX = newX + "px";
    parallaxElement.style.backgroundPositionY = newY + -200 + "px";
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

  z-index: -10;
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

  z-index: -20;
}
</style>
