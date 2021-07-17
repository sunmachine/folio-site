<template>
  <div class="grid-2">
    <LogoHeader class="section-1"
                name="Dan Peavey"
                city="Bellevue"
                statePostalCode="WA"
                twitter="https://twitter.com/danpeavey"
                linked-in="https://www.linkedin.com/in/danpeaveydev/"
                git-hub="https://github.com/sunmachine"/>
    <div class="grid-1 section-2">
      <Content id="under-construction"
               :header='underConstructionContent.header'
               :paragraphs='underConstructionContent.paragraphs'/>
      <Content id="contact"
               :header='contactContent.header'
               :paragraphs='contactContent.emails'/>
    </div>
    <Background/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Background from "@/components/Background.vue";
import LogoHeader from "@/components/LogoHeader.vue";
import Content from "@/components/Content.vue";

@Options({
  components: {
    Content,
    LogoHeader,
    Background
  }
})
export default class FrontPage extends Vue {
  data() {
    return {
      title: this.title,
      contactContent: this.contactContent,
      underConstructionContent: this.underConstructionContent
    }
  }

  title: string = 'dan peavey'

  contactContent = {
    header: "Contact",
    emails: [
      "danpeavey@gmail.com"
    ]
  };

  underConstructionContent = {
    header: "Under Construction",
    paragraphs: [
      "Should be worth noting that I tore down my Squarespace.",
      "Not a fan of it anymore. Updates here \"coming soon™\"."
    ]
  };

  mounted() {
    this.$nextTick(() => document.title = this.title);
  }
}
</script>

<style scoped>
</style>
