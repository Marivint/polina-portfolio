<template>
  <experience-view
    :title="$t('page.experiences.datas.3.title')"
    :phototeque="phototeque"
  >
    <p v-html="$t('page.experiences.datas.3.text')"></p>
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
          path: require("@/assets/experiences/svezda-production/svezda-production-01.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/svezda-production/svezda-production-02.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/svezda-production/svezda-production-03.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/svezda-production/svezda-production-04.jpg")
        }
      ]
    };
  }
};
</script>
