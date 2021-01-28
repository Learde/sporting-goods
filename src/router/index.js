import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
  // Если перемещаемся на страницу с логином, то меняем стиль приложения
  if (to.name === 'Login' && !store.state.isLogin) store.state.isLoginPage = true
  else store.state.isLoginPage = false
  
  if (to.name === 'Login' && store.state.isLogin) next({ name: 'Home' })
  else next()

})

export default router;
