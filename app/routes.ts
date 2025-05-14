import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  layout('features/home/layout/home-layout.tsx', [
    index('features/home/pages/home-page.tsx'),
    ...prefix('/test', [index('features/test/pages/test-page.tsx')]),
    ...prefix('/test2', [index('features/test/pages/test2-page.tsx')]),
    ...prefix('/dashboard', [index('features/test/pages/dashboard.tsx')]),
    ...prefix('/test4', [index('features/test/pages/test4-page.tsx')]),
  ]),
] satisfies RouteConfig;
