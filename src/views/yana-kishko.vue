<template>
  <experience-view
    :title="$t('page.experiences.datas.0.title')"
    :phototeque="phototeque"
  >
    <p v-html="$t('page.experiences.datas.0.text')"></p>
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
        }
      ]
    };
  }
};
</script>
