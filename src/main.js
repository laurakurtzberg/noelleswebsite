import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Compliments from "./components/Compliments";
import Pairing from "./components/Pairing";
import Photobook from "./components/Photobook";

Vue.config.productionTip = false
Vue.use(VueRouter);

// My routes
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/photobook", component: Photobook },
  { path: "/compliments", component: Compliments },
  { path: "/pairing", component: Pairing },
  {
    path: "/adulting",
    beforeEnter() {location.href = 'https://adulting-the-game.glitch.me/'}
  },
  {
    path: "/spotify",
    beforeEnter() {location.href = 'https://open.spotify.com/playlist/0SWg1vWIDXLcviYoaTKhh9'}
  }
];

// Create the router instance and pass the `routes` option
/* eslint-disable no-unused-vars */
const router = new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
