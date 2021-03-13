/* Base
============================================= */
// eslint-disable-next-line prettier/prettier
import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import $ from "jquery"; //import jQuery
import "bootstrap";

/* Plugin
============================================= */
// import axios from "axios";
import gsap from "gsap";

// Event handler mitt
import mitt from "mitt";

import i18n from "./i18n";
window.emitter = mitt();

/* App
============================================= */
const app = createApp(App).use(i18n);

app.use(router);

app.mount("#app");

/* Is mobile
============================================= */
window.isMobile = (function (a) {
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      a
    ) ||
    // eslint-disable-next-line no-useless-escape
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    )
  )
    return true;
  else return false;
})(navigator.userAgent || navigator.vendor || window.opera);

/* Cursor
============================================= */
let elementCursorLittle = $(".cursor-little");
let elementCursorBig = $(".cursor-big");

function moveCursor(e) {
  var render = function render() {
    gsap.set(elementCursorLittle, {
      x: e.clientX,
      y: e.clientY
    });
    gsap.set(elementCursorBig, {
      x: e.clientX,
      y: e.clientY
    });
  };

  requestAnimationFrame(render);
}

if (window.isMobile) {
  elementCursorLittle.addClass("hidden");
  elementCursorBig.addClass("hidden");
} else {
  document.addEventListener("mousemove", e => {
    moveCursor(e);
  });
}

/* AnimateCss
============================================= */
// eslint-disable-next-line no-unused-vars
const animateCSS = (
  element,
  animation,
  removeClass = true,
  prefix = "animate__"
) => {
  // We create a Promise and return it
  return new Promise(resolve => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      event.stopPropagation();
      if (removeClass == true)
        node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, {
      once: true
    });
  });
};

/* Header fixed
============================================= */
const html = $("html");
const body = $("body");
const headerBurger = $("#header-burger");
const headerFixed = $("#header-fixed");
const headerLogo = $("#header-logo");
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
  headerLogo.removeClass("color-black");
  // logoBlack.hide();
  // Add
  headerBurger.addClass("active");
  headerFixed.addClass("active");
  headerFixed.addClass("visible");
  headerFixed.addClass("animate__fadeIn");
  headerLogo.addClass("color-white");
  // logoWhite.show();
  html.addClass("no-scroll");
  body.addClass("no-scroll");
};

const leaveHeaderFixed = () => {
  // Remove
  headerBurger.removeClass("active");
  headerFixed.removeClass("active");
  headerFixed.removeClass("visible");
  headerFixed.removeClass("animate__fadeIn");
  headerLogo.removeClass("color-white");
  // logoWhite.hide();
  // Add
  headerFixed.addClass("animate__fadeOut");
  headerLogo.addClass("color-black");
  // logoBlack.show();
  html.removeClass("no-scroll");
  body.removeClass("no-scroll");
};

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
// window.addEventListener("load", () => {
//   // eslint-disable-next-line no-unused-vars
//   let map;
//   // eslint-disable-next-line no-undef
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: {
//       lat: 48.8215897,
//       lng: 2.4118662
//     },
//     zoom: 14
//   });
// });