<template>
  <div class="test">
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
    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter">
      <router-view />
    </transition>
    <!-- End router view -->
  </div>
</template>

<script>
export default {
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split("/").length;
  //     const fromDepth = from.path.split("/").length;
  //     this.transitionName = toDepth < fromDepth ? "fade" : "fade";
  //   }
  // }
  methods: {
    afterEnter: function(el) {
      // how to have this per-route
      console.log("Route entered");
      console.log(el);
    }
  }
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
