<template>
  <experience-view
    title="Alexander Vasiliev’s Volga Seasons"
    :images="[
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg')
    ]"
  >
    <p>
      The fashion festival "Alexander Vasiliev's Volga Seasons" has been held in
      Samara since 2001 and is a traditional annual event. The goal of the
      experience is to create conditions for the development of young costume
      and theater designers. The winners of the festival have repeatedly
      presented their collections abroad, including in France and China, for
      example, at the international Silk Road Fashion Week in China.
      <br /><br />
      The artistic director of the festival is the all-Russian famous fashion
      historian and art critic, theater artist, collector and TV presenter
      Alexander Vasiliev.
      <br /><br />
      As part of an internship at the “OV27 Advertising and Design Center”, I
      assisted the organizers of the event. I was engaged in promotion and
      production: organized castings, semi-finals and finals of the festival,
      coordinated the participants (fashion designers and models). As part of
      the festival, I also assisted the production of the V`SEASONS Showroom of
      clothes and accessories.
    </p>
  </experience-view>
</template>

<script>
import experienceView from "../components/experience/experience-view.vue";
export default {
  components: { experienceView }
};
</script>
