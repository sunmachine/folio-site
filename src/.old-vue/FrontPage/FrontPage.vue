<!-- <template>
  <div>
    <FrontPageBackground />
    <div class="md:flex h-screen grid grid-cols-1 p-2">
      <FrontPageHeader class="md:flex-initial m-auto my-auto py-6"
                       my-name="Dan Peavey"
                       city="Bellevue"
                       state-postal-code="WA"
                       twitter-url="https://twitter.com/danpeavey"
                       linkedin-url="https://www.linkedin.com/in/danpeaveydev/"
                       github-url="https://github.com/sunmachine"
                       current-job-url="https://vvspaceship.website" />
      <div class="md:flex-initial md:w-3/5 md:pt-16 w-screen pt-4 pl-6">
        <FrontPageContent id="news"
                          :header="newsContent.header"
                          :content="newsContent.content"/>
        <FrontPageContent id="contact"
                          :header="contactContent.header"
                          :content="contactContent.content"
                          :link="contactContent.link"
                          :link-text="contactContent.linkText"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import FrontPageBackground from "~/components/FrontPage/FrontPageBackground.vue";
import FrontPageHeader from "~/components/FrontPage/FrontPageHeader.vue";
import FrontPageContent from "~/components/FrontPage/FrontPageContent.vue";
import IFrontPageContent from "~/src/IFrontPageContent";

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
        header: "Contact",
        content: ["I can be reached at my email here:"],
        link: "mailto:danpeavey@gmail.com",
        linkText: "danpeavey@gmail.com"
      } as IFrontPageContent,
      newsContent: {
        header: "Under Construction",
        content: [
          "Should be worth noting that I tore down my Squarespace.",
          "Not a fan of it anymore. Updates here \"coming soon™\"."
        ]
      } as IFrontPageContent,
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
</script> -->
