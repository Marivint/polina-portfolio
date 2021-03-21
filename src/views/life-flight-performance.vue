<template>
  <experience-view
    :title="$t('page.experiences.datas.6.title')"
    :phototeque="phototeque"
  >
    <p v-html="$t('page.experiences.datas.6.text')"></p>
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
          path: require("@/assets/experiences/life-flight-performance/cover-life-flight-performance.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/life-flight-performance/life-flight-performance-02.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/life-flight-performance/life-flight-performance-03.jpg")
        }
      ]
    };
  }
};
</script>
