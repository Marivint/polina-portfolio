<template>
  <main>
    <!-- About -->
    <section id="about">
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          <div id="about-text" class="col-11">
            <h1 class="user-select-none">
              I am a cultural<br />
              product manager.
            </h1>

            <p>
              Passionate about creating and development of cultural projects, I
              bring my managerial <br />
              and artistic br skills acquired during my international career.
            </p>

            <!-- <div id="demo">
              <button @click="show = !show">
                Toggle
              </button>

              <transition name="fade">
                <p v-if="show">hello</p>
              </transition>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-4"><h2>Production</h2></div>

          <div class="col-4"><h2>Communication</h2></div>

          <div class="col-4"><h2>Creation</h2></div>
        </div>
      </div>
    </section>

    <div id="scroll-down" class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-1">
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
    </div>

    <!-- Projects -->
    <section id="projects">
      <div class="container-fluid">
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
import iconArrowDown from "../components/icons/icon-arrow-down.vue";
export default {
  components: {
    project,
    iconArrowDown
  },
  data() {
    return {
      show: true
    };
  }
};
</script>
