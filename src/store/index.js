import Vue from "vue";
import Vuex from "vuex";
import catalog from "../assets/catalog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false, // Для проверки, авторизован ли пользователь
    data: [], // Данные о товарах
    possiblePages: 0 // Возможное количество страниц для пагинации
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    fillData(state, payload) {
      // payload - массив объектов с данными о товарах
      state.data = payload;
      state.possiblePages = Math.ceil(payload.length / 10); // Пересчитываем количество страниц
    },
    delete(state, i) {
      // i - индекс удаляемого элемента
      state.data.splice(i, 1); // удаляем 1 элемент, начиная с 1 позиции
      state.possiblePages = Math.ceil(state.data.length / 10); // Пересчитываем количество страниц
    },
    edit(state, payload) {
      // payload - массив, где первый элемент - индекс изменяемого продукта,
      // а второй элемент - измененный объект продукта
      state.data[payload[0]] = payload[1];
    },
    create(state, obj) {
      state.data.push(obj);
    }
  },
  actions: {
    tryLogin({ commit }, payload) {
      // payload - объект с данными для авторизации
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        if (payload.login === "admin" && payload.pass === "admin") {
          // Сохраняем данные, а не факт авторизации для повторной авторизации с этими данными
          // полезно в случае изменения логина/пароля (авторизация не должна пройти в таком случае)
          window.localStorage.login = payload.login; // Сохраняем данные администратора локально
          window.localStorage.pass = payload.pass; // чтобы не входить каждый раз заново

          commit("login");
          resolve();
        } else {
          reject();
        }
      });
    },
    getData({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(resolve => {
        setTimeout(() => {
          // Имитируем ожидание данных от сервера
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
      return new Promise(resolve => {
        let elemIndex;
        state.data.forEach((val, i) => {
          // При удалении передаем айди элемента, который нужно удалить
          if (val.id == id) {
            // Перебором ищем нужный элемент, сохраняем индекс
            elemIndex = i;
          }
        });

        commit("delete", elemIndex);
        window.localStorage.data = JSON.stringify(state.data); // обновляем локальное хранилище
        resolve();
      });
    },
    editField({ commit, state }, obj) {
      return new Promise(resolve => {
        let index;
        state.data.forEach((val, i) => {
          // Находим индекс продукта, который мы редактировали
          if (Number(val.id) === Number(obj.id)) {
            index = i;
          }
        });

        commit("edit", [index, obj]);
        window.localStorage.data = JSON.stringify(state.data); // обновляем локальное хранилище
        resolve();
      });
    },
    createField({ commit, state }, obj) {
      return new Promise(resolve => {
        obj.id = state.data[state.data.length - 1].id + 1; // для нового элемента записываем новый айди
        // (последний айди + 1)

        commit("create", obj);
        window.localStorage.data = JSON.stringify(state.data); // обновляем локальное хранилище
        resolve();
      });
    }
  },
  getters: {
    getDataByPage: state => page => {
      // Получаем 10 элементов для нужной страницы
      const start = (page - 1) * 10;
      const end = page * 10;
      return state.data.slice(start, end);
    },
    getItemById: state => id => {
      // Получаем продукт по айди
      return state.data.filter(a => Number(a.id) === Number(id))[0];
    },
    getCategories: state => {
      // Получаем массив всех категорий
      const allCategories = state.data.map(a => a.category);
      return [...new Set(allCategories)];
    },
    getNames: state => id => {
      // Получаем массив имен для проверки на повторение
      return state.data.map(a => {
        // Не берем имя элемента, который редактируем
        if (a.id != id) return a.name.toUpperCase(); // возводим в верхний регистр для будущего сравнения
      });
    }
  }
});
