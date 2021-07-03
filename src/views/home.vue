<template>
  <main>
    <!-- About -->
    <section id="about">
      <div class="container-fluid">
        <div class="row">
          <div id="about-text" class="offset-1 col-10 user-select-none">
            <h1
              class="color-purple animate__animated animate__flipInX"
              v-html="$t('home.title')"
            ></h1>
            <br class="d-none d-sm-inline" />
            <br />
            <p
              class="animate__animated animate__flipInX animate__delay-1s"
              v-html="$t('home.description')"
            ></p>
            <br class="d-none d-sm-inline" />
            <br />
            <div class="row wrapper-cta">
              <div class="col-12 col-md-auto cta d-none d-sm-inline">
                <router-link
                  :to="{ name: 'experiences' }"
                  class="animate__animated animate__fadeIn animate__delay-2s"
                >
                  <strong v-html="$t('home.cta.experiences')"></strong>
                </router-link>
              </div>

              <!-- <div class="col-12 col-md-auto cta">
                <a
                  :href="
                    `${$root.publicPath}CV-Polina-GUSAROVA-Communication-Production-Evenementielle.pdf`
                  "
                  class="animate__animated animate__fadeIn animate__delay-2s"
                  download
                >
                  <strong v-html="$t('home.cta.resume')"></strong>
                </a>
              </div> -->

              <div class="col-12 col-md-auto cta d-none d-sm-inline">
                <router-link
                  :to="{ name: 'contact' }"
                  class="animate__animated animate__fadeIn animate__delay-2s"
                  v-on:click="anchorHashCheck()"
                >
                  <strong v-html="$t('home.cta.contact')"></strong>
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
  },
  mounted: function() {}
};
</script>
