import { createStore } from 'vuex';
import productModules from './modules/products';
import usersModule from './modules/users';

const store = createStore({
  modules: {
    products: productModules,
    users: usersModule,
  },
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
