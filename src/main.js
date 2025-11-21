import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";
import i18n from './i18n/i18n'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(i18n)
app.mount("#app");
