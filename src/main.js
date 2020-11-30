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

const app = createApp(App);

app.use(router);

app.mount("#app");

// createApp(App)
//   .use(router)
//   .mount("#app");