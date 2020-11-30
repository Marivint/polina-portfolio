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
        name="fade"
        mode="out-in"
        appear
        v-on:leave="leave"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        ref="routerViewRef"
      >
        <component :is="Component" />
      </transition>
    </router-view>

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
    leave: function(el) {
      console.log("Leave");
      console.log(el);
    },
    enter: function() {
      console.log("Enter");
      // console.log(el);
    },
    afterEnter: function() {
      console.log("After enter");
      // console.log(el);
    }
  }
};
</script>

<style lang="scss">
@import "./scss/app.scss";
</style>
