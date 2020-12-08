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

/* Animate CSS
============================================= */
// const animateCSS = (element, animation, prefix = "animate__") => {
//   return new Promise(resolve => {
//     const animationName = `${prefix}${animation}`;
//     const node = document.querySelector(element);

//     node.classList.add(`${prefix}animated`, animationName);

//     function handleAnimationEnd() {
//       node.classList.remove(`${prefix}animated`, animationName);
//       resolve("Animation ended");
//     }

//     node.addEventListener("animationend", handleAnimationEnd, {
//       once: true
//     });
//   });
// };

/* Animate CSS
============================================= */
(function () {
  let headerBurger = $("#header-burger");
  let headerFixed = $("#header-fixed");
  let headerLogo = $("#header-logo");
  let html = $("html");
  let body = $("body");
  headerBurger.on("click", function () {
    headerBurger.toggleClass("active");
    headerFixed.toggleClass("active");
    // Enter / Leave trigger
    if (headerFixed.hasClass("active")) {
      headerFixed.addClass("visible");
      headerFixed.removeClass("animate__slideOutLeft");
      headerLogo.addClass("color-white");
      headerLogo.removeClass("color-black");
      headerFixed.addClass("animate__slideInLeft");
    } else {
      headerLogo.addClass("color-black");
      headerLogo.removeClass("color-white");
      headerFixed.removeClass("animate__slideInLeft");
      headerFixed.addClass("animate__slideOutLeft");
    }
    html.toggleClass("no-scroll");
    body.toggleClass("no-scroll");
  });
})();

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