/* Import
============================================= */
// eslint-disable-next-line prettier/prettier
import {
  createRouter,
  createWebHistory
} from "vue-router";
import vHome from "@/views/home.vue";
import vProject from "@/views/project.vue";
import vProject2 from "@/views/project2.vue";
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
    path: "/project",
    name: "project",
    component: vProject
  },
  {
    path: "/project2",
    name: "project2",
    component: vProject2
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
  routes
});

// eslint-disable-next-line prettier/prettier
export default router;