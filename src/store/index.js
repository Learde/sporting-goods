import Vue from "vue";
import Vuex from "vuex";
import catalog from "../assets/catalog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false, // Для проверки, авторизован ли пользователь
    data: [] // Данные о товарах

  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    fillData(state, payload) { // payload - массив объектов с данными о товарах
      state.data = payload;
    }
  },
  actions: {
    tryLogin({ commit }, payload) { // payload - объект с данными для авторизации
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => { 
        if (payload.login === "admin" && payload.pass === "admin") {
          // Сохраняем данные, а не факт авторизации для повторной авторизации с этими данными
          // полезно в случае изменения логина/пароля (авторизация не должна пройти в таком случае)
          window.localStorage.login = payload.login; // Сохраняем данные администратора локально
          window.localStorage.pass = payload.pass;   // чтобы не входить каждый раз заново

          commit("login");
          resolve();
        } else {
          reject();
        }
      });
    },
    getData({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        setTimeout(() => { // Имитируем ожидание данных от сервера
          // Так как бекенд не используется, при первом посещении приложения запишем данные локально
          if (!window.localStorage.data) {
            window.localStorage.data = JSON.stringify(catalog);
          }
          commit("fillData", JSON.parse(window.localStorage.data));
          resolve();
        }, 250);
      });
    }
  },
  getters: {
    getDataByPage: state => page => {
      const start = (page - 1) * 10;
      const end = page * 10;
      return state.data.slice(start, end);
    }
  },
  modules: {}
});
