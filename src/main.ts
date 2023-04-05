import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { setupNaive } from "@/naive-ui/index";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 初始化组件
setupNaive(app);

app.mount("#app");
