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
import { Options, Vue } from 'vue-class-component';

@Options
export default class LogoHeader extends Vue {
  name!: string;
  city!: string;
  statePostalCode!: string;
  twitter!: string;
  linkedIn!: string;
  gitHub!: string;
}
</script>

<style scoped>
</style>
