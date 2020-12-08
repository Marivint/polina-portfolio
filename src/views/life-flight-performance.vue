<template>
  <experience-view
    title="“Life Flight” Performance"
    :images="[
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg')
    ]"
  >
    <p>
      In 2017, in cooperation with the theater “Place of action”, I created a
      performance, presented at the annual embankment art festival “VolgаFest”
      in Samara, Russia. My main task was to design the costumes for this
      theatrical procession, which was supposed to introduce the audience to the
      various venues of the festival program.
      <br /><br />
      The concept of this performance is based on the Scandinavian method of
      navigation of medieval navigators.
      <br /><br />
      Ancient sailors took birds with them. If the ship was lost at sea, the
      sailors released the bird. When it returned back, it meant there is no
      land nearby, but if it flew away in a certain direction, it meant the bird
      found land.
      <br /><br />
      Modern city dwellers, like medieval sailors, are looking for landmarks in
      life. And everyone finds something of their own: unique places,
      recognition, art, love...
    </p>
  </experience-view>
</template>

<script>
import experienceView from "../components/experience/experience-view.vue";
export default {
  components: { experienceView }
};
</script>
