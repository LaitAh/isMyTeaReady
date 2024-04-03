/*
Description:
  This file contains the configuration for Vue Router, which manages the routing functionality of the Vue.js application. It defines the routes for different views/pages of the application.
*/

import { createWebHistory, createRouter } from 'vue-router';
import TeasList from './components/TeasList.vue';
import TeaDetail from './components/TeaDetail.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', name: 'TeasList', component: TeasList },
  { path: '/tea-details/:teaId', name: 'TeaDetail', component: TeaDetail },
  { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
