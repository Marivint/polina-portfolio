<template>
  <!-- Header -->
  <v-header></v-header>
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
import vHeader from "./components/header.vue";
import vFooter from "./components/footer.vue";

export default {
  components: {
    vHeader,
    vFooter
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
