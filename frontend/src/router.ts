import { createRouter, createWebHistory, type RouteRecordInfo } from 'vue-router';
import BoardsView from './views/BoardsView.vue';
import BoardView from './views/BoardView.vue';
import IssuesView from './views/IssuesView.vue';
import NotFoundView from './views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/issues',
      name: 'issues',
      component: IssuesView,
    },
    {
      path: '/boards',
      name: 'boards',
      component: BoardsView,
    },
    {
      path: '/boards/:id',
      name: 'board',
      component: BoardView,
      props: true,
    },
    {
      path: '/',
      redirect: { name: 'boards' },
    },
    {
      path: '/:path(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;

export interface RouteNamedMap {
  boards: RouteRecordInfo<'boards', '/boards', Record<never, never>, Record<never, never>>;
  issues: RouteRecordInfo<'issues', '/issues', Record<never, never>, Record<never, never>>;
  board: RouteRecordInfo<'board', '/boards/:id', { id: string | number }, { id: string }>;
  notFound: RouteRecordInfo<'not-found', '/:path(.*)', { path: string }, { path: string }>;
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }
}
