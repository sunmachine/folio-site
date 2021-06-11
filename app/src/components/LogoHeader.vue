<template>
  <div>
    <i class="fas fa-code fa-5x white"></i>
    <h2>{{ name }}</h2>
    <p>{{ city }}, {{ statePostalCode }}</p>
    <a :href="twitter"><i class="fab fa-twitter"></i></a>
    <a :href="linkedIn"><i class="fab fa-linkedin"></i></a>
    <a :href="gitHub"><i class="fab fa-github"></i></a>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class LogoHeader extends Vue {
  @Prop() private name!: string;
  @Prop() private city!: string;
  @Prop() private statePostalCode!: string;
  @Prop() private twitter!: string;
  @Prop() private linkedIn!: string;
  @Prop() private gitHub!: string;
}
</script>

<style scoped>
</style>
