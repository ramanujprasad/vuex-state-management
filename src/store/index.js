import { createStore } from 'vuex';
import productModules from './modules/product';
import usersModule from './modules/users';

const store = createStore({
  modules: {
    products: productModules,
    users: usersModule,
  },
  state() {
    return {

    };
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
});

export default store;
