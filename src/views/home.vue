<template>
  <main>
    <!-- About -->
    <section id="about">
      <div class="container-fluid">
        <div class="row">
          <div id="about-text" class="offset-1 col-10">
            <h1
              class="user-select-none color-purple animate__animated animate__flipInX"
            >
              I am a cultural<br />
              product manager.
            </h1>
            <br />
            <p class="animate__animated animate__flipInX animate__delay-1s">
              Passionate about creating and development of cultural experiences,
              I bring my managerial <br />
              and artistic skills acquired during my international career.
            </p>
            <br />
            <a
              :href="require('@/assets/cv/cv-polina-gusarova.jpg')"
              target="_blank"
              class="animate__animated animate__fadeIn animate__delay-2s"
            >
              <strong>Download my resume</strong>
              <!-- <button class="anim-btn">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Download my resume</span>
              </button> -->
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div
            class="col-12 col-md-4 wrapper-col h-100 bg-black animate__animated animate__faster animate__fadeIn animate__delay-3s"
          >
            <span class="wrapper-vertical"><h2>Production</h2></span>
          </div>

          <div
            class="col-12 col-md-4 wrapper-col h-100 bg-black animate__animated animate__faster animate__fadeIn animate__delay-4s"
          >
            <span class="wrapper-vertical"><h2>Communication</h2></span>
          </div>

          <div
            class="col-12 col-md-4 wrapper-col h-100 bg-black animate__animated animate__faster animate__fadeIn animate__delay-5s"
          >
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

    <!-- experiences -->
    <section id="experiences">
      <div class="container-fluid">
        <div
          id="subtitle-portfolio"
          class="row scroll-animate animate__animated"
        >
          <div class="offset-1 col-10">
            <span class="subtitle subtitle-left subtitle-purple">
              Portfolio
            </span>
            <br />
            <h2>My experiences</h2>
          </div>
        </div>

        <experience
          format="left"
          page="1-6"
          title="Lambinet Museum in complete privacy"
          :subtitles="['Conception', 'Management', 'Production']"
          :src="
            require('@/assets/experiences/musee-lambinet/cover-musee-lambinet.jpg')
          "
          ctaRouteName="museeLambinet"
        ></experience>

        <experience
          format="right"
          page="2-6"
          title="Meet my project"
          :subtitles="['Partnership', 'Production']"
          :src="
            require('@/assets/experiences/meet-my-project/cover-meet-my-project.jpg')
          "
          ctaRouteName="meetMyProject"
        ></experience>

        <experience
          format="left"
          page="3-6"
          title="Svez'da production"
          :subtitles="['Management', 'Production', 'Communication']"
          :src="
            require('@/assets/experiences/svezda-production/cover-svezda-production.jpg')
          "
          ctaRouteName="svezdaProduction"
        ></experience>

        <experience
          format="right"
          page="4-6"
          title="Alexander Vasiliev’s Volga Seasons"
          :subtitles="['Pre-production', 'Production']"
          :src="
            require('@/assets/experiences/alexander-vassiliev/cover-alexander-vassiliev.jpg')
          "
          ctaRouteName="alexanderVasilievVolga"
        ></experience>

        <experience
          format="left"
          page="5-6"
          title="Fashion Collection"
          :subtitles="['Conception', 'Realisation']"
          :src="
            require('@/assets/experiences/fashion-collection/cover-fashion-collection.jpg')
          "
          ctaRouteName="fashionCollection"
        ></experience>

        <experience
          format="right"
          page="6-6"
          title="‘Life Flight’ Performance"
          :subtitles="['Conception', 'Creation']"
          :src="
            require('@/assets/experiences/life-flight-performance/cover-life-flight-performance.jpg')
          "
          ctaRouteName="lifeFlightPerformance"
        ></experience>
      </div>
    </section>
  </main>
</template>

<script>
import experience from "../components/experience/experience.vue";
// import iconArrowDown from "../components/icons/icon-arrow-down.vue";
export default {
  components: {
    experience
    // iconArrowDown
  },
  data() {
    return {
      show: true
    };
  }
};
</script>
