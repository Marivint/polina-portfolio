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
// import axios from "axios";
import "bootstrap";
import $ from "jquery"; //import jQuery

const app = createApp(App);

app.use(router);

app.mount("#app");

/* OnLoad
============================================= */
// window.addEventListener("load", function () {
//   // let headerFixed = $("#header-fixed");
//   // console.log(headerFixed);
//   // alert();
//   // headerFixed.addEventListener("animationend", () => {
//   //   headerFixed.addClass("hidden");
//   //   alert();
//   // });
// });

/* Header fixed
============================================= */
const html = $("html");
const body = $("body");
const headerBurger = $("#header-burger");
const headerFixed = $("#header-fixed");
const headerLogo = $("#header-logo");
const logoWhite = $("#logo-white");
const logoBlack = $("#logo-black");
const headerFixedLink = $(".header-fixed-link");

const animateHeaderFixed = () => {
  headerBurger.toggleClass("active");
  headerFixed.toggleClass("active");
  // Enter / Leave trigger
  if (headerFixed.hasClass("active")) {
    enterHeaderFixed();
  } else {
    leaveHeaderFixed();
  }
};

// Animation end
headerFixed.on("animationend", function () {
  if (!headerFixed.hasClass("active")) {
    headerFixed.addClass("hidden");
  }
});

const enterHeaderFixed = () => {
  // Remove
  headerFixed.removeClass("hidden");
  headerFixed.removeClass("animate__fadeOut");
  logoBlack.hide();
  // Add
  headerBurger.addClass("active");
  headerFixed.addClass("active");
  headerFixed.addClass("visible");
  headerFixed.addClass("animate__fadeIn");
  logoWhite.show();
  html.addClass("no-scroll");
  body.addClass("no-scroll");
};

const leaveHeaderFixed = () => {
  // Remove
  headerBurger.removeClass("active");
  headerFixed.removeClass("active");
  headerFixed.removeClass("visible");
  headerFixed.removeClass("animate__fadeIn");
  logoWhite.hide();
  // Add
  headerFixed.addClass("animate__fadeOut");
  logoBlack.show();
  html.removeClass("no-scroll");
  body.removeClass("no-scroll");
};

// const hideHeaderFixed = () => {
//   headerFixed.addEventListener("animationend", () => {
//     headerFixed.addClass("hidden");
//   });
// };

headerBurger.on("click", function () {
  animateHeaderFixed();
});

headerFixedLink.on("click", function () {
  animateHeaderFixed();
});

headerLogo.on("click", function () {
  leaveHeaderFixed();
});

/* Google maps
============================================= */
// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
// eslint-disable-next-line prettier/prettier
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFIEMUarDpNfvAulDpUpg_gbfE7Ztnemw&callback=initMap";
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // eslint-disable-next-line no-unused-vars
  let map;
  // eslint-disable-next-line no-undef
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 48.8215897,
      lng: 2.4118662
    },
    zoom: 14
  });
};

// // Append the 'script' element to 'head'
document.head.appendChild(script);

window.addEventListener("load", function () {
  // // eslint-disable-next-line no-unused-vars
  // let map;
  // // eslint-disable-next-line no-unused-vars
  // function initMap() {
  //   // eslint-disable-next-line no-undef
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: {
  //       lat: -34.397,
  //       lng: 150.644
  //     },
  //     zoom: 8
  //   });
  // }
});

// createApp(App)
//   .use(router)
//   .mount("#app");