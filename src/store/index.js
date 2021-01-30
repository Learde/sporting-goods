import Vue from "vue";
import Vuex from "vuex";
import catalog from "../assets/catalog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false, // Для проверки, авторизован ли пользователь
    data: [], // Данные о товарах
    possiblePages: 0

  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    fillData(state, payload) { // payload - массив объектов с данными о товарах
      state.data = payload;
      state.possiblePages = Math.ceil(payload.length / 10);
    },
    delete(state, i) {
      state.data.splice(i, 1);
      state.possiblePages = Math.ceil(state.data.length / 10);
      
    },
    edit(state, payload) {
      state.data[payload[0]] = payload[1];
    },
    create(state, obj) {
      state.data.push(obj);
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
      return new Promise((resolve) => {
        setTimeout(() => { // Имитируем ожидание данных от сервера
          // Так как бекенд не используется, при первом посещении приложения запишем данные локально
          if (!window.localStorage.data) {
            window.localStorage.data = JSON.stringify(catalog);
          }
          commit("fillData", JSON.parse(window.localStorage.data));
          resolve();
        }, 250);
      });
    },
    deleteItem({ commit, state }, id) {
      return new Promise((resolve) => { 
        let elemIndex;
        state.data.forEach((val,i) => {
          if (val.id == id) {
            elemIndex = i;
          }
        })

        commit("delete", elemIndex);
        window.localStorage.data = JSON.stringify(state.data);
        resolve();
      });
    },
    editField({ commit, state }, obj) {
      return new Promise((resolve) => {
        let index;
        state.data.forEach((val, i) => {
          if (Number(val.id) === Number(obj.id)) {
            index = i;
          }
        })


        commit("edit", [index, obj]);
        window.localStorage.data = JSON.stringify(state.data);
        resolve();
      })
    },
    createField({ commit, state }, obj) {
      return new Promise((resolve) => {
        obj.id = state.data[state.data.length - 1].id + 1;

        commit("create", obj);
        window.localStorage.data = JSON.stringify(state.data);
        resolve();
      })
    }
  },
  getters: {
    getDataByPage: state => page => {
      const start = (page - 1) * 10;
      const end = page * 10;
      return state.data.slice(start, end);
    },
    getItemById: state => id => {
      return state.data.filter(a => Number(a.id) === Number(id))[0];
    },
    getCategories: state => {
      const allCategories = state.data.map(a => a.category);
      return [...new Set(allCategories)];
    },
    getNames: state => id => {
      return state.data.map(a => {
        if (a.id != id) return a.name.toUpperCase()
      });
    }
  },
  modules: {}
});
