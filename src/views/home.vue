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
              Hello! I am a cultural<br />
              production manager.
            </h1>
            <br />
            <p class="animate__animated animate__flipInX animate__delay-1s">
              Passionate by production of art and cultural projects, as well as
              of various design fields, <br />
              I’m focusing on management and digital communication.
            </p>
            <br />
            <div class="row">
              <div class="col-12 col-sm-auto">
                <router-link
                  :to="{ name: 'experiences' }"
                  class="animate__animated animate__fadeIn animate__delay-2s"
                >
                  <icon-category
                    colorClass="custom-icon-black"
                    otherClass="header-item-icon"
                    height="24"
                    width="24"
                  ></icon-category>
                  <strong>Experiences</strong>
                </router-link>
              </div>

              <div class="col-12 col-sm-auto">
                <a
                  :href="
                    `${$root.publicPath}CV-Polina-GUSAROVA-Communication-Production-Evenementielle.pdf`
                  "
                  class="animate__animated animate__fadeIn animate__delay-2s"
                  download
                >
                  <strong>Download my resume</strong>
                </a>
              </div>

              <div class="col-12 col-sm-auto">
                <router-link
                  :to="{ name: 'home', hash: '#contact' }"
                  class="animate__animated animate__fadeIn animate__delay-2s"
                  v-on:click="anchorHashCheck()"
                >
                  <icon-category
                    colorClass="custom-icon-black"
                    otherClass="header-item-icon"
                    height="24"
                    width="24"
                  ></icon-category>
                  <strong>Contact me</strong>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: true
    };
  }
};
</script>
