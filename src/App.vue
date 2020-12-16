<template>
  <!-- Header -->
  <c-header></c-header>
  <c-header-fixed></c-header-fixed>
  <!-- End header -->

  <router-view v-slot="{ Component }">
    <transition
      name="custom-classes-transition"
      mode="out-in"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
      ref="routerViewRef"
      v-on:before-enter="beforeEnter"
      v-on:enter="afterEnter"
    >
      <component :is="Component" />
    </transition>
  </router-view>

  <c-footer :enableContact="enableContact"></c-footer>
  <!-- End router view -->
</template>

<script>
import cHeader from "./components/header.vue";
import cHeaderFixed from "./components/header-fixed.vue";
import cFooter from "./components/footer.vue";

export default {
  components: {
    cHeader,
    cHeaderFixed,
    cFooter
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
    beforeEnter: function() {
      if (this.$route.name === "home") {
        this.enableContact = 1;
      } else {
        this.enableContact = 0;
      }
    },
    afterEnter: function() {
      if (this.$route.hash) {
        location.href = this.$route.hash;
      } else {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    }
  },
  data() {
    return {
      enterActiveClass: "",
      leaveActiveClass: "",
      enableContact: 0
    };
  }
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
