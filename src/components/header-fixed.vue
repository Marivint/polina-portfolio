<template>
  <div id="header-fixed" class="animate__animated animate__faster hidden">
    <div class="container-fluid h-100">
      <div class="row h-100 align-items-center">
        <div
          class="d-none d-sm-block col-sm-4 col-md-3 bg-black h-100 color-white align-self-center"
        ></div>
        <div class="col text-left">
          <div class="row">
            <div
              id="header-fixed-informations"
              class="offset-1 col-md-10 col-lg-5 "
            >
              <span class="svg-text svg-text-contact">
                <icon-message
                  colorClass="custom-icon-black"
                  otherClass=""
                  height="30"
                  width="30"
                />
                <div class="text-wrapper">
                  <a href="mailto:{{emailTo}}">{{ emailTo }}</a>
                </div>
              </span>
              <span class="svg-text">
                <a
                  href="https://www.instagram.com/polina.prod/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <icon-instagram
                    colorClass="custom-icon-black"
                    otherClass=""
                    height="30"
                    width="30"
                  />
                  <div class="text-wrapper">instagram</div>
                </a>
              </span>
              <span class="svg-text">
                <a
                  href="https://www.linkedin.com/in/polina-gusarova-2791a4198/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <icon-linkedin
                    colorClass="custom-icon-black"
                    otherClass=""
                    height="30"
                    width="30"
                  />
                  <div class="text-wrapper">linkedin</div>
                </a>
              </span>
              <lang-switcher />
            </div>
            <div id="header-fixed-nav" class="offset-1 col-md-10 col-lg-5">
              <router-link
                :to="{ name: 'experiences' }"
                class="color-black header-fixed-link"
              >
                <h1 v-html="$t('header.experiences')"></h1>
              </router-link>

              <router-link
                :to="{ name: 'contact' }"
                class="color-black header-fixed-link"
              >
                <h1 v-html="$t('header.contact')"></h1>
              </router-link>
            </div>
            <div
              id="header-fixed-map"
              class="offset-1 col-9 col-md-10 col-lg-10"
            >
              <!-- <div id="map" class="h-100"></div> -->
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconMessage from "../components/icons/icon-message.vue";
import langSwitcher from "../components/lang-switcher.vue";
import iconLinkedin from "../components/icons/icon-linkedin.vue";
import iconInstagram from "../components/icons/icon-instagram.vue";

export default {
  components: { iconMessage, iconLinkedin, iconInstagram, langSwitcher },
  data: function() {
    return {
      emailTo: process.env.VUE_APP_CONTACT_EMAIL
    };
  },
  mounted() {}
};
</script>
