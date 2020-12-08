<template>
  <div id="header-fixed" class="animate__animated animate__faster hidden">
    <div class="container-fluid h-100">
      <div class="row h-100 align-items-center">
        <div class="col-3 bg-black h-100 color-white align-self-center"></div>
        <div class="col text-left">
          <div class="row">
            <div id="header-fixed-map" class="offset-1 col-10">
              <div id="map" class="h-100"></div>
            </div>
            <div id="header-fixed-informations" class="col-6">
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
            <div id="header-fixed-nav" class="col-5">
              <h1>About me</h1>
              <h1>Experiences</h1>
              <h1>Contact</h1>
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
  mounted() {}
};
</script>
