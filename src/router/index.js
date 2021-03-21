/* Import
============================================= */
// eslint-disable-next-line prettier/prettier
import {
  createRouter,
  createWebHistory
} from "vue-router";
import vHome from "@/views/home.vue";
import vMuseeLambinet from "@/views/musee-lambinet.vue";
import vmeetMyProject from "@/views/meet-my-project.vue";
import vSvezdaProduction from "@/views/svezda-production.vue";
import vFashionCollection from "@/views/fashion-collection.vue";
import vAlexanderVasilievVolga from "@/views/alexander-vasiliev-volga-season.vue";
import vLifeFlightPerformance from "@/views/life-flight-performance.vue";
import vYanaKishko from "@/views/yana-kishko.vue";
import vExperiences from "@/views/experiences.vue";
import vContact from "@/views/contact.vue";
import vNotFound from "@/views/404.vue";
import $ from "jquery";

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
    path: "/experiences.html",
    name: "experiences",
    component: vExperiences
  },
  {
    path: "/musee-lambinet.html",
    name: "museeLambinet",
    component: vMuseeLambinet
  },
  {
    path: "/meet-my-project.html",
    name: "meetMyProject",
    component: vmeetMyProject
  },
  {
    path: "/svezda-production.html",
    name: "svezdaProduction",
    component: vSvezdaProduction
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
    path: "/yana-kishko.html",
    name: "yanaKishko",
    component: vYanaKishko
  },
  {
    path: "/contact.html",
    name: "contact",
    component: vContact
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
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      window.emitter.on("enter", () => {
        $("html,body").scrollTop(0);
      });
      window.emitter.on("afterEnter", () => {
        window.emitter.all.clear();
        if (to.hash !== "") {
          const element = document.getElementById(to.hash.replace(/#/, ""));
          if (element && element.scrollIntoView) {
            element.scrollIntoView();
          }
          // location.href = to.hash;
          return resolve();
        }
        if (savedPosition) {
          savedPosition.behavior = "smooth";
          return resolve(savedPosition);
        }
        return resolve({
          x: 0,
          y: 0
        });
      });
    });
  }
});

// eslint-disable-next-line prettier/prettier
export default router;