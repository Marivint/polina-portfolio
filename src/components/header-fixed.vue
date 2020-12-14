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
              <span class="svg-text">
                <icon-message
                  colorClass="custom-icon-black"
                  otherClass=""
                  height="30"
                  width="30"
                />
                <div class="text-wrapper">gusarova@gmail.com</div>
              </span>
              <span class="svg-text">
                <icon-linkedin
                  colorClass="custom-icon-black"
                  otherClass=""
                  height="30"
                  width="30"
                />
                <div class="text-wrapper">linkedin</div>
              </span>
            </div>
            <div id="header-fixed-nav" class="offset-1 col-md-10 col-lg-5">
              <router-link
                :to="{ name: 'home', hash: '#experiences' }"
                v-on:click="triggerClick"
                class="color-black header-fixed-link"
              >
                <h1>About me</h1>
              </router-link>

              <router-link
                :to="{ name: 'home', hash: '#experiences' }"
                v-on:click="triggerClick"
                class="color-purple header-fixed-link"
              >
                <h1>Experiences</h1>
              </router-link>

              <router-link
                :to="{ name: 'home', hash: '#contact' }"
                v-on:click="triggerClick"
                class="color-black header-fixed-link"
              >
                <h1>Contact</h1>
              </router-link>
            </div>
            <div
              id="header-fixed-map"
              class="offset-1 col-9 col-md-10 col-lg-10"
            >
              <div id="map" class="h-100"></div>
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
// import iconLocation from "../components/icons/icon-location.vue";
// import iconArrowRight from "../components/icons/icon-arrow-right.vue";
import iconLinkedin from "../components/icons/icon-linkedin.vue";
// import iconHeart from "../components/icons/icon-heart.vue";

export default {
  components: { iconMessage, iconLinkedin },
  data: function() {
    return {};
  },
  mounted() {},
};
</script>
