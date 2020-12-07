/* Base
============================================= */
// eslint-disable-next-line prettier/prettier
import {
  createApp
} from "vue";
import App from "./App.vue";

/* Plugin
============================================= */
import router from "./router";
// import "bootstrap";
import $ from "jquery"; //import jQuery

const app = createApp(App);

app.use(router);

app.mount("#app");

// header
(function () {
  let headerBurger = $("#header-burger");
  // let burger = header.find(".js-header-burger");
  let headerFixed = $("#header-fixed");
  let html = $("html");
  let body = $("body");
  headerBurger.on("click", function () {
    headerBurger.toggleClass("active");
    headerFixed.toggleClass("active");
    // Enter / Leave trigger
    if (headerFixed.hasClass("active")) {
      // alert("enter");
      headerFixed.removeClass("hidden");
      headerFixed.addClass("visible");
      headerFixed.removeClass("animate__slideOutLeft");
      headerFixed.addClass("animate__slideInLeft");
    } else {
      // alert("leave");
      headerFixed.removeClass("animate__slideInLeft");
      headerFixed.addClass("animate__slideOutLeft");
      headerFixed.on("animationend", function () {
        headerFixed.removeClass("visible");
        headerFixed.addClass("hidden");
      });
    }
    html.toggleClass("no-scroll");
    body.toggleClass("no-scroll");
    // headerFixed.toggleClass("animate__slideOutLeft");
    // headerFixed.toggleClass("animate__backInUp");
  });
})();

// createApp(App)
//   .use(router)
//   .mount("#app");