<template>
  <div>
    <FrontPageBackground />
    <div class="grid md:grid-cols-2 grid-cols-1 h-screen p-2">
      <FrontPageHeader class="m-auto my-auto py-6"
                       my-name="Dan Peavey"
                       city="Bellevue"
                       state-postal-code="WA"
                       twitter-url="https://twitter.com/danpeavey"
                       linkedin-url="https://www.linkedin.com/in/danpeaveydev/"
                       github-url="https://github.com/sunmachine"
                       current-job-url="https://vvspaceship.website" />
      <div class="md:pt-8 md:w-2/3 pt-0 pl-6">
        <FrontPageContent id="news"
                          :header="newsContent.header"
                          :content="newsContent.content"/>
        <FrontPageContent id="contact"
                          :header="contactContent.header"
                          :content="contactContent.content"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import {SectionContent as ISectionContent} from "src/ComponentInterfaces";
import FrontPageBackground from "~/components/FrontPage/FrontPageBackground.vue";
import FrontPageHeader from "~/components/FrontPage/FrontPageHeader.vue";
import FrontPageContent from "~/components/FrontPage/FrontPageContent.vue";

export default Vue.extend({
  name: 'FrontPage',
  components: {
    FrontPageContent,
    FrontPageHeader,
    FrontPageBackground
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
