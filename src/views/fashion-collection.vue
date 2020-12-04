<template>
  <project-view
    title="Fashion collection"
    :images="[
      require('@/assets/projects/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/projects/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/projects/meet-my-project/cover-meet-my-project.jpg')
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
  </project-view>
</template>

<script>
import projectView from "../components/project-view/project-view.vue";
export default {
  components: { projectView }
};
</script>
