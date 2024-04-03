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
