import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Page from "../views/Page.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      next({ path: '/page/1' });
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/page/:page",
    name: "Page",
    component: Page,
  },
  {
    path: "/page/",
    name: "Fail Page",
    alias: "/page",
    beforeEnter: (to, from, next) => {
      next("/page/1");
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

// eslint-disable-block no-unused-vars
router.beforeEach((to, from, next) => {
  // Если уже залогинились, то отменяем принудительный переход на страницу с авторизацией
  if (to.name === 'Login' && store.state.isLogin) next({ name: 'Home' })
  else next()

})

export default router;
