import { createMemoryHistory, createRouter } from 'vue-router';

import TeasList from './components/TeasList.vue';
import TeaDetail from './components/TeaDetail.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', name: 'TeasList', component: TeasList },
  { path: '/tea-details/:teaName', name: 'TeaDetail', component: TeaDetail },
  { path: '/:pathMatch(.*)', component: NotFound },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
      