<template>
  <project-view
    title="Meet my project"
    :images="[
      require('@/assets/projects/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/projects/meet-my-project/cover-meet-my-project.jpg'),
      require('@/assets/projects/meet-my-project/cover-meet-my-project.jpg')
    ]"
  >
    <p>
      Created in 2009 as part of Paris Design Week, Meet My Project aims to
      promote contemporary design to the general public, but also to bring
      together talents. Architects, decorators, furniture editors,
      manufacturers, distributors… The event also aims to promote exchanges
      between professionals in the sector and generate new collaborations.
      <br /><br />
      For the 2018 and 2019 editions of Meet my project I was responsible for
      communication and the search for designers and special guests, as well as
      partner relations and exhibition setup.
      <br /><br />
      Learn more ( http://www.meetmyproject.com/ )
    </p>
  </project-view>
</template>

<script>
import projectView from "../components/project-view/project-view.vue";
export default {
  components: { projectView }
};
</script>
