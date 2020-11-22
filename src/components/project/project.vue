<template>
  <transition>
    <article class="row align-items-center project">
      <template v-if="showFormat == 1">
        <project-image :src="src"></project-image>
        <project-text
          :showFormat="showFormat"
          :page="page"
          :title="title"
          :subtitles="subtitles"
        ></project-text>
      </template>
      <template v-if="showFormat == 2">
        <project-text
          :showFormat="showFormat"
          :page="page"
          :title="title"
          :subtitles="subtitles"
        ></project-text>
        <project-image :src="src"></project-image>
      </template>
    </article>
  </transition>
</template>

<script>
import projectImage from "./project-image.vue";
import projectText from "./project-text.vue";
export default {
  props: {
    format: {
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
    }
  },
  components: { projectImage, projectText },
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
