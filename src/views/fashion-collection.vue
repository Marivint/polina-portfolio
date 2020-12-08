<template>
  <experience-view
    title="Fashion collection"
    :images="[
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg')
    ]"
  >
    <p>
      Taking inspiration from the art and fashion of the 20th century, namely
      the work of Soviet constructivists, I created a collection of clothes,
      named “Diagonals”. It consists of geometric patterns - stripes, which,
      depending on the interpretation, give a different artistic effect.
      <br /><br />
      The collection was created as part of a bachelor's degree program at
      Samara State Technical University, and was presented at fashion shows in
      Russia.
    </p>
  </experience-view>
</template>

<script>
import experienceView from "../components/experience/experience-view.vue";
export default {
  components: { experienceView }
};
</script>
