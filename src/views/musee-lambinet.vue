<template>
  <project-view
    title="Lambinet Museum in complete privacy"
    :images="[
      require('@/assets/projects/musee-lambinet/cover-musee-lambinet.jpg'),
      require('@/assets/projects/musee-lambinet/musee-lambinet-02.jpg'),
      require('@/assets/projects/musee-lambinet/musee-lambinet-03.jpg'),
      require('@/assets/projects/musee-lambinet/musee-lambinet-04.jpg'),
      require('@/assets/projects/musee-lambinet/musee-lambinet-05.jpg')
    ]"
  >
    <p>
      In February 2020, the “Culture Sans Frontières” association proposed an
      innovative cultural mediation project ‘Musée Lambinet en toute intimité’
      within the Lambinet museum in the city of Versailles. More than a visit,
      it's an immersive and sensitive experience during which visitors interfere
      in the daily life of bourgeois in the time of Louis XV.
      <br /><br />
      The visit consisted of 4 workshops, each based on the different rhythms of
      the day: getting up, having lunch, afternoon games and reception in the
      evening. Visitors were invited to discover the codes of the court's
      pageantry and social life: how to put on a wig? What types of perfumes and
      makeup were used and how were they applied? What games were we playing at
      that time while having tea? And many other themes. A period tea room in
      partnership with a pastry chef from Versailles where young and old could
      come and eat throughout the event was also set up.
      <br /><br />
      With the association's team, I participated in all stages of the event:
      conception, promotion, management, production of mediation tools and
      project implementation.
    </p>
  </project-view>
</template>

<script>
import projectView from "../components/project-view/project-view.vue";
export default {
  components: { projectView }
};
</script>
