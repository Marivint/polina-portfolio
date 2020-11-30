/* Import
============================================= */
// eslint-disable-next-line prettier/prettier
import {
  createRouter,
  createWebHistory
} from "vue-router";
import vHome from "@/views/home.vue";
import vMuseeLambinet from "@/views/musee-lambinet.vue";
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
    path: "/musee-lambinet",
    name: "museeLambinet",
    component: vMuseeLambinet
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

// eslint-disable-next-line prettier/prettier
export default router;