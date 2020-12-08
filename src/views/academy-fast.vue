<template>
  <experience-view
    title="Academy FAST"
    :images="[
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg')
    ]"
  >
    <p>
      Svez’da Production – is an international event agency with sound
      experience in organization of international events and festivals, as well
      as in artist’s management and consulting.
      <br /><br />
      I had to work on two experiences "Revealing the Stars" and "The FAST
      Academy". The first is an artistic competition that takes place in France
      and leads to an international competition in Los Angeles. The second is an
      online business school for artists and cultural entrepreneurs, which aims
      to help artists start their careers and learn to manage it.
      <br /><br />
      As a production assistant I was in charge of the digital communication
      strategy and website monitoring, partner relations, management (planning
      and organizational monitoring, coordinating the team) and of the launch of
      the online business school.
    </p>
  </experience-view>
</template>

<script>
import experienceView from "../components/experience/experience-view.vue";
export default {
  components: { experienceView }
};
</script>
