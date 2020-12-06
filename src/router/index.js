/* Import
============================================= */
// eslint-disable-next-line prettier/prettier
import {
  createRouter,
  createWebHistory
} from "vue-router";
import vHome from "@/views/home.vue";
import vMuseeLambinet from "@/views/musee-lambinet.vue";
import vMeetMyProject from "@/views/meet-my-project.vue";
import vAcademyFast from "@/views/academy-fast.vue";
import vFashionCollection from "@/views/fashion-collection.vue";
import vAlexanderVasilievVolga from "@/views/alexander-vasiliev-volga-season.vue";
import vLifeFlightPerformance from "@/views/life-flight-performance.vue";
import vAbout from "@/views/about.vue";
import vNotFound from "@/views/404.vue";

/* Routes 
============================================= */
// eslint-disable-next-line prettier/prettier
const routes = [{
    path: "/",
    name: "home",
    _component: vHome,
    get component() {
      return this._component;
    },
    set component(value) {
      this._component = value;
    }
  },
  {
    path: "/about",
    name: "about",
    vHome: vAbout
  },
  {
    path: "/musee-lambinet.html",
    name: "museeLambinet",
    component: vMuseeLambinet
  },
  {
    path: "/meet-my-project.html",
    name: "meetMyProject",
    component: vMeetMyProject
  },
  {
    path: "/academy-fast.html",
    name: "academyFast",
    component: vAcademyFast
  },
  {
    path: "/fashion-collection.html",
    name: "fashionCollection",
    component: vFashionCollection
  },
  {
    path: "/alexander-vasiliev-volga-season.html",
    name: "alexanderVasilievVolga",
    component: vAlexanderVasilievVolga
  },
  {
    path: "/life-flight-performance.html",
    name: "lifeFlightPerformance",
    component: vLifeFlightPerformance
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: vNotFound
  }
];

/* Router
============================================= */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // return {
    //   x: 0,
    //   y: 0
    // };
    // if (savedPosition) {
    //   return savedPosition;
    // } else {
    //   return {
    //     x: 0,
    //     y: 0
    //   };
    // }
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({
    //       x: 0,
    //       y: 0
    //     });
    //   }, 600);
    // });
  }
});

// eslint-disable-next-line prettier/prettier
export default router;