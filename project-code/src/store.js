/*
Description:
  This file contains the Vuex store configuration, which manages the state of the Vue.js application. It defines the application's central state, mutations to modify the state, and getters to access the state.
*/

import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      selectedTea: null
    };
  },
  mutations: {
    setSelectedTea(state, tea) {
      state.selectedTea = tea;
    }
  },
  getters: {
    selectedTea(state) {
      return state.selectedTea;
    }
  }
});

export default store;
