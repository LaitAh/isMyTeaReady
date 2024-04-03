/*
Description:
  This file serves as the entry point for the Vue.js application. It creates the Vue application instance, configures the router, Vuex store, and mounts the root component to the DOM.
*/
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
