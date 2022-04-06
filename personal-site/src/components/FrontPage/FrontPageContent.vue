<!-- <template>
  <div class="m-6">
    <h2 class="text-3xl text-white">
      {{ header }}
    </h2>
    <div class="m-2">
      <p v-for="lineItem in content" :key="lineItem" class="text-base text-s2grey">
        {{ lineItem }}
      </p>
      <p v-if="link" class="text-base hover:text-white text-s2grey mt-2">
        <a :href="link">{{ linkText }}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FrontPageContent",
  props: {
    header: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: undefined
    },
    linkText: {
      type: String,
      required: false,
      default: ""
    }
  },
});
</script> -->
