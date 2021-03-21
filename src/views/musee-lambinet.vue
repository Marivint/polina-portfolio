<template>
  <experience-view
    :title="$t('page.experiences.datas.1.title')"
    :phototeque="phototeque"
  >
    <p v-html="$t('page.experiences.datas.1.text')"></p>
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
          path: require("@/assets/experiences/musee-lambinet/cover-musee-lambinet.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/musee-lambinet/musee-lambinet-02.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/musee-lambinet/musee-lambinet-03.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/musee-lambinet/musee-lambinet-04.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/musee-lambinet/musee-lambinet-05.jpg")
        }
      ]
    };
  }
};
</script>
