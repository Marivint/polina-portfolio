<template>
  <experience-view
    :title="$t('page.experiences.datas.5.title')"
    :phototeque="phototeque"
  >
    <p v-html="$t('page.experiences.datas.5.text')"></p>
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
          path: require("@/assets/experiences/fashion-collection/cover-fashion-collection.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/fashion-collection/fashion-collection-02.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/fashion-collection/fashion-collection-03.jpg")
        }
      ]
    };
  }
};
</script>
