<template>
  <experience-view
    title="Fashion collection"
    :images="[
      require('@/assets/experiences/fashion-collection/cover-fashion-collection.jpg'),
      require('@/assets/experiences/fashion-collection/fashion-collection-02.jpg'),
      require('@/assets/experiences/fashion-collection/fashion-collection-03.jpg')
    ]"
  >
    <p>
      Taking inspiration from the art and fashion of the 20th century, namely
      the work of Soviet constructivists, I created a collection of clothes,
      named <b>“Diagonals”</b>. It consists of geometric patterns - stripes,
      which, depending on the interpretation, give a different artistic effect.
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
