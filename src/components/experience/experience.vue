<template>
  <article class="row align-items-center experience" :class="otherClass">
    <template v-if="showFormat == 1">
      <experience-image
        :showFormat="showFormat"
        :src="src"
        :ctaRouteName="ctaRouteName"
      ></experience-image>
      <experience-text
        :showFormat="showFormat"
        :page="page"
        :title="title"
        :subtitles="subtitles"
        :ctaRouteName="ctaRouteName"
      ></experience-text>
    </template>
    <template v-if="showFormat == 2">
      <experience-text
        :showFormat="showFormat"
        :page="page"
        :title="title"
        :subtitles="subtitles"
        :ctaRouteName="ctaRouteName"
      ></experience-text>
      <experience-image
        :showFormat="showFormat"
        :src="src"
        :ctaRouteName="ctaRouteName"
      ></experience-image>
    </template>
  </article>
</template>

<script>
import experienceImage from "./experience-image.vue";
import experienceText from "./experience-text.vue";
export default {
  props: {
    format: {
      type: String,
      required: true
    },
    filter: {
      type: String,
      required: true
    },
    page: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitles: {
      type: Array,
      required: true
    },
    ctaRouteName: {
      type: String,
      required: true
    },
    otherClass: {
      type: String,
      required: true
    }
  },
  components: { experienceImage, experienceText },
  data: function() {
    return {
      showFormat: 0
    };
  },
  methods: {
    initFormat: function() {
      if (this.format === "left") {
        this.showFormat = 1;
      } else if (this.format === "right") {
        this.showFormat = 2;
      }
    }
  },
  mounted() {
    this.initFormat();
  }
};
</script>
