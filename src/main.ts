import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import {
  // create naive ui
  create,
  // component
  NButton,
} from "naive-ui";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
