<template>
  <experience-view
    title="Meet my project"
    :phototeque="[
      require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/experiences/meet-my-project/meet-my-project-01.jpg'),
      require('@/assets/experiences/meet-my-project/meet-my-project-02.jpg'),
      require('@/assets/experiences/meet-my-project/meet-my-project-03.jpg'),
      require('@/assets/experiences/meet-my-project/meet-my-project-04.jpg'),
      require('@/assets/experiences/meet-my-project/meet-my-project-05.jpg')
    ]"
  >
    <p>
      Created in 2019 as part of Paris Design Week, Meet My experience aims to
      promote contemporary design to the general public, but also to bring
      together talents. Architects, decorators, furniture editors,
      manufacturers, distributors… The event also aims to promote exchanges
      between professionals in the sector and generate new collaborations.
      <br /><br />
      For the 2018 and 2019 editions of Meet my experience I was responsible for
      communication and the search for designers and special guests, as well as
      partner relations and exhibition setup.
      <br /><br />
      <b
        >Learn more (
        <a href="https://www.meetmyproject.com/" target="_blank"
          >meetmyproject.com</a
        >
        )</b
      >
    </p>
  </experience-view>
</template>

<script>
import experienceView from "../components/experience/experience-view.vue";
export default {
  components: { experienceView }
};
</script>
