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
import "bootstrap";

createApp(App)
  .use(router)
  .mount("#app");