<template>
  <experience-view
    :title="$t('page.experiences.datas.4.title')"
    :phototeque="phototeque"
  >
    <p v-html="$t('page.experiences.datas.4.text')"></p>
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
          path: require("@/assets/experiences/alexander-vassiliev/alexander-vassiliev-01.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/alexander-vassiliev/alexander-vassiliev-02.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/alexander-vassiliev/alexander-vassiliev-03.jpg")
        },
        {
          type: "img",
          path: require("@/assets/experiences/alexander-vassiliev/alexander-vassiliev-04.jpg")
        }
      ]
    };
  }
};
</script>
