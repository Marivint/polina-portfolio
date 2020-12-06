<template>
  <main>
    <!-- About -->
    <section id="about">
      <div class="container-fluid">
        <div class="row">
          <div id="about-text" class="offset-1 col-10">
            <h1 class="user-select-none color-blue-dark">
              I am a cultural<br />
              product manager.
            </h1>

            <p>
              Passionate about creating and development of cultural projects, I
              bring my managerial <br />
              and artistic br skills acquired during my international career.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 col-md-4 wrapper-col h-100 bg-black">
            <span class="wrapper-vertical"><h2>Production</h2></span>
          </div>

          <div class="col-12 col-md-4 wrapper-col h-100 bg-black">
            <span class="wrapper-vertical"><h2>Communication</h2></span>
          </div>

          <div class="col-12 col-md-4 wrapper-col h-100 bg-black">
            <span class="wrapper-vertical"><h2>Creation</h2></span>
          </div>
        </div>
      </div>
    </section>

    <!-- <div id="scroll-down" class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-auto">
          <i class="btn-icon-round">
            <icon-arrow-down
              colorClass="custom-icon-black"
              otherClass="btn-round"
              height="30"
              width="30"
            />
          </i>
        </div>
      </div>
    </div> -->

    <!-- Projects -->
    <section id="projects">
      <div class="container-fluid">
        <div id="subtitle-portfolio" class="row">
          <div class="offset-1 col-10">
            <span class="subtitle subtitle-left subtitle-blue-dark">
              Portfolio
            </span>
            <br />
            <h1>Look at my<br />Projects.</h1>
          </div>
        </div>

        <project
          format="left"
          page="1-6"
          title="Lambinet Museum in complete privacy"
          :subtitles="['Conception', 'Management', 'Production']"
          :src="
            require('@/assets/projects/musee-lambinet/cover-musee-lambinet.jpg')
          "
          ctaRouteName="museeLambinet"
        ></project>

        <project
          format="right"
          page="2-6"
          title="Meet my project"
          :subtitles="['Partnership', 'Production']"
          :src="
            require('@/assets/projects/meet-my-project/cover-meet-my-project.jpg')
          "
          ctaRouteName="meetMyProject"
        ></project>

        <project
          format="left"
          page="3-6"
          title="Academy FAST"
          :subtitles="['Management', 'Production', 'Communication']"
          :src="
            require('@/assets/projects/academy-fast/cover-academy-fast.jpg')
          "
          ctaRouteName="academyFast"
        ></project>

        <project
          format="right"
          page="4-6"
          title="Alexander Vasiliev’s Volga Seasons"
          :subtitles="['Pre-production', 'Production']"
          :src="
            require('@/assets/projects/alexander-vassiliev/cover-alexander-vassiliev.jpg')
          "
          ctaRouteName="alexanderVasilievVolga"
        ></project>

        <project
          format="left"
          page="5-6"
          title="Fashion Collection"
          :subtitles="['Conception', 'Realisation']"
          :src="
            require('@/assets/projects/fashion-collection/cover-fashion-collection.jpg')
          "
          ctaRouteName="fashionCollection"
        ></project>

        <project
          format="right"
          page="6-6"
          title="‘Life Flight’ Performance"
          :subtitles="['Conception', 'Creation']"
          :src="
            require('@/assets/projects/life-flight-performance/cover-life-flight-performance.jpg')
          "
          ctaRouteName="lifeFlightPerformance"
        ></project>
      </div>
    </section>
  </main>
</template>

<script>
import project from "../components/project/project.vue";
// import iconArrowDown from "../components/icons/icon-arrow-down.vue";
export default {
  components: {
    project
    // iconArrowDown
  },
  data() {
    return {
      show: true
    };
  }
};
</script>
