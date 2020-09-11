import { lazy } from 'react';

const routesData = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('components/Homepage')),
  },
  {
    path: '/user/:userId',
    component: lazy(() => import('components/UserDetail')),
  },
];

export default routesData;
