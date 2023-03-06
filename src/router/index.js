import Vue from "vue";
import VueRouter from "vue-router";
import HeroPage from "../components/HeroPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/src/components/HeroPage.vue",
    name: "HeroPage",
    component: HeroPage,
  },
  {
    path: "/src/components/HeroPage.vue",
    name: "HeroPage",
    component: HeroPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
