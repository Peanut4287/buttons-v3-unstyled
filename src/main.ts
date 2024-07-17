import { createApp } from "vue";

//@ts-expect-error
import Lara from "@/presets/lara";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});

app.mount("#app");
