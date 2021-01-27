import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login(state, payload) {
      if (payload.login === "admin" && payload.pass === "admin") {
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
        }, 1000);
      });
    }
  },
  modules: {}
});
