import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoginPage: false
  },
  mutations: {
    login(state, payload) {
      if (payload.login === "admin" && payload.pass === "admin") {
        window.localStorage.login = payload.login;
        window.localStorage.pass = payload.pass;
        state.isLogin = true;
      }
    }
  },
  actions: {
    tryLogin(context, payload) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("login", payload);
          resolve();
        }, 300);
      });
    }
  },
  modules: {}
});
