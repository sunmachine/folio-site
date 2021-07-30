<template>
  <div>
    <Background/>
    <LogoHeader class="pt-80 border-2"
                my-name="Dan Peavey"
                city="Bellevue"
                state-postal-code="WA"
                twitter-url="https://twitter.com/danpeavey"
                linked-in-url="https://www.linkedin.com/in/danpeaveydev/"
                git-hub-url="https://github.com/sunmachine"/>
    <div class="grid grid-rows-2 border-2">
      <Content id="news"
               :header="newsContent.header"
               :content="newsContent.content"/>
      <Content id="contact"
               :header="contactContent.header"
               :content="contactContent.content"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { SectionContent as ISectionContent } from "src/ComponentInterfaces";
import Background from "~/components/FrontPage/Background.vue";
import LogoHeader from "~/components/FrontPage/LogoHeader.vue";
import Content from "~/components/FrontPage/Content.vue";

export default Vue.extend({
  name: 'FrontPage',
  components: {
    Content,
    LogoHeader,
    Background
  },
  data() {
    return {
      title: "dan peavey" as string,
      contactContent: {
        header: 'Contact',
        content: ['danpeavey@gmail.com']
      } as ISectionContent,
      newsContent: {
        header: "Under Construction",
        content: [
          "Should be worth noting that I tore down my Squarespace.",
          "Not a fan of it anymore. Updates here \"coming soon™\"."
        ]
      } as ISectionContent,
    }
  },
  mounted() {
    this.$nextTick(this.setTitle);
  },
  methods: {
    setTitle() {
      document.title = this.title;
    }
  },
})
</script>

<style scoped>
</style>
