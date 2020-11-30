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

  <!-- Router view -->
  <!-- <transition
      name="fade"
      mode="out-in"
      appear
      v-on:leave="leave"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      ref="routerViewRef"
    >
      <router-view />
    </transition> -->

  <router-view v-slot="{ Component }">
    <transition
      name="custom-classes-transition"
      mode="out-in"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
      ref="routerViewRef"
    >
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- End router view -->
</template>

<script>
export default {
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
    // enter: function() {
    //   console.log("Enter");
    // },
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
