<template>
  <div
    class="col-5 project-text"
    :class="showFormat === 1 ? 'text-left' : 'text-right'"
  >
    <p class="project-page">{{ page }}</p>

    <h3>{{ title }}</h3>

    <p>{{ subtitlesDisplay }}</p>

    <span
      class="project-cta subtitle subtitle-black"
      :class="showFormat === 1 ? 'subtitle-left' : 'subtitle-right'"
    >
      Learn more
    </span>
  </div>
</template>

<script>
export default {
  props: {
    showFormat: {
      type: Number,
      required: true
    },
    page: {
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
    someClass: {
      type: String,
      required: false
    }
  },
  computed: {
    subtitlesDisplay: function() {
      let subtitlesDisplay = "";
      this.subtitles.forEach(subtitle => {
        subtitlesDisplay += subtitle + " - ";
      });
      //   Delete last -
      if (subtitlesDisplay.length > 0) {
        subtitlesDisplay = subtitlesDisplay.slice(0, -2);
      }
      return subtitlesDisplay;
    }
  },
  mounted() {}
};
</script>
