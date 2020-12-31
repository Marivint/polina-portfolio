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
              :href="
                `${$root.publicPath}CV-Polina-GUSAROVA-Communication-Production-Evenementielle.pdf`
              "
              class="animate__animated animate__fadeIn animate__delay-2s"
              download
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
            id="skill-animated-1"
            class="col-12 col-md-4 flip wrapper-col h-100  animate__animated animate__faster animate__fadeIn animate__delay-3s"
          >
            <div class="flip-card-inner bg-black">
              <div class="flip-card-front">
                <span class="wrapper-vertical"><h2>Production</h2></span>
              </div>
              <div class="flip-card-back">
                <span class="wrapper-vertical">
                  <ul>
                    <li>
                      Definition and programming of the cultural project
                    </li>
                    <!-- <li class="d-none d-lg-inline">
                      Implementation of the production and dissemination of
                      projects
                    </li> -->
                    <li>Production of mediation tools</li>
                    <li>Team coordination</li>
                    <li>Editorial</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div
            id="skill-communication"
            class="col-12 col-md-4 flip wrapper-col h-100 animate__animated animate__faster animate__fadeIn animate__delay-4s"
          >
            <div class="flip-card-inner bg-black">
              <div class="flip-card-front">
                <span class="wrapper-vertical"><h2>Communication</h2></span>
              </div>
              <div class="flip-card-back">
                <span class="wrapper-vertical">
                  <ul>
                    <li>Strategy and content creation for social networks</li>
                    <!-- <li class="d-none d-lg-inline">
                      Creation of communication supports
                    </li> -->
                    <li>Partner relationship</li>
                    <li>Website monitoring and writing</li>
                    <li>Translations</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-4 flip wrapper-col h-100 animate__animated animate__faster animate__fadeIn animate__delay-5s"
          >
            <div class="flip-card-inner bg-black">
              <div class="flip-card-front">
                <span class="wrapper-vertical"><h2>Creation</h2></span>
              </div>
              <div class="flip-card-back">
                <span class="wrapper-vertical">
                  <ul>
                    <li>Creation of graphic supports</li>
                    <li>Design and creation of performances</li>
                    <li>Clothing design</li>
                  </ul>
                </span>
              </div>
            </div>
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
          class="row animate__animated animate__faster animate__fadeIn animate__delay-5s"
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
          otherClass="animate__animated animate__faster animate__fadeIn animate__delay-5s"
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
          otherClass="scroll-animate animate__animated"
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
          otherClass="scroll-animate animate__animated"
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
          otherClass="scroll-animate animate__animated"
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
          otherClass="scroll-animate animate__animated"
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
          otherClass="scroll-animate animate__animated"
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
