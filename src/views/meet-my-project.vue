<template>
  <experience-view
    :title="$t('page.experiences.datas.2.title')"
    :phototeque="phototeque"
  >
    <p v-html="$t('page.experiences.datas.2.text')"></p>
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
          path: require("@/assets/experiences/meet-my-project/cover-meet-my-project.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/meet-my-project/meet-my-project-01.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/meet-my-project/meet-my-project-02.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/meet-my-project/meet-my-project-03.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/meet-my-project/meet-my-project-04.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/meet-my-project/meet-my-project-05.jpg")
        }
      ]
    };
  }
};
</script>
