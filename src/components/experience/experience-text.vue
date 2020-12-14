<template>
  <div
    class="experience-text"
    :class="
      showFormat === 1
        ? 'offset-1 col-11 offset-md-0 col-md-5 text-left pl'
        : 'offset-1 col-11 col-md-5 text-right pr'
    "
  >
    <p class="experience-page">{{ page }}</p>

    <h3>{{ title }}</h3>

    <p>{{ subtitlesDisplay }}</p>

    <span
      class="experience-cta subtitle subtitle-purple"
      :class="showFormat === 1 ? 'subtitle-left' : 'subtitle-right'"
    >
      <router-link :to="{ name: ctaRouteName }">Learn more</router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    showFormat: {
      type: Number,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitles: {
      type: Array,
      required: true,
    },
    ctaRouteName: {
      type: String,
      required: true,
    },
    someClass: {
      type: String,
      required: false,
    },
  },
  computed: {
    subtitlesDisplay: function() {
      let subtitlesDisplay = "";
      this.subtitles.forEach((subtitle) => {
        subtitlesDisplay += subtitle + " - ";
      });
      //   Delete last -
      if (subtitlesDisplay.length > 0) {
        subtitlesDisplay = subtitlesDisplay.slice(0, -2);
      }
      return subtitlesDisplay;
    },
  },
  mounted() {},
};
</script>
