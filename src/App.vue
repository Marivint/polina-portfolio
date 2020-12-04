<template>
  <!-- Header -->
  <header>
    <div class="container-fluid">
      <nav class="row header-center">
        <div class="col-10">
          <div class="d-inline header-item-logo">
            <!-- <logo class="header-logo"></logo> -->
            Polina Gusarova
          </div>

          <div class="d-inline header-item header-item-grey">
            <!-- <img src="@/assets/icon/chart.svg" /> -->
            About
          </div>

          <div class="d-inline header-item header-item-grey">
            Work
          </div>

          <div class="d-inline header-item header-item-grey">
            Contact
          </div>
        </div>
        <div class="col text-right">
          <button class="header-burger"></button>
        </div>
      </nav>
    </div>
  </header>
  <!-- End header -->

  <router-view v-slot="{ Component }">
    <transition
      name="custom-classes-transition"
      mode="out-in"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
      ref="routerViewRef"
      v-on:enter="enter"
    >
      <component :is="Component" />
    </transition>
  </router-view>

  <v-footer></v-footer>
  <!-- End router view -->
</template>

<script>
import vFooter from "./components/footer.vue";
import iconMessage from "./components/icons/icon-message.vue";
import iconLocation from "./components/icons/icon-location.vue";
import iconArrowRight from "./components/icons/icon-arrow-right.vue";
import iconLinkedin from "./components/icons/icon-linkedin.vue";
import iconHeart from "./components/icons/icon-heart.vue";

export default {
  components: {
    vFooter,
    iconMessage,
    iconLocation,
    iconArrowRight,
    iconLinkedin,
    iconHeart
  },
  watch: {
    $route(to, from) {
      let toDepth = to.path.split("/").length;
      let fromDepth = from.path.split("/").length;
      let enterTransition = toDepth < fromDepth ? "" : "";
      let leaveTransition = enterTransition == "" ? "" : "";
      // let enterTransition = toDepth < fromDepth ? "Down" : "Up";
      // let leaveTransition = enterTransition == "Up" ? "Down" : "Up";
      // let enterTransition = toDepth < fromDepth ? "Right" : "Left";
      // let leaveTransition = enterTransition == "Left" ? "Right" : "Left";
      this.enterActiveClass =
        "animate__animated animate__fadeIn" + enterTransition;

      this.leaveActiveClass =
        "animate__animated animate__fadeOut" + leaveTransition;
    }
  },
  methods: {
    // leave: function(el) {
    //   console.log("Leave");
    //   console.log(el);
    // },
    enter: function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    // afterEnter: function() {
    //   console.log("After enter");
    // }
  },
  data() {
    return {
      enterActiveClass: "",
      leaveActiveClass: ""
    };
  }
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
