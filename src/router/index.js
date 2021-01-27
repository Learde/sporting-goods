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

// Используем хук для перехода на роут с авторизацией при нежелательном переходе на другой роут
// И отключаем правило eslint'а, которое здесь мешает
// eslint-disable-block no-unused-vars
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.isLogin) next({ name: 'Login' })
  else if (to.name === 'Login' && store.state.isLogin) next({ name: 'Home' })
  else next()
})

export default router;
