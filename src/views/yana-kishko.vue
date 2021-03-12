<template>
  <experience-view title="Fashion collection" :phototeque="phototeque">
    <p>
      In February 2021 I started to work as production manager with Yana Kisho -
      videographer based in Paris. Among my missions were : organize and assist
      shoots, perform backstages, ensure customer and partner relations, produce
      communication supports and mailings.
      <br />
      <a href="https://www.instagram.com/yanakishko_video/">See projects</a>
    </p>
  </experience-view>
</template>

<script>
import experienceView from "../components/experience/experience-view.vue";
export default {
  components: { experienceView },
  data: function() {
    return {
      phototeque: [
        {
          type: "img",
          path: require("@/assets/experiences/yana-kishko/cover-yana-kishko-image-1.png")
        },
        {
          type: "img",
          path: require("@/assets/experiences/yana-kishko/cover-yana-kishko.jpg")
        },
        {
          type: "video",
          width: 500,
          path: require("@/assets/experiences/yana-kishko/cover-yana-kishko-video-1.mp4")
        }
      ]
    };
  }
};
</script>
