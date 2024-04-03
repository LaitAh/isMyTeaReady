//import Vue from 'vue';
//import Router from 'vue-router';
import { createMemoryHistory, createRouter } from 'vue-router';

import TeasList from './components/TeasList.vue';
import TeaDetail from './components/TeaDetail.vue';

const routes = [
  { path: '/', name: 'TeasList', component: TeasList },
  { path: '/tea-details', name: 'TeaDetail', component: TeaDetail },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
      